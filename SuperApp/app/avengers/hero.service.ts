import { Injectable } from "angular2/core";
import { IHero } from "./hero";

@Injectable()

export class HeroService {

    getHeros() : IHero[] {
        return [
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
    }
}