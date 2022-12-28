import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SemaforoService {
  
  ligths = new Subject<string>();
  public lastValue : string | null = 'Verde'


  constructor() { 
    
    interval(1000).subscribe(() => this.lastValue === 'Verde' ? this.ligths.next('Rojo') : this.ligths.next('Verde'))

    this.ligths.subscribe((valor) => console.log(this.lastValue = valor))
    }
  }