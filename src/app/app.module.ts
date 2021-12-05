import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthGuard } from './login/auth.guard.ts';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/authservice';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { ChartsModule } from 'ng2-charts';
import {Ng2SearchPipeModule  } from "ng2-search-filter";
import { MatIconModule} from "@angular/material/icon";
import {  MatCommonModule} from "@angular/material/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
import { TableFilterPipe } from './table/tableFilter';
import { ModalcomponentComponent} from './modalcomponent/modalcomponent.component';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    TableComponent,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    Ng2SearchPipeModule,
   WavesModule, TableModule, IconsModule,
   BrowserAnimationsModule,
   MatButtonModule,
   MatDialogModule,
   NgxPaginationModule




  ],
  providers: [httpInterceptorProviders, AuthGuard, AuthService,],
  bootstrap: [AppComponent],
  entryComponents: [ModalcomponentComponent]

})
export class AppModule { }
