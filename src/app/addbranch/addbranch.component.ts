import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.component.html',
  styleUrls: ['./addbranch.component.css']
})
export class AddbranchComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  college;


 

  addBranch(addBranchForm)
  {
    let data = addBranchForm.form.value;
    console.log(data);
    
    let clgid=data.collegeId;
    

    this.userService.addbranch(data,clgid).subscribe((res)=>{
      alert("college added .. with college Id "+res);
    })
  }

  ngOnInit() {
  }

}
