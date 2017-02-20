import {computedFrom, customElement, bindable} from 'aurelia-framework';
import {capitalize} from 'utils/capitalize';

@customElement('form-entity')
export class FormEntity {

  @bindable entity;
  @bindable horizontal = true;
  @bindable formGroupVM = [];

  change() {
    this.entity.validate().then(errors => {
      this.errors = errors;
    });
  }

  attached() {
    // this.groups.forEach(group => {
    //   const viewModel = this.formGroupVM[0].input;

    //   Object.assign(viewModel.input, group.input);
    //   Object.assign(viewModel.label, group.label);
    // });
  }

  @computedFrom('entity')
  get groups() {
    const metadata      = this.entity.getMeta();
    const types         = metadata.fetch('types') || {};
    const associations  = metadata.fetch('associations') || {};
    const data          = metadata.fetch('data') || {};

    return Object.keys(types).concat(Object.keys(associations))
      .map(key => {
        const meta = data[key];
        const group = {
          key  : key,
          label: {
            name: capitalize(key)
          },
          input: {},
        };

        // is an association
        if (associations[key]) {
          group.input.resource = associations[key].entity;
          group.acl = {[associations[key].entity]: 'find'};
          group.input.type = 'association-select';
          group.input.selectType = associations[key].type === 'collection'
            ? 'checkboxes'
            : 'select'
        } else {
          group.acl = {};
          group.input.type = types[key] || 'text';
        }

        Object.assign(group, data[key].input);

        if (meta.label) {
          group.label = Object.assign(group.label, {
            name: meta.label
          });
        }

        if (meta.description) {
          group.description = Object.assign(group.description || {}, {
            description: meta.description
          });
        }

        if (meta.input) {
          Object.assign(group.input, meta.input);
        }

        return group;
      });
  }

  extendInput(viewModel, extender) {
    Object.assign(viewModel, extender);
  }

  labelName(group) {
    return capitalize(group.key);
  }

}
