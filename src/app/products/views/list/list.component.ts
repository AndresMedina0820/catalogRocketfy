import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct, QueryParams } from '../../interfaces/IProducts';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  productsList: IProduct[] = [];
  productId!: string;
  queryObj: QueryParams = {
    page: 1,
    limit: 5,
    query: {}
  }
  totalItems = 0;
  pageNumbers: number[] = [];
  loading = false;
  productSelected!: IProduct;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.productsService.getProducts(this.queryObj).subscribe((data) => {
      this.productsList = data.data;
      this.totalItems = data.total;
      this.generatePageNumbers();
      this.loading = false;
    });
  }

  createProduct() {
    this.router.navigate(['create']);
  }

  editProduct(id: string) {
    this.router.navigate(['edit', id]);
  }

  searchProducts(keyword: string) {
    this.queryObj.query = {
      name: keyword
    }
    this.getProducts();
  }

  generatePageNumbers() {
    const totalpages = Math.ceil(this.totalItems / this.queryObj.limit);
    this.pageNumbers = Array.from({ length: totalpages }, (_, i) => i + 1);
  }

  nextPage() {
    this.queryObj.page++;
    this.getProducts();
  }

  prevPage() {
    if (this.queryObj.page > 1) {
      this.queryObj.page--;
      this.getProducts();
    }
  }

  selectPage(page: number) {
    this.queryObj.page = page;
    this.getProducts();
  }

  detailsProduct(id: string) {
    console.log('detailsProduct', id);
    const filterProducts = this.productsList.filter((product) => product._id === id);
    this.productSelected = filterProducts[0];
    const bs = new Modal('#detailsModal');
    bs.show();
  }
}
