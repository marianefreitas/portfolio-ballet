import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
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

    const body = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      _captcha: 'false',
      _subject: `[Contato Portfólio] ${this.contactForm.value.subject || 'Nova mensagem'}`
    };

    this.http.post('https://formsubmit.co/ajax/e946c67f0b67a42be11fb4f3f453aaa2', body, { headers })
      .subscribe({
        next: (response: any) => {
          console.log('Resposta FormSubmit:', response);
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

