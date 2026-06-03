import FAQClient from '@/components/storefront/faq/FAQClient';

export const metadata = {
  title: 'Preguntas frecuentes — Recio',
  description:
    'Respuestas a las preguntas más comunes sobre tallas, materiales, pagos, envíos y cambios.',
};

const faqs = [
  {
    pregunta: '¿Cómo saber cuál es mi talla ideal?',
    respuesta:
      'En cada producto encontrarás una guía de tallas detallada. Recomendamos medir una prenda que ya tengas y comparar las medidas con nuestra tabla para un ajuste preciso.',
  },
  {
    pregunta: '¿Qué tipo de materiales utilizan?',
    respuesta:
      'Seleccionamos fibras naturales y mezclas técnicas de alta calidad, priorizando la durabilidad y la comodidad para el uso diario en entornos urbanos.',
  },
  {
    pregunta: '¿Cuál es la política de cambios?',
    respuesta:
      'Ofrecemos cambios sin costo adicional durante los primeros 30 días. La prenda debe estar sin uso y con sus etiquetas originales para ser procesada.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta:
      'Aceptamos las principales tarjetas de crédito, débito y transferencias bancarias a través de nuestra pasarela de pagos segura.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda en llegar mi pedido?',
    respuesta:
      'El tiempo de envío estándar es de 3 a 5 días hábiles, dependiendo de tu ubicación, con seguimiento detallado enviado a tu correo electrónico.',
  },
  {
    pregunta: '¿Realizan envíos internacionales?',
    respuesta:
      'Por el momento, nuestros envíos están limitados al territorio nacional, pero estamos trabajando para expandir nuestras operaciones pronto.',
  },
  {
    pregunta: '¿Qué pasa si mi producto llega con algún defecto?',
    respuesta:
      'Si recibes una prenda con algún inconveniente de fabricación, contacta a nuestro equipo de soporte dentro de las primeras 48 horas tras la recepción para gestionar un cambio inmediato sin costo.',
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) w-full py-(--spacing-section)">
        <h1 className="text-4xl font-display font-bold mb-12 uppercase tracking-tighter text-primary">
          Preguntas frecuentes
        </h1>

        <div className="max-w-3xl">
          <FAQClient faqs={faqs} />
        </div>
      </div>
    </main>
  );
}
