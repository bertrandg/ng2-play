import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'view-array',
  properties: [
    'tab1',
    'tab2'
  ]
})
@View({
    directives: [NgFor],
    template: `
      <div class="bloc">
        <h2>Child component</h2>
        <p>TAB1 = <span *ng-for="#d of tab1">{{ d.name }} - </span></p>
        <p>TAB2 = <span *ng-for="#t of tab2">{{ t }} - </span></p>
        <input type="text" #new />
        <button (click)="add(new.value)">ADD</button>
      </div>
    `
})

export class ViewArrayComponent {
  tab1: Array<Object>
  tab2: Array<string>

  add(v:string) {
      this.tab1.push({name: v});
      this.tab2.push(v);
      console.log(v, this.tab1, this.tab2);
  }
}