import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  message;
  college;
  branch;

  constructor(private userService:UserService) { }


  user :string=sessionStorage.name;

  getResultOfStudent()
  {
    let uid=sessionStorage.userId;
    
    
    console.log(uid);
    
    this.userService.getResult(uid).subscribe((res)=>{
     console.log(res);
      
        let allocatedPref :any = res;
        
        if(res!=null)
        {
        this.message= "Congratulations ...You hava been alloted  for : "+ allocatedPref.collegeName + ' and branch :'+allocatedPref.branchName;
         }
        else
         this.message="You've not been allocated to any college";
      
    })

  }



  ngOnInit() {
  }

}
