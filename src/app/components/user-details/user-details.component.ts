import { Component, OnInit ,Input} from '@angular/core';
import { Iuser } from '../../users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  info!:Iuser

  constructor() { }

  ngOnInit(): void {
  }

}
