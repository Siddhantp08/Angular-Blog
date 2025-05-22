import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="app-header">
      <div class="container">
        <h1 class="app-title">Mini Blog</h1>
        <nav class="app-nav">
          <a routerLink="/posts" routerLinkActive="active">View Posts</a>
          <a routerLink="/create" routerLinkActive="active">Create Post</a>
        </nav>
      </div>
    </header>
    
    <main class="app-content">
      <router-outlet></router-outlet>
    </main>
    
    <footer class="app-footer">
      <div class="container">
        <p>&copy; 2025 Mini Blog. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .app-header {
      background-color: #f6a451;
      color: #333;
      padding: 16px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
    }
    
    .app-header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .app-title {
      margin: 0;
      font-size: 24px;
    }
    
    .app-nav {
      display: flex;
      gap: 24px;
    }
    
    .app-nav a {
      color: #333;
      text-decoration: none;
      padding: 8px 0;
      font-weight: 600;
      position: relative;
      transition: color 0.3s ease;
    }
    
    .app-nav a:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      transition: width 0.3s ease;
    }
    
    .app-nav a:hover:after,
    .app-nav a.active:after {
      width: 100%;
    }
    
    .app-content {
      min-height: calc(100vh - 136px);
      background: linear-gradient(to bottom, #FFF3E0, #F57C00, #FFF3E0);
    }
    
    .app-footer {
      background-color: #f5f5dc;
      color: #333;
      padding: 16px 0;
      font-size: 14px;
    }
    
    @media (max-width: 600px) {
      .app-header .container {
        flex-direction: column;
        gap: 16px;
      }
      
      .app-nav {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class AppComponent {
  title = 'Mini Blog';
}