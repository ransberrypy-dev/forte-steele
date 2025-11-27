import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsSlide {
  image: string;
  title: string | null;
}

@Component({
  selector: 'app-latest-news-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news-carousel.component.html',
  styleUrl: './latest-news-carousel.component.css'
})
export class LatestNewsCarouselComponent {
  currentIndex = 0;

  slides: NewsSlide[] = [
    {
      image: '/img/slider1.jpg',
      title: ''
    },
    {
      image: '/img/slider2.jpg',
      title: null
    },
    {
      image: '/img/slider3.jpg',
      title: ''
    }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 
      ? this.slides.length - 1 
      : this.currentIndex - 1;
  }
}
