import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card'
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ServerService} from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageViewModalComponent } from './image-view-modal/image-view-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent],
  entryComponents:[ImageViewModalComponent]
})
export class AppModule { }
