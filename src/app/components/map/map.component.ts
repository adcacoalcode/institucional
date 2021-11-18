import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  local: string = 'CENTRO';
  cidade: string = 'CACOAL';

  constructor() { }

  ngOnInit(): void {
  }

  localChange(local: string) {
    this.local = local;
  }
  cidadeChange(local: string) {
    this.cidade = local;
  }

}
