import {Component, View, NgIf, NgFor, ElementRef} from 'angular2/angular2';

import {SbCriterionComponent} from './SbCriterionComponent';
import {SbSegmentComponent} from './SbSegmentComponent';
import {DragDirective} from './DragDirective';
import {DropTargetComponent} from './DropTargetComponent';

import {SbGroup, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Component({
    selector: 'sb-group',
    properties: [
        'parentgroup',
        'group',
        'level'
    ],
    host: {
        '[class]': '\'panel panel-default level-\' + level',
        //'[class.recentAction]': 'group.recentAction'
    }
})
@View({
    directives: [NgIf, NgFor, SbCriterionComponent, SbSegmentComponent, SbGroupComponent, DragDirective, DropTargetComponent],
    template: `
        <div class="panel-heading">
            <button class="btn btn-sm btn-default" (click)="isOpen = !isOpen"><span class="glyphicon glyphicon-{{ isOpen ? 'triangle-bottom' : 'triangle-right' }}"></span></button>
            <span class="badge">[{{ group.position }}] Group ({{ group.id }})</span>
            <button class="btn btn-sm btn-primary" (click)="segmentBuilder.addElement(group, 'group')">+ Group</button>
            <button class="btn btn-sm btn-primary" (click)="segmentBuilder.addElement(group, 'criterion')">+ Criterion</button>
            <button class="btn btn-sm btn-primary" (click)="segmentBuilder.addElement(group, 'segment')">+ Segment</button>
            <button class="btn btn-sm btn-danger" *ng-if="parentgroup" (click)="segmentBuilder.removeElement(parentgroup, group)"><span class="glyphicon glyphicon-trash"></span></button>
        </div>
        <div class="panel-body" [hidden]="!isOpen">
          
            <drop-target *ng-if="!group.children.length"
                  index="0" [group]="group" [level]="level"></drop-target>

            <drop-target *ng-if="group.children.length"
                  index="0" [group]="group" [level]="level"  [hidewhenids]="[group.children[0].id]"></drop-target>

            <div *ng-for="#m of group.children; #i = index">
                <sb-criterion *ng-if="m.type == 'criterion'" 
                      [parentgroup]="group" [criterion]="m" [drag]="m"></sb-criterion>

                <sb-segment *ng-if="m.type == 'segment'" 
                      [parentgroup]="group" [segment]="m" [drag]="m"></sb-segment>

                <sb-group *ng-if="m.type == 'group'" 
                      [parentgroup]="group" [group]="m" [level]="level + 1" [drag]="m"></sb-group>

                <drop-target *ng-if="i < group.children.length - 1"
                      [index]="i + 1" [group]="group" [level]="level" [hidewhenids]="[group.children[i].id, group.children[i + 1].id]"></drop-target>

                <drop-target *ng-if="i == group.children.length - 1"
                      [index]="i + 1" [group]="group" [level]="level" [hidewhenids]="[group.children[i].id]"></drop-target>
            </div>
        </div>
    `
})

export class SbGroupComponent {
    parentgroup:SbGroup
    group:SbGroup
    level:number
    isOpen:boolean = true

    constructor(private segmentBuilder:SegmentBuilderService) {}

    onInit() {
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