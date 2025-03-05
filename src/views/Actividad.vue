<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Caja de transferencia y ejes',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo: Identificar  la función, tipos, modos de operación y sistemas modernos de la caja de transferencia en vehículos con tracción en las cuatro ruedas.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la caja de transferencia en un vehículo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La reducción del consumo de combustible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La transmisión de la fuerza del motor a las ruedas motrices.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El control del sistema de frenado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La regulación de la temperatura del motor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de caja de transferencia se encuentra en un motor dispuesto de forma longitudinal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La caja de transferencia de motor longitudinal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La caja de transferencia de motor transversal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La caja de cambios automática.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diferencial de tracción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se transmite la fuerza en una caja de transferencia de motor transversal en un vehículo 4x4?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'A través de un eje directo al diferencial trasero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mediante un sistema hidráulico sin diferenciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Por medio de un juego de piñones hasta un eje cardán y de este al diferencial trasero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo mediante el diferencial delantero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función de la selección de alta y baja velocidad en la caja de transferencia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ajustar la relación de transmisión para mayor tracción o velocidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Permitir que el vehículo tenga mejor aerodinámica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar el sistema de frenado en pendientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejorar el consumo de combustible en carretera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cómo se controla actualmente la selección de tracción en una caja de transferencia moderna?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mediante una palanca de cambios convencional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con un sistema hidráulico de presión de aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con un sistema de poleas y correas de transmisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'A través de un mando eléctrico y un computador de control',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes afirmaciones sobre la caja de transferencia es incorrecta?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Todos los vehículos tienen caja de transferencia, sin importar su tipo de tracción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La caja de transferencia puede estar integrada con el diferencial delantero en motores transversales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La caja de transferencia distribuye la fuerza entre los ejes delantero y trasero en vehículos 4x4.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Existen cajas de transferencia con acople electromagnético para gestionar la tracción automáticamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué sistema permite que la caja de transferencia distribuya la fuerza de manera automática cuando se pierde adherencia en las ruedas delanteras?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El embrague multidisco con acople electromagnético.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La caja de cambios sincronizada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El sistema de engranajes internos del diferencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El freno de emergencia asistido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué sucede cuando el conductor selecciona la tracción en las cuatro ruedas en una caja de transferencia longitudinal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La fuerza del motor se distribuye tanto al eje delantero como al trasero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se desconecta el diferencial delantero para reducir consumo de combustible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La caja de cambios entra en modo de ahorro de energía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El vehículo deja de recibir tracción en el eje trasero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la ventaja principal del sistema de caja de transferencia con mando eléctrico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce la velocidad máxima del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Funciona solo en vehículos con transmisión manual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite al conductor cambiar la configuración de tracción sin esfuerzo manual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Anula el funcionamiento del diferencial delantero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué componente de la caja de transferencia ayuda a evitar el desgaste de los neumáticos en curvas cerradas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema de frenos ABS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La palanca de selección manual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El diferencial interno central.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El eje cardán trasero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La caja de transferencia permite enviar la fuerza del motor a un solo eje o a los dos ejes del vehículo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En los modelos antiguos, la caja de transferencia se controlaba mediante un sistema electromagnético.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Los vehículos con tracción en las cuatro ruedas requieren una caja de transferencia para distribuir la fuerza del motor.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La caja de transferencia solo funciona en vehículos con transmisión automática.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El sistema de acople electromagnético en la caja de transferencia activa la tracción en el eje trasero cuando detecta pérdida de adherencia en las ruedas delanteras.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
