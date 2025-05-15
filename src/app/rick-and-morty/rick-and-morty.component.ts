import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit  {
  data: any[] = [];
  currentPage: number = 1;
  
  constructor(private rickAndMortyService: RickAndMortyService) { }
  
  ngOnInit(): void { 
    this.getCharacter();
  }

  getCharacter(direction: string = '') {
    if (this.currentPage > 1 && direction === 'back') {
      this.currentPage = this.currentPage - 1;
    }
    if (this.currentPage < 42 && direction === 'forward') {
      this.currentPage = this.currentPage + 1;
    }
    this.rickAndMortyService.getCharacter(this.currentPage.toString()).subscribe({
      next: (response) => {
        this.data = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
