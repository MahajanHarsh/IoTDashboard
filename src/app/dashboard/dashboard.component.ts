import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  stallOccupancy = false;
  dispensor = false;
  envMonitor = false;

  public toggleStallOcc() {
    this.stallOccupancy = true;
    this.envMonitor = false;
    this.dispensor = false;
  }

  public toggleDispensor() {
    this.stallOccupancy = false;
    this.envMonitor = false;
    this.dispensor = true;
  }

  public toggleEnv() {
    this.stallOccupancy = false;
    this.envMonitor = true;
    this.dispensor = false;
  }
}
