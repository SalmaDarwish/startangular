import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import {of} from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  

})
export class MoviesComponent implements OnInit {
  allMovies:any=[]
  isLoading:Boolean=true;
  loadingIimage: boolean = true;

  constructor(private _moviesService:MoviesService) { 

  }

  ngOnInit(): void {
    this.getAllData()
  }
  getAllData(){
    this._moviesService.getMovies().subscribe(
      (res)=>{
        this.allMovies=res.results;
        console.log(this.allMovies);
        this.isLoading=false;
      },
      (err)=>{
        this.isLoading=false

      },
      ()=>console.log("completed")
    
    )
  }
  
onLoad() {
    this.loadingIimage = false;
}
}
