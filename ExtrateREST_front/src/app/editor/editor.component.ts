import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../services/config.service';
// import { JsonEditorComponent, JsonEditorOptions } from '../component/jsoneditor/jsoneditor.component';
// import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor/jsoneditor/jsoneditor.component';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  openapi = "";
  prop = false;
  public editorOptions: JsonEditorOptions;
  public data: any;

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(
    private configService: ConfigService,
  ) {
    this.editorOptions = new JsonEditorOptions();

  }

  ngOnInit() {
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes

    this.configService.getOpenapi()
      .subscribe((res) => {
        console.log("-------interval 10s to get openapis------");
        // console.log(res);
        this.openapi = res.data;
      })
  }


  download(): void {
    // console.log(this.openapi);
    // this.openapi = JSON.stringify(this.editor.get(), null, 2);

    
    // Create a blob of the data
    var fileToSave = new Blob([JSON.stringify(this.editor.get(), null, 2)], {
      type: 'application/json'
    });

    // Save the file
    FileSaver.saveAs(fileToSave, 'OpenAPI');
  }


  updateEditor(): void {

    this.configService.getNewValue()
      .subscribe((res) => {
        console.log("-------res.data------");
        console.log(res);
        this.openapi = res.data;
        console.log("Success to get");
      })
  }


}
