import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogComponent } from 'src/app/Modules/commonly/components/dialog/dialog.component';
import { Compound } from 'src/helpers/utils';
import { CompoundService } from '../../Service/compound.service';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css'],
})
export class CompoundDetailComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private compoundService: CompoundService,
    private dialog: MatDialog
  ) {}

  compoundId: string | null = null;
  compoundObservable$: Observable<Compound> | null = null;
  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      const compoundId = params.get('compoundId');
      this.compoundId = compoundId;
      this.compoundObservable$ = this.compoundService.getCompoundById(
        compoundId as string
      );
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        compoundData: this.compoundObservable$,
        callback: (formValues: Compound) => {
          this.compoundService
            .updateCompound(this.compoundId as string, formValues)
            .subscribe((result: string) => {
              alert(result);
            });
        },
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');
    });
  }
}
