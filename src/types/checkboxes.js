import {Choices} from 'component/core/form/types/select';
import {inject} from 'aurelia-framework';
import {EntityManager} from 'aurelia-orm';

@inject(EntityManager)
export class CheckBoxes {

  constructor(entityManager) {
    this.entityManager = entityManager;
  }

  activate = Choices.prototype.activate;
}
