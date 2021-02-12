import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AccountDetailComponent,
  },
  {
    path: '/:id',
    component: AccountDetailComponent,
  },
];

@NgModule({
  declarations: [
    AccountDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountModule { }
