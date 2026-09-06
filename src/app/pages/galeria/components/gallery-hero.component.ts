import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section class="gallery-hero">
      <div class="hero-content">
        <h1 class="hero-title">Galeria</h1>
        <div class="divider-ornament">
          <span class="dot"></span>
          <span class="line"></span>
          <span class="symbol">✧</span>
          <span class="line"></span>
          <span class="dot"></span>
        </div>
        <p class="hero-description">
          Momentos que encantam, histórias que movimentam. Explore fotos, vídeos e bastidores das nossas apresentações.
        </p>
      </div>
      
      <div class="hero-image-container">
        <img ngSrc="ballet/galeria/gabriela-flautista.png" width="450" height="420" priority alt="Gabriela Baletti Dançando" class="hero-image" />
        <div class="hero-image-overlay"></div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-hero {
      position: relative;
      background: linear-gradient(135deg, #FDFBF9 0%, #F5ECE9 100%);
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      min-height: 420px;
      align-items: center;
      overflow: hidden;
      border-bottom: 1px solid rgba(176, 122, 122, 0.1);
    }

    .hero-content {
      padding: 60px 40px 60px 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      z-index: 5;
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: 3.2rem;
      font-weight: 400;
      color: #B07A7A;
      margin: 0;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* Divisor ornamental */
    .divider-ornament {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: -5px;
    }

    .divider-ornament .dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #B07A7A;
    }

    .divider-ornament .line {
      height: 1px;
      width: 50px;
      background: linear-gradient(90deg, #B07A7A 0%, rgba(176, 122, 122, 0) 100%);
    }

    .divider-ornament .line:last-child {
      background: linear-gradient(270deg, #B07A7A 0%, rgba(176, 122, 122, 0) 100%);
    }

    .divider-ornament .symbol {
      font-size: 0.8rem;
      color: #B07A7A;
    }

    .hero-description {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.6;
      color: #7A6F6B;
      max-width: 500px;
      margin: 0;
    }

    .hero-image-container {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      overflow: hidden;
    }

    .hero-image {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center 25%;
      filter: brightness(1.02) contrast(1.02);
      mask-image: linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
      -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
    }

    .hero-image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, #FDFBF9 0%, rgba(253, 251, 249, 0.4) 60%, rgba(253, 251, 249, 0) 100%);
      pointer-events: none;
    }

    @media (max-width: 1024px) {
      .gallery-hero {
        grid-template-columns: 1fr;
        min-height: auto;
      }
      .hero-content {
        padding: 50px 40px;
      }
      .hero-image-container {
        height: 250px;
      }
      .hero-image {
        object-position: center 30%;
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
        -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
      }
      .hero-image-overlay {
        background: linear-gradient(180deg, #FDFBF9 0%, rgba(253, 251, 249, 0) 40%);
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2.2rem;
      }
      .hero-content {
        padding: 40px 20px;
        gap: 12px;
      }
      .hero-description {
        font-size: 0.92rem;
      }
      .hero-image-container {
        height: 200px;
      }
    }
  `]
})
export class GalleryHeroComponent {}
