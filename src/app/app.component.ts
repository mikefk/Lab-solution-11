import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ComponentCounterValue:number = 6;
 
  title = 'app works!';

  updateCounter(counterValue:number){
    this.ComponentCounterValue=counterValue;
  }
}
