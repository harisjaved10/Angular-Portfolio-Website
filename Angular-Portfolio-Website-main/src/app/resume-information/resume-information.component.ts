import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-information',
  templateUrl: './resume-information.component.html',
  styleUrls: ['./resume-information.component.css']
})
export class ResumeInformationComponent {

  @Input() showDiv: boolean = false; // Parent to Child

  constructor(private router: Router) {}

  openCroemTab(){
    const urlToOpen = 'https://croeminc.com/';
    window.open(urlToOpen, '_blank');
  }

  openFunsolTab()
  {
    const urlToOpen = 'https://www.futuresol.net/';
    window.open(urlToOpen, '_blank'); 
  }

  downloadResume()
  {
    const pdfPath = 'assets/UzairCV.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'UzairCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // window.open(pdfPath, '_blank');
  }

  goToAnotherComponent()
  {
    this.router.navigate(['/projects']);
  }

}
