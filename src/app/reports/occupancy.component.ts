import { Component } from "@angular/core";

interface StallOccupancy {
  id: Number;

  name: String;

  state: boolean;

  lastUpdated: String;
}

@Component({
  selector: "app-occupancy",
  templateUrl: "./occupancy.component.html",
  styleUrls: ["./occupancy.component.css"]
})
export class OccupancyComponent {
  occupancyData = [
    {
      id: 100,
      name: "S1_LHS_RR",
      state: true,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 101,
      name: "S2_LHS_RR",
      state: false,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 102,
      name: "S3_LHS_RR",
      state: true,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 103,
      name: "S4_LHS_RR",
      state: false,
      lastUpdated: "02/04/2021:11:58"
    }
  ];

  stalls: StallOccupancy[] = this.occupancyData;
}
