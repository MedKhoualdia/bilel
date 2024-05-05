import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MonitoringService } from '../services/monitoring.service';
import { SystemHealth } from '../models/system-health';
import * as d3 from 'd3';
import jsPDF from 'jspdf';
import {ScatterPlotData} from "../models/scatter-plot-data";
import autoTable from "jspdf-autotable";
import {MatTabGroup} from "@angular/material/tabs";


@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
  ngOnInit(): void {
  }


}
