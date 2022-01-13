import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  recordForm: FormGroup = this.fb.group({
    project_owner: [null, Validators.required],
    budget: [null, Validators.required],
    status: [null, Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.recordForm.patchValue(this.data.rowData);
  }
  onSubmit() {
    const payload = { ...this.data.rowData, ...this.recordForm.value };
    this.dialogRef.close(payload);
  }
}
