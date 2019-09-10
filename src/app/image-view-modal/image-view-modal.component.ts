import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-image-view-modal',
  templateUrl: './image-view-modal.component.html',
  styleUrls: ['./image-view-modal.component.css']
})
export class ImageViewModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ImageViewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
