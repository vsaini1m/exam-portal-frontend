import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categorys',
  templateUrl: './add-categorys.component.html',
  styleUrls: ['./add-categorys.component.css']
})
export class AddCategorysComponent implements OnInit {

  category = {
    title: '',
    description: ''
  };
  constructor(private _category: CategoryService,
    private _snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  /**
   * formSubmit
   */
  public formSubmit() {

    if (this.category.title.trim() == '' || this.category.title == null) {
      this._snack.open("title required", 'ok');
    }
    else if (this.category.description.trim() == '' || this.category.description == null) {
      this._snack.open("description required", 'ok');
    } else {

      this._category.addNewCategory(this.category).subscribe((data: any) => {
        this.category.title = '';
        this.category.description = '';

        Swal.fire('Success || ', 'Category added successfully.', 'success');
      },
        (error) => {
          Swal.fire('Faild || ', 'Category added faild.', 'error');
        }
      )
    }



  }
}
