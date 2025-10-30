import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { LnunezComponent } from './lnunez/lnunez.component';
import { XdelabraComponent } from './xdelabra/xdelabra.component';
import { YrodriguezComponent } from './yrodriguez/yrodriguez.component';
import { JsantiagoComponent } from './jsantiago/jsantiago.component';
import { Miguel } from './miguel/miguel';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'lnunez',
        component: LnunezComponent
      
    },
    {
        path: 'xdelabra',
        component: XdelabraComponent
    },
    {
        path: 'yrodriguez',
        component: YrodriguezComponent
    },
    {
        path: 'jsantiago',
        component: JsantiagoComponent
    },
    {
        path:'miguel',
        component: Miguel
    },
    {
        path: '**',
        redirectTo: ''
    }
];
