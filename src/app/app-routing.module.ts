import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {path: "news", component: NewsComponent},
  {path: "cards", component: CardRegisterComponent},
  {path: "pokemon", component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
