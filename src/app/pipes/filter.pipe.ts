import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, filterBy: string) {
        console.log(filterBy);

        if(items == undefined)
            return [];

        if(filterBy == undefined)
            return items;

        return items.filter(x => x.name == filterBy || x.age == filterBy || x.email == filterBy);
    }
}
