import { Component, OnInit } from '@angular/core';
import { Compound } from 'src/helpers/utils';
import { CompoundService } from '../../Service/compound.service';

@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.css'],
})
export class CompoundListComponent implements OnInit {
  constructor(private compoundService: CompoundService) {}

  compoundInfo: Compound[] | null = null;

  ngOnInit(): void {
    this.compoundService.getCompoundList().subscribe(
      (result: Compound[]) => {
        this.compoundInfo = result;
        console.log('hsdssd', this.compoundInfo);
      },
      (error: Error) => console.log('error', error)
    );
  }
}
