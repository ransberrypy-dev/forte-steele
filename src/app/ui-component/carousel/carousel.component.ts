import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Slide {
  image: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy  {
  currentIndex = 0;
  autoPlayInterval: any;

  slides: Slide[] = [
    {
      image: '/img/img-bg-1.jpg',
      title: 'Welcome to Our Platform',
      description: 'Discover amazing features and possibilities'
    },
    {
      image: '/img/img-bg-2.jpg',
      title: 'Build Something Great',
      description: 'Transform your ideas into reality'
    },
    {
      image: '/img/img-bg-3.jpg',
      title: 'Join Our Community',
      description: 'Connect with like-minded innovators'
    }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.resetAutoPlay();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.resetAutoPlay();
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
