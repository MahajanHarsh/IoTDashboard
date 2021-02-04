import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  url =
    "https://deviceapi.azurewebsites.net/api/Function1?code=KjSVr2o1Yr1NFihjQ9aIEz5CgrGQe1Cfpt7ocisvfa6G3oqMB4hGaQ==&sensorType=";

  public getAgentData(sensorType: string) {
    console.log(sensorType);

    const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

    this.http
      .get(this.url + sensorType, { headers: headers })
      .toPromise()
      .then((res) => {
        console.log(res.data);
        // If you wish to return the body of response only
        return res.data;
      });
  }
}
