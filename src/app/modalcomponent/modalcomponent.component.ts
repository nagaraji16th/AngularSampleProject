import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalcomponent',
  templateUrl: './modalcomponent.component.html',
  styleUrls: ['./modalcomponent.component.css']
})
export class ModalcomponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalcomponentComponent>,private router: Router) { }

  ngOnInit(): void {
  }
  actionFunction() {
    alert("Need to log out");
    this.router.navigate(['/login']);

    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

}
