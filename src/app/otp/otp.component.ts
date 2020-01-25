import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  data;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  confirmOtp(myForm)
  {
    this.data=myForm.form.value;
    console.log=this.data;
    this.userService.confirmOtp(this.data).subscribe((res)=>{
      this.router.navigate(['resetpassword']);
    })
  }

}
