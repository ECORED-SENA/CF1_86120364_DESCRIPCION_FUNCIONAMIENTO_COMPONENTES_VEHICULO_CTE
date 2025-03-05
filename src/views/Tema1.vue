<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Caja de transferencia

    Separador
    <!-- BLOQUE  -->
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Caja de transferencia según la disposición del motor


    Separador
    <!-- BLOQUE  -->
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Caja de transferencia para motor longitudinal
    



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
