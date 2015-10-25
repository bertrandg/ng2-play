
const enum GroupRelation { And, Or, None }


class SbElement {
  id:number

  constructor(public position:number, public type:string) {
      this.id = Math.round(Math.random() * 1000000);
  }
}



export class SbSegment extends SbElement {
  constructor(position:number, public name:string) {
      super(position, 'segment');
  }
}

export class SbCriterion extends SbElement {
  constructor(position:number, public name:string) {
      super(position, 'criterion');
  }
}

export class SbGroup extends SbElement {
  constructor(position:number, public relation:GroupRelation, public children:Array<SbElement>) {
      super(position, 'group');
  }
}



export class SegmentBuilderService {
  rootGroup:SbGroup
  isDraggingElement:boolean

  constructor() {
      this.rootGroup = new SbGroup(0, GroupRelation.And, [
            new SbCriterion(0, 'Mon Voisin Totoro'),
            new SbCriterion(1, 'Tueurs nés'),
            new SbGroup(2, GroupRelation.None, [
                  new SbGroup(0, GroupRelation.Or, [
                        new SbSegment(0, 'Segment films espagnols'),
                        new SbCriterion(1, 'Spirit')
                  ]),
                  new SbCriterion(1, 'Le fils de l\'Homme'),
                  new SbSegment(2, 'Segment films d\'animations'),
            ]),
            new SbSegment(3, 'Segment films anciens'),
      ]);

      this.isDraggingElement = false;
  }

  removeElement(parentGroup:SbGroup, elem:SbElement) {
    let index = parentGroup.children.indexOf(elem);
    if (index !== -1) parentGroup.children.splice(index, 1);
  }

  addElement(group:SbGroup, type:string) {
      group.children.sort((a, b) => a.position - b.position);
      let pos: number = (group.children.length == 0) ? 0 : group.children[group.children.length - 1].position + 1;
      let elem: SbElement;

      switch(type) {
          case 'criterion':
              elem = new SbCriterion(pos, '');
              break;
          case 'segment':
              elem = new SbSegment(pos, '');
              break;
          case 'group':
              elem = new SbGroup(pos, GroupRelation.And, []);
              break;
          default:
              throw Error(`No type "${type}" existing !`);
              break;
      }

      group.children.push(elem);
  }

  getParentElement(group:SbGroup, element:SbElement) {
    group.children.forEach((elem:SbElement) => {
        if (elem === element) return group;
        if (elem.hasOwnProperty('children')) {
          this.getParentElement(elem, element);
        }
    });
}

}