<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    <!-- BLOQUE 1 -->   
    .row.mb-4
      p La caja de transferencia es un componente esencial en los vehículos con tracción en las cuatro ruedas, ya que permite distribuir la potencia del motor hacia ambos ejes, mejorando la estabilidad y el agarre en distintos terrenos. Su funcionamiento varía según la disposición del motor y la caja de cambios, puede ser longitudinal o transversal.

    <!-- BLOQUE 2 --> 
    .row.mb-4
      .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="fade-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 A lo largo de los años, este sistema ha evolucionado desde mecanismos manuales hasta versiones electrónicas más avanzadas, que permiten seleccionar la tracción de manera automática según las condiciones del camino. Esto ha optimizado el rendimiento y la seguridad en la conducción, facilitando la adaptación a diferentes superficies.
    
    .row.caja-text-img-nota(data-aos="fade-right")
      .col-lg-auto.align-self-center
        figure(data-aos="fade-right").d-none.d-lg-block
          img(src="@/assets/curso/intro/img2.svg" style="width: 80px").m-auto
      .col-lg
        p.mb-0 Actualmente, las cajas de transferencia modernas integran sensores y controles electrónicos que garantizan un engranaje preciso y eficiente. Gracias a estos avances, los vehículos pueden cambiar entre tracción en dos o cuatro ruedas sin interrupciones, proporcionando una mejor experiencia de manejo y mayor eficiencia en el consumo de energía. 

</template>

<script>
export default {
  name: 'Introduccion',
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
