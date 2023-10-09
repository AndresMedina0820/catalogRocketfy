import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ListComponent } from './views/list/list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsComponent } from './views/created-edit/components/forms/forms.component';
import { ModalsComponent } from './views/list/components/modals/modals.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './views/list/components/filters/filters.component';
import { LoadingComponent } from './utils/loading/loading.component';
import { TagsInputComponent } from './views/created-edit/components/tags-input/tags-input.component';
import { DatagridComponent } from './views/list/components/datagrid/datagrid.component';
import { CreatedEditComponent } from './views/created-edit/created-edit.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ListComponent,
    FormsComponent,
    ModalsComponent,
    FiltersComponent,
    LoadingComponent,
    TagsInputComponent,
    DatagridComponent,
    CreatedEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
