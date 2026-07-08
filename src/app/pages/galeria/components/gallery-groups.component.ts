import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryGroupComponent, MediaGroup } from './gallery-group.component';

@Component({
  selector: 'app-gallery-groups',
  standalone: true,
  imports: [CommonModule, GalleryGroupComponent],
  template: `
    <div class="gallery-groups-section">
      <div class="groups-container">
        
        <h2 class="section-title">Todos os momentos</h2>
        
        <!-- Grid de Grupos com Layout Assimétrico Artístico -->
        <div class="gallery-groups-grid" *ngIf="groups.length > 0; else emptyState">
          <div 
            *ngFor="let group of groups; let idx = index" 
            [ngClass]="'grid-item-' + (idx % 10)"
            class="grid-item">
            <app-gallery-group 
              [group]="group"
              [highlighted]="highlightedGroupId === group.id"
              (groupClick)="onGroupClick($event)">
            </app-gallery-group>
          </div>
        </div>

        <!-- Empty State -->
        <ng-template #emptyState>
          <div class="empty-state-box">
            <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <h3 class="empty-title">Nenhum momento encontrado</h3>
            <p class="empty-subtitle">Tente ajustar seus filtros de pesquisa ou categoria.</p>
          </div>
        </ng-template>

      </div>
    </div>
  `,
  styles: [`
    .gallery-groups-section {
      padding: 60px 0 80px 0;
      background-color: #FDFBF9;
    }

    .groups-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      font-weight: 400;
      color: #7A6F6B;
      margin-bottom: 35px;
      position: relative;
      display: inline-block;
    }

    .section-title::after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 40px;
      height: 1px;
      background-color: #B07A7A;
    }

    /* Grid Assimétrico Estilo Portfólio Artístico */
    .gallery-groups-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      grid-auto-flow: dense;
    }

    .grid-item {
      width: 100%;
    }

    /* Mapeamento exato do Mockup para criar a assimetria visual */
    .grid-item-0 { grid-column: span 2; height: 320px; } /* A Bela Adormecida */
    .grid-item-1 { grid-column: span 1; height: 320px; } /* Gala de Abertura */
    .grid-item-2 { grid-column: span 1; grid-row: span 2; height: 664px; } /* Dom Quixote (Vertical Grande) */
    .grid-item-3 { grid-column: span 1; height: 320px; } /* Ensaios (Bastidores) */
    .grid-item-4 { grid-column: span 1; height: 320px; } /* Variações (Ensaios) */
    .grid-item-5 { grid-column: span 2; grid-row: span 2; height: 664px; } /* O Quebra-Nozes (Quadrado Grande) */
    .grid-item-6 { grid-column: span 1; height: 320px; } /* Bastidores */
    .grid-item-7 { grid-column: span 1; height: 320px; } /* Coppélia */
    .grid-item-8 { grid-column: span 1; height: 320px; } /* Momentos no Palco */
    .grid-item-9 { grid-column: span 1; height: 320px; } /* Aulas Abertas */

    /* Customização do card dentro do grid item */
    .grid-item ::ng-deep app-gallery-group .gallery-group-card {
      height: 100%;
      min-height: 100%;
    }

    /* Responsividade do Grid */
    @media (max-width: 1024px) {
      .gallery-groups-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .grid-item-0, .grid-item-1, .grid-item-2, .grid-item-3, 
      .grid-item-4, .grid-item-5, .grid-item-6, .grid-item-7, 
      .grid-item-8, .grid-item-9 {
        grid-column: span 1 !important;
        grid-row: span 1 !important;
        height: 280px !important;
      }
    }

    @media (max-width: 600px) {
      .gallery-groups-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      .section-title {
        font-size: 1.5rem;
        margin-bottom: 25px;
      }
    }

    /* Caixa de Estado Vazio */
    .empty-state-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 60px 20px;
      border: 1px dashed rgba(176, 122, 122, 0.2);
      border-radius: 12px;
      background-color: #FAF9F8;
    }

    .empty-icon {
      width: 48px;
      height: 48px;
      color: #A89B96;
      margin-bottom: 16px;
    }

    .empty-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      color: #7A6F6B;
      margin: 0;
    }

    .empty-subtitle {
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      color: #A89B96;
      margin: 8px 0 0 0;
    }
  `]
})
export class GalleryGroupsComponent {
  @Input() groups: MediaGroup[] = [];
  @Input() highlightedGroupId: string | null = null;

  @Output() groupClick = new EventEmitter<MediaGroup>();

  onGroupClick(group: MediaGroup) {
    this.groupClick.emit(group);
  }
}
