import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, CommonModule} from '@angular/common';
import { GiftService, Gift } from '../../services/gift.service';

@Component({
  selector: 'app-gift-list',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './gift-list.component.html',
  styleUrl: './gift-list.component.css'
})
export class GiftListComponent implements OnInit {
  gifts: Gift[] = []; 

  constructor(private giftService: GiftService) {}

  ngOnInit(): void {
    this.loadGifts();
  }

  loadGifts(): void {
    this.giftService.getGifts().subscribe({
      next: (data) => {
        this.gifts = data;
        console.log('Dados recebidos do banco:', data);
      },
      error: (err) => {
        console.error('Erro ao buscar presentes:', err);
      }
    });
  }

  onGift(gift: Gift): void {
  if (gift.id) {
    this.giftService.markAsGifted(gift.id).subscribe({
      next: (updatedGift) => {
        gift.gifted = true;
        console.log('Presente atualizado com sucesso!', updatedGift);
      },
      error: (err) => console.error('Erro ao atualizar:', err)
    });
  }
}
}