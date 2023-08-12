import { Component } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {

  public openList = 'educacion';

  cambioOpenLIst(nameList: string): void {
    this.openList = nameList;
  }
}
