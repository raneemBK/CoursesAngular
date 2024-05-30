import { CanActivateFn } from '@angular/router';
import { json } from 'stream/consumers';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
 let router:Router = new Router();
   const token = localStorage.getItem('token');
   if (token)
   {
     if(state.url.indexOf('admin'))
     {
       let user:any = localStorage.getItem('user');
       user = JSON.parse(user);
       if(user.role == '2')
       {
         return true
       }
       else
       {
         router.navigate(['auth/login'])
         return false;
       }
     }
     else{
      router.navigate(['auth/login'])
      return false;
     }
   }
 
   else{
     router.navigate(['auth/login'])
   return false;
   }
};


