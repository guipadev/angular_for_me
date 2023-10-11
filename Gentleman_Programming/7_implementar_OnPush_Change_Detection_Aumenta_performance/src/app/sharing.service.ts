import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private sharingSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  updateSharingData(data: any) {
    this.sharingSubject.next(data);
  }

  get sharingObservable(): Observable<any> {
    return this.sharingSubject.asObservable();
  }
}
