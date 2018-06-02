import { PipeTransform, Pipe } from "angular2/core";
import { IHero } from './hero';

@Pipe({
    name:'heroFilter'
})

export class HeroFilterPipe implements PipeTransform {
    transform(value : IHero[], args :string[]) : IHero [] {
        let filteredValue:string = args[0] ? args[0].toLocaleLowerCase():null;
        return filteredValue ? value.filter((hero:IHero) => 
        hero.heroName.toLocaleLowerCase().indexOf(filteredValue.toLocaleLowerCase()) != -1) : value;
    }
}