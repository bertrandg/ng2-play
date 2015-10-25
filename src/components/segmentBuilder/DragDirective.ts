import {Directive, ElementRef} from 'angular2/angular2';

import {SegmentBuilderService} from './../../services/SegmentBuilderService';


@Directive({
  selector: '[drag]',
  inputs: ['drag'],
  host: {
    'draggable': 'true',
    '(dragstart)': 'onDragStart($event)',
    '(dragend)': 'onDragEnd($event)'
  }
})
export class DragDirective {

  constructor(private segmentBuilder:SegmentBuilderService, private elRef: ElementRef) {}

  onInit() {}

  onDragStart(e:DragEvent) {
    this.segmentBuilder.isDraggingElement = true;

    this.elRef.nativeElement.style.opacity = .5;
    this.elRef.nativeElement.style.outline = '1px solid red';

    e.dataTransfer.setData('text/plain', 'go');
    e.dataTransfer.effectAllowed = 'move';
    e.stopPropagation();
  }

  onDragEnd(e:DragEvent) {
    this.segmentBuilder.isDraggingElement = false;

    this.elRef.nativeElement.style.opacity = 1;
    this.elRef.nativeElement.style.outline = 0;

    e.stopPropagation();
  }
}