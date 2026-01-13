import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { GiftService, Gift } from '../../services/gift.service';

@Component({
  selector: 'app-gift-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gift-form.component.html'
})
export class GiftFormComponent {
  newGift: Gift = {
    name: '',
    description: '',
    value: 0,
    gifted: false
  };

  @Output() giftAdded = new EventEmitter<void>();

  constructor(private giftService: GiftService) {}

  onSubmit() {
    this.giftService.createGift(this.newGift).subscribe({
      next: (res) => {
        console.log('Presente salvo!', res);
        this.giftAdded.emit(); 
        this.resetForm();
      },
      error: (err) => alert('Erro ao salvar: ' + err.error.message)
    });
  }

  resetForm() {
    this.newGift = { name: '', description: '', value: 0, gifted: false };
  }
}