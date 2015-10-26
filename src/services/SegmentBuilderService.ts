
const enum GroupRelation { And, Or, None }


export class SbElement {
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
  draggingElement:SbElement

  constructor() {
      this.rootGroup = new SbGroup(0, GroupRelation.And, [
            new SbCriterion(0, 'Mon Voisin Totoro'),
            new SbCriterion(1, 'Tueurs nés'),
            /*new SbGroup(2, GroupRelation.None, [
                  new SbGroup(0, GroupRelation.Or, [
                        new SbSegment(0, 'Segment films espagnols'),
                        new SbCriterion(1, 'Spirit')
                  ]),
                  new SbCriterion(1, 'Le fils de l\'Homme'),
                  new SbSegment(2, 'Segment films d\'animations'),
            ]),*/
            new SbSegment(3, 'Segment films anciens'),
            /*new SbGroup(4, GroupRelation.None, [
                  new SbGroup(0, GroupRelation.And, [
                        new SbSegment(0, 'Segment films muets')
                  ]),
                  new SbCriterion(1, 'Mulan')
            ])*/
      ]);
  }

  removeElement(parentGroup:SbGroup, elem:SbElement):SbElement {
    let index = parentGroup.children.indexOf(elem);
    if (index !== -1) {
        return parentGroup.children.splice(index, 1)[0];
    }
  }

  addElement(group:SbGroup, type:string) {
      //group.children.sort((a, b) => a.position - b.position);
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
      console.table(group.children);

      group.children.push(elem);
      //group.children.sort((a, b) => a.position - b.position);
      console.table(group.children);
  }

  moveElement(elemToMove:SbElement, groupDestination:SbGroup, index:number) {
      let elemToMoveParentGroup: SbGroup = this._getParentElement(this.rootGroup, elemToMove);

      if(elemToMoveParentGroup === groupDestination) {
          console.log('move inside same group');


      }
      else {
          // si on deplace un groupe dans un autre groupe (que son actuel)
          // on doit vérifier que le groupe de destination n'est pas dans le groupe déplacé:
          if (elemToMove instanceof SbGroup) {
              // on remonte du groupe de destination au groupe racine en vérifiant que l'on
              // ne tombe pas sur le groupe que l'on déplace
              let parentGroup: SbGroup = groupDestination;
              while (parentGroup != this.rootGroup) {
                if(parentGroup === elemToMove) {
                    throw Error('Try to move a group inside itself.. Weird!');
                }
                parentGroup = this._getParentElement(this.rootGroup, parentGroup);
              }
          }

          let elem: SbElement = this.removeElement(elemToMoveParentGroup, elemToMove);

          switch(true) {
              case (index == 0):
                  console.log('ajout au debut');
                  break;
              case (index == groupDestination.children.length):
                  console.log('ajout au debut');
                  break;

          }

          groupDestination.children.push(elem);
      }
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