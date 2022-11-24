import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  promedioSeasons: number = 0;

  selected: boolean = false;
  selectedSerie!: Serie;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedioSeasons = this.calcularPromedioSeasons();
    });
  }

  calcularPromedioSeasons(): number {
    let sumaSeasons: number = 0;
    this.series.forEach((serie) => { sumaSeasons += serie.seasons; });
    return sumaSeasons / this.series.length;
  }

  onSelected(serie: Serie): void {
    this.selected = true;
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
