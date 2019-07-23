import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service'
import {ActivatedRoute} from '@angular/router'
import {User} from 'src/app/models/user.model'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username:string
  userInfo= new User()
  constructor(private route:ActivatedRoute,private _userService:UsersService) { }

  ngOnInit() {
    this.username=this.route.snapshot.params['username']
    this.getUserInfo(this.username)
    
  }

  getUserInfo(user){
    this._userService.getUser(user)
    .subscribe(info=>{
      console.log(info)
      this.userInfo=info
      console.log("model",this.userInfo)
    })
  }

}
