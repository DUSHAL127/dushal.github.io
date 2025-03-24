import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'Angular', proficiency: 95, gradient: 'linear-gradient(to right, #00e5ff, #42a5f5)' },
    { name: 'JavaScript', proficiency: 95, gradient: 'linear-gradient(to right, #ff9800, #ffeb3b)' },
    { name: 'Node.js', proficiency: 95, gradient: 'linear-gradient(to right, #388e3c, #00c853)' },
    { name: 'SQL', proficiency: 95, gradient: 'linear-gradient(to right, #9c27b0, #e040fb)' },
    { name: 'CSS', proficiency: 95, gradient: 'linear-gradient(to right, #ff1744, #ff8a80)' },
    { name: 'HTML', proficiency: 95, gradient: 'linear-gradient(to right, #ffeb3b, #ff9800)' },
    { name: 'Express.js', proficiency: 95, gradient: 'linear-gradient(to right, #616161, #9e9e9e)' },
    { name: 'Communication', proficiency: 90, gradient: 'linear-gradient(to right, #4caf50, #8bc34a)' } // Added Communication
  ];

  sparkles: { x: number; y: number }[] = [];
  typedSkills: string[] = Array(this.skills.length).fill('');
  proficiencyValues: number[] = Array(this.skills.length).fill(0);

  ngOnInit(): void {
    this.typeSkills();
    this.animateProficiency();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.sparkles.push({ x: event.clientX, y: event.clientY });
    if (this.sparkles.length > 50) {
      this.sparkles.shift();
    }
  }

  // Typing Effect
  typeSkills(): void {
    let currentSkillIndex = 0;
    const typeNextSkill = () => {
      if (currentSkillIndex < this.skills.length) {
        const skillName = this.skills[currentSkillIndex].name;
        let currentText = "";
        const wordLength = skillName.length;

        for (let i = 0; i < wordLength; i++) {
          setTimeout(() => {
            currentText += skillName[i];
            this.typedSkills[currentSkillIndex] = currentText;
          }, 100 * i);
        }

        currentSkillIndex++;
        setTimeout(typeNextSkill, wordLength * 100 + 500);
      }
    };
    typeNextSkill();
  }

  // Animate Proficiency Bars
  animateProficiency(): void {
    this.skills.forEach((skill, index) => {
      let currentValue = 0;
      const targetValue = skill.proficiency;
      const interval = setInterval(() => {
        if (currentValue < targetValue) {
          currentValue++;
          this.proficiencyValues[index] = currentValue;
        } else {
          clearInterval(interval);
        }
      }, 15);
    });
  }
}
