import { Component, Input, OnInit } from '@angular/core'
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap'
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/debounceTime';
@Component({
    moduleId: module.id,
    selector: 'users-list',
    templateUrl: 'users-list.component.html'
})

export class UsersListComponent {
    @Input()
    alerts: Array<IAlert> = [];

    private backup: Array<IAlert>;
    staticAlertClosed: boolean = false;
    successMessage: string;
    private _success = new Subject<string>();

    constructor() {
        this.alerts.push(
            { id: 1, type: 'success', message: 'this is an success alert' },
            { id: 1, type: 'info', message: 'this is an info alert' },
            { id: 1, type: 'warning', message: 'this is an warning alert' },
            { id: 1, type: 'danger', message: 'this is an danger alert' }
        );

        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }

    ngOnInit(): void {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._success.subscribe((message) => this.successMessage = message);
        this._success.debounceTime(5000).subscribe(() => this.successMessage = null);
    }

    public changeSuccessMessage() {
        this._success.next(`${new Date()} - Message successfully changed.`);
    }

    closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    reset() {
        this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
    }

    toggle(ngbA: NgbAccordion): void {
        ngbA.toggle("ngb-panel-0")
        console.log(ngbA);
    }
}

export interface IAlert {
    id: number;
    type: string;
    message: string;
}