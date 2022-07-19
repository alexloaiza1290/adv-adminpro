import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor() {
    const obs$ = new Observable(observe => {
      let i = -1;
      const intervalo = setInterval(() => {
        i++;
        observe.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observe.complete();
        }
        if (i === 2) {
          observe.error('I llego al valor de 2');
        }
      }, 1000)
    });
    obs$.subscribe(
      valor => console.log('Subs :', valor),
      error => console.warn('Error :',error),
      ()=> console.info('Observable terminado')
    )
  };

  ngOnInit(): void {
  }

}
