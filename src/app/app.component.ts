import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiftListComponent } from './component/gift-list/gift-list.component';
import { GiftFormComponent } from './component/gift-form/gift-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GiftListComponent, GiftFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'giftlink-front';
}
