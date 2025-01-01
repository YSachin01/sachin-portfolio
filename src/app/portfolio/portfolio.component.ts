import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  components = ['header', 'home', 'about', 'experience', 'skills', 'education', 'contact'];
  toggleState: boolean = false; // Default state

  onToggleTheme(state: any) {
    this.toggleState = state; // Update the toggle state based on the header component's emitted value
  }
}
