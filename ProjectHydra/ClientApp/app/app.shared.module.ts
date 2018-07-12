import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/app/shared/header/header.component';
import { FooterComponent } from './components/app/shared/footer/footer.component';
import { OvertimeComponent } from './components/overtime/overtime.component';
import { TimeoffComponent } from './components/timeoff/timeoff.component';
import { MyinfoComponent } from './components/myinfo/myinfo.component';
import { PayslipComponent } from './components/payslip/payslip.component';
import { SkillsComponent } from './components/skills/skills.component';
import { GoalsComponent } from './components/goals/goals.component';
import { RequestComponent } from './components/requests/request.component';
import { PerformanceComponent } from './components/performance/performance.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        OvertimeComponent,
        TimeoffComponent,
        MyinfoComponent,
        PayslipComponent,
        SkillsComponent,
        GoalsComponent,
        RequestComponent,
        PerformanceComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'timeoff', component: TimeoffComponent },
            { path: 'overtime', component: OvertimeComponent },
            { path: 'payslip', component: PayslipComponent },
            { path: 'myinfo', component: MyinfoComponent },
            { path: 'skills', component: SkillsComponent },
            { path: 'goals', component: GoalsComponent },
            { path: 'request', component: RequestComponent },
            { path: 'performance', component: PerformanceComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
