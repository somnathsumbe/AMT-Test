import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empcount',
  templateUrl: './empcount.component.html',
  styleUrls: ['./empcount.component.css']
})
export class EmpcountComponent implements OnInit {

  @Input() all:number;
  @Input() male:number;
  @Input() female:number;

  selectrediobtnvalue:string="All";
  @Output()selectrediontnslectionchanges:EventEmitter<string>=new EventEmitter<string>();
  onrediontnslectionchanges(){
    this.selectrediontnslectionchanges.emit(this.selectrediobtnvalue);
    console.log(this.selectrediobtnvalue);
  }

  constructor() { }

  ngOnInit() {
  }

}
