import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  typedText: string = ''; // Holds the text to be typed out
  fullText: string = " Feel free to reach out to me.";
  typingSpeed: number = 100; // Adjust the speed of typing
  contact = { name: '', email: '', message: '' }; // Define the contact object for form binding

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.typeText();
  }

  // Function for typing text word-by-word
  typeText() {
    let words = this.fullText.split(' ');
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < words.length) {
        this.typedText += words[index] + ' ';
        index++;
        this.cdr.detectChanges(); // Manually trigger change detection
      } else {
        clearInterval(typingInterval); // Clear interval once typing is complete
      }
    }, this.typingSpeed);
  }

  // Method to handle form submission
  onSubmit() {
    console.log('Form Submitted:', this.contact);
    // Here, you can handle form submission logic (e.g., sending data to the backend)
  }
}
