import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ShareddataService {
  constructor(private http: HttpClient) {}

  kuhaData() {
    return this.http.get("data/properties.json");
  }
}
