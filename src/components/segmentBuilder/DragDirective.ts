import {Directive, ElementRef} from 'angular2/angular2';

import {SbElement, SegmentBuilderService} from './../../services/SegmentBuilderService';


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
  drag:SbElement

  constructor(private segmentBuilder:SegmentBuilderService, private elRef: ElementRef) {}

  onInit() {}

  onDragStart(e:DragEvent) {
    this.segmentBuilder.draggingElement = this.drag;

    this.elRef.nativeElement.style.opacity = .5;
    this.elRef.nativeElement.style.outline = '1px solid red';

    e.dataTransfer.setData('text/plain', 'go');
    e.dataTransfer.effectAllowed = 'move';
    e.stopPropagation();
  }

  onDragEnd(e:DragEvent) {
    setTimeout(():void => this.segmentBuilder.draggingElement = null);

    this.elRef.nativeElement.style.opacity = 1;
    this.elRef.nativeElement.style.outline = 0;

    e.stopPropagation();
  }
}