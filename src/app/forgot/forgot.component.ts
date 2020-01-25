import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  data;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  forgot(forgotForm)
  {
   
    this.data=forgotForm.form.value;
    sessionStorage['email']=this.data.email;
    this.userService.forgot(this.data).subscribe((res)=>{
      this.router.navigate(['otp']);
    },(err)=>{

    alert("Enter register email address");
   })
}

}
