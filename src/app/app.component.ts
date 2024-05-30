import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invictusky';
  
  submitForm() {
    // Assuming you have backend service to handle email sending
    // This is just a simulation
    alert('Form submitted successfully!');
  }
}
