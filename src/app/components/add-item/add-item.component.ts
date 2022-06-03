import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/Models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  Id:number=0;
  Descripcion:string='';
  Precio:number=0;
  Cantidad:number=0;
  CategoriaID:string='';

  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.Id= this.Id;
    item.Descripcion = this.Descripcion;
    item.Precio = this.Precio;
    item.Cantidad = this.Cantidad;
    item.CategoriaID = this.CategoriaID;

    //this.itemService.addItem(item);
    this.itemService.addItem(item).subscribe(i => {
    this.router.navigate(['/'])
    });
  }

}
