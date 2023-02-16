import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstaSnap } from '../models/insta-snap.model';
import { InstaSnapService } from '../services/insta-snap.service';

@Component({
  selector: 'app-single-insta-snap',
  templateUrl: './single-insta-snap.component.html',
  styleUrls: ['./single-insta-snap.component.scss']
})
export class SingleInstaSnapComponent {
  @Input() instaSnap!: InstaSnap;
  buttonText!: string;
  constructor(private instaSnapService: InstaSnapService,
    private route: ActivatedRoute){

  }
  ngOnInit(){
    this.buttonText="J'aime !"
    const instaId = +this.route.snapshot.params["id"];
    this.instaSnap = this.instaSnapService.getInstaSnapById(instaId);
  }
  onLike(){
    if (this.buttonText==="J'aime !"){
      this.instaSnapService.likeInstaSnapById(this.instaSnap.id,"like");
      this.buttonText = "J'ai aimé !!!"
    }else{
      this.instaSnapService.likeInstaSnapById(this.instaSnap.id,"unlike");
      this.buttonText = "J'aime !"
    }
  }
}
