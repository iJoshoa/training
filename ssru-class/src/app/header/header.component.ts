import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = "https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"
  constructor() { }

  ngOnInit() {
  }

}
