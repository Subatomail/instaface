import { Component } from '@angular/core';

@Component({
  selector: 'app-insta-snap',
  templateUrl: './insta-snap.component.html',
  styleUrls: ['./insta-snap.component.scss']
})
export class InstaSnapComponent {
  id!: number;  
  title!: string;
  description!: string;
  createdDate!: Date;
  likes!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit(){
    this.id=1
    this.title= "Corgi";
    this.description="Mon meilleur ami"
    this.createdDate=new Date()
    this.likes=7;
    this.imageUrl="../assets/images/corgi.jpg"
    this.buttonText="J'aime !"


  }
  onLike(){
    if (this.buttonText==="J'aime !"){
      this.likes++;
      this.buttonText = "J'ai aimé !!!"
    }else{
      this.likes--;
      this.buttonText = "J'aime !"
    }
  }
}
