import { Component } from '@angular/core';
import { ServerService } from './services/server.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';
import { MatDialog } from '@angular/material';
import { ImageViewModalComponent } from './image-view-modal/image-view-modal.component';

export interface ImageData {
  overlayed_url: string;
  url: string;
  overlay: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //entryComponents: [ImageViewModalComponent]
})

export class AppComponent {
  title = 'snapifyTest';
  data: any;
  overlayed_url: Array<string> = [''];
  url: Array<string> = [''];
  overlay: Array<string> = [''];
  public text = `{ "text": "This is text file" }`;
  animal: any;

  constructor(
    public dialog: MatDialog,
    private server: ServerService,
    private _FileSaverService: FileSaverService,
    private http: HttpClient) { }

  ngOnInit() {;
    this.getdata();
  }


  // to get the Image data and store them in their respective data points.
  getdata() {
    var params = {
      "game_id": "test0001",
      "email": "test@gmail.com"
    };

    this.http.post(this.server.url, params).toPromise().then(
      data => {
        for (let i in (<any>data).body.imgs) {
          console.log(i);
          this.overlayed_url[i] = (<any>data).body.imgs[i].overlayed_url;
          this.url[i] = (<any>data).body.imgs[i].url;
          this.overlay[i] = (<any>data).body.imgs[i].overlay;
        }
        console.log(this.overlayed_url + "\n" + this.url + "\n" + this.overlay + "\n");
      }

    );
  }

  //This function download the  images but due to cors restriction I couldn't be able to download the image
  downloadFile(url, fromRemote: boolean) {
    const fileName = `save.jpg`;
    let headers = new HttpHeaders();
    //headers.append('Content-Type:', 'application/x-www-form-urlencoded');
    //headers.append('Access-Control-Request-Headers','access-control-allow-origin');
    //headers.append('Access-Control-Request-Headers', 'content-type');
    // headers.append("Access-Control-Allow-Origin","Origin, X-Requested-With, Content-Type");
    // headers.append("Access-Control-Allow-Headers", "CORELATION_ID")
    headers.append('Content-Type', 'image/jpeg');
    headers.append('Access-Control-Allow-Origin', '*');

    if (fromRemote) {
      this.http.get(url, {
        headers : headers,
        withCredentials : true,
        observe: 'response',
        responseType: 'blob',

      }).subscribe(res => {
        this._FileSaverService.save(res.body, fileName);
      });
      return;
    }
    const fileType = this._FileSaverService.genType(fileName);
    const txtBlob = new Blob([this.text], { type: fileType });
    this._FileSaverService.save(txtBlob, fileName);
  }

  // This function retrieves all the data from the user and displayes the relative images as a modal
  openModal(item1, item2, item3): void {
    const dialogRef = this.dialog.open(ImageViewModalComponent, {
      
      data: {
        overlay_url: item1,
        url: item2,
        overlay: item3
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

}
