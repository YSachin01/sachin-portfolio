import { Component } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  ngOnInit(): void {
    AOS.init(); // Initialize AOS
  }
}
