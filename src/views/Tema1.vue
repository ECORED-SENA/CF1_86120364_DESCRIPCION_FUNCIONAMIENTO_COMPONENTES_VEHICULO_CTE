<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Caja de transferencia
    
    <!-- BLOQUE 1 -->
    .row.fondo-text
      p.mb-5 La caja de transferencia es un componente clave en vehículos diseñados para distribuir la fuerza del motor a las ruedas motrices. Esta transmisión de potencia pasa por la caja de cambios, ya sea mecánica o automática, hasta llegar al sistema diferencial y luego a las ruedas del vehículo. En un vehículo con tracción en un solo eje, la fuerza se dirige de la siguiente manera:

      .row.mb-5
        .col-lg-1
        .col-lg-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Esquema de un vehículo con tracción delantera
          .col-lg
            figure(data-aos="flip-left")
              img(src='@/assets/curso/tema1/img-1.svg', alt='Diagrama esquemático de un sistema de tracción en un vehículo, donde se representa un eje sin conexión y otro con un motor y un sistema de transmisión, presentando  la distribución de la fuerza motriz.')
          .col-lg.text-tema1-bloque1(data-aos="fade-up")
            p.mb-0 <strong>Tracción delantera:</strong> en configuraciones transversales, la fuerza se dirige a las ruedas delanteras. 
        .col-lg-5
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Esquema de un vehículo con tracción posterior
          .col-lg
            figure(data-aos="flip-left")
              img(src='@/assets/curso/tema1/img-2.svg', alt='Diagrama esquemático de un sistema de tracción en un vehículo con motor delantero y transmisión a las ruedas traseras.')
          .col-lg.text-tema1-bloque1-2(data-aos="fade-up")
            p.mb-0 <strong>Tracción posterior:</strong> cuando el motor y la caja de cambios están dispuestos longitudinalmente, la fuerza se transmite a las ruedas traseras.
 
      p.mb-5 Algunos vehículos modernos han evolucionado hacia un sistema de tracción en ambos ejes, lo que mejora la seguridad, el agarre y la estabilidad. En este caso, la caja de transferencia se encarga de distribuir la potencia entre los ejes delantero y trasero.

    <!-- BLOQUE 2 -->
    .row.mb-4
      .col-lg-auto
        .caja.titulos-terciarios(data-aos="fade-right")   
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
          .col
            h3 Función de la caja de transferencia

    p.mb-5 En los vehículos con tracción total o en las cuatro ruedas, la caja de transferencia permite conectar la salida de la caja de cambios con ambos ejes, independientemente de la disposición del motor.

    TabsB.color-acento-contenido.mb-4(data-aos="fade-up")
      .py-4.py-lg-5(titulo="Motor longitudinal" :icono="require('@/assets/curso/tema1/img2.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Motor longitudinal
            p La caja de transferencia recibe la fuerza de la caja de cambios y la distribuye al diferencial trasero y, a través de engranajes o cadenas, al diferencial delantero.
          .col-lg-6
            figure(data-aos="zoom-out")
              img(src='@/assets/curso/tema1/img3.svg', alt='Diagrama del sistema de transmisión de un vehículo 4x4, presentando la caja de cambios, caja de transferencia y los diferenciales delantero y posterior.')
      .py-4.py-lg-5(titulo="Motor transversal" :icono="require('@/assets/curso/tema1/img2.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            h4 Motor transversal
            p La fuerza se transmite directamente al diferencial delantero. A través de un juego de piñones, la caja de transferencia envía la propulsión hacia el diferencial trasero.
          .col-lg-6
            figure(data-aos="zoom-out")
              img(src='@/assets/curso/tema1/img4.svg', alt='Diagrama del sistema de transmisión de un vehículo con caja de cambios, caja de transferencia y diferenciales delantero y posterior.')

    Separador
    <!-- BLOQUE 3 -->
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Caja de transferencia según la disposición del motor

    .row.fondo-text
      p.mb-5 La caja de transferencia varía según la disposición del motor en el vehículo. En motores longitudinales, distribuye la fuerza desde la caja de cambios hacia los diferenciales delantero y trasero mediante ejes de propulsión. En motores transversales, se integra con el diferencial delantero y envía la potencia al eje trasero mediante un sistema de piñones y cardán.

      .row.mb-4
        .col-lg-auto
          .caja.titulos-terciarios(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
            .col
              h3 Caja de transferencia para motor transversal

      .row.mb-5
        .col-lg-6.caja-text-img-tema1-bloque3(data-aos="fade-right")
          h5 Cuando el motor y la caja de cambios están instalados transversalmente:
          <ul class="fa-ul">
            <li class="mb-4"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>La caja de cambios transmite la fuerza al diferencial delantero, que impulsa las ruedas delanteras.</li>
            <li class="mb-4"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Si el vehículo tiene tracción en las cuatro ruedas, la caja de transferencia está integrada en el diferencial delantero o acoplada a él.</li>
            <li><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>La propulsión hacia las ruedas traseras se logra mediante un eje cardán, conectado al diferencial trasero.</li>
          </ul>
        .col-lg-6
          .figura
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 3.
              span Caja de transferencia diferencial delantera 
            .col-lg-12
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img5.svg', alt='Diagrama en corte de una caja de transferencia con diferencial delantero.')

      .row.d-flex.justify-content-center(data-aos="fade-right")
        .caja-text-img-nota-1
          .col-lg-auto.align-self-center
            figure.d-none.d-lg-block
              img(src="@/assets/curso/intro/img2.svg" style="width: 80px").m-auto
          .col-lg
            p.mb-0 Este sistema es más compacto, ya que solo requiere un cambio de dirección en la transmisión de la fuerza desde el eje de salida de la caja hasta la orientación longitudinal del vehículo. 

    Separador
    <!-- BLOQUE 4 -->
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Caja de transferencia para motor longitudinal

    .row.fondo-text.h-100.align-items-center
      .col-lg
        p En los vehículos con motor dispuesto longitudinalmente, la caja de transferencia cumple un papel clave en la distribución de la fuerza motriz. Esta recibe la potencia de la caja de cambios y la transmite al eje propulsor (<strong>cardán</strong>), el cual se conecta con el diferencial posterior para llevar la fuerza a las ruedas a través de los ejes.
        p Además, la caja de transferencia también envía fuerza al diferencial delantero mediante otro eje propulsor. Cuando el motor está en funcionamiento, este movimiento se transfiere desde la caja de transferencia hasta los diferenciales delantero y posterior a través de los ejes de propulsión.  
      .col-lg-auto
        figure(data-aos="fade-left").d-none.d-lg-block
          img(src="@/assets/curso/tema1/img6.png", alt="Diagrama en corte de una caja de transferencia con diferencial delantero." style="max-width: 400px").m-auto

      .row.my-5
        .col-lg-3
        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 4.
            span Esquema de transmisión: caja de cambios automática y caja de transferencia
      .row.mb-5
        .col-lg-3
        .col-lg-6
          figure(data-aos="fade-up")
            img(src='@/assets/curso/tema1/img7.svg', alt='Esquema de transmisión con caja de cambios automática y caja de transferencia.')
      
    .row.mb-5
      .col-lg-6.caja-text-img-tema1-bloque3(data-aos="fade-right")
        h5 El funcionamiento de la caja de transferencia es:
        <ul class="fa-ul">
          <li class="mb-3"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Los <strong>ejes de propulsión</strong> reciben la fuerza de la caja de transferencia y la transmiten:</li>
          <ul>
            <li class="li-tema1-bloque4">Al cono del diferencial delantero.</li>
            <li class="li-tema1-bloque4 mb-4">Al cono del diferencial posterior.</li>
          </ul>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Cada diferencial distribuye la fuerza a las ruedas mediante los <strong>semiejes de propulsión</strong>.</li>
          <li class="mb-3"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>En el <strong>sistema posterior</strong>, si el eje es rígido, los semiejes no requieren articulaciones.</li>
          <li><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>En el <strong>sistema delantero</strong>, los ejes deben ser articulados para permitir el giro de las ruedas con el sistema de dirección.</li>
        </ul>
      .col-lg-6
        .figura
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 5.
            span Esquema del sistema de transmisión con caja de transferencia y diferenciales
          .col-lg-12
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img8.svg', alt='Esquema de un sistema de transmisión con caja de cambios, diferenciales y semiejes.')

    .row.d-flex.justify-content-center.mb-5
      .caja-text-img-nota-1(data-aos="fade-right")
        .col-lg-auto.align-self-center
          figure.d-none.d-lg-block
            img(src="@/assets/curso/intro/img2.svg" style="width: 80px").m-auto
        .col-lg
          p.ajuste-p-bloque4 En la figura se presenta la disposición de la caja de transferencia, los ejes de propulsión o <strong>cardanes</strong>, y los diferenciales delantero y posterior, mostrando cómo se distribuye la fuerza hacia las ruedas del vehículo. 
    
    <!-- BLOQUE 5 -->
    .row.fondo-text.mb-5
      .row.mb-4
        .col-lg-auto
          .caja.titulos-terciarios.ajuste-caja-color(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
            .col
              h3 Trabajo de una caja de transferencia longitudinal

      p.mb-5 La caja de transferencia en vehículos con motor y caja de cambios dispuestos longitudinalmente recibe el movimiento del eje de salida de la caja de cambios a través de un piñón de mando estriado. Su función principal es permitir la selección entre dos modos de tracción:

      .row.mb-5.align-items-center
        .col-lg-6.ajuste-caja__3
          <ul class="fa-ul">
            h5 Tracción en las ruedas posteriores
            <li class="mb-5"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Utilizada en condiciones normales de carretera, como autopistas o calles de ciudad.</li>
            h5 Tracción en las cuatro ruedas
            <li><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Activada en terrenos resbaladizos o con poco agarre, mejorando la adherencia del vehículo.</li>
          </ul>
        .col-lg-6
          .figura
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 6.
              span Diagrama de una caja de transferencia y sus conexiones
            .col-lg-12
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img9.svg', alt='Diagrama de una caja de transferencia con sus conexiones.') 

      .row.d-flex.justify-content-center
        .caja-text-img-nota-1
          .col-lg-auto.align-self-center
            figure(data-aos="fade-right").d-none.d-lg-block
              img(src="@/assets/curso/intro/img2.svg" style="width: 80px").m-auto
          .col-lg
            p.ajuste-p-bloque4 Para alternar entre estas opciones, el conductor utiliza una <strong>palanca selectora</strong> o un <strong>sistema de mando eléctrico</strong>, dependiendo del diseño del vehículo.
    
    <!-- BLOQUE 6 -->
    .row.mb-4
      .col-lg-auto
        .caja.titulos-terciarios(data-aos="fade-right")   
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
          .col
            h3 Partes de una caja de transferencia longitudinal

    p.mb-5 Cada fabricante adapta la caja de transferencia al diseño de su caja de cambios y al sistema mecánico del vehículo. Sin embargo, todas las cajas de transferencia funcionan de manera similar. Evolución del mecanismo de selección de tracción:

    .row.mb-5.h-100.align-items-center
      .col-lg-6.ajuste-caja__1
        <ul class="fa-ul">
          h5 Modelos antiguos
          <li class="mb-5"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Selector manual para elegir entre tracción en dos o cuatro ruedas.</li>
          h5 Modelos modernos
          <li><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span>Sistema eléctrico controlado por el conductor mediante una perilla.</li>
        </ul>
      .col-lg-6
        .figura
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 7.
            span Esquema del flujo de fuerza en el sistema de transmisión con caja de transferencia
          .col-lg-12
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img10.svg', alt='Esquema de transmisión con caja de cambios, transfer y flujo de fuerza.')   

    .row.d-flex.justify-content-center.mb-5
      .caja-text-img-nota-1
        .col-lg-auto.align-self-center
          figure(data-aos="fade-right").d-none.d-lg-block
            img(src="@/assets/curso/intro/img2.svg" style="width: 80px").m-auto
        .col-lg
          p.ajuste-p-bloque4 Los primeros modelos también contaban con un selector adicional que permitía engranar piñones para reducir la velocidad y aumentar la fuerza. Este mecanismo se conoce como <strong>reducción o baja velocidad (<em>LOW</em>)</strong>.
    
    <!-- BLOQUE 7 -->
    .row.mb-4
      .col-lg-auto
        .caja.titulos-terciarios(data-aos="fade-right")    
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
          .col
            h3 Partes de una caja de transferencia longitudinal

    p.mb-5 Las cajas de transferencia ofrecen dos modos de velocidad para adaptarse a diferentes condiciones de manejo:

    .row.mb-5.h-100.align-items-center
      .col-lg-6.ajuste-caja__2.align-items-center
        <ul class="fa-ul">
          <li class="mb-5"><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span><strong>Alta velocidad (<em>HIGH</em>)</strong>: la fuerza proveniente de la caja de cambios se transmite directamente, sin reducción de velocidad.</li>
          <li><span class="fa-li"><i class="fas fa-wrench ajuste-i-color"></i></span><strong>Baja velocidad (<em>LOW</em>)</strong>: se engranan piñones adicionales que reducen la velocidad de salida, aumentando la fuerza motriz.</li>
        </ul>
      .col-lg-6
        .figura
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 8.
            span Detalle del mecanismo interno de una caja de transferencia con cadena
          .col-lg-12
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img12.svg', alt='Figura el mecanismo interno de una caja de transferencia con cadena, mostrando los componentes clave como ejes, engranajes y sistema de transmisión de potencia mediante cadena para distribuir el movimiento a las ruedas.')    

    .row.d-flex.justify-content-center.mb-5
      .caja-text-img-nota-1
        .col-lg-auto.align-self-center
          figure(data-aos="fade-right").d-none.d-lg-block
            img(src="@/assets/curso/intro/img2.svg" style="width: 80px").m-auto
        .col-lg
          p.ajuste-p-bloque4 En los primeros modelos, esto se lograba desplazando un sistema de engranajes, permitiendo una relación de transmisión de <strong>1:1</strong> en alta velocidad y una reducción en baja velocidad.

    <!-- BLOQUE 8 -->
    .row.fondo-text.mb-5
      .row.mb-4
        .col-lg-auto
          .caja.titulos-terciarios(data-aos="fade-right")    
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
            .col
              h3 Caja de transferencia longitudinal moderna

      p.mb-5 Las cajas de transferencia actuales han evolucionado para ofrecer un control más preciso mediante sistemas eléctricos. Funcionamiento según el tipo de tracción seleccionado:

      .row
        .col-lg-2
        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 9.
            span Esquema del sistema de tracción en las cuatro ruedas con caja de transferencia
      .row.mb-5  
        .col-lg-2
        .col-lg-8
          figure(data-aos="fade-up")
            img(src='@/assets/curso/tema1/img13.svg', alt='Diagrama del sistema de tracción en las cuatro ruedas con caja de transferencia.')

      .bg--img_03
        .row
          .col-lg-auto
            figure(data-aos="fade-up").d-none.d-lg-block
              img(src="@/assets/curso/tema1/img14.png", alt="alt" style="width: 325px").m-auto
          .col-lg
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Tracción en el eje posterior")
                .col-12
                  p.mb-0 La fuerza va directamente al eje propulsor trasero, conectado al diferencial posterior.
              .row(titulo="Tracción en las cuatro ruedas")
                .col-12
                  p.mb-0 El piñón de mando del eje estriado se une al eje de mando, transmitiendo la fuerza a través de una <strong>cadena <em>Morse</em></strong> hasta el diferencial delantero.                        
              .row(titulo="Modo de reducción (<em>LOW</em>)") 
                .col-12
                p.mb-0 Un piñón entra en el sistema planetario de reducción, disminuyendo la velocidad de los ejes propulsores y aumentando la fuerza (relación aproximada <strong>2.5:1</strong>).
      
    <!-- BLOQUE 9 -->
    .row.mb-4
        .col-lg-auto
          .caja.titulos-terciarios(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema1/img1.svg" style="max-width: 68px").m-auto
            .col
              h3 Elementos clave de una caja de transferencia longitudinal moderna

    p.mb-5 En los vehículos todoterreno con caja de transferencia moderna, se incluyen los siguientes componentes esenciales:

    .row
      .col-lg-2
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 10.
          span Despiece de una caja de transferencia con sistema planetario y cadena <em>Morse</em>
    .row.mb-5
      .col-lg-2
      .col-lg-8
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema1/img15.svg', alt='Despiece de una caja de transferencia con sistema planetario y cadena Morse.')

    .row.mb-5
      .col-sm-6.col-lg-3.mb-lg-0
        .caja-text-img-tema1-bloque9.ajuste-1
          .row
            .col-7
              figure(data-aos="flip-right")
                img(src='@/assets/curso/tema1/img16.png', alt='Texto que describa la imagen')
          h5 Sistema planetario
          p Permite el cambio entre alta y baja velocidad.
      .col-sm-6.col-lg-3.mb-lg-0
        .caja-text-img-tema1-bloque9.ajuste-2
          .row
            .col-7
              figure(data-aos="flip-right")
                img(src='@/assets/curso/tema1/img17.png', alt='Texto que describa la imagen')
          h5 Horquilla y cubo reductor
          p Engranan la reducción mediante un motor eléctrico.
      .col-sm-6.col-lg-3.mb-lg-0
        .caja-text-img-tema1-bloque9.ajuste-3
          .row
            .col-7
              figure(data-aos="flip-left")
                img(src='@/assets/curso/tema1/img18.png', alt='Texto que describa la imagen')
          h5 Cadena <em>Morse</em>
          p De gran dimensión, transmite la fuerza al eje secundario, enviándola al diferencial delantero.
      .col-sm-6.col-lg-3.mb-lg-0
        .caja-text-img-tema1-bloque9
          .row
            .col-7
              figure(data-aos="flip-left")
                img(src='@/assets/curso/tema1/img19.png', alt='Texto que describa la imagen')
          h5 Diferencial interno central
          p Regula la diferencia de velocidad entre los ejes delantero y trasero, evitando el arrastre de los neumáticos en curvas cerradas.
    
    p Con esta estructura, el texto queda más organizado, facilitando la comprensión de los conceptos y el funcionamiento de la caja de transferencia longitudinal.  

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
