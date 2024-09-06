import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent implements OnInit {
  matches: any;
  ngOnInit(): void {
    this.getUpcomingMatches();
  }

  constructor(private apiService: ApiServiceService, private router: Router){}

  getUpcomingMatches(){
    console.log('Aditya->');
    this.apiService.getMatches().subscribe((res) =>{
      console.log(res);
      this.matches=res;
    })
  }
}
