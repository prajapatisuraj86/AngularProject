import { Component, OnInit } from "angular2/core";
import { IHero } from './hero';
import { HeroFilterPipe } from './hero-pipe.component';
import { HeroService } from "./hero.service";

@Component({
    selector:'super-heros',
    templateUrl:'app/avengers/hero-list.component.html',
    styleUrls:['app/avengers/hero-list.component.css'],
    pipes:[HeroFilterPipe]
})

export class HeroListComponent implements OnInit {
    pageTitle : String = "Hero List";
    imageWidth : number = 100;
    imageMargin : number = 2;
    showImage : boolean = false;
    listFilter : String = '';
    toggleImage() : void {
        this.showImage = !this.showImage;
    }
    constructor(private _heroService:HeroService) {

    }
    heros : IHero [];

    ngOnInit() : void {
        this.heros = this._heroService.getHeros();
    }
}