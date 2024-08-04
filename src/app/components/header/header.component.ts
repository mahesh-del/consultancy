import { Component, inject } from '@angular/core';
import { HeaderService } from '../../shared/header.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private headerService=inject(HeaderService);
  route= inject(Router)

  menuList=this.headerService.getMenuItems()

  home()
  {
    this.route.navigateByUrl("/home")
  }

}
