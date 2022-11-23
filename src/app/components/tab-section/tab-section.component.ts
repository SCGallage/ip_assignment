import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-section',
  templateUrl: './tab-section.component.html',
  styleUrls: ['./tab-section.component.scss']
})
export class TabSectionComponent {
  dashboardActive = false;
  managementActive = false;
  cloudActive = true;
  infrastructureActive = false;
}
