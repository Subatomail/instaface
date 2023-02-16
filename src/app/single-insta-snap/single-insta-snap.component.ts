import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { InstaSnap } from '../models/insta-snap.model';
import { InstaSnapService } from '../services/insta-snap.service';

@Component({
  selector: 'app-single-insta-snap',
  templateUrl: './single-insta-snap.component.html',
  styleUrls: ['./single-insta-snap.component.scss']
})
export class SingleInstaSnapComponent implements OnInit{
  instaSnap$!: Observable<InstaSnap>
  buttonText!: string;
  constructor(private instaSnapService: InstaSnapService,
    private route: ActivatedRoute){

  }
  ngOnInit(){
    this.buttonText="J'aime !"
    const instaId = +this.route.snapshot.params["id"];
    this.instaSnap$ = this.instaSnapService.getInstaSnapById(instaId);
  }
  onLike(id:number){
    if (this.buttonText==="J'aime !"){
      this.instaSnap$ = this.instaSnapService.likeInstaSnapById(id,"like").pipe(
        tap(()=>this.buttonText="J'ai aimé")
      )
    }else{
      this.instaSnap$ = this.instaSnapService.likeInstaSnapById(id,"unlike").pipe(
        tap(()=>this.buttonText="J'aime !")
      )
    }
  }
}
