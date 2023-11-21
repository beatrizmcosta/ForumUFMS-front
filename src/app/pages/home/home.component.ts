import { Component } from "@angular/core";
import Subject from "../../models/subject.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export default class HomeComponent {
  subjects: Subject[] = [{ name: 'abc' }, { name: 'cde' }]
}