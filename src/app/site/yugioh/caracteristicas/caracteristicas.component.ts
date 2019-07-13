import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent implements OnInit {
  enigma = {
    default: 'assets/img/Millenium items/Milennium_Puzzle_Icon-512.png',
    colored: 'assets/img/Millenium items/Milennium_Puzzle_Icon_Colored-512.png'
  };
  imgRender = this.enigma.default;
  constructor() { }

  ngOnInit() {
  }

  onMouseOver() {
    this.imgRender = this.enigma.colored;
  }

  onMouseLeave() {
    this.imgRender = this.enigma.default;
  }

}
