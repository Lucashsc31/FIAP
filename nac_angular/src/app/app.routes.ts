import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ContatoComponent } from './contato/contato.component';

export const ROUTES: Routes = [
  {path:'',component:HomeComponent},
  {path:'alunos',component:AlunosComponent},
  {path:'disciplinas',component:DisciplinasComponent},
  {path:'contato',component:ContatoComponent}
]
