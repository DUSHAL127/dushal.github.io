import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  fullTextLines: string[] = [
    "Hi, my name is DUSHAL.",
    "Welcome to My Portfolio.",
    "I am a Full-Stack Developer.",
    "Passionate about coding and innovation."
  ];
  constructor(private router: Router) {}
  displayedText: string[] = [];
  currentLineIndex: number = 0;
  currentCharIndex: number = 0;
  typingSpeed: number = 100;
  sparkles: { x: number; y: number }[] = [];

  ngOnInit() {
    this.typeLine();
  }

  typeLine() {
    if (this.currentLineIndex < this.fullTextLines.length) {
      const line = this.fullTextLines[this.currentLineIndex];
      if (this.currentCharIndex < line.length) {
        this.displayedText[this.currentLineIndex] = 
          (this.displayedText[this.currentLineIndex] || "") + line[this.currentCharIndex];
        this.currentCharIndex++;
        setTimeout(() => this.typeLine(), this.typingSpeed);
      } else {
        this.currentLineIndex++;
        this.currentCharIndex = 0;
        setTimeout(() => this.typeLine(), 500); // Small delay before next line
      }
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.sparkles.push({ x: event.clientX, y: event.clientY });
    if (this.sparkles.length > 50) {
      this.sparkles.shift();
    }
  }

  // Hire Me button click handler
  hireMe() {
      this.router.navigate(['/contact']);
    // You can implement additional functionality here, like opening a contact form, etc.
  }
  downloadCV() {
    // Google Drive direct download link
    const driveLink = 'https://drive.google.com/uc?export=download&id=1f5aBqy9tUdh9Ax1yfwbpfuk1b8F-SKNy';
    window.open(driveLink, '_blank');  // Open the Google Drive link in a new tab
  }
}
