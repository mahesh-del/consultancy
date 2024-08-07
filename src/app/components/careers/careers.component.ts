import { Component, inject } from '@angular/core';
import { HeaderService } from '../../shared/header.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {

  api=inject(HeaderService);
  careers = this.api.careers;

}
