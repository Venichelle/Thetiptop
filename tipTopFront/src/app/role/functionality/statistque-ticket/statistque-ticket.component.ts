import { Component, OnInit } from '@angular/core';
// import { update } from 'plotly.js';
import { StatistiqueTickets } from 'src/app/_models/StatisqueTickets';
import { AdminService } from 'src/app/_services/admin.service';


@Component({
  selector: 'app-statistque-ticket',
  templateUrl: './statistque-ticket.component.html',
  styleUrls: ['./statistque-ticket.component.css']
})
export class StatistqueTicketComponent implements OnInit {

  constructor(private adminService: AdminService) { 
    
   
  }
   

  ngOnInit(): void {
    

    
  }
}
