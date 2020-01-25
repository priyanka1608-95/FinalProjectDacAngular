import { Component } from '@angular/core';
import { emtrService } from './emtr.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isLogin:false;

  constructor(private emservice:emtrService,private router:Router){

  }

  ngOnInit() {

    this.emservice.getEmittedValueForLogbtnSwitch()
      .subscribe(item => this.isLogin=item);

      
  }

  logout(){
   // alert("In logout");
    this.isLogin=false;
    delete sessionStorage['email'];
    this.router.navigate(['login'])
  }
  

}

