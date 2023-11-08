import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  inputsForm: FormGroup = new FormGroup({
      input1: new FormControl(null, Validators.required),
      input2: new FormControl(null, Validators.required),
      input3: new FormControl(null, Validators.required),
      input4: new FormControl(null, Validators.required)
  });
  menuItems:any[] = [
    "rgb(214, 153, 243)",
    "rgb(193, 135, 170",
    "rgb(136, 88, 191)",
    "rgb(176, 127, 255)",
    "rgb(255, 127, 234)",
    "rgb(255, 127, 157)",
    "rgb(218, 80, 112)"
  ];
  input1: string = '';
  input2: string = '';
  input3: string = '';
  input4: string = '';
  chooseColor :any

  constructor(private router:Router) {}

  ngOnInit(): void {
    // this.changeColor
  }
  onSubmit(){
    this.router.navigate(['/two'])
  }
  changeColor(item:any){
    this.chooseColor = item
    document.documentElement.style.setProperty('--color', item.toString());
  }
  resetItems(){
    this.chooseColor = undefined
    this.input1 = '';
    this.input2 = '';
    this.input3 = '';
    this.input4 = '';
    console.log('rrr');
  }
}
