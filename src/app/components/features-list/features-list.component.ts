import { Component } from '@angular/core';
import { ClarityIcons, userIcon, boltIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(userIcon, boltIcon);

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss']
})
export class FeaturesListComponent {
  collapsed = true;
}
