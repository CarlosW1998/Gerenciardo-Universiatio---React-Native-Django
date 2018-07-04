import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LittledetailsService {

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
    media = (ab1 + ab2) /2;
    if (reav){
      if(ab1 < ab2 && ab2 < reav){media = (reav + ab2) /2}

      if(ab2 < ab1 && ab2 < reav){media = (ab1 + reav)/2)}
    }
    if(final){media = ((0.6*media) + (0.4*final))}
    
    return media;
  }

a : number;
}