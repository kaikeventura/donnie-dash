import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardActions, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbar} from "@angular/material/toolbar";
import {HttpClient, HttpClientModule} from "@angular/common/http";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridList, MatGridTile, MatCard, MatCardActions, MatButtonModule, NgForOf, MatCardImage, NgOptimizedImage, FlexLayoutModule, MatCardTitle, MatCardHeader, MatToolbar, RouterLink, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  tiles: Tile[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/data').subscribe((data) => {
      this.tiles = data.map((item) => {
        return {
          text: item.name,
          link: item.link,
          cols: 1,
          rows: 3,
          color: 'rgba(128, 0, 128, 0.2)'
        };
      });
    });
  }
}
