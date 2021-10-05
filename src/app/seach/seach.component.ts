import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit{
  sortingLists = ['name', 'height', 'weight'];
  data: any = {
    sort: '',
    search: ''
  };
  @Output() opt: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onChangeEvent(): void {
    this.opt.emit(this.data);
  }

}
