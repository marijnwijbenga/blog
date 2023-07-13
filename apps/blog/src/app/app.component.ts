import { Component } from "@angular/core";

@Component({
  selector: "bfe-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title = 2;
  public myFun = (): string => {
    return "string";
  };
}
