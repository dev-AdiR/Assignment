import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Compound } from 'src/helpers/utils';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      compoundData: Observable<Compound>;
      callback: (formValues: Compound) => void;
    }
  ) {}

  formValidator: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    imageSource: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
    ]),
  });

  ngOnInit(): void {
    this.data.compoundData.subscribe((result: Compound) => {
      this.formValidator.setValue({
        name: result.name,
        imageSource: result.imageSource,
        description: result.description,
      });
    });
  }

  onSubmit() {
    this.data.callback(this.formValidator.value);
  }
}
