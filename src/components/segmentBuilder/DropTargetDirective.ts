import {Directive, ElementRef, FORM_DIRECTIVES} from 'angular2/angular2';

import {SbGroup, SbCriterion, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Directive({
  selector: 'drop-target',
  properties: [],
  host: {
    '[hidden]': '!segmentBuilder.isDraggingElement',
    '(dragenter)': 'onDragEnter($event)',
    '(dragleave)': 'onDragLeave($event)',
    '(dragover)': 'onDragOver($event)',
    '(dragout)': 'onDragOut($event)',
    '(drop)': 'onDrop($event)'
  }
})

export class DropTargetDirective {

  constructor(private elRef: ElementRef, private segmentBuilder:SegmentBuilderService) {
    //this.elRef.nativeElement.style.opacity = 4;
  }

  onDragEnter(e:Event) {
    ///this.elRef.nativeElement.style.backgroundColor = 'blue';
  }

  onDragLeave(e:Event) {
    //this.elRef.nativeElement.style.backgroundColor = 'transparent';
  }

  onDragOver(e:Event) {
    //this.elRef.nativeElement.style.backgroundColor = 'yellow';
  }

  onDragOut(e:Event) {
    //this.elRef.nativeElement.style.backgroundColor = 'transparent';
  }

  onDrop(e:Event) {
    //this.elRef.nativeElement.style.backgroundColor = 'transparent';
  }
}