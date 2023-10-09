import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/products/interfaces/IProducts';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent {
  @Input() productsList: IProduct[] = [];
  @Output() edit = new EventEmitter<string>();
  @Output() details = new EventEmitter<string>();
  imageDefault = 'assets/images/product_default.png';
  emptyState = 'assets/images/empty-box.png';

  constructor() { }

  editProduct(id: string) {
    this.edit.next(id);
  }

  detailProduct(id: string) {
    this.details.next(id);
  }

  handleImageError(event: any) {
    event.target.src = this.imageDefault;
  }

}
