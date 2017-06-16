import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    powerLevel: 1,
    outputPower: 1,
  }
  onSubmit() {
    this.user.outputPower = this.user.powerLevel;
  }
}
