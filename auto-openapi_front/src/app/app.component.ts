import { Component, ViewChild } from '@angular/core';
// import { JsonEditorComponent, JsonEditorOptions } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // public editorOptions: JsonEditorOptions;
  // public data: any;
  // @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  // constructor() { 
  //   this.editorOptions = new JsonEditorOptions()
  //   this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
  //   //this.options.mode = 'code'; //set only one mode
      
  //     this.data = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}
  // }

}
