import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.scss'
})
export class PointTableComponent implements OnInit {
  pointTable: any;
  ngOnInit(): void {
    this.getPointTableData();
  }

  constructor(private apiService: ApiServiceService){}
  getPointTableData(){
    this.apiService.getPointTable().subscribe((res) =>{
      this.pointTable=res;
    })
  }
}
