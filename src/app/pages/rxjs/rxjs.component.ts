import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, take, Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {
  public valorUnsubcribe: Unsubscribable;
  constructor() {

    /* this.retornaObservable().pipe(retry(2)).subscribe(
       valor => console.log('Subs :', valor),
       error => console.warn('Error :', error),
       () => console.info('Observable terminado')
     )*/
    this.valorUnsubcribe = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.valorUnsubcribe.unsubscribe();
  }
  ;
  retornaIntervalo() {
    return interval(500).pipe(
      take(10), map(valor => valor + 1),
      filter(valor => (valor % 2 === 0 ? true : false))
    );
  }
  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>(observe => {
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
  }

  ngOnInit(): void {
  }

}
