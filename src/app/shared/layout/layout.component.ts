import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isMenuVisible: boolean = true;
  isProduction: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.isProduction = environment.production;
    let that = this;
  //   this.menuDataService.toggleMenuBar.subscribe(function (data: boolean) {
  //     that.isMenuVisible = data;
  // });
}

  ngOnDestroy() {
      // this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
  }

}
