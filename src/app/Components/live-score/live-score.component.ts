import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/api-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-live-score',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.scss',
})
export class LiveScoreComponent implements OnInit {
  liveScore: any;
  constructor(private apiService: ApiServiceService) {}
  ngOnInit(): void {
    this.getLiveMatchData();
  }

  getLiveMatchData() {
    this.apiService.getMatchData().subscribe((res) => {
      console.log(res, 'Live Match Data');
      this.liveScore = res;
    });
  }
}
