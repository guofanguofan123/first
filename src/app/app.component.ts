import { Component } from '@angular/core';
const todo = [
  {
    id : 1,
    title: '吃饭',
    down: true
  },
  {
    id : 2,
    title: '写代码',
    down: false
  },
  {
    id: 3,
    title: '睡觉',
    down: true
  }
];
@Component({
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemText = '';
  public todo: {
    id: number,
    title: string,
    down: boolean
  }[] = todo;
  public editContent: {
    id: number,
    title: string,
    down: boolean
  }[] = null;

  addtodo(e): void{
    const todoContent = e.target.value;
    if ( todoContent.length > 0){
    const last = this.todo[this.todo.length - 1];
    this.todo.push(
      {
        id: last ? last.id + 1 : 1,
        title: todoContent,
        down: false
      }
     );
    e.target.value = ' ';
    }
  }
  get toggleAll(){
   return this.todo.every(item => item.down);
  }
  set toggleAll(val){
    this.todo.forEach(item => item.down = val);
  }
  delete(key: number){
    this.todo.splice(key, 1);
  }
  saveEdit(item, e){
    item.title = e.target.value;
    this.editContent = null;

  }
  cancleEditor(e){
    const {keyCode, target} = e;
    if (keyCode === 27){
      this.editContent = null;
    }
  }
}
