import { Component } from "angular2/core";

@Component({
    selector:'anotherAuthor-app',
    templateUrl:'./app/anotherapp.component.html'

})

export class AnotherAppComponenet {
    size:number = 16;
    x:number = 0;

    incr() : number{
        return this.x++;
    }
}