import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Articulo} from '../articulo';

@Component({
  selector: 'app-dialogoarticulo',
  templateUrl: './dialogoarticulo.component.html',
  styleUrls: ['./dialogoarticulo.component.css']
})

export class DialogoarticuloComponent implements OnInit {

  // El constructor recibe un servicio de tipo 'MatDialogRef' y se inyecto los datos que se mostrarán inicialmente
  constructor(
    public dialogRef: MatDialogRef<DialogoarticuloComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Articulo) {}

  ngOnInit() {
  }

  // El método 'cancelar' procede a cerrar el diálogo:
  cancelar() {
    this.dialogRef.close();
  }

}
