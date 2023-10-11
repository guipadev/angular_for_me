import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

import { SharingService } from '../sharing.service';

/**
 * Los cambios que se detectan por medio de OnPush son:
 * - clic
 * - tayping cada evento del usuario
 * - subscriciones
 * - input
 * - output
 *
 * Si pasara de un componente padre a este hijo, un input y luego
 * este cambia su valor, va a hacer un thriller de cambios
 */

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
  /**
   * Ahora si tuvieramos un componente padre y dos hijos, y cada uno de estos dos hijos hermanos tuviera otros dos hijos
   * Si cualquiera de estos componentes realiza un trigger hace que vaya para arriba hasta el padre y tambien inunda las
   * otras ramas, por lo cual busca cambio en toda la app
   * Con OnPush del componente que se ha hecho el cambio, solamente se va ha detectar esa rama hasta el root y las otras
   * ramas no se tienen en cuenta, mejorando el performance
   */
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/**
 * Todos los cambios que se realizan en Angular, como clic y demas tiene un pero
 * ya que Angular trabaja por zonas detectando los cambios de la app y mira igual
 * si hay cambios en otros lugares
 * Esto es poco performance porque generalmente un componente puede estar independizado
 * de otro, por lo cual no me importa ver ese cambio en dicho componente
 *
 *
 */

// AfterViewInit ciclo de vida de un componente, luego que la vista se halla inicializado
export class LazyComponent implements AfterViewInit {
  variable: string;

  // Inyectar ref al comopnente para poder ser trigger y detención de cambios
  constructor(
    private cdr: ChangeDetectorRef,
    private sharingService: SharingService
  ) {
    this.variable = 'Programador tuki tuki';
    // this.cdr.detach(); // Detener cambios, no tenerlos en cuenta
  }

  ngAfterViewInit() {
    this.variable = 'Información ha cambiado';
    //this.cdr.reattach(); // unir y devolver a detectar cambios detenidos
    // Lo hacemos luego de donde se realiza la detención, para que lo tome
    this.cdr.detectChanges();
    // luego de hacer todo lo que tiene que hacer la funcionalidad, una vez que esto termine, esto va a estar marcado, para que sea chequeado luego
    this.sharingService.sharingObservable.subscribe((resp) => {
      this.cdr.markForCheck();
    });
  }
}
