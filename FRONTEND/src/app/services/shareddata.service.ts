import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PropertyInterface } from "../interfaces/propertyInterface";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ShareddataService {
  constructor(private route: Router, private http: HttpClient) {}

  kuhaData(Gendr: string): Observable<PropertyInterface[]> {
    return this.http.get("data/properties.json").pipe(
      map((maramingandy) => {
        const toArray: Array<PropertyInterface> = [];
        for (const stageniandy in maramingandy) {
          if (
            maramingandy.hasOwnProperty(stageniandy) &&
            maramingandy[stageniandy].Gender === Gendr
          ) {
            toArray.push(maramingandy[stageniandy]);
          } else if (
            maramingandy.hasOwnProperty(stageniandy) &&
            Gendr === "all"
          ) {
            toArray.push(maramingandy[stageniandy]);
          }
        }
        return toArray;
      })
    );
  }
}
