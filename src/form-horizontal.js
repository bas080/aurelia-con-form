import {bindable, children, customElement} from 'aurelia-framework';

@customElement('form-horizontal')
export class FormHorizontal {

  @bindable
  @children('form-group')
  groups

  // todo
  visible(group) {
    return true;
  }

  /**
   * @param {FormInput|FormGroup} input
   *
   * @returns {String}
   */
  view(input) {
    // might be beter to move this logic to aurelia-orm's config
    if (input.type === 'association-select') {
      input.criteria = Object.assign(input.criteria || {}, {
        limit: 999999
      });
    }

    return `component/core/form/types/${this.typeAlias(input.type)}.html`;
  }

  viewModel(input) {
    return `component/core/form/types/${this.typeAlias(input.type)}`;
  }

  aliases = {
    string: 'input',
    email: 'input',
    text: 'input',
    password: 'input'
  };

  haveViewModels = {
    select: true,
    checkboxes: true
  };

  hasViewModel(input) {
    if (!input) {
      return false;
    }

    return Boolean(this.haveViewModels[input.type]) || false;
  }

  typeAlias(type) {
    return this.aliases[type] || type;
  }

}
