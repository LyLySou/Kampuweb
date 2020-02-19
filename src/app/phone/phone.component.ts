import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
data:any;
  constructor(private db:AngularFirestore) { }

  ngOnInit() {
    this.data=this.db.collection('Phone').valueChanges();
  }

}
