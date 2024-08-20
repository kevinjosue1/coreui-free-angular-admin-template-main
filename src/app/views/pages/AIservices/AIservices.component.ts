import { Component } from '@angular/core';
import { SpechtotextComponent } from './components/spechtotext/spechtotext.component';
import { TexttospechComponent } from './components/texttospech/texttospech.component';
import { ClasificadorComponent} from './components/clasificador/clasificador.component';
@Component({
  selector: 'app-aiservices',
  standalone: true,
  imports: [SpechtotextComponent, TexttospechComponent, ClasificadorComponent],
  templateUrl: './AIservices.component.html',
  styleUrl: './AIservices.component.scss'
})
export class AiservicesComponent {

}
