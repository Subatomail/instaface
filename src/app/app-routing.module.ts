import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { InstaSnapListComponent } from "./insta-snap-list/insta-snap-list.component";
import { NewInstaSnapComponent } from "./new-insta-snap/new-insta-snap.component";
import { SingleInstaSnapComponent } from "./single-insta-snap/single-insta-snap.component";

const routes : Routes = [
    {path: "instasnaps/:id", component: SingleInstaSnapComponent},
    {path: "instasnaps", component: InstaSnapListComponent},
    {path: "create", component: NewInstaSnapComponent},
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