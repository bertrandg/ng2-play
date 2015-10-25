import {Component, View} from 'angular2/angular2';
import {SbGroupComponent} from './SbGroupComponent';

import {SbGroup, SegmentBuilderService} from './../../services/SegmentBuilderService';

@Component({
  selector: 'segment-builder'
})
@View({
    directives: [SbGroupComponent],
    template: `
      <div>
          <h1>Segment Builder:</h1>
          <sb-group [group]="mainGroup" level="0"></sb-group>
      </div>
    `
})

export class SegmentBuilderComponent {
  mainGroup:SbGroup

  constructor(segmentBuilder:SegmentBuilderService) {
      this.mainGroup = segmentBuilder.rootGroup;
  }
}