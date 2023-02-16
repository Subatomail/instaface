import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  userEmail:string="exemple@exemple.fr";
  constructor(private router:Router){

  }
  onContinue(){
    this.router.navigateByUrl("instasnaps");
  }
  onSubmitForm(form:NgForm){
    console.log(form.value);
  }
}
