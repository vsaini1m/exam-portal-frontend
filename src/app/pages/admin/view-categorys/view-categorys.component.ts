import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categorys',
  templateUrl: './view-categorys.component.html',
  styleUrls: ['./view-categorys.component.css']
})
export class ViewCategorysComponent implements OnInit {


  categories=[{
    cid:0,
    title:'Loading... ',
    description:'Loading... '
  
}]

  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !!","Error in loading data ",'error');
    }
    )
  }

}
