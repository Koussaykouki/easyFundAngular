import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-back',
  templateUrl: './navbar-back.component.html',
  styleUrl: './navbar-back.component.css'
})
export class NavbarBackComponent {
  
  private scripts: any = {
    "vendorBundleBase": { loaded: false, src: "/assets/BackOffice/vendors/js/vendor.bundle.base.js" },
    "chartJs": { loaded: false, src: "/assets/BackOffice/vendors/chart.js/Chart.min.js" },
    "bootstrapDatepicker": { loaded: false, src: "/assets/BackOffice/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js" },
    "progressBarJs": { loaded: false, src: "/assets/BackOffice/vendors/progressbar.js/progressbar.min.js" },
    "offCanvas": { loaded: false, src: "/assets/BackOffice/js/off-canvas.js" },
    "hoverableCollapse": { loaded: false, src: "/assets/BackOffice/js/hoverable-collapse.js" },
    "template": { loaded: false, src: "/assets/BackOffice/js/template.js" },
    "settings": { loaded: false, src: "/assets/BackOffice/js/settings.js" },
    "toDoList": { loaded: false, src: "/assets/BackOffice/js/todolist.js" },
    "dashboard": { loaded: false, src: "/assets/BackOffice/js/dashboard.js" },
    "roundedBarCharts": { loaded: false, src: "/assets/BackOffice/js/Chart.roundedBarCharts.js" }
};

constructor(private router: Router) {}
  logout(): void {
    // Clear user data from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Redirect to login page
    this.router.navigate(['/login']);
  }

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
