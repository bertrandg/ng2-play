import {Directive, ElementRef} from 'angular2/angular2';

import {SbElement, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Directive({
    selector: '[drag]',
    inputs: [
        'drag'
    ],
    host: {
        'draggable': 'true',
        '[class.draggingMe]': 'isDraggingMe',
        '(dragstart)': 'onDragStart($event)',
        '(dragend)': 'onDragEnd($event)'
    }
})
export class DragDirective {
    drag:SbElement
    isDraggingMe:boolean = false

    constructor(private segmentBuilder:SegmentBuilderService, private elRef: ElementRef) {}

    onInit() {}

    onDragStart(e:DragEvent) {
        this.segmentBuilder.draggingElement = this.drag;

        this.isDraggingMe = true;

        this.elRef.nativeElement.style.opacity = .5;
        this.elRef.nativeElement.style.outline = '1px solid red';

        e.dataTransfer.setData('text/plain', 'go');
        e.dataTransfer.effectAllowed = 'move';
        e.stopPropagation();
    }

    onDragEnd(e:DragEvent) {
        setTimeout((): void => {
            this.segmentBuilder.draggingElement = null;
            this.isDraggingMe = false;
        });

        this.elRef.nativeElement.style.opacity = 1;
        this.elRef.nativeElement.style.outline = 0;

        e.stopPropagation();
    }
}