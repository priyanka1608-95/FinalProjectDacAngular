import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  register(myForm){

    let data = myForm.form.value;
   
    console.log(data.gender);

    this.userService.register(data).subscribe((res)=>{

      console.log(res);
      alert("register successfully");
      this.router.navigate(['login']);


    
    },(error)=>{

    }
)

   

  }


  ngOnInit() {
  }

}
