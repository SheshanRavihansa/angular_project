import { Component } from '@angular/core';

@Component({
  selector: 'app-add-poduct',
  templateUrl: './add-poduct.component.html',
  styleUrl: './add-poduct.component.css'
})
export class AddPoductComponent {

  ngOnInit(): void {
    alert("ngOnInit Called");
    console.log("triggered ngOnInit")
  }

  ngDoCheck() {
    console.log("triggered ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("triggered ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("triggered ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("triggered ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("triggered ngAfterViewChecked");
  }

  ngOnDestroy() {
    alert("ngDestroy Called");
    console.log("triggered ngOnDestroy");
  }

}
