import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface CoreValue {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
coreValues: CoreValue[] = [
    {
      number: '01',
      title: 'Excellence',
      description: 'Delivering superior quality and craftsmanship in every project.'
    },
    {
      number: '02',
      title: 'Innovation',
      description: 'Leveraging advanced technology and creative problem-solving to drive results.'
    },
    {
      number: '03',
      title: 'Integrity',
      description: 'Upholding transparency, honesty, and trust in all our partnerships.'
    },
    {
      number: '04',
      title: 'Sustainability',
      description: 'Committed to environmentally responsible practices and long-lasting solutions.'
    },
    {
      number: '05',
      title: 'Customer Focus',
      description: 'Putting our clients at the centre of everything we do.'
    }
  ];
}
