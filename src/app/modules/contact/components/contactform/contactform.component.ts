import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
})
export class ContactformComponent implements OnInit {
  formularioContacto: FormGroup;

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      email: ['', [Validators.email, Validators.required]],
      message: ['', [Validators.required]],
      terms: [],
    });
  }

  ngOnInit(): void {}

  //Comprobar los errores del form
  haserrors(controlName: string, errorType: string) {
    return (
      this.formularioContacto.get(controlName)?.hasError(errorType) &&
      this.formularioContacto.get(controlName)?.touched
    );
  }

  //Envio del formulario
  enviar() {
    this.formularioContacto.reset();
    //console.log('enviado: ', this.formularioContacto);
  }
}
