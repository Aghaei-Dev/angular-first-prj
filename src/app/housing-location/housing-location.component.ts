import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HousingLocation } from '../housinglocation'
import { RouterOutlet, RouterModule } from '@angular/router'

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
