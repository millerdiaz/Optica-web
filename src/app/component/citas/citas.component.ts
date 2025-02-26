import { Component, inject } from '@angular/core';
import { CitasService } from '../../services/citas/citas.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {
  citasService = inject(CitasService);
  citas!:any;
  formCitas!: FormGroup;
  opcionesSede = ['chapinero', 'usaquen', 'portal80']



  constructor(private fb: FormBuilder, private route:Router){
    this.formCitas = this.fb.group({
      nombres: ['',[Validators.required, Validators.minLength(3)]],
      apellidos: ['',[Validators.required, Validators.minLength(3)]],
      contacto: ['',[Validators.required, Validators.minLength(10)]],
      email:['',[Validators.required, Validators.email]],
      sede: ['', [Validators.required, sedeValidator(this.opcionesSede)]],
      fecha: ['',[Validators.required]],
      horario: ['',[Validators.required, Validators.minLength(3)]],
      motivoConsulta: ['',[Validators.required, Validators.minLength(3)]],
    })
  }

  addCita(){
    if (this.formCitas.valid) {
       this.citasService.addCita(this.formCitas.value).subscribe({
         next:(resApi:any)=>{

           Swal.fire({
             icon:"success",
             title:"creado",
             text:"La cita ha sido agendada"
           })
           this.formCitas.reset()
         },
           error:(error:any)=>{
             Swal.fire({
             icon:"error",
             title:"No es posible agendar",
             text:"Ya existe una cita con este numero de contacto"
             })
           }

       })
    }else{
       Swal.fire({
         icon:"error",
         title:"Form invalido",
         text:"Diligencie correctamente los campos"
       })
    }
   }




}
export function sedeValidator(opcionesValidas: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valor = control.value;
    if (opcionesValidas.includes(valor)) {
      return null; // El valor es válido
    } else {
      return { sedeInvalida: true }; // El valor no es válido
    }
  };
}



