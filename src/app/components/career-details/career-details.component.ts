import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../shared/header.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career-details.component.html',
  styleUrl: './career-details.component.scss'
})
export class CareerDetailsComponent implements OnInit {

  private route=inject(ActivatedRoute)
  private api=inject(HeaderService)
  career:any;

  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get('title');
    this.career = this.api.getCareerByName(productName);
  }

}
