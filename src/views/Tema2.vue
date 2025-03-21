<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Acople con embrague multidisco y electromagnético
    
    <!-- BLOQUE 1 -->
    p.mb-4 En vehículos con tracción principal en el eje delantero y caja de transferencia electrónica, la tracción se envía al eje posterior solo cuando es necesario. El funcionamiento del sistema es:

    .row.mb-4.h-100.align-items-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 11.
          span Embrague multidisco con control de torque 
        .col-lg-12
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img1.png', alt='Esquema de embrague multidisco con control de torque.')
      .col-lg-6.caja-text-img-tema2-bloque1.h-100.align-items-center
        <ul class="fa-ul">
          <li class="mb-3"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Cuando las ruedas delanteras pierden agarre, el computador de control del sistema activa un <strong>embrague electromagnético</strong>.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Este embrague atrae una <strong>campana magnética</strong>, que a su vez comprime un <strong>embrague multidisco</strong>.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>La activación del sistema depende de varios factores:</li>
          <ul>
            <li class="li-tema1-bloque4"><strong>Aceleración</strong></li>
            <li class="li-tema1-bloque4"><strong>Diferentes velocidades de las ruedas</strong></li>
            <li class="li-tema1-bloque4"><strong>Marcha seleccionada</strong></li>
            <li class="li-tema1-bloque4 mb-3"><strong>Otros parámetros del vehículo</strong></li>
          </ul>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>El computador envía corriente al embrague electromagnético para transferir tracción al eje propulsor posterior.</li>
          <li><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Puede incluir un <strong>mecanismo de control de torque</strong>, con dos pistas ranuradas que ajustan la tracción según la diferencia de giro entre el eje de la transferencia y el eje de salida.</li>
        </ul>

    <!-- BLOQUE 2 -->
    .row.mb-4
      .col-lg-auto
        .caja.titulos-terciarios
          .col-lg-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
          .col.ajuste-tablet-movil
            h3 Caja de transferencia con mando eléctrico

    p.mb-5 Este tipo de caja de transferencia, controlada electrónicamente, permite la selección de alta velocidad, baja velocidad y distribución de tracción mediante una <strong>perilla selectora</strong>. El proceso de funcionamiento es: 

    .row
      .col-lg-2
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 12.
          span Esquema interno de una caja de transferencia con sistema planetario y embrague electromagnético
      .col-lg-2
    .row.mb-4 
      .col-lg-2
      .col-lg-8
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema2/img2.png', alt='Esquema interno de una caja de transferencia con sistema planetario y embrague electromagnético.')

    <!-- BLOQUE 3 -->
    .row.mb-4
      .col-lg-auto
        .caja.titulos-terciarios
          .col-lg-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
          .col.ajuste-tablet-movil
            h3 Motor del selector eléctrico del transfer

    p.mb-4 Este motor es el encargado de seleccionar la tracción en el eje delantero, en un solo eje o en ambos ejes, así como la velocidad alta y baja.

    .bg--img_03.mb-5
      .row
        .col-lg-auto
          figure(data-aos="fade-up").d-none.d-lg-block
            img(src="@/assets/curso/tema1/img14.png", alt="alt" style="width: 325px").m-auto
        .col-lg
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Selección de la posición")
              .col-12
                p.mb-0 El conductor acciona la perilla selectora, activando el motor eléctrico que mueve un selector para desplazar las horquillas de selección.
            .row(titulo="Sensores y control")
              .col-12
                p.mb-0 Un sensor de posición detecta el estado del motor eléctrico, mientras que otro sensor mide la velocidad del eje de salida e informa al computador sobre las revoluciones.                        
            .row(titulo="Acción del computador") 
              .col-12
              p.mb-0 Con los datos de los sensores, el computador selecciona la posición adecuada para la caja de transferencia.

    .row.d-flex.justify-content-center.mb-4
      .caja-text-img-nota-1
        .col-lg-auto.align-self-center
          figure(data-aos="fade-right").d-none.d-lg-block
            img(src="@/assets/curso/intro/img2.png" style="width: 80px").m-auto
        .col-lg
          p.ajuste-p-bloque4 Cuando el piñón gira, la información de posición es enviada al computador, que a su vez enciende una <strong>lámpara en el tablero de instrumentos</strong>, indicando la selección realizada.
        
    <!-- BLOQUE 4 -->
    .row.mb-4
      .col-lg-auto
        .caja.titulos-terciarios
          .col-lg-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
          .col.ajuste-tablet-movil
            h3 Motor del selector eléctrico y sensor de posición
    
    .row.mb-5.h-100.align-items-center
      .col-lg-6.caja-text-img-tema2-bloque4
        p.mb-5 El motor eléctrico desplaza las horquillas de selección para cambiar entre:
        <ul class="fa-ul">
          <li class="mb-5"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span><strong>Marcha normal sencilla </strong>(relación 1:1, tracción en un solo eje).</li>
          <li><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span><strong>Doble transmisión</strong> (tracción en los dos ejes, en alta o baja velocidad).</li>
        </ul>
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 13.
          span Motor eléctrico con engranaje de reducción para caja de transferencia
        .col-lg-12
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/img3.png', alt='Esquema interno de una caja de transferencia con sistema planetario y embrague electromagnético.')

    h4.mb-5 El funcionamiento del sensor de posición: 
      
    .row.mb-4.h-100.align-items-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .caja-text-img-tema2-bloque4-1.ajuste-bloque4
          .row.justify-content-center.mb-4
            .col-7
              figure(data-aos="flip-right")
                img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen' style="max-width: 109px").m-auto
          p <strong>A)</strong> Sobre la superficie del <strong>piñón helicoidal</strong>, hay pistas ranuradas.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .caja-text-img-tema2-bloque4-1.ajuste-bloque4.ajuste-tablet
          .row.justify-content-center.mb-4
            .col-7
              figure(data-aos="flip-right")
                img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen' style="max-width: 109px").m-auto
          p <strong>B)</strong> Las <strong>escobillas de contacto</strong> reciben una tensión del computador.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .caja-text-img-tema2-bloque4-1.ajuste-bloque4-1
          .row.justify-content-center.mb-4
            .col-7
              figure(data-aos="flip-left")
                img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen' style="max-width: 109px").m-auto
          p <strong>C)</strong> Al girar el piñón, las escobillas transmiten información de posición al computador.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .caja-text-img-tema2-bloque4-1
          .row.justify-content-center.mb-4
            .col-7
              figure(data-aos="flip-left")
                img(src='@/assets/curso/tema2/img7.png', alt='Texto que describa la imagen' style="max-width: 109px").m-auto
          p <strong>D)</strong> El computador interpreta estos datos y ajusta la tracción de acuerdo con la selección del conductor.
    
    <!-- BLOQUE 5 -->
    .row.mb-4
      .col-lg-auto
        .caja.titulos-terciarios
          .col-lg-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
          .col.ajuste-tablet-movil
            h3 Posición básica del motor eléctrico en el transfer

    p.mb-4 Para un control preciso, el motor eléctrico debe coincidir con las horquillas de selección: 

    .row.mb-5.h-100.align-items-center
      .col-lg-6.ajuste-caja-tema2__1
        p Señales en la carcasa del transfer.
        <ul class="fa-ul">
          <li class="mb-4"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Indican la posición de referencia para la instalación del motor.</li>
        </ul>
        p Señales en el eje del piñón.
        <ul class="fa-ul">
          <li class="mb-4"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Deben alinearse con las horquillas internas..</li>
        </ul>
        p Verificación de conexiones.
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Un error en los cables puede dañar el computador, el motor o el sensor.</li>
        </ul>
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 14.
          span Instalación del motor eléctrico en la caja de transferencia
        .col-lg-12
          figure(data-aos="fade-left")
            img(src='@/assets/curso/tema2/img8.png', alt='Diagrama del proceso de instalación de un motor eléctrico en la caja de transferencia.')

    <!-- BLOQUE 6 -->
    .row.mb-4
      .col-lg-auto
        .caja.titulos-terciarios
          .col-lg-auto
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
          .col.ajuste-tablet-movil
            h3 Selección de las posiciones de engrane en el transfer

    p.mb-5 La caja de transferencia tiene una estructura similar a la de una <strong>caja de cambios sincronizada</strong>, incluyendo <strong>collarines y sincronizadores</strong>. Esto permite cambios de posición suaves y protege los componentes internos del sistema.
    
    .row
      .col-lg-2
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 15.
          span Diferentes configuraciones de flujo de potencia en la caja de transferencia
    .row.mb-5
      .col-lg-2
      .col-lg-8
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema2/img9.png', alt='Representación esquemática de distintas configuraciones del flujo de potencia dentro de una caja de transferencia.')

    
    p Con esta estructura, la información queda clara y mejor organizada, facilitando la comprensión del funcionamiento del sistema de transferencia de tracción en el vehículo.







      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
