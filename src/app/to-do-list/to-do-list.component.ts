import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  taskEntry=""
  todoList:{id:number,task:string}[]=[]

  addToList(input:Event){
    // const item:string = (input.target as HTMLInputElement).value
    // const serailNo:number = 0
    // no need of above as taskEntry has 2-way binding

    console.log("item: ", this.taskEntry) //2 -way binding chnage in .html
    this.todoList.push({id:this.todoList.length+1, task: this.taskEntry}) //creating an object & inserting at same time
    this.taskEntry="" //reset text box to blank, 2 -way binding chnage in .ts
  }

  deleteItem(idx:number){
    //we pass index from delete button & here we filter & compare the ids &
    this.todoList = this.todoList.filter( (item)=> item.id != idx) //removed the filtered & returns new list, so entire list change here
  }

}
