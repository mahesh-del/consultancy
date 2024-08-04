import { Component, inject } from '@angular/core';
import { HeaderService } from '../../shared/header.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  header=inject(HeaderService)

  contact=this.header.getContact();
}
