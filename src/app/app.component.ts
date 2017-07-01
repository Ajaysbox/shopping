import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectionType:string = "recipe"
  menuSelected(selection){
    this.selectionType = selection;
  }
}
