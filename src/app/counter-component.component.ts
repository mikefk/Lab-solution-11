import { Component, OnInit,Input ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  outputs: ['counterChange'],
  template: `
    <p>
     
     
     <button (click)="dec()">-</button>
     {{counterValue}}
     <button (click)="inc()">+</button>
    </p>
  `,
  styles: []
})
export class Counter implements OnInit {
  _counter:number;
  counterChange:EventEmitter<number>;
counterValue:number;
  constructor() {
    this.counterChange=new EventEmitter();
    this.counterValue=0;
   }
   inc(){
      console.log("counter");
this.counterValue++;

this.counterChange.emit(this.counterValue);
   }
   dec(){
this.counterValue--;
this.counterChange.emit(this.counterValue);
   }
   @Input() 
   set counter(counter:number ){
    console.log("counter"+counter);
this._counter=counter;
this.counterValue=this._counter ||0;
//this.counterChange.emit(this.counterValue);

   }

  ngOnInit() {
  }

}
