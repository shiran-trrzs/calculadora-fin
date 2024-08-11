import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  stocks: Stocks[] = [];

  addStock(stock: Stocks) {
    this.stocks.push(stock);
  }

  profit(startDate: string, endDate: string): number {
    let profit = 0;

    this.stocks.forEach((stock) => {
      const startPrice = stock.price(startDate);
      const endPrice = stock.price(endDate);
      profit += (endPrice - startPrice);
    });

    return profit;
  }
}

export class Stocks {
  constructor (
    private id: string,
    private priceAccordingToDate: { [date: string]: number},
  ) {}

  price(date: string): number {
    return this.priceAccordingToDate[date] || 0;
  }
}

const portfolio = new PortfolioComponent();

const uberStock1 = new Stocks('UBER-1', {
  '2024-08-01': 100,
  '2024-08-02': 200
});

const igStock1 = new Stocks('IG-1', {
  '2024-08-01': 100,
  '2024-08-02': 200
});


portfolio.addStock(uberStock1);
portfolio.addStock(igStock1);

const profit = portfolio.profit('2024-08-01', '2024-08-02');
console.log('profit', profit);
