export default {
  global: {
    Name: 'Caja de transferencia',
    Description:
      'La caja de transferencia distribuye la potencia del motor a las ruedas en vehículos con tracción total, mejorando el agarre y la estabilidad. Existen modelos para motores longitudinales y transversales, con sistemas manuales o eléctricos. Los modernos incluyen sensores y controles electrónicos para optimizar el desempeño en distintos terrenos, ajustando automáticamente la tracción según las condiciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Caja de transferencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Caja de transferencia según la disposición del motor',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Caja de transferencia para motor longitudinal',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Acople con embrague multidisco y electromagnético',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Caja de transferencia',
      referencia:
        'El Conductor Inteligente. (2014). <em>Caja de Transferencia 4x4. [Archivo de video] YouTube</em>.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=E4jqDvUv7ps&ab_channel=ElConductorInteligente ',
    },
    {
      tema: 'Caja de transferencia según la disposición del motor',
      referencia:
        'Quarks. (s.f.). <em>Caja de Transferencia: Todo lo que Debes Saber</em>.',
      tipo: 'Sitio web',
      link:
        'https://www.quarks.com.co/glosario-terminos/caja-transferencia-funcionamiento ',
    },
    {
      tema: 'Caja de transferencia para motor longitudinal',
      referencia: 'Motul. (s.f.). <em>Difusión técnica</em>.',
      tipo: 'Documento',
      link:
        'https://motul.com.ar/wp-content/uploads/2021/06/Cajas-de-transferencia.pdf ',
    },
    {
      tema: 'Acople con embrague multidisco y electromagnético',
      referencia:
        'Tekmatic. (s.f.). <em>Embragues electromagnéticos multidisco con anillo colector</em>.',
      tipo: 'Documento',
      link:
        'https://tekmatic.com.ar/web/uploads/product_download-files/12/16_EEC_EmbraguesMultidisco.pdf?1603736781  ',
    },
  ],
  glosario: [
    {
      termino: 'Acople electromagnético',
      significado:
        'sistema que activa automáticamente la tracción en las cuatro ruedas cuando detecta pérdida de adherencia en las ruedas delanteras.',
    },
    {
      termino: 'Alta velocidad <em>(HIGH)</em>',
      significado:
        'modo en la caja de transferencia que permite que la fuerza se transmita sin reducción, manteniendo la relación 1:1.',
    },
    {
      termino: 'Baja velocidad <em>(LOW)</em>',
      significado:
        'modo en la caja de transferencia que reduce la velocidad de salida y aumenta la fuerza de tracción en terrenos difíciles.',
    },
    {
      termino: 'Caja de transferencia',
      significado:
        'componente del vehículo que distribuye la fuerza del motor a los ejes delantero y trasero en vehículos con tracción en las cuatro ruedas.',
    },
    {
      termino: 'Diferencial',
      significado:
        'mecanismo que permite que las ruedas de un mismo eje giren a diferentes velocidades, mejorando la estabilidad en curvas.',
    },
    {
      termino: 'Eje cardán',
      significado:
        'barra de transmisión que transporta la fuerza desde la caja de cambios o la caja de transferencia hasta el diferencial.',
    },
    {
      termino: 'Motor longitudinal',
      significado:
        'configuración del motor en la que el cigüeñal está alineado con el eje del vehículo, facilitando la tracción trasera o total.',
    },
    {
      termino: 'Motor transversal',
      significado:
        'disposición del motor en la que el cigüeñal está colocado perpendicularmente al eje del vehículo, común en vehículos de tracción delantera.',
    },
    {
      termino: 'Selector de tracción',
      significado:
        'mecanismo que permite elegir entre tracción en dos ruedas o en las cuatro ruedas, ya sea de forma manual o electrónica.',
    },
    {
      termino: 'Sensor de posición',
      significado:
        'dispositivo que informa al computador del vehículo la ubicación exacta de los engranajes dentro de la caja de transferencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Meganeboy, D. (s.f.). Cajas de cambio. Aficionados a la Mecánica.',
      link: '',
    },
    {
      referencia:
        'Santana, C. (2012, noviembre 16). Caja de transferencia. Jeep IKA. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro:
            'Centro de la Tecnología del Diseño y la Productividad Empresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
