import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


interface Score {
  id: number,
  house: string,
  currentScore: number
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  URL="http://hogwarts-be-env.eba-2hfamsmz.eu-central-1.elasticbeanstalk.com/api/score";
  title = 'cloud-project';
  scores: Score[] =[];
  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<Score[]>(this.URL).subscribe({
      next: ss => this.scores = ss,
      error: err => console.log(err)
    });
  }
  



}
