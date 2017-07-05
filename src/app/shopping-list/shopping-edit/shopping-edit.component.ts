import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from "app/shared/Ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('ingInputType')ingInputTypeRef:ElementRef;
@ViewChild('ingAmountType') ingAmountTypeRef:ElementRef;
@Output() ingAdded = new EventEmitter<Ingredient>();
@Output() ingDeleted = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
addIngName(){
  const ingName = this.ingInputTypeRef.nativeElement.value;
  const ingAmount = this.ingAmountTypeRef.nativeElement.value;
  const newIng = new Ingredient(ingName,ingAmount);
  this.ingAdded.emit(newIng);
  //console.log(ingName)
}
deleteIngFn(){
  console.log("ïn delete ing ")
  this.ingDeleted.emit()
}
}
