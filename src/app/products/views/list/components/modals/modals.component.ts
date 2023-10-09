import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IProduct, TypeForm } from 'src/app/products/interfaces/IProducts';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  @Input() dataForm!: any;
  typeForm: TypeForm = 'details';

  constructor() { }

  ngOnInit(): void {}

}
