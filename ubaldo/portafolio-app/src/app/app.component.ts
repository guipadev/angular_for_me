import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio-app';
  public listdeVideos:Array<any> = []

  ngOnInit():void {
    this.listdeVideos = [
      {
        title:'Video 1',
        subtitle:'Subtitle Video 1',
        img: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-2-e1549600987975.jpg'
      },
      {
        title:'Video 2',
        subtitle:'Subtitle Video 2',
        img: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-2-e1549600987975.jpg'
      },
      {
        title:'Video 3',
        subtitle:'Subtitle Video 3',
        img: 'https://concepto.de/wp-content/uploads/2015/03/paisaje-2-e1549600987975.jpg'
      }
    ]
  }
}
