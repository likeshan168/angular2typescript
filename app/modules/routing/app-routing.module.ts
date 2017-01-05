import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'


export const routes: Routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'crisis', loadChildren: '../crisis/crisis.module#CrisisModule' },
    //惰性加载模块的位置是字符串而不是类型。 在本应用中，该字符串同时标记出了模块文件和模块类，两者用#分隔开。
    { path: 'heroes', loadChildren: '../hero/hero.module#HeroModule' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }