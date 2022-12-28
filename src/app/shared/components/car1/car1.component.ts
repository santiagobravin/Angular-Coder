import { Component } from '@angular/core';
import { SemaforoService } from '../../../services/semaforo.service';

@Component({
  selector: 'app-car1',
  templateUrl: './car1.component.html',
  styleUrls: ['./car1.component.scss']
})
export class Car1Component {

  
  constructor(public SemaforoService: SemaforoService){
    this.SemaforoService.ligths.subscribe(console.log)
  }
}
