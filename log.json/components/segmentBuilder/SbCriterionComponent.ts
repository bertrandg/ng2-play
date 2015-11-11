import {Component, View, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';

import {SbGroup, SbCriterion, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Component({
    selector: 'sb-criterion',
    properties: [
        'parentgroup',
        'criterion'
    ],
    host: {
        '[class.recentAction]': 'criterion.recentAction'
    }
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <div class="form-inline">
            <span class="badge">[{{ criterion.position }}] Criterion ({{ criterion.id }})</span> - 
            <input class="form-control" type="text" [(ng-model)]="criterion.name" />
            <button class="btn btn-danger" (click)="segmentBuilder.removeElement(parentgroup, criterion)"><span class="glyphicon glyphicon-trash"></span></button>
        </div>
    `
})

export class SbCriterionComponent {
    parentgroup:SbGroup
    criterion:SbCriterion

    constructor(private segmentBuilder:SegmentBuilderService) {}
}