import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatsComponentComponent } from "./components/stats-component/stats-component.component";
import { StudentListComponent } from "./components/student-list/student-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StatsComponentComponent, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student-Grade-Tracker';
}
