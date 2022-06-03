import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Models/item';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    url:string = 'http://localhost:3000/items';
    httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }


    items:Item[] = [
      
        {
          Id:0,
          Descripcion: 'Descripcion de Item 0',
          Precio: 10,
          Cantidad: 1,
          CategoriaID: 'Categoria de ID 0'
        },
        {
          Id:1,
          Descripcion: 'Descripcion de Item 1',
          Precio: 13,
          Cantidad: 4,
          CategoriaID: 'Categoria de ID 1'
        }
        ];

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
      return this.http.get<Item[]>(this.url);
  }
  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.Id);
  }
}
