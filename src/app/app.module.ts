import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaitejaComponent } from './saiteja/saiteja.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwowayBindingComponent} from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductComponent } from './product/product.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { PipeComponent } from './pipe/pipe.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { CalculatorformsComponent } from './calculatorforms/calculatorforms.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { routingComponents, TechRoutingModule } from './tech-routing/tech-routing.module';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { JavacompComponent } from './javacomp/javacomp.component';
import { WebcompComponent } from './webcomp/webcomp.component';
import { Search1pipePipe } from './search1pipe.pipe';
import { Sort1pipePipe } from './sort1pipe.pipe';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';
import { EmpsortPipe } from './empsort.pipe';
import { EmpsearchPipe } from './empsearch.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SaitejaComponent,
    InterpolationComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwowayBindingComponent,
    CalculatorComponent,
    ProductComponent,
    MycolorDirective,
    PipeComponent,
    StructDirectivesComponent,
    SearchpipePipe,
    SortPipe,
    ParentComponent,
    ChildComponent,
    ParentcompComponent,
    ChildcompComponent,
    CalculatorformsComponent,
    FirstComponent,
    SecondComponent,
    routingComponents,
    Sibling1Component,
    Sibling2Component,
    JavacompComponent,
    WebcompComponent,
    Search1pipePipe,
    Sort1pipePipe,
    ModelDrivenComponent,
    TemplateDrivenComponent,
    Employee1Component,
    Employee2Component,
    EmpsortPipe,
    EmpsearchPipe,
    
    
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,TechRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
