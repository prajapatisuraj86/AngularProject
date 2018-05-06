import { Component } from "angular2/core";

@Component({
    selector:'authors-app',
    templateUrl:'./app/app.component.html'
})  

export class AppComponent {
    pageTitle : String = "Suraj Application";
    bookTitle : String = "Book on Suraj";
    x:number = 0;
    authorsList:any [] = [
        {
            "authorId":1,
            "authorName":"suraj",
            "authorTechnology":"Java 9",
            "authorLocation":"India"
        },
        {
            "authorId":2,
            "authorName":"chintan",
            "authorTechnology":"Java 8",
            "authorLocation":"India"
        },
        {
            "authorId":3,
            "authorName":"parth",
            "authorTechnology":"Java Thread",
            "authorLocation":"India"
        }
];

    incr():number {
        return this.x++;
    }
}

