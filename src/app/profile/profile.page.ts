import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service'
import {ActivatedRoute} from '@angular/router'
import {User} from 'src/app/models/user.model'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username:string
  userInfo= new User()
  valueSearch:string;
  showInfo=true;
  constructor(private route:ActivatedRoute
    ,private _userService:UsersService,private theInAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.username=this.route.snapshot.params['username']
    if(this.username!=null){
    console.log("UserName"+this.username)
    this.getUserInfo(this.username)}
    else{
      this.eraseData()
    }
  }

  eraseData(){
    this.showInfo=false
    this.userInfo=null

  }

  getUserInfo(user){
    this._userService.getUser(user)
    .subscribe(info=>{
      console.log(info)
      this.userInfo=info
      //console.log("model",this.userInfo)
    })
  }

  searchUser($event){
    this.valueSearch=$event.target.value
    this._userService.getUser(this.valueSearch)
    .subscribe(info=>{
      console.log(info)
      this.userInfo=info
      this.showInfo=true
      this.username=info.login
      //console.log("model",this.userInfo)
    },(err)=>{
      console.log(err)
      this.showInfo=false
      this.username = "Not Found"
    })
  }

  visitPage(){
    let target = "_system";
    this.theInAppBrowser.create(this.userInfo.blog,target);
  }


}
