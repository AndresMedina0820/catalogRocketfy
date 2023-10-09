import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, IResponse, QueryParams } from '../interfaces/IProducts';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = `${environment.baseApi}/products`;

  constructor(private http: HttpClient) {}

  getProducts(query: QueryParams) {
    const { limit, page } = query;
    const skip = limit * (page - 1);

    const params = new HttpParams()
      .set('limit', limit.toString())
      .set('skip', skip.toString())
      .set('query', JSON.stringify(query.query));

    return this.http.get<IResponse>(this.url, {
      params,
    });
  }

  getByProducts(id: string){
    return this.http.get<IResponse>(`${this.url}/${id}`);
  }

  createProducts(data: IProduct){
    console.log(data);
    return this.http.post<IProduct>(this.url, data);
  }

  updateProducts(data: Partial<IProduct>, id: string) {
    return this.http.patch<IProduct>(`${this.url}/${id}`, data);
  }

  deleteProducts(id: string) {
    console.log('deleteProducts', id);
    return this.http.delete<IProduct>(`${this.url}/${id}`);
  }
}
