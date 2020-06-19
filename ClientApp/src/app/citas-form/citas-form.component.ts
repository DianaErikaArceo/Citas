import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICIta } from '../citas-form/cita';
import { CitasService } from './citas-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas-form',
  templateUrl: './citas-form.component.html',
  styleUrls: ['./citas-form.component.css']
})
export class CitasFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private citasService: CitasService,
    private router: Router) { }

  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: '',
      fecha: '',
      tipoConsulta: ''
    });
  }

  add() {
    let cita: ICIta = Object.assign({}, this.formGroup.value);
    console.table(cita);

    this.citasService.createCita(cita)
      .subscribe(persona => this.onSaveSuccess(),
        error => console.error(error));
  }

  onSaveSuccess() {
    this.router.navigate(["/"]);
  }
}


