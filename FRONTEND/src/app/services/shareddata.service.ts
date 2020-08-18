import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PropertyInterface } from "../interfaces/propertyInterface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShareddataService {
  constructor(private http: HttpClient) {}

  kuhaData(): Observable<PropertyInterface[]> {
    return this.http.get("data/properties.json").pipe(
      map((maramingandy) => {
        const toArray: Array<PropertyInterface> = [];
        for (const stageniandy in maramingandy) {
          toArray.push(maramingandy[stageniandy]);
        }
        return toArray;
      })
    );
  }
}
