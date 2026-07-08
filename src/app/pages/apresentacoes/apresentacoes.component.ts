import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Apresentacao {
  id: string;
  titulo: string;
  papel: string;
  escola: string;
  local: string;
  data: string;
  imagemUrl: string;
  destaque?: 'papel-principal' | 'premiado' | 'festival-nacional' | 'apresentacao-internacional' | 'primeira-variacao' | 'corpo-de-baile';
}

export interface AnoApresentacoes {
  ano: number;
  espetaculosCount: number;
  apresentacoes: Apresentacao[];
}

@Component({
  selector: 'app-apresentacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apresentacoes.component.html',
  styleUrl: './apresentacoes.component.css'
})
export class ApresentacoesComponent implements OnInit {
  // Lista total de dados das apresentações por ano (9 anos completos de 2026 até 2018)
  anosApresentacoes: AnoApresentacoes[] = [
    {
      ano: 2026,
      espetaculosCount: 2,
      apresentacoes: [
        {
          id: 'quebra-nozes-2026',
          titulo: 'O Quebra-Nozes',
          papel: 'Clara',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Municipal de Curitiba',
          data: 'Novembro • 2026',
          imagemUrl: 'assets/images/gabriela-flautista.png',
          destaque: 'papel-principal'
        },
        {
          id: 'lago-cisnes-2026',
          titulo: 'Lago dos Cisnes',
          papel: 'Corpo de Baile',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Festival de Dança de Joinville',
          data: 'Agosto • 2026',
          imagemUrl: 'assets/images/gabriela-passaro-azul.png',
          destaque: 'corpo-de-baile'
        }
      ]
    },
    {
      ano: 2025,
      espetaculosCount: 4,
      apresentacoes: [
        {
          id: 'dom-quixote-2025',
          titulo: 'Dom Quixote',
          papel: 'Cupido',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Positivo',
          data: 'Outubro • 2025',
          imagemUrl: 'assets/images/gabriela-arabesque.png',
          destaque: 'papel-principal'
        },
        {
          id: 'gala-encerramento-2025',
          titulo: 'Gala de Encerramento',
          papel: 'Variação Clássica',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Municipal de Curitiba',
          data: 'Dezembro • 2025',
          imagemUrl: 'assets/images/gabriela-flautista.png',
          destaque: 'primeira-variacao'
        },
        {
          id: 'festival-xyz-2025',
          titulo: 'Festival XYZ',
          papel: 'Solo Contemporâneo',
          escola: 'Festival de Dança de Joinville',
          local: 'Joinville - SC',
          data: 'Julho • 2025',
          imagemUrl: 'assets/images/gabriela-passaro-azul.png',
          destaque: 'premiado'
        },
        {
          id: 'coppelia-2025',
          titulo: 'Coppélia',
          papel: 'Swanilda',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Positivo',
          data: 'Maio • 2025',
          imagemUrl: 'assets/images/gabriela-arabesque.png',
          destaque: 'festival-nacional'
        }
      ]
    },
    {
      ano: 2024,
      espetaculosCount: 3,
      apresentacoes: [
        {
          id: 'bela-adormecida-2024',
          titulo: 'A Bela Adormecida',
          papel: 'Florina',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Municipal de Curitiba',
          data: 'Novembro • 2024',
          imagemUrl: 'assets/images/gabriela-flautista.png',
          destaque: 'papel-principal'
        },
        {
          id: 'paquita-2024',
          titulo: 'Paquita',
          papel: 'Variação',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Mostra de Dança Clássica',
          data: 'Setembro • 2024',
          imagemUrl: 'assets/images/gabriela-passaro-azul.png',
          destaque: 'primeira-variacao'
        },
        {
          id: 'movimento-2024',
          titulo: 'Movimento',
          papel: 'Solo Contemporâneo',
          escola: 'Mostra de Dança Contemporânea',
          local: 'Curitiba - PR',
          data: 'Junho • 2024',
          imagemUrl: 'assets/images/gabriela-arabesque.png',
          destaque: 'festival-nacional'
        }
      ]
    },
    {
      ano: 2023,
      espetaculosCount: 2,
      apresentacoes: [
        {
          id: 'giselle-2023',
          titulo: 'Giselle',
          papel: 'Giselle',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Positivo',
          data: 'Novembro • 2023',
          imagemUrl: 'assets/images/gabriela-flautista.png',
          destaque: 'papel-principal'
        },
        {
          id: 'cinderella-2023',
          titulo: 'Cinderela',
          papel: 'Cinderela',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Municipal de Curitiba',
          data: 'Setembro • 2023',
          imagemUrl: 'assets/images/gabriela-passaro-azul.png',
          destaque: 'papel-principal'
        }
      ]
    },
    {
      ano: 2022,
      espetaculosCount: 2,
      apresentacoes: [
        {
          id: 'bayadere-2022',
          titulo: 'La Bayadère',
          papel: 'Nikiya',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Festival de Dança de Joinville',
          data: 'Julho • 2022',
          imagemUrl: 'assets/images/gabriela-arabesque.png',
          destaque: 'premiado'
        },
        {
          id: 'moderno-2022',
          titulo: 'Festival Moderno',
          papel: 'Solo Contemporâneo',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Guaíra',
          data: 'Junho • 2022',
          imagemUrl: 'assets/images/gabriela-flautista.png',
          destaque: 'corpo-de-baile'
        }
      ]
    },
    {
      ano: 2021,
      espetaculosCount: 2,
      apresentacoes: [
        {
          id: 'romeu-julieta-2021',
          titulo: 'Romeu e Julieta',
          papel: 'Julieta',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Positivo',
          data: 'Dezembro • 2021',
          imagemUrl: 'assets/images/gabriela-passaro-azul.png',
          destaque: 'papel-principal'
        },
        {
          id: 'paquita-2021',
          titulo: 'Paquita',
          papel: 'Corpo de Baile',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Mostra de Dança Clássica',
          data: 'Outubro • 2021',
          imagemUrl: 'assets/images/gabriela-arabesque.png',
          destaque: 'corpo-de-baile'
        }
      ]
    },
    {
      ano: 2020,
      espetaculosCount: 2,
      apresentacoes: [
        {
          id: 'fada-2020',
          titulo: 'O Quebra-Nozes',
          papel: 'Fada Açucarada',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Guaíra',
          data: 'Novembro • 2020',
          imagemUrl: 'assets/images/gabriela-flautista.png',
          destaque: 'papel-principal'
        },
        {
          id: 'inverno-2020',
          titulo: 'Festival de Inverno',
          papel: 'Dueto Clássico',
          escola: 'Festival de Dança de Joinville',
          local: 'Joinville - SC',
          data: 'Julho • 2020',
          imagemUrl: 'assets/images/gabriela-passaro-azul.png',
          destaque: 'premiado'
        }
      ]
    },
    {
      ano: 2019,
      espetaculosCount: 2,
      apresentacoes: [
        {
          id: 'bela-2019',
          titulo: 'A Bela Adormecida',
          papel: 'Corpo de Baile',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Municipal de Curitiba',
          data: 'Dezembro • 2019',
          imagemUrl: 'assets/images/gabriela-arabesque.png',
          destaque: 'corpo-de-baile'
        },
        {
          id: 'gala-2019',
          titulo: 'Gala de Encerramento',
          papel: 'Variação de Repertório',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Positivo',
          data: 'Outubro • 2019',
          imagemUrl: 'assets/images/gabriela-flautista.png',
          destaque: 'primeira-variacao'
        }
      ]
    },
    {
      ano: 2018,
      espetaculosCount: 2,
      apresentacoes: [
        {
          id: 'coppelia-2018',
          titulo: 'Coppélia',
          papel: 'Corpo de Baile',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Teatro Guaíra',
          data: 'Novembro • 2018',
          imagemUrl: 'assets/images/gabriela-passaro-azul.png',
          destaque: 'corpo-de-baile'
        },
        {
          id: 'passo-2018',
          titulo: 'Primeiro Passo',
          papel: 'Solo Iniciante',
          escola: 'Escola de Dança Gabi Baletti',
          local: 'Auditório Salvador',
          data: 'Outubro • 2018',
          imagemUrl: 'assets/images/gabriela-arabesque.png',
          destaque: 'primeira-variacao'
        }
      ]
    }
  ];

  // Lista dinâmica que de fato alimenta a interface
  anosExibidos: AnoApresentacoes[] = [];
  
  // Limite atual de anos renderizados simultaneamente (começa exibindo os primeiros 3 anos)
  limiteExibicao = 3;

  // Estatísticas do cabeçalho
  estatisticas = [
    { valor: 18, rotulo: 'Espetáculos', icone: 'teatro' },
    { valor: 32, rotulo: 'Apresentações', icone: 'sapatilhas' },
    { valor: 8, rotulo: 'Personagens', icone: 'coroa' },
    { valor: '2019 • 2026', rotulo: 'Trajetória', icone: 'calendario' }
  ];

  // Legenda de Destaques
  legendaDestaques = [
    { tipo: 'papel-principal', rotulo: 'Papel Principal' },
    { tipo: 'premiado', rotulo: 'Premiado' },
    { tipo: 'festival-nacional', rotulo: 'Festival Nacional' },
    { tipo: 'apresentacao-internacional', rotulo: 'Apresentação Internacional' },
    { tipo: 'primeira-variacao', rotulo: 'Primeira Variação' },
    { tipo: 'corpo-de-baile', rotulo: 'Corpo de Baile' }
  ];

  ngOnInit() {
    this.atualizarAnosExibidos();
  }

  // Atualiza a lista filtrada de anos com base no limite
  atualizarAnosExibidos() {
    this.anosExibidos = this.anosApresentacoes.slice(0, this.limiteExibicao);
  }

  // Incrementa a visualização em mais 3 anos a cada clique
  carregarMais() {
    this.limiteExibicao += 3;
    this.atualizarAnosExibidos();
  }

  // Verifica se ainda existem anos ocultos para habilitar ou não o botão
  temMaisAnos(): boolean {
    return this.limiteExibicao < this.anosApresentacoes.length;
  }

  // Função para rolar horizontalmente o carrossel de cards de um determinado ano
  rolarCarrossel(ano: number, direcao: 'esquerda' | 'direita') {
    const container = document.getElementById(`carousel-${ano}`);
    if (container) {
      const scrollAmount = 350; // Largura do card + gap aproximado
      container.scrollBy({
        left: direcao === 'esquerda' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  // Função de rastreamento para o *ngFor (otimização de performance)
  trackByAno(index: number, item: AnoApresentacoes) {
    return item.ano;
  }

  trackByApresentacao(index: number, item: Apresentacao) {
    return item.id;
  }
}
