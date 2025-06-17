<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Proyecto Educativo Institucional (PEI)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-h85.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-auto(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/3.svg', alt="" )         
            .col-lg.j1(data-aos="fade-left")
              p.mb-0.mt-4 ¿Cómo se forma la identidad de una institución educativa? ¿Por qué en algunos jardines infantiles se respira un ambiente de respeto, juego y alegría, mientras que en otros todo parece más rutinario y sin vida? 

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") La respuesta se encuentra en un documento que trasciende lo administrativo: el Proyecto Educativo Institucional (PEI). Este constituye #[b el corazón que da vida a cada institución educativa.]

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/4.svg")
            .col-lg
              p.mb-0 El PEI no es un simple conjunto de normas o planes fríos. Es un #[b proyecto colectivo], un sueño compartido entre directivos, docentes, familias y la comunidad. Es en este documento donde #[b se define el rumbo que una institución desea seguir] para acompañar a los niños y las niñas en su proceso de crecimiento, aprendizaje y felicidad.

        p(data-aos="fade-down") Como futuros maestros, comprender el PEI, permitirá participar activamente en los procesos escolares. Esto implica la posibilidad de aportar ideas, transformar prácticas y defender una educación infantil que respete la voz y la esencia de cada niño y cada niña. Sin duda, esta constituye una de las tareas más hermosas y poderosas del educador.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/5.png", data-aos="zoom-in")

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición y objetivos del PEI

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/6.png", data-aos="zoom-in")           
      .col-lg-8.j1
        p(data-aos="fade-down") ¿Cómo puede una institución educativa construir un ambiente en el que cada niño y cada niña se sienta valorado, motivado y acompañado? ¿Qué diferencia de aquellas escuelas que irradian respeto, alegría y aprendizaje de otras que parecen desconectadas, frías o indiferentes? La respuesta puede encontrarse en un documento que articula la identidad y el propósito de cada comunidad educativa: el Proyecto Educativo Institucional (PEI).   
        .bg-color-7.p-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 El PEI no es un simple archivo olvidado en una carpeta institucional. Es un proyecto vivo, una construcción colectiva que expresa los sueños, metas y valores de quienes hacen parte de la escuela (MEN). A través de él, se define el tipo de educación que se desea ofrecer, el ambiente que se quiere propiciar y las rutas de acción que permitirán alcanzar ese horizonte. En esencia, el PEI es el corazón de la institución, el que marca el ritmo y sentido de cada acción pedagógica y administrativa (Polo y Sánchez, 2022).

    .bg-full-width-2.bg-fondo-2.mb-0(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5                       
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Naturaleza del PEI
                p Documento vivo, flexible y colectivo.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Finalidad
                p Orientar el tipo de educación, el ambiente escolar y las acciones estratégicas. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Participación 
                p Involucra a toda la comunidad educativa: directivos, docentes, estudiantes, familias y entorno. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Papel del gobierno escolar 
                p Mediador y dinamizador del PEI; genera consensos y lidera la evaluación y ajustes.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Importancia para los docentes 
                p Brinda claridad institucional y permite un rol activo y transformador dentro de la escuela.
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='')                                                                  

    .bg-full-width.bg-color-2.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        p.mb-0.px-4(data-aos="fade-down") Una de las mayores virtudes del PEI es su #[b flexibilidad]. No se trata de un documento rígido ni definitivo, sino de una herramienta dinámica que debe adaptarse a las transformaciones de la escuela y su entorno. Su implementación correcta exige la participación activa de todos los miembros de la comunidad educativa.

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/13.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-down") En este proceso, destaca el gobierno escolar como el espacio democrático que da voz a todas las partes. Este organismo no solo representa a los distintos estamentos, sino que también promueve consensos, analiza la realidad institucional, proyecta mejoras y revisa continuamente si lo planteado en el PEI se está ejecutando de manera pertinente y coherente. Esta evaluación constante permite ajustar objetivos, estrategias y prácticas, manteniendo vigente el sentido del PEI frente a las necesidades reales de la comunidad. 



    .bg-full-width-3.bg-fondo-1.mb-5.py-4
      .px-4.px-md-5
        #t_1_2.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.2] Importancia del PEI en la gestión escolar      
        .row.mb-5
          .col-lg-7.mb-3.mb-lg-0 
            p(data-aos="fade-down") ¿Qué es lo que realmente da vida a una escuela? ¿Por qué algunas instituciones irradian energía, risas y aprendizaje, mientras que otras parecen operar mecánicamente, sin rumbo claro? La respuesta está en un documento fundamental que orienta a toda la comunidad educativa: el Proyecto Educativo Institucional (PEI).  
            .bg-color-3.p-4.mb-4(data-aos="fade-up") 
              p(data-aos="fade-down") El PEI no es una simple recopilación de normas o planes. Es el corazón que da propósito, dirección y coherencia a todas las actividades educativas, administrativas y sociales del colegio. Es el mapa institucional que orienta la misión de formar estudiantes y acompañarlos en su desarrollo integral.

              p(data-aos="fade-down").mb-0 Según Pitluk (2016), la gestión escolar implica mucho más que administrar recursos. Se trata de crear y mantener un ambiente propicio para el desarrollo académico, emocional, social y ético del estudiantado. Para lograrlo, se requiere una estructura clara y una visión compartida. Ahí entra el papel esencial del PEI. 
            p(data-aos="fade-down") El rol del PEI en la gestión escolar, es:   
          .col-lg-5
            figure
              img.img-a.img-t(src="@/assets/curso/temas/14.png", data-aos="zoom-in")  
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-stretch.text-center
              .col-lg-3.mb-4(data-aos="zoom-in-up")
                .custom-image-card-2.h-100.br-1
                  img.custom-image-card__image(src="@/assets/curso/temas/15.png" alt="")
                  .custom-image-card__text.p-4
                    h5 Pedagógica
                    p.mb-0 Alinea el trabajo docente con los objetivos institucionales.
              .col-lg-3.mb-4(data-aos="zoom-in-down")
                .custom-image-card-2.h-100.br-1
                  img.custom-image-card__image(src="@/assets/curso/temas/16.png" alt="")
                  .custom-image-card__text.p-4
                    h5 Administrativa
                    p.mb-0 Sirve de guía para decisiones coherentes en la asignación de recursos y actividades.
              .col-lg-3.mb-4(data-aos="zoom-in-down")
                .custom-image-card-2.h-100.br-1
                  img.custom-image-card__image(src="@/assets/curso/temas/17.png" alt="")
                  .custom-image-card__text.p-4
                    h5 Relacional
                    p.mb-0 Promueve relaciones armónicas, basadas en valores y en una visión común.
              .col-lg-3.mb-4(data-aos="zoom-in-down")
                .custom-image-card-2.h-100.br-1
                  img.custom-image-card__image(src="@/assets/curso/temas/18.png" alt="")
                  .custom-image-card__text.p-4
                    h5 Comunitaria
                    p.mb-0 Fomenta la participación activa de todos los actores de la comunidad educativa.


    p(data-aos="fade-down") El PEI no es un documento estático. Se trata de un proyecto vivo y dinámico, que debe ser revisado y ajustado permanentemente, según las necesidades cambiantes de la comunidad. Su impacto atraviesa todos los ámbitos escolares, desde las decisiones pedagógicas hasta las interacciones cotidianas.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/19.png", data-aos="zoom-in")           
      .col-lg-7
        p(data-aos="fade-down") En el #[b plano administrativo], el PEI proporciona los criterios para tomar decisiones eficientes y justificadas. Todo, desde el uso de recursos hasta las actividades extracurriculares, debe estar alineado con sus objetivos. De esta manera, se evita la dispersión de esfuerzos y se optimiza la gestión institucional. La influencia del PEI por áreas de gestión, son:   
        .bg-color-7.p-4(data-aos="fade-up") 
          p(data-aos="fade-down").mb-0 En el #[b plano pedagógico], permite a los docentes trabajar con coherencia y sentido, diseñando actividades que abarquen no solo el aprendizaje académico, sino también el bienestar emocional y social de los estudiantes. Cuando el personal docente se siente identificado con el PEI, su compromiso y motivación crecen significativamente. 

    .row.mb-5 
      .col-lg-6.mb-3 
        .bg-color-2.h-100.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/20.svg")
            .col-lg
              h5 Docencia
              p.mb-0 Clarifica metas educativas y fortalece el compromiso profesional.

      .col-lg-6.mb-3 
        .bg-color-2.h-100.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/21.svg")
            .col-lg
              h5 Recursos
              p.mb-0 Justifica el uso eficiente de insumos y presupuestos.

      .col-lg-6
        .bg-color-2.h-100.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/22.svg")
            .col-lg
              h5 Convivencia
              p.mb-0 Orienta relaciones basadas en respeto, participación y pertenencia.

      .col-lg-6
        .bg-color-2.h-100.p-4(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/23.svg")
            .col-lg
              h5 Innovación
              p.mb-0 Ofrece una base común para propuestas de mejora o transformación institucional.


    p(data-aos="fade-down") Uno de los aspectos más enriquecedores del PEI es su carácter colectivo. No es un proyecto cerrado ni impuesto; es un proceso construido con la participación activa de todos los actores escolares: directivos, docentes, estudiantes y familias. Este involucramiento fortalece el sentido de pertenencia y permite ajustar el proyecto a las realidades locales.

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-6.p-4.h-100.j1(data-aos="fade-up") 
          p(data-aos="fade-down") La #[b participación en el PEI] transforma la gestión escolar. Permite que cada miembro de la comunidad se sienta parte de una visión común, con un rol significativo en la construcción del futuro institucional.

          p(data-aos="fade-down").mb-0 El PEI no es solo un documento que define la dirección de una escuela; es el corazón que impulsa el día a día de la comunidad educativa. Es la guía que asegura que todas las acciones estén alineadas con un propósito compartido. Como futuro educador, entender y aplicar el PEI en la práctica diaria será clave para contribuir al éxito de la institución y al bienestar integral del estudiantado. 
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/24.png", data-aos="zoom-in")  

    p(data-aos="fade-down") El PEI es un proyecto #[b de todos y para todos]. Participar activamente en su construcción y ejecución no solo transforma la escuela, sino que enriquece el proceso educativo, convirtiendo cada jornada escolar en un paso más hacia una educación transformadora y significativa.

    .bg-full-width.bg-color-10.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/25.png', alt='')                              

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Bases legales del PEI
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Bases legales del PEI, donde se aborda el sustento normativo del Proyecto Educativo Institucional (PEI) en Colombia. Este material ofrece explicaciones claras, reflexiones pedagógicas y ejemplos normativos con el fin de comprender cómo las leyes educativas fundamentan y orientan la vida escolar.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Bases legales del PEI  


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Principios orientadores del PEI
    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/26.svg")
            .col-lg
              p.mb-0 ¿Qué fundamentos permiten a una escuela tomar decisiones coherentes, respetuosas y alineadas con su misión? La respuesta se encuentra en los principios orientadores del Proyecto Educativo Institucional (PEI). Estos principios constituyen el #[b alma ética y filosófica] de toda institución educativa y sostienen sus propósitos, prácticas pedagógicas y formas de relacionamiento.

        p(data-aos="fade-down") No se trata solo de valores escritos en un documento, sino de #[b convicciones profundas] que se manifiestan en el día a día: en la manera de enseñar, en el trato con los niños y las niñas, en la participación de las familias, y en la forma de enfrentar los desafíos escolares. Los principios orientadores son la #[b brújula ética] que mantiene el rumbo institucional, incluso en contextos de cambio. Los principios fundamentales del PEI, son: 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/27.png", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/28.png", alt="")      
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Inclusión")
            p Asegura que todos tengan acceso al aprendizaje, adaptando metodologías, según las particularidades del estudiante.
          .div(titulo="Equidad")
            p Implica ofrecer lo que cada uno necesita para desarrollarse, no tratar a todos por igual.
          .div(titulo="Participación democrática")
            p Promueve la voz y el voto de todos los actores educativos en las decisiones institucionales.
          .div(titulo="Autonomía")
            p Reconoce la capacidad de cada sujeto y comunidad para tomar decisiones responsables.
          .div(titulo="Respeto por la diversidad")
            p Valora las diferencias culturales, sociales, cognitivas y emocionales de cada integrante. 
          .div(titulo="Formación integral")
            p Propone un desarrollo completo: académico, ético, social, emocional y físico.  

    .bg-full-width.bg-color-2.p-4.mb-5(data-aos="fade-left")
      .px-4
        p.mb-0 Estos principios no son impuestos ni inamovibles; se construyen colectivamente mediante el diálogo entre todos los actores educativos: directivos, docentes, estudiantes y familias. 

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Este proceso participativo garantiza que los principios respondan a las realidades, necesidades y aspiraciones de la comunidad.

        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/29.svg")
            .col-lg
              p.mb-0 Desde la gestión escolar, los principios orientadores permiten tomar decisiones coherentes y sostenibles, guiando la planeación, el currículo, la evaluación y la convivencia. También articulan el PEI con las políticas públicas, garantizando que la escuela no solo cumpla con lo legal, sino que construya un proyecto educativo ético, humano y transformador.


      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/30.png", data-aos="zoom-in")

    p(data-aos="fade-down") Comprender estos principios es esencial para quien se forma como educador. Cada acción pedagógica tiene un trasfondo ético y político: se educa para la libertad, la paz, la justicia y la convivencia.

    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/31.png")          
          .col-lg
            .py-4.j1
              h5 Reflexión profesional
              ul.lista-ul--color            
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 ¿Cuáles son los principios que guían mis prácticas pedagógicas?
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 ¿Cómo se reflejan en mi trato con los demás, en mis decisiones en el aula y en mi forma de enseñar?  
              p Estas preguntas invitan a una introspección profesional que es clave para fortalecer el PEI como #[b instrumento vivo de gestión y transformación educativa.]

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Actores Implicados en la elaboración del PEI
    p(data-aos="fade-down") ¿Quiénes construyen el PEI? ¿Quiénes sueñan y transforman la vida escolar desde sus distintos roles? 

    p(data-aos="fade-down") El PEI no es un documento técnico elaborado desde un escritorio: es una #[b construcción colectiva] basada en el diálogo, la participación y el compromiso de toda la comunidad educativa. Los actores claves y sus roles en la construcción del PEI, son: 

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="36%" y="38%" numero="+")
                  h5 Directivos docentes 
                  p Lideran la formulación y actualización del PEI; crean condiciones para la participación activa y democrática.
                .bg-color-white.box-shadow.p-3(x="34%" y="58%" numero="+")
                  h5 Consejos y órganos escolares
                  p El Consejo Directivo, el Consejo Académico, la Personería Estudiantil y otros espacios democráticos, fortalecen la representación y diversidad.   
                .bg-color-white.box-shadow.p-3(x="32%" y="86%" numero="+")
                  h5 Actores externos
                  p En jardines infantiles y zonas rurales: organizaciones comunitarias, sector salud, autoridades locales, etc.   
                .bg-color-white.box-shadow.p-3(x="74%" y="23%" numero="+")
                  h5 Docentes
                  p Aportan conocimiento del aula y del contexto; alinean su práctica con los principios y objetivos institucionales.    
                .bg-color-white.box-shadow.p-3(x="74%" y="61%" numero="+")
                  h5 Familias
                  p Enriquecen el PEI con sus saberes, culturas y expectativas; son corresponsables en la formación.   
                .bg-color-white.box-shadow.p-3(x="58%" y="73%" numero="+")
                  h5 Estudiantes 
                  p Especialmente en básica y media, su voz garantiza un PEI significativo y centrado en sus intereses. 

    .bg-full-width.bg-color-2.p-4.mb-5(data-aos="fade-left")
      .px-4
        .row
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/33.svg")
          .col-lg.j1
            p.mb-0 La participación de estos actores no debe ser simbólica, sino real, crítica y transformadora. Involucrarse en el PEI requiere compromiso, diálogo, reflexión y construcción de consensos. Cada actor debe sentirse corresponsable del proyecto y tener claridad sobre su papel en su implementación.      

    .row.mb-5.align-items-center
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-13.p-4.j1(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 El PEI, entonces, no pertenece solo a la institución, sino a toda la comunidad que la habita y construye. Es un proyecto compartido de vida escolar, que se fortalece con cada mirada, experiencia y aporte colectivo.
        .bg-color-14.p-4.j1(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 ¿Cómo cambiaría la escuela si todos los actores asumieran su papel con conciencia, participación y esperanza? Esa es precisamente la invitación del PEI: a construir juntos una escuela que eduque para la vida, con sentido, con justicia y con humanidad.      
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/34.png", data-aos="zoom-in")      


    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Componentes del PEI
    p(data-aos="fade-down") El Proyecto Educativo Institucional (PEI) es mucho más que un documento de referencia administrativa; constituye el corazón de la institución educativa, el marco sobre el cual se estructuran todas sus acciones, decisiones y dinámicas. A través de sus componentes, el PEI da vida a una visión educativa colectiva y propicia un ambiente que favorece el aprendizaje y el desarrollo integral de los estudiantes. 

    p(data-aos="fade-down") A continuación, se describen sus principales componentes, los cuales conforman la columna vertebral del proceso educativo: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/35.png", alt="")      
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Diagnóstico institucional")
            p Es un análisis detallado de la situación interna y externa de la institución. Considera el contexto sociocultural, características del estudiantado, condiciones de infraestructura, recursos disponibles, antecedentes académicos y clima escolar. Este diagnóstico debe ser participativo, involucrando a directivos, docentes, estudiantes y familias, y no limitarse a una simple recopilación de datos. Constituye la base para un PEI que responda auténticamente a las necesidades de la comunidad escolar.
          .div(titulo="Misión y visión")
            p La misión expresa la razón de ser de la institución: su propósito en la formación estudiantil. La visión representa el horizonte deseado, proyectando ideales y valores compartidos. Ambos deben construirse de forma colectiva y reflexiva, funcionando como principios vivos que guían la práctica cotidiana. Una misión clara orienta las decisiones pedagógicas y administrativas, mientras que una visión compartida inspira el compromiso de toda la comunidad.  
          .div(titulo="Principios y valores")
            p Representan el marco ético del PEI. Son convicciones fundamentales que orientan la convivencia y la acción educativa. Valores como el respeto, la equidad, la solidaridad, la responsabilidad y la justicia deben vivirse a diario, no limitarse a declaraciones abstractas. Su integración debe ser intencional y coherente con las prácticas pedagógicas, facilitando un ambiente escolar inclusivo y democrático.   
          .div(titulo="Objetivos y metas")
            p Son los pasos concretos hacia el cumplimiento de la misión y visión institucional. Los objetivos son generales y orientadores; las metas, específicas y medibles. Ambos deben ser realistas y contextualizados. La evaluación periódica permite hacer ajustes para garantizar su pertinencia y efectividad, asegurando que el PEI tenga un impacto tangible en la calidad educativa.   
                                                     
    .row.align-items-start.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Plan de estudios")
            p Define los saberes, habilidades y competencias que los estudiantes deben desarrollar. Incluye asignaturas, contenidos y metodologías, y debe ser flexible, inclusivo y adaptado al contexto. Promueve una formación integral, académica, social, emocional y cognitiva, mediante enfoques pedagógicos innovadores y metodologías activas que favorezcan el aprendizaje significativo.
          .div(titulo="Estrategias pedagógicas")
            p Son las acciones específicas empleadas por los docentes para implementar el plan de estudios. Deben ser variadas y adaptadas a los estilos de aprendizaje de los estudiantes. Favorecen la autonomía, creatividad, pensamiento crítico y resolución de problemas. Asimismo, deben promover la equidad e inclusión, incorporando tecnologías e innovación como herramientas didácticas.  
          .div(titulo="Evaluación institucional")
            p De acuerdo con Avendaño (2021), este componente permite valorar la eficacia del PEI en su totalidad: resultados académicos, prácticas pedagógicas, gestión, convivencia e implementación. Debe ser continua y participativa, mediante autoevaluación, coevaluación y evaluación externa. Según el MEN (2002), esta práctica garantiza que el PEI sea un instrumento dinámico y adaptable, promoviendo la mejora continua.                               
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/36.png", alt="")      


    .bg-full-width.bg-color-10.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/37.png', alt='')                              

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Fortalecimiento institucional desde el corazón educativo: PEI y planes de mejoramiento
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Fortalecimiento institucional desde el corazón educativo: PEI y planes de mejoramiento, donde se reflexiona sobre la necesidad de mantener vivos y actualizados el Proyecto Educativo Institucional (PEI) y los Planes de Mejoramiento Institucional (PMI). 
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Fortalecimiento institucional desde el corazón educativo: PEI y planes de mejoramiento  

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/177588" target="_blank" rel="noopener noreferrer") Alvarado, C. E. & Mendoza Bautista, C. C. (Dir.). (2011). Modelos de pensamiento y gestión escolar mediada por el Proyecto Educativo Institucional (PEI). Centro Internacional de Educación Continua - Universidad Pedagógica Experimental Libertador.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/66670" target="_blank" rel="noopener noreferrer") Gvirtz, S. (2010). Mejorar la gestión directiva en la escuela. Ediciones Granica. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/1621/article-79361.html" target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional de Colombia. (s.f.). Proyecto Educativo Institucional (PEI). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=8474586" target="_blank" rel="noopener noreferrer") Herrera Navas, C. D. & Silva Alvarado, J. C. (2018). La gestión de proyectos orientada a la construcción del Proyecto Educativo Institucional (PEI): Una aproximación conceptual de interés común para la comunidad educativa. Mundo recursivo, 1(2), 130-149. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://edu21.cl/blog/innovacion-educativa/que-es-un-proyecto-educativo-institucional/?srsltid=AfmBOopzQcGmxBi97CH6ZOtAUK4c0-TvB8fI6WO1edV5DGe76oem2Bsr" target="_blank" rel="noopener noreferrer") Edu21. (s.f.). Significado e Importancia del Proyecto Educativo Institucional.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.innovaschools.edu.co/el-proyecto-educativo-por-que-es-tan-importante" target="_blank" rel="noopener noreferrer") Innova Schools. (s.f.). El proyecto educativo: ¿Por qué es tan importante? 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://ietccanadaelrodeo.wordpress.com/justificacion/marco-legal-de-los-proyectos-educativos-institucionales/" target="_blank" rel="noopener noreferrer") ietccanadaelrodeo. (s.f.). Marco Legal De Los Proyectos Educativos Institucionales.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://aretio.hypotheses.org/4111" target="_blank" rel="noopener noreferrer") Hypotheses. (s.f.). Evaluación institucional y de programas a distancia.                            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BvV4ypGKmMg" target="_blank" rel="noopener noreferrer") INDEE. (2022). Estructura del Proyecto Educativo Institucional [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ntezIdtLXbQ" target="_blank" rel="noopener noreferrer") Universidad Pedagógica Nacional. (2015). Misión y Proyecto Institucional [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=0hT_-1Oocyc" target="_blank" rel="noopener noreferrer") INCECAD - Education for Educators. (2021). Que es un Proyecto Educativo Institucional? - Episodio # 13 [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=d16RxwSV7wM" target="_blank" rel="noopener noreferrer") Servicio de Planificación y Mejora de la Docencia. (2023). VI Foro Innova- Proyecto educativo institucional: concepto y dimensiones (Max Turull) [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rnIKty9RCrI" target="_blank" rel="noopener noreferrer") Universidad Pedagógica Nacional. (2021). PEI 6 Principios [video].                                                       

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
