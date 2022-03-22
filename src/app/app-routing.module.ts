import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';
import { TestFormPageModule } from './pages/test-form.page-module';
import { TestCarsPageModule } from './pages/test-cars.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => HomePageModule
},
{
  path: 'o-nas',
  loadChildren: () => AboutUsPageModule
},
{
  path: 'pracownik',
  loadChildren: () => EmployeesPageModule
},
{
  path: 'pracownik/:name',
  loadChildren: () => EmployeeDetailsPageModule
},
{
  path: 'kontakt',
  loadChildren: () => ContactUsPageModule
},
{
  path: 'testKontakt',
  loadChildren: () => TestFormPageModule
},
{
  path: 'cars',
  loadChildren: () => TestCarsPageModule
},
  { 
        path: 'admin', 
        loadChildren: () => AdminPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule, AboutUsPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
