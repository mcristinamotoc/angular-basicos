import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
 heroes: string[] = ['Spiderman','Iron', 'Hulk', 'Superman'];
 heroeBorrado: string = '';

 borrar(){
 this.heroeBorrado= this.heroes.shift() || '';
 console.log("Borrando..." + this.heroeBorrado);
 }
}

