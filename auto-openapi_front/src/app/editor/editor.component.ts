import { Component, OnInit, ViewChild } from '@angular/core';
import {ConfigService} from '../services/config.service';
import { JsonEditorComponent, JsonEditorOptions } from '../component/jsoneditor/jsoneditor.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  openapi = "{my: 'json'}";
  jsonObj = {a:1, 'b':'foo', c:[false,null, {d:{e:1.3e5}}]};
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(
    private configService: ConfigService,
  ) { 

    this.editorOptions = new JsonEditorOptions()
  }

  ngOnInit() {
     this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    // //this.options.mode = 'code'; //set only one mode
    this.data = {"products":[{"name":"car","product":[{"name":"honda","model":[{"id":"civic","name":"civic"},{"id":"accord","name":"accord"},{"id":"crv","name":"crv"},{"id":"pilot","name":"pilot"},{"id":"odyssey","name":"odyssey"}]}]}]}
    
    // this.data = this.openapi;
  }


  updateEditor(): void {
    
    this.configService.getOpenapi()
     .subscribe((res) => {
       console.log("-------res.data------");
       console.log(res);
       this.openapi = res.data;
       this.data = res.data;
       console.log("Success to get");
     })
  }


}
