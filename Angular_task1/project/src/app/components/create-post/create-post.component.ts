import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Router, RouterLink } from '@angular/router';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoadingSpinnerComponent, RouterLink],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postForm: FormGroup;
  isSubmitting = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(100)]],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.postForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.error = '';

    this.blogService.createPost(this.postForm.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/posts']);
      },
      error: (err: Error) => {
        this.isSubmitting = false;
        this.error = err.message || 'Failed to create post. Please try again.';
        console.error('Error creating post:', err);
      }
    });
  }
}