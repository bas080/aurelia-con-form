import {bindable, child, customElement, children} from 'aurelia-framework';

@customElement('form-group')
export class FormGroup {

  @bindable acl = {};

  @bindable type;
  @bindable model = {};

  @child('form-error') error;
  @child('form-label') label;
  @child('form-input') input;
  @child('form-description') description;
  @children('form-button') buttons;
}
