import { Component, Input, OnInit } from '@angular/core';
import { Compound } from 'src/helpers/utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() info: Compound | null = null;

  ngOnInit(): void {
    console.log('jdhbs bsdssd', this.info);
  }
}
