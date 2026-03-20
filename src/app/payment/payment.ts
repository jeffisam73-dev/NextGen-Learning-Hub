import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class PaymentComponent implements OnInit {
  selectedPaymentMethod: string = '';

  ngOnInit() {
    this.setupPaymentMethodListeners();
  }

  setupPaymentMethodListeners() {
    setTimeout(() => {
      const radioButtons = document.querySelectorAll('input[name="paymentMethod"]');
      const detailsMap: { [key: string]: string } = {
        upi: 'upiDetails',
        debit: 'debitDetails',
        credit: 'creditDetails',
        bank: 'bankDetails'
      };

      radioButtons.forEach((radio) => {
        (radio as HTMLInputElement).addEventListener('change', (e) => {
          const target = e.target as HTMLInputElement;
          const selectedMethod = target.value;
          this.selectedPaymentMethod = selectedMethod;

          // Hide all details
          Object.values(detailsMap).forEach((detailId) => {
            const element = document.getElementById(detailId);
            if (element) {
              element.style.display = 'none';
            }
          });

          // Show selected method details
          const detailElement = document.getElementById(detailsMap[selectedMethod]);
          if (detailElement) {
            detailElement.style.display = 'block';
          }
        });
      });
    }, 100);
  }
}
