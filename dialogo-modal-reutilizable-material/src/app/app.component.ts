import { Component, TemplateRef } from '@angular/core';
import { DialogService } from './services/dialog.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogWithTemplateComponent } from './components/dialog-with-template/dialog-with-template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dialogo-modal-reutilizable-material';

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
  });

  // Referencia de dialogo
  private matDialogRef!: MatDialogRef<DialogWithTemplateComponent>;

  // Inyectamos el servicio de dialogo
  constructor(private dialogService: DialogService) {}

  // Método ejecuta el servicio dialgo
  openDialogCustom() {
    this.dialogService
      .openDialogCustom({
        title: 'Install Angular',
        subTitle: 'Develop across all platforms',
        content:
          'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.',
      })
      .afterClosed()
      .subscribe((res) => console.log('Dialog Custom Close', res));
  }

  // Método ejecuta un segundo dialogo
  openDialogCustom2() {
    this.dialogService.openDialogCustom({
      title: 'Install React',
      subTitle: 'Develop across all platforms',
      content:
        'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.',
    });
  }

  openDialogWithTemplate(template: TemplateRef<any>) {
    this.matDialogRef = this.dialogService.openDialogWhitTemplate({
      template,
    });

    this.matDialogRef.afterClosed().subscribe((res) => {
      console.log('Dialog Custom Close', res);
      this.formGroup.reset();
    });
  }

  onSave() {
    console.log(this.formGroup.value);
    this.formGroup.reset();
    this.matDialogRef.close();
  }
}
