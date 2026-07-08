import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GalleryHeroComponent } from './components/gallery-hero.component';
import { GalleryToolbarComponent } from './components/gallery-toolbar.component';
import { GalleryGroupsComponent } from './components/gallery-groups.component';
import { GalleryViewerComponent } from './components/gallery-viewer.component';
import { GalleryMedia, MediaGroup } from './components/gallery-group.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    GalleryHeroComponent,
    GalleryToolbarComponent,
    GalleryGroupsComponent,
    GalleryViewerComponent
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit {
  // Lista centralizada de mídias do portfólio (Fotos e Vídeos)
  // Cada mídia existe apenas uma vez no modelo e os grupos são gerados a partir delas
  portfolioMedias: GalleryMedia[] = [
    // Bela Adormecida
    {
      id: 'bela-1',
      type: 'photo',
      title: 'A Bela Adormecida - Entrada Principal',
      description: 'Gabriela executando a variação da Princesa Aurora no palco do Teatro Municipal.',
      url: 'assets/images/gabriela-flautista.png',
      thumbnail: 'assets/images/gabriela-flautista.png',
      presentation: 'bela-adormecida',
      categories: ['espetaculo'],
      year: 2024,
      tags: ['aurora', 'palco', 'tutu-rosa']
    },
    {
      id: 'bela-2',
      type: 'photo',
      title: 'A Bela Adormecida - Coda Final',
      description: 'Pose final de comemoração após a variação lírica da Princesa.',
      url: 'assets/images/gabriela-arabesque.png',
      thumbnail: 'assets/images/gabriela-arabesque.png',
      presentation: 'bela-adormecida',
      categories: ['espetaculo', 'ensaio'],
      year: 2024,
      tags: ['coda', 'palco', 'salto']
    },
    {
      id: 'bela-3',
      type: 'video',
      title: 'Variação da Princesa Aurora - Vídeo de Apresentação',
      description: 'Gravação oficial da variação clássica apresentada na mostra de final de ano.',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: 'assets/images/gabriela-passaro-azul.png',
      presentation: 'bela-adormecida',
      categories: ['espetaculo', 'video'],
      year: 2024,
      tags: ['video', 'aurora', 'solo']
    },

    // Gala de Abertura
    {
      id: 'gala-1',
      type: 'photo',
      title: 'Gala de Abertura - Solo Contemporâneo',
      description: 'Gabriela em momento lírico de expressão corporal com luz dramática.',
      url: 'assets/images/gabriela-passaro-azul.png',
      thumbnail: 'assets/images/gabriela-passaro-azul.png',
      presentation: 'gala-abertura',
      categories: ['espetaculo'],
      year: 2026,
      tags: ['gala', 'contemporaneo']
    },
    {
      id: 'gala-2',
      type: 'photo',
      title: 'Ensaio Geral da Gala de Abertura',
      description: 'Momento de instrução e posicionamento da equipe no palco antes do início.',
      url: 'assets/images/gabriela-flautista.png',
      thumbnail: 'assets/images/gabriela-flautista.png',
      presentation: 'gala-abertura',
      categories: ['espetaculo', 'ensaio'],
      year: 2026,
      tags: ['gala', 'ensaio', 'bastidores']
    },

    // Dom Quixote
    {
      id: 'quixote-1',
      type: 'photo',
      title: 'Dom Quixote - Solo do Cupido',
      description: 'Gabriela caracterizada como Cupido, executando saltos ágeis em ponta.',
      url: 'assets/images/gabriela-arabesque.png',
      thumbnail: 'assets/images/gabriela-arabesque.png',
      presentation: 'dom-quixote',
      categories: ['espetaculo'],
      year: 2025,
      tags: ['cupido', 'palco', 'espanha']
    },
    {
      id: 'quixote-2',
      type: 'video',
      title: 'Dom Quixote - Detalhes do Salto',
      description: 'Trecho em vídeo da variação rápida com saltos e piruetas do Cupido.',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: 'assets/images/gabriela-flautista.png',
      presentation: 'dom-quixote',
      categories: ['espetaculo', 'video'],
      year: 2025,
      tags: ['video', 'cupido', 'salto']
    },

    // O Quebra-Nozes
    {
      id: 'quebra-1',
      type: 'photo',
      title: 'O Quebra-Nozes - Clara e o Boneco',
      description: 'Interpretação cênica do momento em que Clara ganha o boneco de presente de Natal.',
      url: 'assets/images/gabriela-flautista.png',
      thumbnail: 'assets/images/gabriela-flautista.png',
      presentation: 'quebra-nozes',
      categories: ['espetaculo'],
      year: 2026,
      tags: ['clara', 'natal', 'teatro']
    },
    {
      id: 'quebra-2',
      type: 'photo',
      title: 'O Quebra-Nozes - Valsa das Flores',
      description: 'Corpo de baile posicionado sob as luzes de inverno no palco do Teatro Guaíra.',
      url: 'assets/images/gabriela-passaro-azul.png',
      thumbnail: 'assets/images/gabriela-passaro-azul.png',
      presentation: 'quebra-nozes',
      categories: ['espetaculo', 'ensaio'],
      year: 2026,
      tags: ['valsa-flores', 'flores', 'tutu']
    },

    // Coppélia
    {
      id: 'coppelia-1',
      type: 'photo',
      title: 'Coppélia - Variação de Swanilda',
      description: 'Variação cómica e leve do primeiro ato executada com maestria.',
      url: 'assets/images/gabriela-arabesque.png',
      thumbnail: 'assets/images/gabriela-arabesque.png',
      presentation: 'coppelia',
      categories: ['espetaculo'],
      year: 2025,
      tags: ['swanilda', 'coppelia', 'palco']
    },

    // Momentos no Palco
    {
      id: 'palco-1',
      type: 'photo',
      title: 'Expressão Lírica no Palco',
      description: 'A iluminação crua destaca o alinhamento das mãos em pose final.',
      url: 'assets/images/gabriela-passaro-azul.png',
      thumbnail: 'assets/images/gabriela-passaro-azul.png',
      presentation: 'momentos-palco',
      categories: ['espetaculo'],
      year: 2025,
      tags: ['expressao', 'iluminacao']
    },

    // Categoria: Ensaios (Mídias sem espetáculo específico mas com tags)
    {
      id: 'ensaio-1',
      type: 'photo',
      title: 'Ajuste de Pontas na Barra',
      description: 'Estudo de peso e equilíbrio durante a aula de técnica na barra.',
      url: 'assets/images/gabriela-flautista.png',
      thumbnail: 'assets/images/gabriela-flautista.png',
      categories: ['ensaio'],
      year: 2025,
      tags: ['barra', 'pontas', 'tecnica']
    },
    {
      id: 'ensaio-2',
      type: 'photo',
      title: 'Alongamento em Grupo',
      description: 'Bailarinas em sessão de alongamento muscular no estúdio antes dos ensaios.',
      url: 'assets/images/gabriela-passaro-azul.png',
      thumbnail: 'assets/images/gabriela-passaro-azul.png',
      categories: ['ensaio'],
      year: 2025,
      tags: ['alongamento', 'estudio', 'grupo']
    },

    // Categoria: Variações de Repertório
    {
      id: 'var-1',
      type: 'photo',
      title: 'Ensaio de Variação de Repertório Clássico',
      description: 'Alinhamento corporal em pose clássica durante ensaio individual no espelho.',
      url: 'assets/images/gabriela-arabesque.png',
      thumbnail: 'assets/images/gabriela-arabesque.png',
      categories: ['variacao-repertorio', 'ensaio'],
      year: 2025,
      tags: ['espelho', 'estudio', 'repertorio']
    },

    // Categoria: Bastidores
    {
      id: 'bastidores-1',
      type: 'photo',
      title: 'Retoques de Maquiagem',
      description: 'Preparação minuciosa do figurino e maquiagem cênica antes da entrada.',
      url: 'assets/images/gabriela-flautista.png',
      thumbnail: 'assets/images/gabriela-flautista.png',
      categories: ['bastidores'],
      year: 2026,
      tags: ['camarim', 'maquiagem', 'espelho']
    },
    {
      id: 'bastidores-2',
      type: 'photo',
      title: 'Ajuste final do Tutu',
      description: 'Concentração final com ajuda técnica no camarim dos bastidores.',
      url: 'assets/images/gabriela-passaro-azul.png',
      thumbnail: 'assets/images/gabriela-passaro-azul.png',
      categories: ['bastidores'],
      year: 2025,
      tags: ['tutu', 'camarim', 'preparacao']
    },

    // Categoria: Aulas Abertas
    {
      id: 'aula-1',
      type: 'photo',
      title: 'Aula Aberta para Pais',
      description: 'Demonstração de passos básicos de barra clássica para a comunidade.',
      url: 'assets/images/gabriela-arabesque.png',
      thumbnail: 'assets/images/gabriela-arabesque.png',
      categories: ['aula-aberta', 'bastidores'],
      year: 2024,
      tags: ['didatico', 'aula', 'estudio']
    }
  ];

  // Dicionário de metadados para embelezar os grupos gerados dinamicamente
  groupMetadataMap: { [id: string]: { title: string, type: 'presentation' | 'category', description?: string, coverUrl: string } } = {
    'bela-adormecida': { 
      title: 'A Bela Adormecida', 
      type: 'presentation', 
      description: 'Apresentação clássica do repertório de Tchaikovsky no Teatro Municipal.', 
      coverUrl: 'assets/images/gabriela-flautista.png' 
    },
    'gala-abertura': { 
      title: 'Gala de Abertura', 
      type: 'presentation', 
      description: 'Espetáculo de gala marcando o início da temporada lírica de Curitiba.', 
      coverUrl: 'assets/images/gabriela-passaro-azul.png' 
    },
    'dom-quixote': { 
      title: 'Dom Quixote', 
      type: 'presentation', 
      description: 'A cores vibrantes da Espanha representadas no papel do Cupido.', 
      coverUrl: 'assets/images/gabriela-arabesque.png' 
    },
    'ensaio': { 
      title: 'Ensaios', 
      type: 'category', 
      description: 'A exaustão diária nas barras e as repetições em busca do movimento perfeito.', 
      coverUrl: 'assets/images/gabriela-flautista.png' 
    },
    'variacao-repertorio': { 
      title: 'Variações de Repertório', 
      type: 'category', 
      description: 'Estudos das coreografias mais consagradas do repertório clássico.', 
      coverUrl: 'assets/images/gabriela-passaro-azul.png' 
    },
    'quebra-nozes': { 
      title: 'O Quebra-Nozes', 
      type: 'presentation', 
      description: 'O clássico de Natal encenado no Teatro Guaíra sob luzes mágicas.', 
      coverUrl: 'assets/images/gabriela-arabesque.png' 
    },
    'bastidores': { 
      title: 'Bastidores', 
      type: 'category', 
      description: 'Preparação física, camarim, maquiagem e a expectativa antes do espetáculo.', 
      coverUrl: 'assets/images/gabriela-flautista.png' 
    },
    'coppelia': { 
      title: 'Coppélia', 
      type: 'presentation', 
      description: 'A cômica e alegre encenação baseada no conto de E.T.A. Hoffmann.', 
      coverUrl: 'assets/images/gabriela-arabesque.png' 
    },
    'momentos-palco': { 
      title: 'Momentos no Palco', 
      type: 'presentation', 
      description: 'Recortes espontâneos e sentimentos expressados na luz dos holofotes.', 
      coverUrl: 'assets/images/gabriela-passaro-azul.png' 
    },
    'aula-aberta': { 
      title: 'Aulas Abertas', 
      type: 'category', 
      description: 'Apresentações didáticas do progresso técnico para familiares e professores.', 
      coverUrl: 'assets/images/gabriela-arabesque.png' 
    }
  };

  allGroups: MediaGroup[] = [];
  activeDimension: 'all' | 'presentation' | 'bastidores' | 'ensaios' | 'videos' = 'all';
  searchQuery = '';
  highlightedGroupId: string | null = null;
  selectedGroup: MediaGroup | null = null;

  constructor(
    private route: ActivatedRoute,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.generateGroups();
    this.listenToRouteParams();
  }

  // Gera dinamicamente os grupos a partir das mídias cadastradas
  generateGroups() {
    const groupsMap = new Map<string, GalleryMedia[]>();

    this.portfolioMedias.forEach(media => {
      // 1. Agrupamento por Espetáculo (Apresentação) se configurado
      if (media.presentation) {
        const key = media.presentation;
        if (!groupsMap.has(key)) groupsMap.set(key, []);
        groupsMap.get(key)!.push(media);
      }

      // 2. Agrupamento por Categorias individuais
      media.categories.forEach(category => {
        const key = category.toLowerCase();
        if (!groupsMap.has(key)) groupsMap.set(key, []);
        // Evita duplicar a mesma mídia no mesmo grupo
        const list = groupsMap.get(key)!;
        if (!list.some(m => m.id === media.id)) {
          list.push(media);
        }
      });
    });

    const computedGroups: MediaGroup[] = [];

    groupsMap.forEach((medias, id) => {
      // Busca metadados predefinidos ou cria dinamicamente de forma escalável
      const metadata = this.groupMetadataMap[id] || {
        title: this.capitalizeTitle(id),
        type: this.guessGroupType(id),
        coverUrl: medias[0]?.url || 'assets/images/gabriela-flautista.png'
      };

      const photoCount = medias.filter(m => m.type === 'photo').length;
      const videoCount = medias.filter(m => m.type === 'video').length;

      computedGroups.push({
        id,
        title: metadata.title,
        type: metadata.type,
        description: metadata.description,
        coverUrl: metadata.coverUrl,
        photoCount,
        videoCount,
        medias
      });
    });

    // Ordena de forma elegante: espetáculos primeiro, seguidos das coleções gerais
    this.allGroups = computedGroups.sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'presentation' ? -1 : 1;
      }
      return a.title.localeCompare(b.title);
    });
  }

  // Monitora query params na URL (Fluxo 2: Apresentações -> Galeria)
  listenToRouteParams() {
    this.route.queryParams.subscribe(params => {
      const presentation = params['presentation'];
      if (presentation) {
        // O query parameter "presentation" pode ser o slug simples como "bela-adormecida"
        // Mapeia para corresponder ao ID gerado dinamicamente
        const matchedGroupId = this.sanitizePresentationParam(presentation);
        
        this.highlightedGroupId = matchedGroupId;

        // Dispara rolagem suave até o card destacado após a renderização inicial
        setTimeout(() => {
          this.scrollToGroup(matchedGroupId);
        }, 500);
      } else {
        this.highlightedGroupId = null;
      }
    });
  }

  // Remove slugs adicionais de anos nos parâmetros para casar com o ID do grupo (ex: coppelia-2025 -> coppelia)
  sanitizePresentationParam(param: string): string {
    const clean = param.toLowerCase();
    if (clean.startsWith('bela-adormecida')) return 'bela-adormecida';
    if (clean.startsWith('quebra-nozes')) return 'quebra-nozes';
    if (clean.startsWith('lago-cisnes')) return 'lago-cisnes';
    if (clean.startsWith('dom-quixote')) return 'dom-quixote';
    if (clean.startsWith('coppelia')) return 'coppelia';
    if (clean.startsWith('gala-encerramento') || clean.startsWith('gala-abertura')) return 'gala-abertura';
    return clean;
  }

  scrollToGroup(groupId: string) {
    const cardElement = document.getElementById(`group-${groupId}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Filtra as coleções exibidas com base na dimensão (Submenu) e pesquisa textual
  get filteredGroups(): MediaGroup[] {
    return this.allGroups.filter(group => {
      // 1. Filtro da dimensão ativa no submenu
      if (this.activeDimension === 'presentation' && group.type !== 'presentation') return false;
      if (this.activeDimension === 'bastidores' && group.id !== 'bastidores' && group.id !== 'aula-aberta') return false;
      if (this.activeDimension === 'ensaios' && group.id !== 'ensaio' && group.id !== 'variacao-repertorio') return false;
      if (this.activeDimension === 'videos' && group.videoCount === 0) return false;

      // 2. Filtro de pesquisa por texto (Título da coleção, mídias ou tags)
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase().trim();
        const matchTitle = group.title.toLowerCase().includes(query);
        const matchDesc = group.description?.toLowerCase().includes(query);
        const matchMedias = group.medias.some(m => 
          m.title.toLowerCase().includes(query) || 
          m.description?.toLowerCase().includes(query) ||
          (m.tags && m.tags.some(t => t.toLowerCase().includes(query)))
        );
        return matchTitle || matchDesc || matchMedias;
      }

      return true;
    });
  }

  // Alteração de Dimensão pelo Toolbar
  onDimensionChange(dimension: 'all' | 'presentation' | 'bastidores' | 'ensaios' | 'videos') {
    this.activeDimension = dimension;
  }

  // Alteração de Busca pelo Toolbar
  onSearchQueryChange(query: string) {
    this.searchQuery = query;
  }

  // Visualização e Abertura do Lightbox
  openViewer(group: MediaGroup) {
    this.selectedGroup = group;
  }

  closeViewer() {
    this.selectedGroup = null;
  }

  // Métodos Auxiliares de Fallback Escalável
  private capitalizeTitle(slug: string): string {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private guessGroupType(slug: string): 'presentation' | 'category' {
    const presentationSlugs = ['bela-adormecida', 'gala-abertura', 'dom-quixote', 'quebra-nozes', 'coppelia', 'momentos-palco'];
    return presentationSlugs.includes(slug) ? 'presentation' : 'category';
  }
}
