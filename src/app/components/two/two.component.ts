import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
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

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.chooseColor = this.sharedDataService.dataToShare
  }
  onSubmit() {
    console.log('fff');
    this.router.navigate(['/one'])
  }
  changeColor(item:any){
    this.chooseColor = item
    document.documentElement.style.setProperty('--color', item.toString());
    this.sharedDataService.dataToShare = this.chooseColor;
     // style=css , setProperty= ı wıll add somethıng , key= --color , value=EX:item.toString()
  }
  resetItems(){
    this.chooseColor = undefined
    this.input1 = '';
    this.input2 = '';
    this.input3 = '';
    this.input4 = '';
  }
}
