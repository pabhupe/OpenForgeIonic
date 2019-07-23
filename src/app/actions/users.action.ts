import {Action} from '@ngrx/store'

export const GETUSERS = '[Users] GetUsers'

export class GetUsersAction implements Action {
    readonly type = GETUSERS
}