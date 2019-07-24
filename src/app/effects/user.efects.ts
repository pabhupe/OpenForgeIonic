/*import { Injectable } from '@angular/core';
import { Effect, Actions,ofType } from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {UsersService} from '../services/users.service'
//import {UsersAction} from '../actions/users.action'
import { catchError, map, mergeMap, tap, switchMap } from "rxjs/operators";
import * as actions from 'src/app/actions/users.action'
import { of, from } from "rxjs";
import { Observable } from "rxjs";
//import 'rxjs/add/operator/switchMap';


@Injectable()
export class UserEffects {
    constructor(private action$:Actions,
        private _userService:UsersService,private usersActions:UsersAction){

    }

    @Effect()
    loadUsers$:Observable<Action> = this.action$
    /*@Effect()
    getUsers:Observable<Action> = this.action$
    .pipe(
        ofType(actions.GET_USERS),
        map((action:any)=>({...action.payload})),
        switchMap(()=>{
            return from(this._userService.getUsers()).pipe(
                map(_result=>{
                    console.log('result',_result)
                    return {
                        type:actions.GET_USERS,
                        payload:_result
                    } 
                })
            )
        })
    )*/

    /*allUsers$ = this._userService.getUser(0)
    .pipe(
        map(birthdays => {
            console.log("allUsers$ called");
            return this.usersActions.loadUserSuccess(birthdays)
        })
    )
    

    


}*/