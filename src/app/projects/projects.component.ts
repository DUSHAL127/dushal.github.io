import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectComponent implements OnInit {
  typedText = '';
  projects = [
    { title: 'BotPenguin', description: 'SaaS platform for building chat bots', github: 'https://github.com/botpenguin', liveDemo: 'https://botpenguin.com/' },
    { title: 'Appsrhino', description: 'Online marketing platform', github: 'https://github.com/appsrhino', liveDemo: 'https://www.appsrhino.com/' },
    { title: 'E-Shope', description: 'Online shopping website', github: 'https://github.com/eshope', liveDemo: '#' },
    { title: 'StressFreeHead', description: 'Online platform for mental wellness', github: 'https://github.com/eshope', liveDemo: '#' },
    { title: 'My Portfolio', description: 'You are seeing me right now !!', github: 'https://github.com/eshope', liveDemo: '#' },
  ];

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const text = 'Welcome to My Project Portfolio!';
    let index = 0;
    const typingSpeed = 100; // Speed of typing in milliseconds

    const type = () => {
      if (index < text.length) {
        this.typedText += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }
}
