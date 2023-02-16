import { Component, Input } from '@angular/core';
import { InstaSnap } from '../models/insta-snap.model';
import { InstaSnapService } from '../services/insta-snap.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insta-snap',
  templateUrl: './insta-snap.component.html',
  styleUrls: ['./insta-snap.component.scss']
})
export class InstaSnapComponent {
  @Input() instaSnap!: InstaSnap;
  buttonText!: string;
  constructor(private instaSnapService: InstaSnapService,
    private router: Router){

  }
  ngOnInit(){
    this.buttonText="J'aime !"
  }
  onVisitInstaSnap(){
    this.router.navigateByUrl(`instasnaps/${this.instaSnap.id}`);
  }
}
