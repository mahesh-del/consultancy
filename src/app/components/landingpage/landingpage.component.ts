import { Component, inject } from '@angular/core';
import { HeaderService } from '../../shared/header.service';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../contact/contact.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, ContactComponent,RouterOutlet],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  private header=inject(HeaderService)
  empower:any=this.header.getEmpower();
  discover=this.header.getDiscover();

}
