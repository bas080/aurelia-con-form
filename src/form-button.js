import {bindable, noView, customElement} from 'aurelia-framework';

@noView
@customElement('form-button')
export class FormButton {

  @bindable type;
  @bindable action;
  @bindable icon;
  @bindable text

}
