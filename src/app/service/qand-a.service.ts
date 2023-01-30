import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QandAService {

  constructor(private _http :HttpClient) { }

  getQuestionsjson(){
    return this._http.get<any>("assets/questions.json");
  }
}
