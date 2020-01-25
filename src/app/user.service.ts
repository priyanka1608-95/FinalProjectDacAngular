import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
loginmsg:string

  register(user){

    return this.http.post("http://localhost:8080/DacAug19/user/register",user);

  }


  login(user)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/login",user);
  }

  forgot(user)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/forgot",user);
  }
  confirmOtp(otp)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/confirmOtp",otp);
  }

  resetPassword(pass)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/resetpassword",pass);
  }

  addPreference(pref)
  {
    return this.http.post("http://localhost:8080/DacAug19/user/preferencesOfUser",pref);
  }

  getcolleges()
  {
    return this.http.get("http://localhost:8080/DacAug19/college/allcollege");
  }

  getclgName(colleges)
  {
    return this.http.get("http://localhost:8080/DacAug19/college/getclgName/"+colleges);
  }

  deleteclg(clgid)
  {
    return this.http.delete("http://localhost:8080/DacAug19/college/deleteclg/"+clgid);
  }

  addclg(college)
  {
    return this.http.post("http://localhost:8080/DacAug19/college/addCollege",college);
  }

  addbranch(branch,clgid)
  {
    return this.http.post("http://localhost:8080/DacAug19/college/addBranch/"+clgid,branch);
  }

  getDate()
  {
    return this.http.get("http://localhost:8080/DacAug19/Date/getDate");
  }

  getResult(uid)
  {
    return this.http.get("http://localhost:8080/DacAug19/checkPreference/"+uid);
  }

  changedt(data)
  {
    return this.http.post("http://localhost:8080/DacAug19/Date/changeDate",data);
  }

  getLoginMessege()
  {
    return this.loginmsg;
  }

  setLoginMessege(loginmsg:string)
  {
    this.loginmsg=loginmsg;
  }

}
