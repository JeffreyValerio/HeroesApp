import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private heroeService: HeroesService, private router: Router) {}

  ngOnInit(): void {}

  buscarHeroe(term: string) {
    this.router.navigate(['/buscar', term]);
    this.heroeService.buscarHeroes(term);
    if (term === '') {
      this.router.navigate(['/heroes']);
    }
  }
}
