import { Component } from "@angular/core";
import Subject from "../../models/subject.model";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, NgbModule]
})
export default class HomeComponent {
  subjects: Subject[] = [{ name: 'abc' }, { name: 'cde' }]
}