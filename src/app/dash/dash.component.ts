import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})

export class DashComponent implements OnInit {

  date;
  data: any
  clg;
  collegelist;
  pre = [];
  branches: any;
  selectedcollege: any
  branchId;

  preferences: Array<{ userId: number, branchName: string, collegeName: string}> = [];

  collegeBranchList: Array<{ college: string, branch: string }> = [];

  branch;
  college;

  prefData;
  error;

   user=sessionStorage.name;

  constructor(private userService: UserService, private router: Router,private datePipe:DatePipe) { }

  
  getcolleges() {
    this.userService.getcolleges().subscribe((data) => {
      console.log(data);
      this.prefData = data;
      // this.selectedcollege=this.collegelist[0]

    });
  }

  changeCollege(college) {
    console.log(college.collegeName);
  }
  getBranch(collegeName: any) {

    //this.clg=Colleges.target.value
    console.log(this.collegelist);
    console.log(collegeName);
    
    this.collegelist.forEach(element => {
      if(element.collegeName == collegeName )
      {
        this.branches=element.branch;
        console.log(this.branches);
      }
      
    });
    // this.branches=Colleges
    console.log(this.branches);

    console.log(this.branches);

  }

  
  ngOnInit() {
    this.userService.getcolleges().subscribe((data) => {
      console.log(data);
      this.collegelist = data;

    });

    this.userService.getDate().subscribe((res)=>{
      this.date=this.datePipe.transform(res, 'yyyy-MM-dd');
      
    })

  }

  //Ritesh Methods

  addPreferences() {

    let pref = {
      userId: sessionStorage.userId,
      branchName: this.branch,
      collegeName: this.college
    }

    let collegeBranch = {
      college: this.college,
      branch: this.branch
    }

    this.collegeBranchList.push(collegeBranch);

    console.log(pref);

    this.preferences.push(pref);

    console.log(this.preferences);
  }

  submitPreferences() {

    if (this.preferences.length == 0) {
      console.log("Please select prefernces");
      this.error = 'Please select prefernces';
      this.prefData = null;
    } else {
      this.error = null;
      this.prefData = JSON.stringify(this.preferences);

      this.userService.addPreference(this.preferences).subscribe((res) => {

        console.log(res);
        alert("added successfully..");
  
      }, (error) => {
  
      }
      );

    }
  }

  clearPreferences() {
    console.log(this.preferences);
    this.preferences = [];
    this.collegeBranchList = [];
    console.log(this.preferences);

  }
}
