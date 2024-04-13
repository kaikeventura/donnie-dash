import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardActions, MatCardHeader, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbar} from "@angular/material/toolbar";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatGridList, MatGridTile, MatCard, MatCardActions, MatButtonModule, NgForOf, MatCardImage, NgOptimizedImage, FlexLayoutModule, MatCardTitle, MatCardHeader, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tiles: Tile[] = [
    {text: 'Three', cols: 1, rows: 3, color: '#e6e6fa'},
    {text: 'Three', cols: 1, rows: 3, color: '#e6e6fa'},
    {text: 'Three', cols: 1, rows: 3, color: '#e6e6fa'},
    {text: 'Three', cols: 1, rows: 3, color: '#e6e6fa'}
  ];
}
