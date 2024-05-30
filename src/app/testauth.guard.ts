import { CanActivateFn, Router } from '@angular/router';

export const testauthGuard: CanActivateFn = (route, state) => {
  let router: Router = new Router();
  // const toaster : ToastrService = inject(ToastrService);
   const token = localStorage.getItem('token');
   if (token)
   {
     if(state.url.indexOf('admin'))
     {
       let user:any = localStorage.getItem('user');
       user = JSON.parse(user);
       if(user.role == "2")
       {
        router.navigate(['admin/index'])
         return true
       }
       //user student
       else
       {
         router.navigate(['auth/login'])
         return false;
       }
     }
     return true
   }
 
   else{
     router.navigate(['auth/login'])
   return false;
   }
};
