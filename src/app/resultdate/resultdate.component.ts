import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-resultdate',
  templateUrl: './resultdate.component.html',
  styleUrls: ['./resultdate.component.css']
})
export class ResultdateComponent implements OnInit {

  constructor(private userService:UserService,private datePipe: DatePipe) { }

  

  changedt(dtForm)
  {
    
    let data :any=dtForm.form.value;
    
    let dateData = {
      dateId:1,
      eventName:"result date",
      eventDate:data.eventDate

    } 
    
    console.log(dtForm.form.value);
    
    console.log(dateData);
    

    this.userService.changedt(dateData).subscribe((res)=>{
    
      alert("date changed");
    })
  }

  ngOnInit() {
  }

}
