import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'portal', pathMatch: 'full' },
    { path: 'portal', loadComponent: () => import('./pages/portfolio/portfolio.component').then(e => e.PortfolioComponent)}
];
