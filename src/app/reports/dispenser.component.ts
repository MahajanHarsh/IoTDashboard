import { Component } from "@angular/core";
import { DashboardService } from "../service/dashboard.service";

interface Dispenser {
  id: Number;

  name: String;

  level: Number;

  battery: Number;

  lastUpdated: String;
}

@Component({
  selector: "app-dispenser",
  templateUrl: "./dispenser.component.html",
  styleUrls: ["./dispenser.component.css"]
})
export class DispenserComponent {
  response: any;

  constructor(private dashboardService: DashboardService) {
    this.response = this.dashboardService.getAgentData("DISTANCE");
  }

  dispenserData = [
    {
      id: 100,
      name: "S1_LHS_RR",
      level: 10,
      battery: 70,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 101,
      name: "S2_LHS_RR",
      level: 50,
      battery: 60,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 102,
      name: "S3_LHS_RR",
      level: 35,
      battery: 30,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 103,
      name: "S4_LHS_RR",
      level: 75,
      battery: 90,
      lastUpdated: "02/04/2021:11:58"
    }
  ];

  dispensers: Dispenser[] = this.dispenserData;
}
