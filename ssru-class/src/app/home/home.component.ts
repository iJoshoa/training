import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  range = [1, 2, 3];
  url =
    "https://cn.i.cdn.ti-platform.com/cnapac/content/438/showpage/teen-titans-go%21/sa/showicon.png";
  dataset = [
    {
      title: "catoon-1 ",
      content: "buynow",
      button: "Read More",
      type: "primary",
      imgSrc:
        "https://cn.i.cdn.ti-platform.com/cnapac/content/438/showpage/teen-titans-go%21/sa/showicon.png"
    },
    {
      title: "catoon-2 ",
      content: "buynow today",
      button: "Read More",
      type: "danger",
      imgSrc:
        "https://cn.i.cdn.ti-platform.com/content/1176/showpage/dc-super-hero-girls/za/showicon_dcsuperherogirls.png"
    },
    {
      title: "catoon-3 ",
      content: "buynow 1 get 1",
      button: "Read More",
      type: "primary",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3oD7onQaD7QkRCvrRmJVxUt9cVFyYBQnNf7t9sI5xxLlCO1B&s"
    }
  ]; 
  dataDB = []

  constructor(
    private http: HttpClient,
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getUsers()
    .subscribe( data => {
        this.dataDB = data['result'].service;
        console.log(this.dataDB);
    });

    // this.service.getHello('SSRU');
  }

}
