import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _cat:CategoryService
  ) { }


  
  
  categories=[{
    cid:0,
    title:'Loading... ',
    description:'Loading... '
  
}]

  ngOnInit(): void {

    this._cat.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error:any)=>{
      console.log(error);
    }
    )
  }

}
