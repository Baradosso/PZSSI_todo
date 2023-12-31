import {Component} from '@angular/core';
import {trigger, animate, style, transition, keyframes} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('moveInLeft', [
        transition('void => *',[
            style({transform: 'translateX(300px)'}),
            animate(300, keyframes([
              style({transform: 'translateX(300px)'}),
              style({transform: 'translateX(0)'})
            ]))
          ]
        ),
        transition('* => void',[
            style({transform: 'translateX(0px)'}),
            animate(300, keyframes([
              style({transform: 'translateX(0px)'}),
              style({transform: 'translateX(300px)'})
            ]))
          ]
        )
      ]
    )
  ]
})
export class AppComponent {
  title = 'PZSSI-todo';
  todoArray: any[] = [];

  deleteItem(todo: any) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  todoSubmit(value: any) {
    if (value !== '') {
      this.todoArray.push(value);
    } else {
      alert('Field required **');
    }
  }
}
