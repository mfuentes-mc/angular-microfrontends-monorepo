import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-microfrontends-monorepo-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css',
})
export class PricesComponent {}
