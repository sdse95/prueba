import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[]= [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
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
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.Id != item.Id);
  }

}
