import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-whatwedo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatwedo.component.html',
  styleUrl: './whatwedo.component.css'
})
export class WhatwedoComponent {
  services: Service[] = [
    {
      id: 1,
      image: '/img/slider_sm3.jpg',
      title: 'Custom Steel Fabrication',
      description: 'Tailored solutions to meet your unique project needs, from concept to completion, ensuring precision and quality in every piece.'
    },
    {
      id: 2,
      image: '/img/slider_sm2.jpg',
      title: 'Structural Steel',
      description: 'Durable frameworks for residential, commercial, and industrial buildings.'
    },
    {
      id: 3,
      image: '/img/slider_sm1.jpg',
      title: 'Metal Welding and Assembly',
      description: 'Expert welding services for seamless joins and robust structures designed to perform under pressure.'
    },
    {
      id: 4,
      image: '/img/slider3.jpg',
      title: 'Sheet Metal Work',
      description: 'From cutting and bending to finishing and installation, we deliver precise, reliable sheet metal solutions.'
    },
     {
      id: 5,
      image: '/img/slider2.jpg',
      title: 'Steel Repairs and Maintenance',
      description: 'Keep your structures and equipment in top condition with our reliable repair services.'
    }
  ];
}
