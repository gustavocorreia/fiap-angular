import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})

export class SortPipe implements PipeTransform {
    transform(items: Array<any>, orderBy: string, direction: string) {

    
        return items.sort((a, b) => {
            let response: number = 0;
            if (a[orderBy] < b[orderBy]) {
                response = -1;
            } else if (a[orderBy] > b[orderBy]) {
                response = 1;
            } else {
                response = 0;
            }

            return direction === 'asc' ? response : -response;
        });
    }
}