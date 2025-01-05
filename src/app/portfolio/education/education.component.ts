import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  @Input() toggleState: boolean = false;
  education = [
    {
      year: '2022',
      degree: 'B.Sc.IT',
      institution: 'University of Mumbai'
    },
    {
      year: '2019',
      degree: 'HSC',
      institution: 'Lokmanya Junior College, NSP'
    },
    {
      year: '2017',
      degree: 'SSC',
      institution: 'Lokmanya High School, NSP'
    }
  ];
}
