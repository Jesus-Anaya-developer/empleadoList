import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {

  listEmpleados: Empleado[] = [
    {
      legajo: 1,
      nombre: 'nombre 1',
      apellido: 'apellido 1',
      sexo: 'Masculino',
      salario: 1000
    },
    {
      legajo: 2,
      nombre: 'nombre 2',
      apellido: 'apellido 2',
      sexo: 'Masculino',
      salario: 1000
    },
    {
      legajo: 3,
      nombre: 'nombre 3',
      apellido: 'apellido 3',
      sexo: 'Masculino',
      salario: 1000
    },
    {
      legajo: 4,
      nombre: 'nombre 4',
      apellido: 'apellido 4',
      sexo: 'Femenino',
      salario: 1000
    },
    {
      legajo: 5,
      nombre: 'nombre 5',
      apellido: 'apellido 5',
      sexo: 'Femenino',
      salario: 1000
    },
    {
      legajo: 6,
      nombre: 'nombre 6',
      apellido: 'apellido 6',
      sexo: 'Femenino',
      salario: 1000
    },
    {
      legajo: 7,
      nombre: 'nombre 7',
      apellido: 'apellido 7',
      sexo: 'Femenino',
      salario: 1000
    }
  ];

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerFemenino(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerMasculino(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

}
