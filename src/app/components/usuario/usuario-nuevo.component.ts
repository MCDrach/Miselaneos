import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRouter.parent.params.subscribe( param => {
      console.log('param hijo nuevo');
      console.log(param.id);
      
      
    });
  }

}
