import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
})
export class OrderTotalsComponent implements OnInit {
  @Input() shippingPrice: number;
  @Input() subtotal: number;
  @Input() total: number;

  constructor() { }

  ngOnInit(): void {
  }

}