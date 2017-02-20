import {customElement, noView, bindable} from 'aurelia-framework';

@noView
@customElement('form-description')
export class FormDescription {
  @bindable description
}
