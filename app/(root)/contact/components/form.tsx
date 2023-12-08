'use client';

import ButtonWork from '@/components/ui/button-work';
import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sucessMessage, setSucessMessage] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica que formRef.current esté definido
    if (!formRef.current) {
      console.error('Formulario no definido');
      return;
    }

    // Validación del nombre, correo electrónico y mensaje
    const userName = formRef.current
      .querySelector<HTMLInputElement>('input[name="user_name"]')
      ?.value?.trim();
    const userEmail = formRef.current
      .querySelector<HTMLInputElement>('input[name="user_email"]')
      ?.value?.trim();
    const message = formRef.current
      .querySelector<HTMLTextAreaElement>('textarea[name="message"]')
      ?.value?.trim();

    // Verifica que todos los campos estén completos
    if (!userName || !userEmail || !message) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Validación del formato de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Envía el formulario solo si todas las validaciones son exitosas
    emailjs
      .sendForm(
        'service_k6cgqlh',
        'template_6nntwcl',
        formRef.current,
        'wEsQPymKBGvhm4XUt'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSucessMessage(true);

          // Resetear el formulario después de unos segundos
          setTimeout(() => {
            setSucessMessage(false);
            if (formRef.current) {
              formRef.current.reset();
            }
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje');
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="max-w-2xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-4 mb-5">
        <input
          type="text"
          name="user_name"
          className="w-full bg-dark-light outline-none py-3 px-4 rounded"
          placeholder="Nombre"
        />
        <input
          type="text"
          name="user_email"
          className="w-full bg-dark-light outline-none py-3 px-4 rounded "
          placeholder="Correo electronico"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Mensaje"
          className="w-full bg-dark-light outline-none py-3 px-4 rounded resize-none "
          rows={5}
        ></textarea>
      </div>

      <ButtonWork type="submit" label="Enviar Mensaje" onClick={() => {}} />
      {sucessMessage && (
        <div className="mt-4 p-4 bg-green-200 text-green-800 rounded">
          ¡Mensaje enviado exitosamente! Gracias por contactarte conmigo 😊
        </div>
      )}
    </form>
  );
};

export default Form;
