import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent implements OnInit {

  constructor(private location: Location){
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
  
  }
  
  ngOnInit(): void {
 
  }

  goBack(): void {
    this.location.back();
  }

}
