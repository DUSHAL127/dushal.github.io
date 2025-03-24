import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutText: string[] = [];
  content: string[] = [
    'Hi, my name is DUSHAL.',  // New intro line
    'I am passionate about new tech, my interests in coding, book reading, and learning new technologies.',
    'I completed my schooling at Vivekanand Senior Secondary School, Nilokheri.',
    'I pursued my college studies at the State Institute of Engineering and Technologies, Nilokheri.',
    'I have undergone training at Webotech Solution Pvt Ltd.',
    'I completed my internship as a Web Developer at Relinns Technologies.'
  ];

  links = {
    linkedin: 'https://www.linkedin.com/in/dushal/',  // Replace with your LinkedIn URL
    github: 'https://github.com/DUSHAL127'  // Replace with your GitHub URL
  };

  ngOnInit(): void {
    this.typeText(); // Start typing effect for the About section
  }

  // Left-to-Right Typing Effect
  typeText(): void {
    let currentTextIndex = 0;
    const typeNextText = () => {
      if (currentTextIndex < this.content.length) {
        const text = this.content[currentTextIndex];
        let currentText = '';
        const wordLength = text.length;

        for (let i = 0; i < wordLength; i++) {
          setTimeout(() => {
            currentText += text[i]; // Append each character one by one
            this.aboutText[currentTextIndex] = currentText; // Set the current text
          }, 100 * i); // 100ms per character
        }

        currentTextIndex++;
        setTimeout(typeNextText, wordLength * 100 + 500); // Delay before typing the next content
      }
    };
    typeNextText(); // Start typing effect
  }
}
