import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { emtrService } from '../emtr.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
date;
currentDate=new Date();
transDt;
loginmsg:string

  constructor(private userService:UserService,
    private router:Router,private emService:emtrService,private datePipe: DatePipe) { }

    login(loginForm)
    {

      let data = loginForm.form.value;
     this.userService.login(data).subscribe(res=>{
      sessionStorage['email']=res['email'];
      sessionStorage['userId']=res['userId'];
      sessionStorage['name']=res['name'];
      this.emService.logInBtnSwitch(true);//

      this.transDt=this.datePipe.transform(this.currentDate, 'yyyy-MM-dd'); 
      //console.log(this.transDt);
      
      if(res['role']=="STUDENT") 
      {
          if(this.transDt >= this.date)
              this.router.navigate(['result']);
            else
              this.router.navigate(['dash']);
      }
      else
          this.router.navigate(['adminhome']);
  
     },(err)=>{
  
      alert("Something went wrong");
     })
    }
  

  ngOnInit() {
     this.userService.getDate().subscribe((res)=>{
      this.date=this.datePipe.transform(res, 'yyyy-MM-dd');
          console.log(res);
          console.log(this.date);  
          
    });

    this.loginmsg=this.userService.getLoginMessege();
    console.log(this.loginmsg);
    

  }



}
