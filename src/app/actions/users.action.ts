import {Action} from '@ngrx/store'
import {User} from 'src/app/models/user.model'
import {Injectable} from '@angular/core';

/*export const GET_USER:string = 'GET_USERS'
@Injectable()
export class UsersAction{
    
    
    constructor(){}
    static REQUEST_USER = 'REQUEST_USER';
    requestUser(user:User){
        return{
            type:UsersAction.REQUEST_USER,
            payload:user
        }
    }
    static LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
    loadUserSuccess(users:User) {
        return {
            type: UsersAction.LOAD_USERS_SUCCESS,
            payload: users
        }
    }
}

export type Actions = UsersAction*/