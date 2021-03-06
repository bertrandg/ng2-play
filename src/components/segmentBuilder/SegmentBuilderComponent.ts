import {Component, View, NgFor} from 'angular2/angular2';
import {SbGroupComponent} from './SbGroupComponent';

import {SbGroup, SegmentBuilderService} from './../../services/SegmentBuilderService';

@Component({
    selector: 'segment-builder'
})
@View({
    directives: [SbGroupComponent, NgFor],
    template: `
        <div class="container">
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
