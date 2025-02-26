import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../shared/header.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-career-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './career-details.component.html',
  styleUrl: './career-details.component.scss'
})
export class CareerDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute)
  private api = inject(HeaderService)
  career: any;
  selectedL: any;
  locationControl = new FormGroup(
    {
      location: new FormControl('')
    }
  );
  locations: string[] = [];
  filteredLocations: string[] = [];

  constructor() {
    if (!this.locationControl) {
      this.filteredLocations = []
    }
  }

  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get('title');
    this.career = this.api.getCareerByName(productName);
  }

}
