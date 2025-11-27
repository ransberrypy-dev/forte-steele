import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Service {
  image: string;
  title: string;
}


@Component({
  selector: 'app-mini-whatwedo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-whatwedo.component.html',
  styleUrl: './mini-whatwedo.component.css'
})
export class MiniWhatwedoComponent {
  currentIndex = 0;
  itemsToShow = 3;
  slideWidth = 33.333;

  services: Service[] = [
    {
      image: '/img/slider_sm1.jpg',
      title: 'Custom Steel Fabrication'
    },
    {
      image: '/img/slider_sm2.jpg',
      title: 'Structural Steel'
    },
    {
      image: '/img/slider_sm3.jpg',
      title: 'Steel Repairs and Maintenance'
    },
    {
      image: '/img/slider_sm2.jpg',
      title: 'Custom Steel Fabrication'
    },
    {
      image: '/img/slider_sm3.jpg',
      title: 'Structural Steel'
    }
  ];

  constructor() {
    this.updateItemsToShow();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.updateItemsToShow());
    }
  }

  updateItemsToShow() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        this.itemsToShow = 1;
        this.slideWidth = 100;
      } else if (window.innerWidth < 992) {
        this.itemsToShow = 2;
        this.slideWidth = 50;
      } else {
        this.itemsToShow = 3;
        this.slideWidth = 33.333;
      }
    }
  }

  nextSlide() {
    if (this.currentIndex < this.services.length - this.itemsToShow) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
