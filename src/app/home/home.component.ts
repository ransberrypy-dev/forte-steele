import { Component } from '@angular/core';
import { CarouselComponent } from '../ui-component/carousel/carousel.component';
import { MiniWhatwedoComponent } from '../ui-component/mini-whatwedo/mini-whatwedo.component';
import { LatestNewsCarouselComponent } from '../ui-component/latest-news-carousel/latest-news-carousel.component';
import { ContactFormComponent } from '../ui-component/contact-form/contact-form.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, MiniWhatwedoComponent, LatestNewsCarouselComponent, ContactFormComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
