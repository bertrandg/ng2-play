import {Directive, ElementRef, FORM_DIRECTIVES} from 'angular2/angular2';

import {SbGroup, SbCriterion, SegmentBuilderService} from './../../services/SegmentBuilderService';


@Directive({
  selector: 'drop-target',
  properties: [
    'group',
    'index'
  ],
  host: {
    '[class.hideMe]': '!segmentBuilder.draggingElement',
    '(dragenter)': 'onDragEnter($event)',
    '(dragleave)': 'onDragLeave($event)',
    '(dragover)': 'onDragOver($event)',
    '(dragout)': 'onDragOut($event)',
    '(drop)': 'onDrop($event)'
  }
})

export class DropTargetDirective {
  group:SbGroup
  index:number

  constructor(private elRef: ElementRef, private segmentBuilder:SegmentBuilderService) {
    //this.elRef.nativeElement.style.opacity = 4;
  }

  onDragEnter(e:Event) {
    e.preventDefault();
    e.stopPropagation();

      //console.log('onDragEnter');
    ///this.elRef.nativeElement.style.backgroundColor = 'blue';
  }

  onDragLeave(e:Event) {
    e.stopPropagation();
      //console.log('onDragLeave');
    //this.elRef.nativeElement.style.backgroundColor = 'transparent';
  }

  onDragOver(e:Event) {
    e.preventDefault();
    e.stopPropagation();

      //console.log('onDragOver');
    //this.elRef.nativeElement.style.backgroundColor = 'yellow';
  }

  onDragOut(e:Event) {
    e.preventDefault();
    e.stopPropagation();

      //console.log('onDragOut');
    //this.elRef.nativeElement.style.backgroundColor = 'transparent';
  }

  onDrop(e:Event) {
      //console.log('onDrop > ', this.segmentBuilder.draggingElement);

      this.segmentBuilder.moveElement(this.segmentBuilder.draggingElement, this.group, this.index);
    //this.elRef.nativeElement.style.backgroundColor = 'transparent';
  }
}