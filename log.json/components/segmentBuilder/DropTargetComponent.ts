import {Component, View, ElementRef, FORM_DIRECTIVES} from 'angular2/angular2';

import {SbGroup, SbCriterion, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Component({
    selector: 'drop-target',
    properties: [
        'group',
        'index',
        'hidewhenids'
    ],
    host: {
        '[class.showMe]': '_showMe()',
        '[class.hoverMe]': 'isHover',
        '(dragenter)': 'onDragEnter($event)',
        '(dragleave)': 'onDragLeave($event)',
        '(dragover)': 'onDragOver($event)',
        '(dragout)': 'onDragOut($event)',
        '(drop)': 'onDrop($event)'
    }
})
@View({
    directives: [],
    template: `
        <div class="glyphicon glyphicon-arrow-right"></div>
    `
})

export class DropTargetComponent {
    group:SbGroup
    index:number
    hidewhenids:Array<number> = []
    isHover:boolean = false

    constructor(private segmentBuilder:SegmentBuilderService) {}

    onInit() {
        console.log(this.hidewhenids);
    }

    private _showMe() {
        return !!this.segmentBuilder.draggingElement && this.hidewhenids.indexOf(this.segmentBuilder.draggingElement.id) == -1;
    }

    onDragEnter(e:Event) {
        e.preventDefault();
        e.stopPropagation();
        this.isHover = true;
    }

    onDragLeave(e:Event) {
        e.stopPropagation();
        this.isHover = false;
    }

    onDragOver(e:Event) {
        e.preventDefault();
        e.stopPropagation();
    }

    onDragOut(e:Event) {
        e.preventDefault();
        e.stopPropagation();
    }

    onDrop(e:Event) {
        this.isHover = false;
        this.segmentBuilder.moveElement(this.segmentBuilder.draggingElement, this.group, this.index);
    }
}