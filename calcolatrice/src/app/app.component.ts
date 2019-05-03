import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcolatrice';
  myForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'n1': ['', Validators.required], 'n2': ['', Validators.required],
    });
  }

  somma(){

  }
  sottrazione(){

  }
  moltiplicazione(){

  }
  divisione(){

  }

}
