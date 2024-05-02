import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-front',
  templateUrl: './footer-front.component.html',
  styleUrl: './footer-front.component.css'
})
export class FooterFrontComponent {
  private scripts: any = {
    "jquery": { loaded: false, src: "/assets/FrontOffice/assets/js/jquery.min.js" },
    "popper": { loaded: false, src: "/assets/FrontOffice/assets/js/popper.min.js" },
    "bootstrap": { loaded: false, src: "/assets/FrontOffice/assets/js/bootstrap.min.js" },
    "rangeSlider": { loaded: false, src: "/assets/FrontOffice/assets/js/ion.rangeSlider.min.js" },
    "slick": { loaded: false, src: "/assets/FrontOffice/assets/js/slick.min.js" },
    "datepicker": { loaded: false, src: "/assets/FrontOffice/assets/js/datepicker.js" },
    "datepickerEn": { loaded: false, src: "/assets/FrontOffice/assets/js/datepicker.en.js" },
    "niceSelect": { loaded: false, src: "/assets/FrontOffice/assets/js/jquery.nice-select.js" },
    "steps": { loaded: false, src: "/assets/FrontOffice/assets/js/jquery-steps.js" },
    "particles": { loaded: false, src: "/assets/FrontOffice/assets/js/particles.js" },
    "magnificPopup": { loaded: false, src: "/assets/FrontOffice/assets/js/jquery.magnific-popup.min.js" },
    "isotope": { loaded: false, src: "/assets/FrontOffice/assets/js/isotope.pkgd.min.js" },
    "wow": { loaded: false, src: "/assets/FrontOffice/assets/js/wow.min.js" },
    "custom": { loaded: false, src: "/assets/FrontOffice/assets/js/custom.js" },
    "validate": { loaded: false, src: "/assets/FrontOffice/assets/js/jquery.validate.min.js" },
    "form": { loaded: false, src: "/assets/FrontOffice/assets/js/form.js" }
  };

  constructor() { }

  ngOnInit(): void {
    this.loadScripts();
  }

  ngOnDestroy(): void {
    // Remove script tags on component destroy if needed
    Object.keys(this.scripts).forEach(key => {
      if (this.scripts[key].loaded) {
        let scriptTag = document.querySelector(`script[src="${this.scripts[key].src}"]`);
        if (scriptTag) {
          scriptTag.remove();
        }
      }
    });
  }

  private loadScripts() {
    Object.keys(this.scripts).forEach(key => {
      if (!this.scripts[key].loaded) {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[key].src;
        script.async = false;
        script.defer = true;
        script.onload = () => {
          this.scripts[key].loaded = true;
        };
        document.head.appendChild(script);
      }
    });
  }
}
