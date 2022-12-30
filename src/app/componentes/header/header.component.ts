import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private scriptservice: CargarScriptsService) {

    this.scriptservice.loadScript();

  }

  ngOnInit(): void {

  }

}
