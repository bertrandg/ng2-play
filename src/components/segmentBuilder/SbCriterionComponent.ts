import {Component, View, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';

import {SbGroup, SbCriterion, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Component({
  selector: 'sb-criterion',
  properties: ['parentgroup', 'criterion']
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
      <p>
        [{{ criterion.position }}] Criterion - 
        <input type="text" [(ng-model)]="criterion.name" /> - 
        <button (click)="segmentBuilder.removeElement(parentgroup, criterion)">Suppr</button>
      </p>
    `
})

export class SbCriterionComponent {
  parentgroup:SbGroup
  criterion:SbCriterion

  constructor(private segmentBuilder:SegmentBuilderService) {}
}