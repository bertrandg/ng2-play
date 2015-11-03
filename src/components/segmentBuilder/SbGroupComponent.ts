import {Component, View, NgIf, NgFor, ElementRef} from 'angular2/angular2';

import {SbCriterionComponent} from './SbCriterionComponent';
import {SbSegmentComponent} from './SbSegmentComponent';
import {DragDirective} from './DragDirective';
import {DropTargetDirective} from './DropTargetDirective';

import {SbGroup, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Component({
  selector: 'sb-group',
  properties: [
    'parentgroup',
    'group',
    'level'
  ],
  host: {
    //'[class]': '\'level-\' + level',
    '[class.recentAction]': 'group.recentAction'
  }
})
@View({
    directives: [NgIf, NgFor, SbCriterionComponent, SbSegmentComponent, SbGroupComponent, DragDirective, DropTargetDirective],
    template: `
        <p>
          [{{ group.position }}] Group ({{ group.id }})
          <button (click)="isOpen = !isOpen">{{ isOpen ? '-' : '+' }}</button>
          <button (click)="segmentBuilder.addElement(group, 'group')">+ Group</button>
          <button (click)="segmentBuilder.addElement(group, 'criterion')">+ Criterion</button>
          <button (click)="segmentBuilder.addElement(group, 'segment')">+ Segment</button>
          <button *ng-if="parentgroup" (click)="segmentBuilder.removeElement(parentgroup, group)">Suppr</button>
        </p>
        <div class="group-children" [hidden]="!isOpen">
          <drop-target [group]="group" index="0">{{ '0 - ' + group.id }}</drop-target>

          <div *ng-for="#m of group.children; #i = index">

            <sb-criterion *ng-if="m.type == 'criterion'" 
                  [parentgroup]="group" [criterion]="m"
                  [drag]="m"></sb-criterion>

            <sb-segment *ng-if="m.type == 'segment'" 
                  [parentgroup]="group" [segment]="m"
                  [drag]="m"></sb-segment>

            <sb-group *ng-if="m.type == 'group'" 
                  [parentgroup]="group" [group]="m" [level]="level + 1"
                  [drag]="m"></sb-group>

            <drop-target [group]="group" [index]="i + 1">{{ (i + 1) + ' - ' + group.id }}</drop-target>

          </div>

          </div>
        </div>
    `
})

export class SbGroupComponent {
  parentgroup:SbGroup
  group:SbGroup
  level:number
  isOpen:boolean = true

  constructor(private segmentBuilder:SegmentBuilderService, public elRef:ElementRef) {}

  onInit() {
      // probleme > qd déplacé, le premier level reste et on ajoute son nouveau...
      this.elRef.nativeElement.classList.add('level-' + this.level);
      this.level = Number(this.level);
  }
}

/*  [ng-switch]="m.type"
              <sb-criterion [ng-switch-when]="'criterion'" [criterion]="m"></sb-criterion>
              <sb-segment [ng-switch-when]="'segment'" [segment]="m"></sb-segment>
              <sb-group [ng-switch-when]="'group'" [group]="m"></sb-group>

          <div *ng-for="#m of group.children; #i = index">

          <template ng-for #m [ng-for-of]="group.children" #i="index">
          </template>
*/