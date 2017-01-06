import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { AwesomePipe } from '../pipe/awesome.pipe'
import { HighlightDirective } from '../directives/highlight.directive'
//一般放的都是公用的指令和管道
@NgModule({
    imports: [CommonModule],
    declarations: [AwesomePipe, HighlightDirective],
    exports: [CommonModule, FormsModule, AwesomePipe, HighlightDirective]
})

export class SharedModule { }