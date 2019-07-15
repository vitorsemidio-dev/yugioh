import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menuList = [
    { nome: 'Yugioh', rota: 'yugioh' },
    { nome: 'Yugioh GX', rota: '' },
    { nome: 'Yugioh 5Ds', rota: '' },
    { nome: 'Yugioh Zexal', rota: '' },
    { nome: 'Yugioh Arc-v', rota: '' },
    { nome: 'Yugioh VRAINS', rota: '' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
