import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { Brand } from '../shared/models/brand';
import { Category } from '../shared/models/category';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})

export class ShopService {
  baseUrl = 'https:///localhost:7239/api/';
  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if(shopParams.brandId > 0) params = params.append('brandId',shopParams.brandId);
    if(shopParams.categoryId > 0) params = params.append('categoryId',shopParams.categoryId);
    params = params.append('sort',shopParams.sort);
    params = params.append('pageSize',shopParams.pageSize);
    params = params.append('pageIndex',shopParams.pageNumber);
    if(shopParams.search ) params = params.append('search',shopParams.search);

    
    return this.http.get<Pagination<Product[]>>(this.baseUrl+'products',{params});
  }

  getBrands(){
    return this.http.get<Brand[]>(this.baseUrl + 'brands');
  }

  getCategories() {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }
}
