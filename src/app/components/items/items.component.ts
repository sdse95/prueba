import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[]= [];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    //this.items = [];
    //this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    })
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.Id != item.Id);
    this.itemService.deleteItem(item).subscribe();
  }

}
