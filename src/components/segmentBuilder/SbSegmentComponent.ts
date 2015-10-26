import {Component, View, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';

import {SbGroup, SbSegment, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Component({
  selector: 'sb-segment',
  properties: [
    'parentgroup',
    'segment'
  ]
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
      <p>
        [{{ segment.position }}] Segment ({{ segment.id }}) - 
        <input type="text" [(ng-model)]="segment.name" /> - 
        <button (click)="segmentBuilder.removeElement(parentgroup, segment)">Suppr</button>
      </p>
    `
})

export class SbSegmentComponent {
  parentgroup:SbGroup
  segment:SbSegment

  constructor(private segmentBuilder:SegmentBuilderService) {}
}