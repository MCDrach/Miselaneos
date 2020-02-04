import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(
    private activateRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe( param => {
      console.log('ruta Padre');
      console.log(param.id);
      
    });
  }

}
