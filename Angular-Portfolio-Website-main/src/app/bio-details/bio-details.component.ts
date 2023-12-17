import { Component, Input, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent  {

  @Input() showDiv: boolean = false; // Parent to Child

  constructor(private router: Router, private el: ElementRef) {
  }

  scrollTo(section: string): void {
    const element = this.el.nativeElement.querySelector(`.${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openLinkedInProfile()
  {
    const urlToOpen = 'https://www.linkedin.com/in/uzair-ashraf-015713146/';
    window.open(urlToOpen, '_blank'); 
  }

  openGithubProfile()
  {
    const urlToOpen = 'https://github.com/mr-uzair';
    window.open(urlToOpen, '_blank'); 
  }

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
