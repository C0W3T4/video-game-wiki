import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/games';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss'],
})
export class GameTabsComponent {
  @Input() game!: Game;
}
