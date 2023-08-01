import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SignalRService {
    private serviceUrl:string = "url"
    constructor(private http:HttpClient){}

    runSignalR() {
        return this.http.get(this.serviceUrl).pipe({

        });
    }
}