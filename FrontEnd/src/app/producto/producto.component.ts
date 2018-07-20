import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() imagen: string;
  @Input() texto: string;
  @Input() id: number;
  @Output() selecciono: EventEmitter<string>
    = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
