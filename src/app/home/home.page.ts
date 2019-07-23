import { Component,OnInit,ViewChild  } from '@angular/core';
import {UsersService} from '../services/users.service'
import { usersReducer } from '../reducers/users.reducer';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  since=0
  usersc;
  constructor(private _userService:UsersService) {}
  ngOnInit() {
    this.getUsersF()
  }

  getUsersF(){
    console.log(this.since)
    this._userService.getUsers(0)
    .subscribe(users=>{
      this.usersc = users
    })
  }

  loadData(event){
    this.since=this.since+50
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this._userService.getUsers(this.since)
       .subscribe(users=>{
      for(let i = 0;i<users.length;i++){
        console.log(i,users[i])
        this.usersc.push(users[i])
      }
      console.log(this.usersc.length)
    })
    }, 500);
    if(this.usersc.length>300){
      this.toggleInfiniteScroll()
    }
    //this.toggleInfiniteScroll()
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}
