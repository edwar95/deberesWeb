import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @Input() imagen: string;
  @Input() texto: string;
  @Input() btnMostrar: boolean;
  @Output() selecciono: EventEmitter<string>
    = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
