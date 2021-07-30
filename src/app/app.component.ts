import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectService } from './shared/services/subject.service';
import { CartFacade } from './state/cart.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSpinner$: Observable<boolean>;

  constructor(private subjectService: SubjectService, private cartFacade: CartFacade) {
    this.cartFacade.allItems$.subscribe((res) => {
      console.log(res);
    })
    this.showSpinner$ = this.subjectService.getShowSpinnerValue();
  }

}
