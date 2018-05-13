import { Component } from "angular2/core";
import { HeroListComponent } from "./avengers/hero-list.component";

@Component({
    selector:'super-app',
    template:`<div>
        <h1>{{pageTitle}}</h1>
        <super-heros></super-heros>
                </div>`,
    directives:[HeroListComponent]
})

export class AppComponent {
    pageTitle : String = "Angular Avengers";
}