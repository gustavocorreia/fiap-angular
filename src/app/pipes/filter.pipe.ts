import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    transform(items: any, filterBy: string) {
        console.log(filterBy);

        return items;
    }
}
