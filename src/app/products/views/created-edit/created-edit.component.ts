import { Component, Input, OnInit } from '@angular/core';
import { IProduct, TypeForm } from '../../interfaces/IProducts';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-created-edit',
  templateUrl: './created-edit.component.html',
  styleUrls: ['./created-edit.component.scss'],
})
export class CreatedEditComponent implements OnInit {
  @Input() dataForm: any;
  typeForm: TypeForm = 'create';
  productId = '';
  title = 'Crear';
  loading = true;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.activatedRoute.data.subscribe(({ mode }) => {
      console.log('mode', mode);
      this.typeForm = mode;
      if (mode === 'edit') {
        this.loading = true;
        this.title = 'Editar';
        this.productId = this.activatedRoute.snapshot.params['id'];
        this.productsService
          .getByProducts(this.productId)
          .subscribe(({ data }) => {
            this.dataForm = data[0];
            this.loading = false;
          });
      }
      this.loading = false;
    });
  }

  saveProduct(data: IProduct) {
    console.log('saveProduct CXREATR', data);
    this.productsService
      .createProducts(data)
      .subscribe(() => this.router.navigate(['/']));
  }

  updateProduct(data: IProduct) {
    this.productsService
      .updateProducts(data, this.productId)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  deleteProduct() {
    this.productsService
    .deleteProducts(this.productId)
    .subscribe(() => this.router.navigate(['/']));
  }
}
