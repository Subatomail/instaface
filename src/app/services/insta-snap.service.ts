import {Injectable} from "@angular/core"
import { InstaSnap } from "../models/insta-snap.model"
@Injectable({
    providedIn:"root"
})
export class InstaSnapService{
    instaSnaps: InstaSnap[]=[
        {
        id: 1,
      title: "Corgi",
      description:"Mon meilleur ami",
      createdDate :new Date(),
      likes:2000,
      imageUrl:"../assets/images/corgi.jpg",
      location:"Paris"
      },
      {
        id: 2,
      title: "Autel",
      description:"Une belle image",
      createdDate :new Date(),
      likes:5,
      imageUrl:"../assets/images/altar.jpg"
      },
      {
        id: 3,
      title: "Foret",
      description:"Une image d'une foret",
      createdDate :new Date(),
      likes:12,
      imageUrl:"../assets/images/forest.jpg",
      location:"Quebec"
      },
      {
        id: 4,
      title: "Cigne",
      description:"Un oiseau aquatique",
      createdDate :new Date(),
      likes:3,
      imageUrl:"../assets/images/swan.jpg"
      }
    ]

    getAllInstaSnaps():InstaSnap[]{
        return this.instaSnaps;
    }

    getInstaSnapById(id:number):InstaSnap{
        const instaSnap= this.instaSnaps.find(instaSnap => instaSnap.id === id);
        if (!instaSnap) {
            throw new Error("L'InstaSnap que vous cherchez n'existe pas !");
        } else {
            return instaSnap;
        }
    }

    likeInstaSnapById(id:number,type:string):void{
        const instaSnap=this.getInstaSnapById(id);
        type === "like" ? instaSnap.likes++ : instaSnap.likes--;
    }

    addInstaSnap(formValue: {title:string,description:string,imageUrl:string,location?:string}){
      const instaSnap : InstaSnap={
        ...formValue,
        likes:0,
        createdDate:new Date(),
        id: this.instaSnaps[this.instaSnaps.length - 1].id + 1
      };
      this.instaSnaps.push(instaSnap);
    }
}