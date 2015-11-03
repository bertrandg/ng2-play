
const enum GroupRelation { And, Or, None }


export class SbElement {
  id:number
  recentAction:boolean = false

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
  draggingElement:SbElement

  constructor() {
      this.rootGroup = new SbGroup(0, GroupRelation.And, [
            new SbCriterion(0, 'Mon Voisin Totoro'),
            //new SbCriterion(1, 'Tueurs nés'),
            //new SbSegment(2, 'Segment films anciens'),
            new SbGroup(3, GroupRelation.None, [
                  new SbGroup(0, GroupRelation.Or, [
                        new SbSegment(0, 'Segment films espagnols'),
                        new SbCriterion(1, 'Spirit')
                  ]),
                  new SbCriterion(1, 'Le fils de l\'Homme'),
                  new SbSegment(2, 'Segment films d\'animations'),
            ]),
            /*new SbGroup(4, GroupRelation.None, [
                  new SbGroup(0, GroupRelation.And, [
                        new SbSegment(0, 'Segment films muets')
                  ]),
                  new SbCriterion(1, 'Mulan')
            ])*/
      ]);
  }

  public removeElement(parentGroup:SbGroup, elem:SbElement):SbElement {
    let index:number = parentGroup.children.indexOf(elem);
    if (index !== -1) {
        return parentGroup.children.splice(index, 1)[0];
    }
  }

  public addElement(group:SbGroup, type:string) {
      this._sortGroupByPosition(group);

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

      //console.table(group.children);
      group.children.push(elem);
      //console.table(group.children);

      this._highlightRecentAction(elem);
  }

  public moveElement(elemToMove:SbElement, toGroup:SbGroup, destIndex:number) {
      let fromGroup: SbGroup = this._getParentElement(this.rootGroup, elemToMove);

      if(fromGroup === toGroup) {
          console.log('move inside same group');
          this._moveElementInsideGroup(elemToMove, toGroup, destIndex);
      }
      else {
          console.log('move to another group');
          this._moveElementInAnotherGroup(elemToMove, fromGroup, toGroup, destIndex);
      }
  }

  private _moveElementInsideGroup(elemToMove:SbElement, group:SbGroup, destIndex:number):void {
      // si le nouveau index est le même ou le même plus 1
      // alors l'element ne bouge pas!
      let currIndex = group.children.indexOf(elemToMove);

      if(destIndex == currIndex || destIndex == currIndex+1) {
          throw Error('Try to move an element on the same position.. don\'t move it!');
      }
      else {
          let newPosition: number;

          // si le nouveau index est inférieur à l\'actuel
          // alors on a juste à maj sa prop position

          // TOOD switch avec index 0, last, interieur avant actuel, interieur apres actuel!!!

          switch(true) {
              case (destIndex == 0):
                  console.log('déplacement au début: destIndex=', destIndex, ' / currIndex=', currIndex);
                  newPosition = X;
                  break;
              case (destIndex == group.children.length):
                  console.log('déplacement à la fin: destIndex=', destIndex, ' / currIndex=', currIndex);
                  newPosition = X;
                  break;
              case (destIndex < currIndex):
                  console.log('déplacement en amont: destIndex=', destIndex, ' / currIndex=', currIndex);
                  newPosition = (group.children[destIndex - 1].position + group.children[destIndex].position)/2;
                  break;
              default:
                  console.log('déplacement en aval: destIndex=', destIndex, ' / currIndex=', currIndex);
                  newPosition = X;
                  break;
          }

          elemToMove.position = newPosition;
          this._sortGroupByPosition(group);
          this._highlightRecentAction(elemToMove);
      }
  }

  private _moveElementInAnotherGroup(elemToMove:SbElement, fromGroup:SbGroup, toGroup:SbGroup, destIndex:number):void {
      // si on deplace un groupe dans un autre groupe (que son actuel)
      // on doit vérifier que le groupe de destination n'est pas dans le groupe déplacé:
      if (elemToMove instanceof SbGroup) {
          // on remonte du groupe de destination au groupe racine en vérifiant que l'on
          // ne tombe pas sur le groupe que l'on déplace
          let parentGroup: SbGroup = toGroup;
          while (parentGroup != this.rootGroup) {
            if(parentGroup === elemToMove) {
                throw Error('Try to move a group inside itself.. Weird!');
            }
            parentGroup = this._getParentElement(this.rootGroup, parentGroup);
          }
      }

      let elem: SbElement = this.removeElement(fromGroup, elemToMove);
      let newPosition: number;

      switch(true) {
          case (toGroup.children.length == 0):
              newPosition = 0;
              break;

          case (destIndex == 0):
              console.log('ajout au debut du groupe');
              newPosition = toGroup.children[0].position - 1;
              break;

          case (destIndex == toGroup.children.length):
              console.log('ajout à la fin du groupe');
              newPosition = toGroup.children[toGroup.children.length - 1].position + 1;
              break;

          default:
              console.log('ajout à l\'intérieur du groupe');
              newPosition = (toGroup.children[destIndex - 1].position + toGroup.children[destIndex].position)/2;
              break;
      }

      elem.position = newPosition;
      toGroup.children.push(elem);
      this._sortGroupByPosition(toGroup);
      this._highlightRecentAction(elem);
  }

  private _sortGroupByPosition(group:SbGroup):void {
      group.children.sort((a, b) => a.position - b.position);
  }

  private _highlightRecentAction(element:SbElement):void {
      element.recentAction = true;
      setTimeout(() => element.recentAction = false, 2000);
  }

  private _getParentElement(group:SbGroup, element:SbElement):SbGroup {
      let parentElem: SbGroup;

      group.children.some((elem:SbElement) => {
          if (elem === element) {
              parentElem = group;
              return true;
          }
          if (elem instanceof SbGroup && !parentElem) {
              parentElem = this._getParentElement(elem, element);
          }
      });

      return parentElem;
  }

}