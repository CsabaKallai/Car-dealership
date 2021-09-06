import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarData } from '../car-data';

@Component({
  selector: 'app-model-x',
  templateUrl: './model-x.component.html',
  styleUrls: ['../models/models.component.css']
})

@Injectable()
export class ModelXComponent implements OnInit {

  public datas: Array<CarData>;

  // private http: HttpClient;
  constructor(http: HttpClient) {
    // this.http = http;
    this.datas = new Array<CarData>();

    // this.http.get<CarData[]>('http://localhost:3000/datas').subscribe( response =>
    // {
    //   this.datas = response;
    // }, error => {
    //   console.error(error);
    // }
    // );

    fetch("http://localhost:3000/datas", {
      method: "GET",
      mode: "cors",
      cache: "no-cache"

    }).then(response =>
      response.json().then(data => {
        this.datas = data;
      }, err => console.error(err))
    ).then(err => console.error(err));
  }

  ngOnInit(): void {
  }

}
