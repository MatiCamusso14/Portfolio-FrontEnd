import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skills';
import { SkillService } from 'src/app/servicio/skill.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  porcentajeDinamico(porcentaje: number) {
    const styles = { 'width': porcentaje.toString() + '%' };
    return styles;
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}