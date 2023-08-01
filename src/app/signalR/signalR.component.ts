import { Component, OnInit } from "@angular/core";
import { SignalRService } from "./signalR.service";

@Component({
    selector: 'pm-signalR',
    templateUrl:'./signalR.component.html'
})
export class SinglaRCompoment implements OnInit{
    pageTitle: string = 'SignalR component'

    constructor(private signalRService: SignalRService){}

    ngOnInit(): void {
        
    }
}