import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private showSpinner$ = new Subject<boolean>();

  getShowSpinnerValue(): Observable<boolean> {
    return this.showSpinner$.asObservable();
  }

  setShowSpinnerValue(value: boolean) {
    this.showSpinner$.next(value);
  }

  constructor() { }
}
