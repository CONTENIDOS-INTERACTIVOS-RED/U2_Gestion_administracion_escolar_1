export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Proyecto educativo institucional',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proyecto Educativo Institucional (PEI)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y objetivos del PEI',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia del PEI en la gestión escolar',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Principios orientadores del PEI',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Actores Implicados en la elaboración del PEI',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Componentes del PEI',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gobierno escolar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto y finalidad del gobierno escolar',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios de participación democrática en la escuela',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Órganos, funciones y participación en el gobierno escolar',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Polo Albarracín, M. & Sánchez Buitrago, J. O. (2022). <i>La gestión directiva en las instituciones educativas</i>. Editorial Unimagdalena. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/223861',
    },
    {
      referencia:
        'Pitluk, L. (2016). <i>La gestión escolar: el desafío de crear contextos para hacer y estar bien</i>. Homo Sapiens Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67116',
    },
    {
      referencia:
        'Cámara de Diputados del H. Congreso de la Unión. (2016). <i>Ley General de Educación</i>. Cámara de Diputados del H. Congreso de la Unión. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/30824',
    },
    {
      referencia:
        'Avendaño, F. (2021). <i>Caja de herramientas para la gestión educativa: aportes para los equipos directivos</i>. Homo Sapiens Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/177041',
    },
    {
      referencia:
        'Decreto 230 de 2002. Por el cual se dictan normas en materia de currículo, evaluación y promoción de los educandos y evaluación institucional. 11 de febrero de 2002. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4684',
    },
    {
      referencia:
        'Decreto 1075 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Educación. 26 de mayo de 2015. D.O. 49637. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77913',
    },
    {
      referencia:
        'Fernández Díaz, M. J., Herrero Toranzo, E. & Álvarez Fernández, M. (2002). <i>La dirección escolar ante los retos del siglo XXI</i>. Editorial Síntesis. ',
      link: 'https://dialnet.unirioja.es/servlet/libro?codigo=185123',
    },
    {
      referencia:
        'González Otalvaro, C. A., Moreno Ulloa, E. A. & Moreno Prieto, L. P. (2015). <i>Plan de mejoramiento para la apropiación del horizonte institucional del PEI del CEA Conducir Colombia</i>. Universidad de La Sabana. ',
      link: 'https://intellectum.unisabana.edu.co/handle/10818/15810',
    },
    {
      referencia:
        'Marín González, F., Riquett Escorcia, M., Pinto, M. C., Romero Caballero, S. & Paredes, A. J. (2017). <i>Gestión participativa y calidad educativa en el contexto del Plan de Mejoramiento Institucional en Escuelas Colombianas. Opción, 33</i>(82), 344-365. ',
      link: 'https://www.redalyc.org/pdf/310/31053180015.pdf',
    },
    {
      referencia:
        'Ainz Galende, A. (Il.) & Martínez Martínez, A. M. (Il.). (2022). <i>Sociedad, escuela y democracia</i>. Editorial Universidad de Almería. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/281414',
    },
    {
      referencia:
        'Quiñones, J. A. & Tavera Londoño, D. A. (2021). El gobierno escolar ¿ un escenario de participación estudiantil? <i>Societas, 23</i>(2), 145-161. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9534178',
    },
    {
      referencia:
        'Buarque Lins Costa, M. B. (2012). La participación de los consejos escolares para la gestión democrática de la escuela pública.<i> Educar, 48</i>(2), p. 285-298. ',
      link: 'https://ddd.uab.cat/record/99637',
    },
  ],
  glosario: [
    {
      termino: 'Actores educativos',
      significado:
        'Personas o grupos que participan activamente en el proceso educativo, como docentes, estudiantes, familias, directivos y comunidad.',
    },
    {
      termino: 'Bases legales',
      significado:
        'Normas que sustentan y orientan la educación en Colombia, como la Ley 115 de 1994, el Decreto 1860 de 1994 y el Decreto 1075 del 2015.',
    },
    {
      termino: 'Comunidad educativa',
      significado:
        'Conjunto de miembros que hacen parte de la institución educativa y participan en la vida escolar: estudiantes, familias, docentes y directivos.',
    },
    {
      termino: 'Consejo Directivo',
      significado:
        'Órgano del gobierno escolar que toma decisiones fundamentales para el funcionamiento institucional con participación de diferentes actores educativos.',
    },
    {
      termino: 'Consejo Académico',
      significado:
        'Instancia asesora del rector en temas pedagógicos y curriculares. Está conformado por coordinadores y docentes líderes de área.',
    },
    {
      termino: 'Diagnóstico institucional',
      significado:
        'Análisis de fortalezas, debilidades, oportunidades y amenazas de la institución. Es base para el PEI y los planes de mejoramiento.',
    },
    {
      termino: 'Gobierno escolar',
      significado:
        'Estructura organizativa que garantiza la participación democrática en la toma de decisiones dentro de la institución educativa.',
    },
    {
      termino: 'Misión',
      significado:
        'Enunciado que expresa la razón de ser de la institución educativa. Responde a: ¿para qué existe esta escuela?',
    },
    {
      termino: 'PEI (Proyecto Educativo Institucional)',
      significado:
        'Documento orientador que define identidad, propósitos, estrategias y valores de una institución. Se construye colectivamente.',
    },
    {
      termino: 'Personero estudiantil',
      significado:
        'Estudiante elegido democráticamente para representar y defender los derechos de sus compañeros ante el gobierno escolar.',
    },
    {
      termino: 'Plan de mejoramiento institucional',
      significado:
        'Estrategia que busca superar debilidades y fortalecer la calidad educativa, con base en el diagnóstico institucional.',
    },
    {
      termino: 'Plan de estudios',
      significado:
        'Organización de áreas, asignaturas y competencias que deben desarrollarse en cada nivel escolar. Hace parte del PEI.',
    },
    {
      termino: 'Principios orientadores',
      significado:
        'Valores y fundamentos éticos que guían la acción educativa, como el respeto, la equidad, la inclusión y la participación.',
    },
    {
      termino: 'Representantes estudiantiles',
      significado:
        'Estudiantes elegidos para representar a sus compañeros en instancias del gobierno escolar y promover sus intereses.',
    },
    {
      termino: 'Visión',
      significado:
        'Proyección de futuro de la institución. Indica hacia dónde quiere avanzar y cuáles son sus metas educativas a largo plazo.',
    },
  ],
}
