import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectService } from './shared/services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSpinner$: Observable<boolean>;

  constructor(private subjectService: SubjectService) {
    this.showSpinner$ = this.subjectService.getShowSpinnerValue();
  }

}
