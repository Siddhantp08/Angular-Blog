import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-container" [ngClass]="{'small': small}">
      <div class="spinner"></div>
    </div>
  `,
  styles: [`
    .spinner-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    
    .spinner-container.small {
      padding: 0;
    }
    
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(51, 102, 204, 0.2);
      border-radius: 50%;
      border-top-color: #3366CC;
      animation: spin 0.8s linear infinite;
    }
    
    .small .spinner {
      width: 20px;
      height: 20px;
      border-width: 2px;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() small = false;
}