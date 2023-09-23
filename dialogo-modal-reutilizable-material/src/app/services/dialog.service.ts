import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCustomComponent } from '../components/dialog-custom/dialog-custom.component';
import { DialogCustomData } from '../models/dialog-custom-data.model';
import { DialogWithTemplateData } from '../models/dialog-with-template-data.model';
import { DialogWithTemplateComponent } from '../components/dialog-with-template/dialog-with-template.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  // Inyectamos el dialogo
  constructor(private matDialog: MatDialog) {}

  // Método para abrir dialogo y pasamos la data de acuerdo al modelo
  openDialogCustom(data: DialogCustomData) {
    // pasamos dentro de la config el parametro data y return para controlar cierre
    return this.matDialog.open(DialogCustomComponent, { data });
  }

  // Método para dialogos escalables
  openDialogWhitTemplate(data: DialogWithTemplateData) {
    return this.matDialog.open(DialogWithTemplateComponent, { data });
  }
}
