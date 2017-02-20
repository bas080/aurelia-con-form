import {inject}        from 'aurelia-framework';
import {EntityManager} from 'aurelia-orm';

@inject(EntityManager)
export class Choices {

  constructor(entityManager) {
    this.entityManager = entityManager;
  }

  activate(group) {
    this.group = group;

    if (group.input.resource) {
      return this.entityManager.getRepository(group.input.resource)
        .find()
        .then(records => {
          group.input.options = records.map(record => {
            return {
              name : record.name,
              value: record.id
            };
          });
        });
    }
  }

}
