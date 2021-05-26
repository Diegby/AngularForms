import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'um-form-datos-personales',
  templateUrl: './form-datos-personales.component.html',
  styleUrls: ['./form-datos-personales.component.css']
})
export class FormDatosPersonalesComponent implements OnInit {
  name = 'John Doe';
  birthDate = new Date;
  min = new Date(1917, 0, 1);
  max = new Date(2020, 4, 31);

  form = this.fb.group({
    "nombre": [{value: '', disabled: true}, Validators.required],
    "primerApellido": [{value: '', disabled: true}, Validators.required],
    "segundoApellido": [{value: '', disabled: true}, Validators.nullValidator],
    "fechaNacimiento": [{value: '', disabled: true}, Validators.nullValidator],
    "nSeguridadSocial": [{value: '', disabled: true}, Validators.nullValidator],
    "dniNieTie": [{value: '', disabled: true}, Validators.nullValidator],
    "telefonoContacto": [{value: ''}, Validators.nullValidator],
    "domicilio": [{value: ''}, Validators.nullValidator],
    "numDomicilio": [{value: ''}, Validators.nullValidator],
    "bloque": [{value: ''}, Validators.nullValidator],
    "escalera": [{value: ''}, Validators.nullValidator],
    "piso": [{value: ''}, Validators.nullValidator],
    "puerta": [{value: ''}, Validators.nullValidator],
    "codPostal": [{value: ''}, Validators.nullValidator],
    "localidad": [{value: ''}, Validators.nullValidator],
    "provincia": [{value: ''}, Validators.nullValidator],
    "nacionalidad": [{value: ''}, Validators.nullValidator],
    "email": [{value: ''}, Validators.nullValidator],
    "regimen": [{value: ''}, Validators.nullValidator],
  });

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }

}
