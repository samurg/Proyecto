import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyProjectsRoutingModule } from './my-projects-routing.module';
import { MyProjectsComponent } from './my-projects.component';
import { NavComponent } from './header/nav/nav.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ItemProjectComponent } from './main/item-project/item-project.component';
import { MyprojectDetailComponent } from './main/myproject-detail/myproject-detail.component';
import { CreateNewProjectComponent } from './main/create-new-project/create-new-project.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';

@NgModule({
  imports: [
    CommonModule,
    MyProjectsRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    ToastModule.forRoot(),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    })
  ],
  declarations: [
    MyProjectsComponent,
    NavComponent,
    ProjectsComponent,
    ItemProjectComponent,
    MyprojectDetailComponent,
    CreateNewProjectComponent
  ]
})
export class MyProjectsModule { }
