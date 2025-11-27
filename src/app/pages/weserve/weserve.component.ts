import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Industry {
  number: string;
  name: string;
}

interface WhyChooseUs {
  number: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-weserve',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weserve.component.html',
  styleUrl: './weserve.component.css'
})
export class WeserveComponent {
 industries: Industry[] = [
    { number: '01', name: 'Construction' },
    { number: '02', name: 'Manufacturing' },
    { number: '03', name: 'Automotive' },
    { number: '04', name: 'Energy and Utilities' },
    { number: '05', name: 'Infrastructure Projects' }
  ];

  reasons: WhyChooseUs[] = [
    {
      number: '01',
      title: 'Unmatched Quality',
      description: 'We use premium materials and advanced techniques to ensure every project meets the highest standards.'
    },
    {
      number: '02',
      title: 'Experienced Team',
      description: 'Our skilled fabricators and engineers bring years of expertise to every project.'
    },
    {
      number: '03',
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and work diligently to deliver on time, every time.'
    },
    {
      number: '04',
      title: 'Comprehensive Solutions',
      description: 'From design and prototyping to final production, we handle every step with care and precision.'
    },
    {
      number: '05',
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We collaborate closely with you to ensure your expectations are exceeded.'
    }
  ];
}
