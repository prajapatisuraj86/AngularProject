import { Component, OnInit } from "angular2/core";
import { IHero } from './hero';

@Component({
    selector:'super-heros',
    templateUrl:'app/avengers/hero-list.component.html',
    styleUrls:['app/avengers/hero-list.component.css']
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
    heros : IHero [] = [
        {
            "heroId": 1,
            "heroName": "Captain America",
            "realName": "Steven Rogers",
            "heroStrength": "Shield",
            "heroNature": "Confident",
            "imageUrl": "./app/assets/images/cap.jpg"
        },
        {
             "heroId": 2,
            "heroName": "Iron Man",
            "realName": "Tony Stark",
            "heroStrength": "Suit and Jarvis",
            "heroNature": "Stylish",
            "imageUrl": "./app/assets/images/IronMan.jpg"
        },
        {
              "heroId": 3,
            "heroName": "Thor",
            "realName": "Thor",
            "heroStrength": "Hammer",
            "heroNature": "Confused",
            "imageUrl": "./app/assets/images/thor.jpg"
        },
        {
            "heroId": 4,
            "heroName": "Hulk",
            "realName": "Bruce Banner",
            "heroStrength": "Size",
            "heroNature": "Angry",
            "imageUrl": "./app/assets/images/hulk.jpg"
        },
        {
            "heroId": 5,
            "heroName": "Black Widow ",
            "realName": "Agent Romanoff ",
            "heroStrength": "Mind Games",
            "heroNature": "Smart",
            "imageUrl": "./app/assets/images/blackwidow.jpg"
        },
         {
            "heroId": 6,
            "heroName": "Agent Fury",
            "realName": "Nick Fury",
            "heroStrength": "Nothing",
            "heroNature": "Serious",
            "imageUrl": "./app/assets/images/fury.jpg"
        }
    ];

    ngOnInit() : void {
        console.log("This message is coming from hook");
    }
}