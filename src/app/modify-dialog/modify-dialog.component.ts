import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Component({

  selector: 'app-modify-dialog',
  templateUrl: './modify-dialog.component.html',
  styleUrls: ['./modify-dialog.component.css']
})
export class ModifyDialogComponent implements OnInit {
public title:string;
public desc:string;
public weekly: any;
public myForm:FormGroup;

  constructor(public dialogRef: MatDialogRef<ModifyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Reclamation,public http:HttpClient) { }

  public sendPost() {
    window.location.reload();
    let daata = {
      idR:1,
      dateReclamation:"07/05/2022",
      objectReclamation:"test",
      status:"test",

    }
    this.http.put("http://localhost:8000/api/Reclamations/modify-reclamations",daata).subscribe(response => {
      console.log(response)
    });

  }



    processKeyupTitle(value: string) {
    this.title+=value;
  }
  processKeyupDesc(value: string) {
    this.desc+=value;
  }
  ngOnInit(): void {


  }


}
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}
export class KeyUpComponent_v1 {
  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
}
export interface Reclamation{

  idR:number;
  dateReclamation:string;
  objectReclamation:string;
  status:string;
}

