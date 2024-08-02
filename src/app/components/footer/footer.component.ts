import { Component, inject } from '@angular/core';
import { HeaderService } from '../../shared/header.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private headerService=inject(HeaderService);

  social=this.headerService.getSocial();
}
