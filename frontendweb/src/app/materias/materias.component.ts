import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { Materias } from './materias';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  Erro : string;
  token : string;
  currentview = 1;
  novaMateria : Materias = {
    usuario: 1,
    nome: '',
    ab1: 0,
    ab2: 0,
    reav: 0,
    final: 0,
    media: 0,
    faltas: 0,
    carga_horaria: 0,
    max_faltas: 0,
    conceito: ''
  }

  constructor(private userapi :UserapiService, private router : Router) { }
  todasAsMaterias : Materias[];
  ngOnInit() {
    this.userapi.currentToken.subscribe(token => this.token = token);
    this.userapi.getMaterias(this.token).subscribe(data => this.todasAsMaterias = data);
  }
  addMateria(){
    this.currentview = 2;
  }
  listMateria(){
    this.currentview = 1;
  }
  adicionarNovaMateria(Nome : string, AB1: number, AB2 : number, reav: number, final : number, carga_horaria : number)
  {
    if(AB1 > 10 || AB1 < 0 || AB2 > 10 || AB2 < 0 || reav > 10 || reav < 0 || final > 10 || final < 0 || Nome == '') 
    {
      this.Erro = 'Dados invalidos';
      return ;
    }
    this.novaMateria.nome = Nome;
    this.novaMateria.ab1 = AB1;
    this.novaMateria.ab2 = AB2;
    this.novaMateria.reav = reav;
    this.novaMateria.carga_horaria = carga_horaria;
    this.novaMateria.conceito = 'MT';
    this.userapi.addMateria(this.token, this.novaMateria).subscribe();
    this.userapi.getMaterias(this.token).subscribe(data => this.todasAsMaterias = data);
  }
}
