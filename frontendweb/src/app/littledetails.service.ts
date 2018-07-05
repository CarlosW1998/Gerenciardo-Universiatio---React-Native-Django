import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Injectable({
  providedIn: 'root'
})
export class LittledetailsService {
  media = 0;
  constructor() { }
  conceito(media : number, nivelFaltas : number){
    if (media >= 7)
      return "Aprovado"

    if(media < 5)
      return "Reprovado"

    if (media >= 5.5)
      return "Aprovado"

    if(media <= 5.5)
      return "Reprovado"

    if(nivelFaltas >= 0.25)
      return "Reprovado por Falta!"

    return "Matriculado"
  }
  calcMedia(ab1 :number, ab2 : number, reav : number, final : number){
    this.media = (Number(ab1) + Number(ab2)) /2;
    if (reav){
      if(ab1 < ab2 && ab2 < reav){this.media = (Number(reav) + Number(ab2)) /2}
      if(ab2 < ab1 && ab2 < reav){this.media = (Number(ab1) + Number(reav))/2)}
    }
    if(final != 0){this.media = ((0.6*Number(this.media)) + (0.4*Number(final)))}
    
    return this.media;
  }
}