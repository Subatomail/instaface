import { Component, OnInit } from '@angular/core';
import { InstaSnap } from '../models/insta-snap.model';
import { InstaSnapService } from '../services/insta-snap.service';
@Component({
  selector: 'app-insta-snap-list',
  templateUrl: './insta-snap-list.component.html',
  styleUrls: ['./insta-snap-list.component.scss']
})
export class InstaSnapListComponent implements OnInit {
  instaSnaps!: InstaSnap[];

  constructor(private instaSnapService: InstaSnapService){

  }
  ngOnInit(): void{
    this.instaSnaps = this.instaSnapService.getAllInstaSnaps();
    

  }

}
