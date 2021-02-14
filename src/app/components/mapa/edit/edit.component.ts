import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  formu: FormGroup;

  constructor( public dialogRef: MatDialogRef<EditComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               public formBild: FormBuilder) {

                console.log( data);
                this.formu = formBild.group( {
                  'title': data.title,
                  'feature': data.feature
                });
  }

  saveDialog() {

    console.log(this.formu.value);
    this.dialogRef.close(this.formu.value);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
