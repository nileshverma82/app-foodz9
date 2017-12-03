import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { Image } from '../../core/models/image';
import { DataService } from '../../core/data.service';
import { Fooditem } from '../../core/models/fooditem';

@Component({
  selector: 'app-fooditem-new',
  templateUrl: './fooditem-new.component.html',
  styleUrls: ['./fooditem-new.component.scss']
})
export class FooditemNewComponent implements OnInit {
  URL: string;

  private selectedFiles: File;
  private snackBar: MatSnackBar;
  private selectedFileUpload: Image;
  newFoodItemForm: FormGroup;
  private foodItemObj = new Fooditem('');



  constructor(private _formBuilder: FormBuilder,
              private dataService$: DataService)
              {
                 this.buildNewItemForm();
              }

  // Function to upload the Image
  uploadSingleFile(event: any) {
    event.preventDefault();
    this.selectedFiles = event.target.files[0];

    // Checking if the selected file is an image.
    if (!this.selectedFiles.type.match('image.*')) {
      this.snackBar.open('You can only share images', null, {
        duration: 10000
      });
      return;
    }
    console.log('filename-', this.selectedFiles);

    const file = this.selectedFiles;
    this.selectedFileUpload = new Image(file);
    this.dataService$.saveToFirebaseStorage(this.selectedFileUpload);
    // this.URL = this.dataService$.imageURL;
    // console.log('file URL -', this.URL);

  }

  buildNewItemForm() {
    this.newFoodItemForm = this._formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: [''],
      isnonveg: [{ value: '', disabled: false }, Validators.required],
      cuisine: '',
      price: ['', Validators.required], // number ( no zeor / minus)
      serving: ['', Validators.required],
      imageurl: ['', Validators.required]
    });

  }
  onAddFoodItemFormSubmit(inputFormData) {
    this.foodItemObj.title = inputFormData.value.title;
    this.foodItemObj.description = inputFormData.description;
    this.foodItemObj.isnonveg = inputFormData.value.isnonveg;
    this.foodItemObj.category = inputFormData.value.category;
    this.foodItemObj.price = inputFormData.value.price;
    this.foodItemObj.serving = inputFormData.value.serving;
    this.foodItemObj.cuisine = inputFormData.value.cuisine;
    this.foodItemObj.imageurl1 = this.URL;

    this.dataService$.createFooditem(this.foodItemObj);
    this.newFoodItemForm.reset();
  }

  ngOnInit() {
    this.dataService$.url$.subscribe(url => {
      this.URL = url;
  });
  }
}
