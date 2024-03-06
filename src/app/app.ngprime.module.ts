import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PrimeNGConfig } from 'primeng/api';


@NgModule({
  exports: [
    TabMenuModule
  ],
})
export class NgPrimeModule {

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;

    this.primengConfig.setTranslation({
        accept: 'Confirmar',
        reject: 'Cancelar',
        clear: 'Limpar',
        dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["Do","Se","Te","Qa","Qi","Sx","Sa"],
        monthNames: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        weekHeader: "Sem"
    });
}

 }
