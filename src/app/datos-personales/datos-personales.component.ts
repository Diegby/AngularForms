import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'um-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  @ViewChild("stepper", { static: true })
  public pasoActual = 0;
  private sumbitted = false;

  public pasos = [
    {
      label: "Paso 1",
      isValid: true,
      validate: false,
    },
    {
      label: "Paso 2",
      isValid: true,
      validate: false,
    },
    {
      label: "Paso 3",
      isValid: true,
      validate: false,
    },
    {
      label: "Paso 4",
      isValid: true,
      validate: false,
    },
    {
      label: "Paso 5",
      isValid: true,
      validate: false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
