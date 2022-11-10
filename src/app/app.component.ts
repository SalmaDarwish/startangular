import { Component, OnInit } from '@angular/core';
import { GeneralService } from './shared/services/general.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title(title: any) {
  throw new Error('Method not implemented.');
}
constructor(public generalServices: GeneralService){}
 
ngOnInit() {
  window.addEventListener('scroll', function() {
    navbarScroll();
   });
   function navbarScroll() {
     var y = window.scrollY;
     if (y > 10) {
       var header = document.getElementsByClassName('navbar-expand-lg')[0];
         header.classList.add('x');
   
     } else if (y < 10) {
         var header = document.getElementsByClassName('navbar-expand-lg')[0];
        header.classList.remove('x');
     }
   }
}
}
