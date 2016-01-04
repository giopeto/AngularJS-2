/// <reference path="typings/angular2/angular2.d.ts" />

// TypeScript
import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';
@Component({
  selector: 'display',
  
})
@View({
  directives: [NgFor, NgIf],
  template: `
   <p>My name: {{ myName }}</p>
   <p>Friends:</p>
  <ul>
     <li *ng-for="#name of names">
        {{ name }}
     </li>
  </ul>

  <p *ng-if="names.length > 3">You have many({{names.length}}) friends!</p>
  `
})
class DisplayComponent {
  myName: string;
  names: Array<string>;
  constructor() {
    this.myName = "Alice";
    this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}
bootstrap(DisplayComponent);