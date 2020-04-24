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
  public visiblity = "all";
  public todo: {
    id: number,
    title: string,
    down: boolean
  }[] = JSON.parse(window.localStorage.getItem('todo')) || [];
  public editContent: {
    id: number,
    title: string,
    down: boolean
  }[] = null;
  addtodo(e): void{
    const todoContent = e.target.value;
    if ( !todoContent.length ){
      return
    }
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
  get remainCount(){
    return this.todo.filter(t => !t.down).length;
  }
  clearAllDown(){
    this.todo = this.todo.filter(t => !t.down);
  }
  get filtertodo(){
    if (this.visiblity === 'all'){
      return this.todo;
    }else if (this.visiblity === 'active'){
      return this.todo.filter(t => !t.down);
    }else if (this.visiblity === 'completed'){
      return this.todo.filter(t => t.down);
    }
  }

  ngOnInit(): void {
    this.hashHander();
    window.onhashchange = this.hashHander.bind(this);
  }
  ngDoCheck(){
    window.localStorage.setItem('todo',JSON.stringify(this.todo))

  }
  hashHander(){
      const hash = window.location.hash.substr(1);
      switch (hash) {
        case '/': this.visiblity = 'all';
          break;
        case '/active': this.visiblity = 'active';
          break;
        case '/completed': this.visiblity = 'completed';
          break;this.todo

      }
    };

}
