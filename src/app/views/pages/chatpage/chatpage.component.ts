import { Component } from '@angular/core';
import { CardModule, AvatarModule } from '@coreui/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPhone, faVideo, faEllipsis, faFaceSmile, faMicrophone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chatpage',
  standalone: true,
  imports: [CardModule, FontAwesomeModule, AvatarModule],
  templateUrl: './chatpage.component.html',
  styleUrl: './chatpage.component.scss'
})
export class ChatpageComponent {

  faMagnifyingGlass = faMagnifyingGlass;
  faPhone = faPhone;
  faVideo = faVideo;
  faEllipsis = faEllipsis;
  faFaceSmile = faFaceSmile;
  faMicrophone = faMicrophone;
  faPaperPlane = faPaperPlane;


}
