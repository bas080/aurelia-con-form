import {bindable, noView, computedFrom} from 'aurelia-framework';

@noView
export class FormError {

  @bindable
  errors;

  @computedFrom('errors')
  get hasErrors() {
    return Boolean(this.errors && this.errors.some(error => !error.valid));
  }

  @computedFrom('errors')
  get messages() {
    return this.hasErrors ? this.errors.map(error => error.message) : [];
  }

}
