import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { InstaSnap } from '../models/insta-snap.model';
import { InstaSnapService } from '../services/insta-snap.service';

@Component({
  selector: 'app-new-insta-snap',
  templateUrl: './new-insta-snap.component.html',
  styleUrls: ['./new-insta-snap.component.scss']
})
export class NewInstaSnapComponent implements OnInit{
  
  instaForm!: FormGroup;
  instaSnapPreview$!:Observable<InstaSnap>;
  urlRegex!: RegExp;
  constructor(private formBuilder: FormBuilder,
    private instaSnapService:InstaSnapService,
    private router: Router){}
  ngOnInit(): void {
    this.urlRegex=/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.instaForm=this.formBuilder.group({
      title: [null,[Validators.required]],
      description: [null,[Validators.required]],
      imageUrl: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
      location: [null],
      
    },{
      updateOn: "blur"
    });
    this.instaSnapPreview$=this.instaForm.valueChanges.pipe(
      map(formValue =>({
        ...formValue,
        createdDate:new Date(),
        likes:0,
        id:6
      }))
    )
  }
  onSubmitForm(){
    this.instaSnapService.addInstaSnap(this.instaForm.value);
    this.router.navigateByUrl("/instasnaps");
  }

}
