import { Component, Input } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
   @Input() toggleState: boolean = false;
   workExperience = [
     {
       company: 'Ebrandz LLP',
       position: 'Software Developer',
       duration: 'May 2024 - Present',
       details1: 'Specialized in Full Stack Development using Angular and Laravel.',
       details2: 'Currently involved in creating scalable web applications and APIs.'
     },
     {
       company: 'E&A Technology Services LLP (Enats)',
       position: 'Software Developer',
       duration: 'Oct 2022 - April 2024 (1.6 years)',
       details1: 'Worked as a PHP Developer on various projects.',
       details2: 'Contributed to enterprise-level applications and collaborated with cross-functional teams.'
     }
   ];

  ngOnInit(): void {
    AOS.init(); // Initialize AOS
  }

}
