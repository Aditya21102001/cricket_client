import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private loggedInKey ='Login';

  constructor() { }
  login(){
    if(typeof window !== 'undefined' && window){
      sessionStorage.setItem(this.loggedInKey, 'true');
    }
  }

  logout(){
    if(typeof window !== 'undefined' && window){
      sessionStorage.removeItem(this.loggedInKey);
    }
  }

  isLoggedIn():boolean{
    if(typeof window !== 'undefined' && window){
        return sessionStorage.getItem(this.loggedInKey) === 'true';
    }
    return false;
  }
}
