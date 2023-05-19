import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-borrow-details',
  templateUrl: './borrow-details.component.html',
  styleUrls: ['./borrow-details.component.css'],
})
export class BorrowDetailsComponent implements OnInit {
  @ViewChild('mapElement', { static: true }) mapElementRef: ElementRef | undefined;
  typeOfError:boolean=false
  constructor(public dialog: MatDialog) {}

  aadharCardImg: string = '../../assets/image/aadharCard.jpg';
  panCardImg: string = "../../assets/image/pan-card.jpg";
  passport: string = "../../assets/image/passport.jpg";
  verified: string = "../../assets/image/verified.png";
  unverified: string = "../../assets/image/unverified.png";
  totaldoc: string = "../../assets/image/total-doc.png";
  images: string[] = [this.aadharCardImg, this.panCardImg, this.passport];


  ngOnInit(): void {}
  currentIndex: number = 0;

  toppingsControl = new FormControl([]);
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOptions: any;

  removeOption(option: string) {
    const index = this.selectedOptions.indexOf(option);
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
  }

  prevImage(): void {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage(): void {
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  ReportError():void{
    this.typeOfError =true

  }
  confirm():void {
     this.typeOfError =false

  }
  openDialog() {
     this.dialog.open(ErrorDialogComponent, {
      maxWidth: '60vw',
      maxHeight: '60vh',
      height: '60%',
      width: '60%',
      data: {
        approvedDoc: '12',
        totalDoc: '25',
      },

    });
  }

  zoom = 1;

  zoomIn() {
    this.zoom += 0.1;
  }

  zoomOut() {
    if (this.zoom > 0.1) {
      this.zoom -= 0.1;
    }
  }

}
