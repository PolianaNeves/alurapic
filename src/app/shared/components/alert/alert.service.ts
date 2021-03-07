import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Alert, AlertType } from './alert';

@Injectable({providedIn: 'root'})
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouteChanged = false;

    constructor(router: Router) {
        router.events.subscribe(event => {
            if(event instanceof NavigationStart){
                if(this.keepAfterRouteChanged)
                    this.keepAfterRouteChanged = false;
                else
                    this.clear();
            }
        })
    }

    success(message: string, keepAfterRouteChanged: boolean = false){
        this.alert(AlertType.SUCCESS, message, keepAfterRouteChanged);
    }

    warning(message: string, keepAfterRouteChanged: boolean = false){
        this.alert(AlertType.WARNING, message, keepAfterRouteChanged);
    }

    danger(message: string, keepAfterRouteChanged: boolean = false){
        this.alert(AlertType.DANGER, message, keepAfterRouteChanged);
    }

    info(message: string, keepAfterRouteChanged: boolean = false){
        this.alert(AlertType.INFO, message, keepAfterRouteChanged);
    }

    private alert(alertType: AlertType, message: string, keepAfterRouteChanged: boolean) {
        this.keepAfterRouteChanged = keepAfterRouteChanged;
        this.alertSubject.next(new Alert(alertType, message));
    }

    getAlert(){
        return this.alertSubject.asObservable();
    }

    clear(){
        this.alertSubject.next(null);
    }
}