import { Component, OnInit } from '@angular/core';
import { ICIta } from '../citas-form/cita';
import { CitasService } from '../citas-form/citas-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public citas: ICIta[];

  constructor(private citasService: CitasService) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.citasService.getCitas()
      .subscribe(personasDesdeWS => this.citas = personasDesdeWS,
        error => console.error(error));
  }
}

