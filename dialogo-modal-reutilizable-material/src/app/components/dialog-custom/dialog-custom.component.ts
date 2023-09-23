import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCustomData } from 'src/app/models/dialog-custom-data.model';

@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrls: ['./dialog-custom.component.css'],
})
export class DialogCustomComponent {
  // Inyectamos el modelo de data
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogCustomData) {}
}
