import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import htmlToImage from 'html-to-image';

@Component({
  selector: 'app-image-view-modal',
  templateUrl: './image-view-modal.component.html',
  styleUrls: ['./image-view-modal.component.css']
})
export class ImageViewModalComponent implements OnInit {
  changeText: boolean;

  constructor(
    public dialogRef: MatDialogRef<ImageViewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageData
  ) {
    this.changeText = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


  click(x) {
    //console.log(x);
  }

  downloadFile1() {
    var htmlToImage = require('html-to-image');

    htmlToImage.toJpeg(document.getElementById('base'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

}
