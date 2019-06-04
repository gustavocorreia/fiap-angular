import { Component, Input } from '@angular/core';

@Component({
    selector: 'loading',
    templateUrl: './Loading.component.html',
    styleUrls: ['./Loading.component.css']
})

export class LoadingComponent {
    @Input() show: boolean = false;
}