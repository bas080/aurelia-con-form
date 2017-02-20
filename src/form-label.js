import {bindable, noView, customElement} from 'aurelia-framework';

@customElement('form-label')
@noView
export class FormLabel {

  @bindable name

}
