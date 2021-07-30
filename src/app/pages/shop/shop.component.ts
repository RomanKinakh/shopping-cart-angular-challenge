import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { distinctUntilChanged, finalize, takeUntil } from 'rxjs/operators';
import { SubjectService } from '../../shared/services/subject.service';
import { FiltersEntity, FiltersModel } from './models';
import { ProductEntity } from '../../shared/models/product.model';
import { ShopService } from './services';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit, OnDestroy {
  filters: FiltersEntity;
  products: ProductEntity[] = [];
  page = 1;
  total = 0;
  private destroy$ = new Subject<null>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((queryParams) => {
        this.filters = new FiltersModel(queryParams);
        if (queryParams.page) {
          this.page = +queryParams.page;
        }

        this.getProducts({ ...this.filters, page: this.page });
      });
  }

  onFilterValueChange(value: FiltersEntity): void {
    this.router.navigate([], {
      queryParams: value,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  onPageChange(page: number): void {
    this.onFilterValueChange({ ...this.filters, page });
  }

  private getProducts(params: FiltersEntity): void {
    this.subjectService.setShowSpinnerValue(true);
    this.shopService
      .getData(params)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.subjectService.setShowSpinnerValue(false))
      )
      .subscribe(({ data, total, page }) => {
        this.products = data;
        this.total = total;
        this.page = page;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
