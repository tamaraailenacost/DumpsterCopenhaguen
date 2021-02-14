import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../marcador.class';
import { stringify } from 'querystring';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 55.6832268;
  lng = 12.5454197;

  marcador: Marcador[] = [];



  constructor( private _snackBar: MatSnackBar,
               public dialog: MatDialog,
               public auth: AuthService
               ) {

    const mar = new Marcador(55.6832268, 12.5454197);
    this.marcador.push(mar);

    if(localStorage.getItem('marcadores')) {
      this.marcador = JSON.parse(localStorage.getItem('marcadores'));
    }
  }//

  ngOnInit(): void {
  }//

  getmarck( event ) {

    if( !localStorage.getItem('tokken')) {
      return;
    }
    console.log(event);
    const coords: {lat: number, lng: number} = event.coords;

    const newMark = new Marcador(coords.lat, coords.lng);
    this.marcador.push(newMark);
    this.guardarStorage();

    // Simple message with an action.
    this._snackBar.open('Spot archived', 'close', { duration: 3000});
  }//


  guardarStorage() {

    localStorage.setItem('marcadores', JSON.stringify(this.marcador));
  }//

  delete(i: number){

    this.marcador.splice(i, 1);
    this.guardarStorage();
    this._snackBar.open('Spot delete', 'close', { duration: 3000});


  }//

  edit( marcador: Marcador) {
    const dialogRef = this.dialog.open( EditComponent, {
      width: '350px',
      data: { title: marcador.title,
              feature: marcador.feature
            }
    });

    dialogRef.afterClosed().subscribe(result => {

      if( !result ) { return; }

      marcador.title = result.title;
      marcador.feature = result.feature;
      this.guardarStorage();
      this._snackBar.open('spot save', 'close', { duration: 3000});

    });


  }//

  add( marcador: Marcador) {

    if( !localStorage.getItem('tokken')) {
      return;
    }
    console.log(this.marcador);
    marcador.cont = marcador.cont + 1;
    this.guardarStorage();
  }

}
