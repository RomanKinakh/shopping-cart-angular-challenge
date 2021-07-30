import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PRICE_OPTIONS, ELECTRONIC_TYPE_OPTIONS, ElectronicTypeOption, FiltersEntity, PriceOption } from '../../models';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {

  @Input('filters') set _filters(value) {
    if (value) {
      this.form.setValue(value);
    }
  }
  @Output() filterValueChanged = new EventEmitter<FiltersEntity>();
  form: FormGroup;
  electronicTypeOptions: ElectronicTypeOption[] = ELECTRONIC_TYPE_OPTIONS;
  checkboxPriceOptions: PriceOption[] = PRICE_OPTIONS;
  private searchTimer: number;

  constructor(private formBuilder: FormBuilder) {
    this.formInit();
  }

  ngOnInit(): void {
  }

  private formInit(): void {
    this.form = this.formBuilder.group({
      search: '',
      type: this.electronicTypeOptions[0].value,
      priceFrom500to750: false,
      priceFrom750to1000: false,
      priceFrom1000to1500: false,
    });

  }

  onValueChange(): void {
    this.filterValueChanged.emit({...this.form.value, page: 1});
  }

  onSearch(): void {
    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }
    this.searchTimer = setTimeout(() => {
      this.onValueChange();
    }, 500);
  }

}
