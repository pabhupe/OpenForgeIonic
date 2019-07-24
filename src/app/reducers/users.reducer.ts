/*import {ActionReducer,Action} from '@ngrx/store'
import { createSelector } from "@ngrx/store";
import {UsersAction} from 'src/app/actions/users.action'
import {UsersService} from '../services/users.service'
import {User} from 'src/app/models/user.model'
import * as fromActions from 'src/app/actions/users.action'

const intitialState: User[] = []

export function usersReducer(state=intitialState,action:any){
  
  switch(action.type){
      case 'LOAD_USERS_SUCCESS':{
        return {data:[...state,action.payload]}
      }
      default:
         return state
  }
  
}
export const selectState = state => state.app;





export const selectUser = createSelector(
  selectState,
  (state: any) => state.currentUser
);*/
