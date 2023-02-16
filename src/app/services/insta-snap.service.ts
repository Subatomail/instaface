import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { map, Observable, switchMap } from "rxjs";
import { InstaSnap } from "../models/insta-snap.model"
@Injectable({
    providedIn:"root"
})
export class InstaSnapService{
    
  constructor(private http:HttpClient){}

    getAllInstaSnaps():Observable<InstaSnap[]>{
        return this.http.get<InstaSnap[]>("http://localhost:3000/instasnaps");
    }

    getInstaSnapById(id:number):Observable<InstaSnap>{
        return this.http.get<InstaSnap>(`http://localhost:3000/instasnaps/${id}`);
    }

    likeInstaSnapById(id:number,type:string):Observable<InstaSnap>{
        return this.getInstaSnapById(id).pipe(
          map(InstaSnap => ({
            ...InstaSnap,
            likes:InstaSnap.likes + (type === "like"?1:-1)
          })),
          switchMap(updatedInstaSnap => this.http.put<InstaSnap>(`http://localhost:3000/instasnaps/${id}`,updatedInstaSnap))
        )
    }

    addInstaSnap(formValue: {title:string,description:string,imageUrl:string,location?:string}):Observable<InstaSnap>{
      return this.getAllInstaSnaps().pipe(
        map(instasnaps => [...instasnaps].sort((a,b)=>a.id - b.id)),
        map(sortedInstasnaps => sortedInstasnaps[sortedInstasnaps.length-1]),
        map(previousInstasnap => ({
          ...formValue,
          likes:0,
          createdDate:new Date(),
          id: previousInstasnap.id+1

        })),
        switchMap(newInstasnap => this.http.post<InstaSnap>(`http://localhost:3000/instasnaps`,newInstasnap))
      )
    }
}