import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { testauthGuard } from './testauth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'user',
        loadChildren: ()=> import('./user/user.module').then(m => m.UserModule)
    },
    {
        path: 'admin',
        loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule),
       // canActivate: [testauthGuard]
    },
    {
        path: 'auth',
        loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
        
    }
];
