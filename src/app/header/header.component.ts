import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authservice';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalcomponentComponent } from '../modalcomponent/modalcomponent.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  loggedUser: any;

  constructor(private authService:AuthService,public matDialog: MatDialog) {
    this.loggedUser  = authService.localStorageValue
   }
   openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalcomponentComponent, dialogConfig);
  }

  ngOnInit(): void {

  }

}
