import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaGroup, GalleryMedia } from './gallery-group.component';

@Component({
  selector: 'app-gallery-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-viewer-modal" *ngIf="group" (click)="onBackgroundClick($event)">
      
      <!-- Botão Fechar -->
      <button class="btn-close" (click)="onClose()" aria-label="Fechar galeria">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <!-- Botão Anterior -->
      <button 
        class="nav-arrow prev" 
        *ngIf="group.medias.length > 1" 
        (click)="prevMedia($event)"
        aria-label="Mídia anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <!-- Conteúdo Central da Mídia -->
      <div class="viewer-main-content" (click)="$event.stopPropagation()">
        <div class="media-frame">
          
          <!-- Foto -->
          <img 
            *ngIf="activeMedia?.type === 'photo'" 
            [src]="activeMedia?.url" 
            [alt]="activeMedia?.title" 
            class="viewer-media-element fade-in-media" />

          <!-- Vídeo -->
          <div *ngIf="activeMedia?.type === 'video'" class="video-container fade-in-media">
            <!-- Usando a capa como poster e controles do player nativo do navegador -->
            <video 
              [src]="activeMedia?.url"
              [poster]="activeMedia?.thumbnail"
              controls 
              class="viewer-media-element video-element"
              #videoPlayer>
            </video>
          </div>
          
        </div>

        <!-- Rodapé com Metadados da Mídia -->
        <div class="viewer-footer" *ngIf="activeMedia">
          <div class="footer-left">
            <span class="media-index">{{ activeIndex + 1 }} de {{ group.medias.length }}</span>
            <h4 class="media-title">{{ activeMedia.title }}</h4>
            <p class="media-description" *ngIf="activeMedia.description">{{ activeMedia.description }}</p>
          </div>
          <div class="footer-right">
            <span class="media-year">{{ activeMedia.year }}</span>
            <span class="media-badge-tag" *ngFor="let category of activeMedia.categories">{{ category }}</span>
          </div>
        </div>
      </div>

      <!-- Botão Próximo -->
      <button 
        class="nav-arrow next" 
        *ngIf="group.medias.length > 1" 
        (click)="nextMedia($event)"
        aria-label="Próxima mídia">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

    </div>
  `,
  styles: [`
    .gallery-viewer-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(10, 8, 8, 0.96);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      padding: 40px;
      box-sizing: border-box;
      user-select: none;
    }

    /* Botão Fechar */
    .btn-close {
      position: absolute;
      top: 24px;
      right: 24px;
      background: transparent;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 2010;
    }

    .btn-close:hover {
      color: #FFF;
      transform: rotate(90deg);
    }

    .btn-close svg {
      width: 24px;
      height: 24px;
    }

    /* Setas laterais */
    .nav-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.7);
      width: 52px;
      height: 52px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 2005;
    }

    .nav-arrow:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #FFF;
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-50%) scale(1.05);
    }

    .nav-arrow.prev { left: 40px; }
    .nav-arrow.next { right: 40px; }

    .nav-arrow svg {
      width: 24px;
      height: 24px;
    }

    /* Estrutura Central */
    .viewer-main-content {
      width: 100%;
      max-width: 900px;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    .media-frame {
      width: 100%;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 8px;
    }

    .viewer-media-element {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 4px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .video-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .video-element {
      width: auto;
      height: 100%;
    }

    /* Rodapé com Informações */
    .viewer-footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 30px;
      color: #FFF;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 16px;
    }

    .footer-left {
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex: 1;
    }

    .media-index {
      font-family: 'Poppins', sans-serif;
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.4);
      letter-spacing: 0.05em;
    }

    .media-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      font-weight: 400;
      margin: 0;
      letter-spacing: 0.01em;
    }

    .media-description {
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      line-height: 1.4;
    }

    .footer-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
    }

    .media-year {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
    }

    .media-badge-tag {
      font-family: 'Poppins', sans-serif;
      font-size: 0.6rem;
      text-transform: uppercase;
      font-weight: 600;
      background-color: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 3px 8px;
      border-radius: 10px;
      letter-spacing: 0.05em;
    }

    /* Animação fade in ao mudar de mídia */
    .fade-in-media {
      animation: fadeInMedia 0.4s ease-out forwards;
    }

    @keyframes fadeInMedia {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }

    /* Responsividade */
    @media (max-width: 768px) {
      .gallery-viewer-modal {
        padding: 20px;
      }
      .nav-arrow {
        width: 40px;
        height: 40px;
      }
      .nav-arrow.prev { left: 10px; }
      .nav-arrow.next { right: 10px; }
      .viewer-footer {
        flex-direction: column;
        gap: 16px;
      }
      .footer-right {
        align-items: flex-start;
        flex-direction: row;
        width: 100%;
      }
      .media-frame {
        height: 50vh;
      }
    }
  `]
})
export class GalleryViewerComponent implements OnChanges {
  @Input() group: MediaGroup | null = null;

  @Output() close = new EventEmitter<void>();

  activeIndex = 0;
  activeMedia: GalleryMedia | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['group'] && this.group) {
      this.activeIndex = 0;
      this.updateActiveMedia();
    }
  }

  updateActiveMedia() {
    if (this.group && this.group.medias.length > 0) {
      this.activeMedia = this.group.medias[this.activeIndex];
    } else {
      this.activeMedia = null;
    }
  }

  prevMedia(event: Event) {
    event.stopPropagation();
    if (!this.group) return;
    this.activeIndex = (this.activeIndex - 1 + this.group.medias.length) % this.group.medias.length;
    this.updateActiveMedia();
  }

  nextMedia(event: Event) {
    event.stopPropagation();
    if (!this.group) return;
    this.activeIndex = (this.activeIndex + 1) % this.group.medias.length;
    this.updateActiveMedia();
  }

  onClose() {
    this.close.emit();
  }

  onBackgroundClick(event: Event) {
    this.onClose();
  }
}
