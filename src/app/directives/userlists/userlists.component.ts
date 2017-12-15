import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.scss']
})
export class UserlistsComponent implements OnInit {
  @Input() public selecTedLevelId: any;
  constructor() { }

  ngOnInit() {
  }

}
