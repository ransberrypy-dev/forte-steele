import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Leader {
  name: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-ourleadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourleadership.component.html',
  styleUrl: './ourleadership.component.css'
})
export class OurleadershipComponent {
  leaders: Leader[] = [
    {
      name: 'Roderick Ablorm',
      title: 'Managing Director',
      image: '/img/dp.png'
    }
  ];
}
