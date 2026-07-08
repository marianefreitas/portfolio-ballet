import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gallery-toolbar">
      <div class="toolbar-container">
        
        <!-- Filtros de Agrupamento -->
        <div class="filter-group">
          <span class="filter-label">Filtrar por</span>
          <div class="filter-buttons">
            <button 
              [class.active]="activeDimension === 'all'" 
              (click)="changeDimension('all')"
              class="btn-filter">
              Todos
            </button>
            <button 
              [class.active]="activeDimension === 'presentation'" 
              (click)="changeDimension('presentation')"
              class="btn-filter">
              Apresentações
            </button>
            <button 
              [class.active]="activeDimension === 'bastidores'" 
              (click)="changeDimension('bastidores')"
              class="btn-filter">
              Bastidores
            </button>
            <button 
              [class.active]="activeDimension === 'ensaios'" 
              (click)="changeDimension('ensaios')"
              class="btn-filter">
              Ensaios
            </button>
            <button 
              [class.active]="activeDimension === 'videos'" 
              (click)="changeDimension('videos')"
              class="btn-filter">
              Vídeos
            </button>
          </div>
        </div>

        <!-- Campo de Busca -->
        <div class="search-box">
          <input 
            type="text" 
            [value]="searchQuery"
            (input)="onSearchChange($event)"
            placeholder="Buscar na galeria..." 
            class="input-search"
            aria-label="Buscar na galeria" />
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .gallery-toolbar {
      width: 100%;
      background-color: #FAF9F8;
      border-bottom: 1px solid rgba(176, 122, 122, 0.08);
      padding: 20px 0;
    }

    .toolbar-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .filter-group {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .filter-label {
      font-family: 'Poppins', sans-serif;
      font-size: 0.72rem;
      text-transform: uppercase;
      font-weight: 600;
      color: #A89B96;
      letter-spacing: 0.1em;
    }

    .filter-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .btn-filter {
      font-family: 'Poppins', sans-serif;
      font-size: 0.75rem;
      font-weight: 500;
      color: #7A6F6B;
      background-color: transparent;
      border: 1px solid rgba(176, 122, 122, 0.15);
      padding: 6px 16px;
      border-radius: 20px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.3s ease;
    }

    .btn-filter:hover {
      background-color: rgba(176, 122, 122, 0.05);
      color: #B07A7A;
      border-color: #B07A7A;
    }

    .btn-filter.active {
      background-color: #B07A7A;
      color: #FFF;
      border-color: #B07A7A;
      box-shadow: 0 4px 10px rgba(176, 122, 122, 0.2);
    }

    .search-box {
      position: relative;
      width: 260px;
    }

    .input-search {
      width: 100%;
      font-family: 'Poppins', sans-serif;
      font-size: 0.8rem;
      color: #7A6F6B;
      background-color: #FFF;
      border: 1px solid rgba(176, 122, 122, 0.15);
      padding: 8px 16px 8px 40px;
      border-radius: 20px;
      outline: none;
      transition: all 0.3s ease;
    }

    .input-search:focus {
      border-color: #B07A7A;
      box-shadow: 0 0 0 3px rgba(176, 122, 122, 0.08);
    }

    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      color: #A89B96;
      pointer-events: none;
    }

    @media (max-width: 768px) {
      .toolbar-container {
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
      }
      .filter-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      .search-box {
        width: 100%;
      }
    }
  `]
})
export class GalleryToolbarComponent {
  @Input() activeDimension: 'all' | 'presentation' | 'bastidores' | 'ensaios' | 'videos' = 'all';
  @Input() searchQuery = '';

  @Output() dimensionChange = new EventEmitter<'all' | 'presentation' | 'bastidores' | 'ensaios' | 'videos'>();
  @Output() searchQueryChange = new EventEmitter<string>();

  changeDimension(dimension: 'all' | 'presentation' | 'bastidores' | 'ensaios' | 'videos') {
    this.dimensionChange.emit(dimension);
  }

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQueryChange.emit(input.value);
  }
}
