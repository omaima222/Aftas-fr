import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private memberUrl = "http://localhost:8080/api/member"
  constructor(private httpClient: HttpClient){}

  public getAll()


}
