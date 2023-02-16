import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { InstaSnapListComponent } from "./insta-snap-list/insta-snap-list.component";
import { SingleInstaSnapComponent } from "./single-insta-snap/single-insta-snap.component";

const routes : Routes = [
    {path: "instasnaps/:id", component: SingleInstaSnapComponent},
    {path: "instasnaps", component: InstaSnapListComponent},
    {path: "", component: HomePageComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}