import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  private http = inject(HttpClient);

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  isSubmitting = false;
  submitSuccess = false;
  submitError: string | null = null;

  onSubmit() {
    this.submitSuccess = false;
    this.submitError = null;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.submitError = 'Por favor, preencha todos os campos obrigatórios corretamente antes de enviar.';
      return;
    }

    this.isSubmitting = true;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const body = this.contactForm.value;

    this.http.post('https://formsubmit.co/ajax/mariane11.freitas@gmail.com', body, { headers })
      .subscribe({
        next: (response: any) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
        },
        error: (err) => {
          this.isSubmitting = false;
          this.submitError = 'Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.';
          console.error('Erro no envio do formulário:', err);
        }
      });
  }
}

