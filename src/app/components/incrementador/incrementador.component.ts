import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit() {
    this.btnClass = 'btn ${this.btnClass}';
  }
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = "btn-primary";

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.valorSalida.emit(this.progreso);
    return this.progreso = this.progreso + valor;
  }
  onChange(valor: number) {
    this.valorSalida.emit(valor);
  }
}
