import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { ProductsComponent } from './products.component';
import { CreatedEditComponent } from './views/created-edit/created-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'create',
        component: CreatedEditComponent,
        data: { mode: 'create' }
      },
      {
        path: 'edit/:id',
        component: CreatedEditComponent,
        data: { mode: 'edit' }
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
