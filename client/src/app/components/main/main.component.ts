import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../shared/services/http.service';
import { Observable } from 'rxjs' ;
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  jokes$:Observable<Array<any>>;
  constructor(private http: HttpService , public dialog: MatDialog) { }

  ngOnInit() {
    this.jokes$ = this.http.getData();
  }

  getJoke(jokeData){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: jokeData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
