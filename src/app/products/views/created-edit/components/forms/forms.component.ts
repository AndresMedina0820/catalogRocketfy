import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct, TypeForm } from '../../../../interfaces/IProducts';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  @Input() dataForm: any;
  @Input() typeForm: TypeForm = 'create';
  @Input() productId!: string | undefined;
  @Output() save = new EventEmitter<IProduct>();
  @Output() edit = new EventEmitter<IProduct>();
  @Output() delete = new EventEmitter<boolean>();

  form!: FormGroup;
  imageDefault = 'assets/images/product_default.png';
  tagInput = '';
  tagsList: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      image: [''],
      tags: [''],
      description: [''],
      sku: ['', [Validators.required]],
      stock: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnChanges(): void {
    console.log(this.dataForm)
    console.log(this.typeForm)
    if (
      (this.typeForm === 'edit' || this.typeForm === 'details') &&
      this.dataForm
    ) {
      console.log('ENEEEEETREEEEe')
      this.setForm(this.dataForm);
    }
  }

  setForm(data: IProduct) {
    this.form.patchValue({
      name: data.name,
      price: data.price,
      image: data.image,
      tags: '',
      description: data.description,
      sku: data.sku,
      stock: data.stock,
    });
    this.tagsList = data.tags;
  }

  validationControl(input: string) {
    const control = this.form.controls[input];

    if (control.hasError('required') && control.touched) {
      return true;
    }

    return false;
  }

  handleImageError(event: any) {
    event.target.src = this.imageDefault;
  }

  setTagsFormControl() {
    this.form.controls['tags'].setValue(this.tagsList);
  }

  saveProduct() {
    console.log('saveProduct');
    this.setTagsFormControl();
    this.save.emit(this.form.value);
  }

  updateProduct() {
    this.setTagsFormControl();
    this.edit.emit(this.form.value);
  }

  deleteProduct() {
    this.delete.emit(true);
  }
}
