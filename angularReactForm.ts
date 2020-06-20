// We provided some simple Angular template code. Modify the app-dynamic-form template so that when you change one of the properties in the person object in the form, it is reflected in the json object below it. Your final output should look something like this.

// Submit your code once it is complete and our system will validate your output.
// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: `
  <h1>Angular Reactive Form</h1>
  <form [formGroup]='form' style="display: flex; flex-direction: column; width: 25%">
    <input type='text' value={{form.value.firstname}} formControlName='firstname'>
    <input type='number' value={{form.value.age}} formControlName='age'/>
    <input type='text' value={{form.value.lastname}} formControlName='lastname'/>
    <input type='text' value={{form.value.twitter}} formControlName='twitter'/>
  </form>
  <pre>{{form.value| json}}</pre>
  `
  styles: []
})

export class MainAppComponent implements OnInit {
  form: FormGroup;
  person = {
    firstname: 'Coder...hello',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}