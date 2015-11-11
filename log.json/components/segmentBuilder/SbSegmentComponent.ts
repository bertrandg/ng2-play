import {Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {SbGroup, SbSegment, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Component({
    selector: 'sb-segment',
    properties: [
        'parentgroup',
        'segment'
    ],
    host: {
        '[class.recentAction]': 'segment.recentAction'
    }
})
@View({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    template: `
        <div class="form-inline">
            <span class="badge">[{{ segment.position }}] Segment ({{ segment.id }})</span> - 
            <input class="form-control" type="text" [(ng-model)]="segment.name" />
            <button class="btn btn-danger" (click)="segmentBuilder.removeElement(parentgroup, segment)"><span class="glyphicon glyphicon-trash"></span></button>
        </div>
    `
})

export class SbSegmentComponent {
    parentgroup:SbGroup
    segment:SbSegment

    constructor(private segmentBuilder:SegmentBuilderService) {}
}