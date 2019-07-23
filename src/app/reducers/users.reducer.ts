import {Action} from '@ngrx/store'
import {GETUSERS} from 'src/app/actions/users.action'
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

export function usersReducer(state:number = 10,action:Action){
  switch(action.type){
      case GETUSERS:
          return 
      default:
          return state;
  }
}
