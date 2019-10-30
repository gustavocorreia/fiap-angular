import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, filterBy: string) {
        console.log(filterBy);

        if(items == undefined)
            return [];

        if(filterBy) {
            let valuesName = items.filter((data) => {
                return data.name.toUpperCase().includes(filterBy.toUpperCase()); 
            });

            let valuesAge = items.filter((data) => {
                return data.age.toString().includes(filterBy); 
            });

            let valuesEmail = items.filter((data) => {
                return data.email.toUpperCase().includes(filterBy.toUpperCase()); 
            });

            return this.concatArrayWithoutDuplicates(valuesName, valuesAge, valuesEmail);
        }
            
        return items;
    }

    private concatArrayWithoutDuplicates(array1: Array<any>,
                                        array2: Array<any>,
                                         array3: Array<any>) {
        let values = [];

        array1.concat(array2, array3).forEach(item => {
            if(values.indexOf(item) == -1)
                values.push(item);
        });

        return values;
    }
}
