import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() toggleState: boolean = false;

  skills = [
    {
      title: 'Web Technologies',
      details: [
        'HTML, CSS & PHP',
        'Frameworks & Libraries : Angular, Laravel, Opencart, Bootstrap'
      ]
    },
    {
      title: 'Scripting Languages',
      details: ['JavaScript & jQuery']
    },
    {
      title: 'Tools & Databases',
      details: [
        'MantisBT, Trello, Redis',
        'Git, BitBucket, GitHub',
        'MySQL, MongoDB'
      ]
    }
  ];
}
