import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../services/config.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  openapi = "Wait";

  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit() {
  }


  updateEditor(): void {
    
    this.configService.getOpenapi()
     .subscribe((res) => {
       console.log("-------res.data------");
       console.log(res);
       this.openapi = res.data;
       console.log("Success to get");
     })
  }

}
