import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() themeToggle = new EventEmitter<boolean>(); // Emit a boolean
  toggleState: boolean = false;

  toggleTheme() {
    this.toggleState = !this.toggleState;
    this.themeToggle.emit(this.toggleState); // Emit the new boolean state
  }
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  navigateAndClose(sectionId: string) {
    this.scrollToSection(sectionId);

    // Collapse the navbar on smaller screens
    const navbar = document.querySelector('.navbar-collapse') as HTMLElement;
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  
  
}
