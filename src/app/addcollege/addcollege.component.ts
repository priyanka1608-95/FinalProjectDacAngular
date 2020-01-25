import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcollege',
  templateUrl: './addcollege.component.html',
  styleUrls: ['./addcollege.component.css']
})
export class AddcollegeComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  addcollege(collegeForm)
  {

    let data = collegeForm.form.value;
    this.userService.addclg(data).subscribe((res)=>{
      alert("college added .. with college Id "+res);
    })
  }

  ngOnInit() {
  }

}
