import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoCollectionComponent } from './photo-collection/photo-collection.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations: [AppComponent, PhotoCollectionComponent, PhotoComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
