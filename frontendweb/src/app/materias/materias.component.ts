import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { Materias } from './materias';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AuthService} from '../auth.service'
import { LittledetailsService } from '../littledetails.service'


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  Erro : string;
  currentview = 1;
  mymateria : Materias;
  novaMateria : Materias = {
    id: 1,
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

  constructor(private userapi :UserapiService, private router : Router, private authapi : AuthService, private detail : LittledetailsService) { }
  todasAsMaterias : Materias[];
  ngOnInit() {
    this.userapi.getMaterias(this.authapi.gettoken()).subscribe(data => this.todasAsMaterias = data);
  }
  addMateria(){
    this.currentview = 2;
  }
  listMateria(){
    this.currentview = 1;
  }
  editmateri(){
    this.currentview = 4;
  }
  deletarMateria(id : number, i : number) {
    this.userapi.deletemateria(this.authapi.gettoken(), id).subscribe(()=>{
      this.todasAsMaterias.splice(i, 1);
    });
  }
  detalhesmaterias(materia : Materias) {
    this.mymateria = materia;
    this.currentview = 3;
  }
  adicionarNovaMateria(Nome : string, AB1: number, AB2 : number, reav: number, final : number, carga_horaria : number)
  {
    if(AB1 > 10 || AB1 < 0 || AB2 > 10 || AB2 < 0 || reav > 10 || reav < 0 || final > 10 || final < 0 || Nome == '' || (carga_horaria != 30 && carga_horaria != 60)) 
    {
      this.Erro = 'Dados invalidos';
      return ;
    }
    this.novaMateria.nome = Nome;
    this.novaMateria.ab1 = AB1;
    this.novaMateria.ab2 = AB2;
    this.novaMateria.reav = reav;
    this.novaMateria.media = this.detail.calcMedia(AB1, AB2, reav, final);
    this.novaMateria.carga_horaria = carga_horaria;
    this.novaMateria.conceito =  this.detail.conceito(this.novaMateria.media, this.novaMateria.faltas, this.novaMateria.max_faltas);
    this.userapi.addMateria(this.authapi.gettoken(), this.novaMateria).subscribe();
    this.todasAsMaterias.push(this.novaMateria);
    this.listMateria();
  }
  logout() {
    this.authapi.deleteToken();
  }
  update(Nome : string, AB1 : number, AB2 : number, reav : number, Final : number, faltas : number) {
    if(Nome){this.mymateria.nome = Nome}
    if(AB1){this.mymateria.ab1 = AB1}
    if(AB2){this.mymateria.ab2 = AB2}
    if(reav){this.mymateria.reav = reav}
    if(Final){this.mymateria.final = Final}
    if(faltas){this.mymateria.faltas = faltas}
    this.userapi.updatemateria(this.authapi.gettoken(), this.mymateria.id, this.mymateria);
    this.detalhesmaterias(this.mymateria);
  }
}
