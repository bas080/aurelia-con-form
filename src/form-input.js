import {children, bindingMode, customElement, bindable} from 'aurelia-framework';

@customElement('form-input')
export class FormInput {

  @children('form-button')
  buttons;

  @bindable
  @children('form-option')
  options;

  @bindable({defaultBindingMode: bindingMode.twoWay}) value;
  @bindable type = 'text';
  @bindable placeholder;
  @bindable text = '';
  @bindable disabled = false;

  // button
  @bindable action;
  @bindable icon;
  @bindable color;

  // association-select bindables
  @bindable resource;
  @bindable criteria;
  @bindable multiple;
  @bindable selectType;
  @bindable association;
  @bindable manyAssociation;
  @bindable selectablePlaceholder;

  // association-add-and-select
  @bindable customForm;
  @bindable model;
  @bindable property;

  // auto-complete
  @bindable items

}
