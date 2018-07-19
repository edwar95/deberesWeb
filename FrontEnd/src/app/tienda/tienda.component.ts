import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  @Input() atribe_1: string;
  @Input() atribe_2: string;
  @Input() atribe_3: string;
  @Input() image:string;
  @Output() selecciono: EventEmitter<string>
    = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

}
