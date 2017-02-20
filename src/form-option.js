import {bindable, noView, customElement} from 'aurelia-framework';

@noView
@customElement('form-option')
export class FormOption {

  @bindable name;
  @bindable value;

  get name() {
    return this.name || this.value;
  }

}
