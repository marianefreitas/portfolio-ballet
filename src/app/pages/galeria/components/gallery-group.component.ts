import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export interface GalleryMedia {
  id: string;
  type: 'photo' | 'video';
  title: string;
  description?: string;
  url: string;
  thumbnail: string;
  presentation?: string;
  categories: string[];
  year: number;
  tags?: string[];
}

export interface MediaGroup {
  id: string;
  title: string;
  type: 'presentation' | 'category';
  description?: string;
  coverUrl: string;
  photoCount: number;
  videoCount: number;
  medias: GalleryMedia[];
}

@Component({
  selector: 'app-gallery-group',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div 
      class="gallery-group-card" 
      [class.highlighted]="highlighted"
      (click)="onClick()"
      [attr.id]="'group-' + group.id">
      
      <!-- Imagem de Capa com Efeito Zoom -->
      <div class="card-cover-wrapper">
        <img [ngSrc]="group.coverUrl" fill [alt]="group.title" class="card-cover-image" />
        <div class="card-gradient-overlay"></div>
      </div>

      <!-- Detalhes do Grupo -->
      <div class="card-content">
        <span class="card-category">{{ group.type === 'presentation' ? 'Espetáculo' : 'Coleção' }}</span>
        <h3 class="card-title">{{ group.title }}</h3>
        <p class="card-description" *ngIf="group.description">{{ group.description }}</p>
        
        <div class="card-stats">
          <span class="stat-item" *ngIf="group.photoCount > 0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="stat-icon">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            {{ group.photoCount }} {{ group.photoCount === 1 ? 'foto' : 'fotos' }}
          </span>
          <span class="stat-item" *ngIf="group.videoCount > 0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="stat-icon">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
            {{ group.videoCount }} {{ group.videoCount === 1 ? 'vídeo' : 'vídeos' }}
          </span>
        </div>
      </div>

      <!-- Badge de destaque visual quando selecionado -->
      <div class="highlight-badge" *ngIf="highlighted">
        <span class="badge-text">Selecionado</span>
      </div>
    </div>
  `,
  styles: [`
    .gallery-group-card {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      background-color: #EEE;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 260px;
    }

    .gallery-group-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 36px rgba(176, 122, 122, 0.1);
    }

    .card-cover-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      overflow: hidden;
    }

    .card-cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .gallery-group-card:hover .card-cover-image {
      transform: scale(1.05);
    }

    .card-gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.7) 100%);
      transition: background 0.3s ease;
    }

    .gallery-group-card:hover .card-gradient-overlay {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.85) 100%);
    }

    .card-content {
      position: relative;
      z-index: 2;
      margin-top: auto;
      padding: 24px;
      color: #FFF;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .card-category {
      font-family: 'Poppins', sans-serif;
      font-size: 0.65rem;
      text-transform: uppercase;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.7);
      letter-spacing: 0.1em;
    }

    .card-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 500;
      margin: 0;
      letter-spacing: 0.02em;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .card-description {
      font-family: 'Poppins', sans-serif;
      font-size: 0.8rem;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.8);
      margin: 4px 0 0 0;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-stats {
      display: flex;
      gap: 16px;
      margin-top: 10px;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Poppins', sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.9);
    }

    .stat-icon {
      width: 14px;
      height: 14px;
    }

    /* Estilo do Destaque de Rota (Highlight) */
    .gallery-group-card.highlighted {
      box-shadow: 0 0 0 4px #B07A7A, 0 16px 36px rgba(176, 122, 122, 0.25);
      animation: pulseHighlight 2s infinite ease-in-out;
    }

    .highlight-badge {
      position: absolute;
      top: 14px;
      left: 14px;
      z-index: 2;
      background-color: #B07A7A;
      color: #FFF;
      padding: 4px 10px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(176, 122, 122, 0.4);
    }

    .badge-text {
      font-family: 'Poppins', sans-serif;
      font-size: 0.6rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    @keyframes pulseHighlight {
      0% {
        box-shadow: 0 0 0 4px #B07A7A, 0 16px 36px rgba(176, 122, 122, 0.2);
      }
      50% {
        box-shadow: 0 0 0 6px rgba(176, 122, 122, 0.6), 0 16px 36px rgba(176, 122, 122, 0.35);
      }
      100% {
        box-shadow: 0 0 0 4px #B07A7A, 0 16px 36px rgba(176, 122, 122, 0.2);
      }
    }
  `]
})
export class GalleryGroupComponent {
  @Input() group!: MediaGroup;
  @Input() highlighted = false;

  @Output() groupClick = new EventEmitter<MediaGroup>();

  onClick() {
    this.groupClick.emit(this.group);
  }
}
