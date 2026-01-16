/* assets/js/i18n.js */
(function () {
  "use strict";

  const STORAGE_KEY = "dulcesor_lang";
  const SUPPORTED = ["es", "en", "pt", "fr", "it"];

  const DICT = {
    es: {
      /* Header nav */
      nav_home: "Inicio",
      nav_association: "Asociación",
      nav_projects: "Proyectos",
      nav_contests: "Concursos",
      nav_routes: "Rutas monacales",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",

      /* Home */
      home_title: "ASOCIACIÓN CULTURAL DULCESOR",
      home_subtitle: "Repostería monacal conventual · Patrimonio gastronómico · Cultura y tradición",
      home_intro:
        'La Asociación Cultural <strong>DULCESOR</strong> impulsa la preservación, difusión y puesta en valor de la <strong>repostería monacal conventual</strong> y del patrimonio gastronómico ligado a comunidades religiosas, promoviendo proyectos culturales de alcance nacional e internacional.',
      home_project_title: "Proyecto principal en desarrollo",
      home_project_desc: "I Concurso Internacional de Postres Conventuales – Valladolid 2026",
      home_project_status: "Información en preparación",
      home_identity_title: "Identidad",
      home_identity_name_label: "Nombre:",
      home_identity_name: "Asociación Cultural DULCESOR",
      home_identity_nature_label: "Naturaleza:",
      home_identity_nature: "Asociación cultural sin ánimo de lucro",
      home_identity_scope_label: "Ámbito:",
      home_identity_scope: "Cultural y gastronómico",
      home_goals_title: "Fines y objetivos",
      home_goal_1: "Preservar y difundir la repostería conventual como patrimonio cultural.",
      home_goal_2: "Dar visibilidad al trabajo artesanal de comunidades religiosas.",
      home_goal_3: "Impulsar proyectos culturales y gastronómicos de proyección internacional.",

      /* Asociación */
      assoc_title: "Asociación",
      assoc_subtitle:
        "Identidad, fines y principios de la Asociación Cultural DULCESOR – Repostería Monacal Conventual",
      assoc_identity_title: "Identidad",
      assoc_identity_text:
        "La Asociación Cultural DULCESOR se constituye como una entidad sin ánimo de lucro dedicada a la preservación, investigación, promoción y difusión del patrimonio repostero monacal y conventual, entendiendo la repostería como una manifestación cultural, artística y gastronómica con valor histórico y espiritual.",
      assoc_goals_title: "Fines y objetivos",
      assoc_goal_1:
        "Preservar y difundir la tradición repostera de los monasterios y conventos como parte esencial del patrimonio cultural inmaterial.",
      assoc_goal_2:
        "Promover actividades culturales, gastronómicas y académicas que favorezcan el conocimiento y la valoración social de la repostería monacal conventual.",
      assoc_goal_3:
        "Fomentar la investigación, recopilación y documentación de recetas, técnicas y procesos tradicionales transmitidos por comunidades religiosas.",
      assoc_goal_4:
        "Establecer vínculos de cooperación con instituciones culturales, educativas y religiosas para impulsar proyectos conjuntos de conservación y difusión.",
      assoc_values_title: "Principios y valores",
      assoc_values_text:
        "La Asociación Cultural DULCESOR desarrolla su labor bajo criterios de rigor histórico, respeto patrimonial y compromiso ético con las comunidades religiosas productoras. Promueve el reconocimiento de la repostería monacal como una expresión gastronómica y, al mismo tiempo, como testimonio vivo de espiritualidad, tradición y dedicación artesanal transmitida a través de los siglos.",
      assoc_admin_title: "Información administrativa",
      assoc_admin_scope_label: "Ámbito de actuación",
      assoc_admin_scope_value: "Cultural y gastronómico (ámbito nacional e internacional)",
      assoc_admin_legal_label: "Naturaleza jurídica",
      assoc_admin_legal_value: "Asociación cultural sin ánimo de lucro",
      assoc_admin_note:
        "La asociación se encuentra en proceso de inscripción oficial conforme a la legislación vigente.",

      /* Proyectos */
      projects_title: "Proyectos",
      projects_subtitle:
        "Iniciativas culturales y gastronómicas dedicadas a la preservación y difusión de la repostería monacal conventual.",
      projects_intro_title: "Presentación general",
      projects_intro_text:
        "Los proyectos de la Asociación Cultural DULCESOR tienen como objetivo poner en valor el patrimonio repostero de los conventos y monasterios, fortalecer el vínculo entre gastronomía y cultura, y abrir un espacio de colaboración entre artesanas, instituciones y ciudadanía.",
      projects_lines_title: "Líneas de acción",
      projects_line_1:
        "Organización de concursos, muestras y jornadas dedicadas a la repostería conventual.",
      projects_line_2:
        "Desarrollo de rutas y encuentros culturales para promover la visita a monasterios y museos relacionados con la tradición repostera.",
      projects_line_3:
        "Edición de materiales divulgativos y educativos sobre historia, técnicas y legado repostero.",
      projects_line_4:
        "Colaboraciones con instituciones académicas y culturales para investigación y difusión.",
      projects_featured_title: "Proyectos destacados",
      projects_featured_project_title: "I Concurso Internacional de Repostería Monacal Conventual",
      projects_featured_project_text:
        "Primera convocatoria internacional impulsada por DULCESOR, dedicada a reconocer y difundir la repostería tradicional elaborada en monasterios y conventos, con la ciudad de Valladolid como primer escenario.",
      projects_featured_more: "Ver más sobre los concursos",
      projects_future_title: "Futuros proyectos",
      projects_future_text:
        "Actualmente la Asociación Cultural DULCESOR trabaja en el diseño de nuevas iniciativas vinculadas a la investigación y divulgación del patrimonio conventual, así como en la creación de alianzas internacionales que fortalezcan la difusión cultural y gastronómica del legado repostero.",
      projects_future_note:
        "Si eres una institución, entidad o colectivo interesado en colaborar, puedes ponerte en contacto para explorar formas de participación.",

      /* Concursos */
      contests_title: "Concursos",
      contests_subtitle: "Convocatorias culturales y gastronómicas impulsadas por la Asociación Cultural DULCESOR.",
      contests_frame_title: "Marco general",
      contests_frame_text:
        "La Asociación Cultural DULCESOR promueve concursos culturales y gastronómicos destinados a preservar y difundir la repostería monacal conventual.",
      contests_in_prep: "En preparación",
      contests_featured_title: "Convocatoria destacada",
      contests_pill_init: "Convocatoria inicial",
      contests_reg_title: "Inscripción",
      contests_reg_text:
        "La participación estará abierta conforme a las bases oficiales de cada convocatoria.",
      contests_docs_title: "Documentación oficial",
      contests_docs_text:
        "Acceso a la documentación oficial de la convocatoria (bases y solicitud).",
      contests_btn_bases: "Bases (PDF)",
      contests_btn_form: "Solicitud (PDF)",
      contests_pill_pdf: "Documentación en PDF",
      contests_poster_caption:
        "Cartel del I Concurso Internacional de Repostería Monacal Conventual DULCESOR",
      contests_sponsors_title: "Patrocinadores del concurso",
      contests_sponsors_subtitle: "Entidades colaboradoras del concurso (edición actual).",

      /* Patrocinadores */
      sponsors_title: "Patrocinadores",
      sponsors_subtitle: "Entidades colaboradoras de la Asociación Cultural DULCESOR.",
      sponsors_assoc_title: "Patrocinadores de la asociación",
      sponsors_assoc_text:
        "Estas entidades apoyan el desarrollo general de la Asociación Cultural DULCESOR.",
      sponsors_nb21_text: "Patrocinador de la Asociación Cultural DULCESOR.",
      sponsors_visit_web: "Visitar web",

      /* Contacto */
      contact_title: "Contacto",
      contact_subtitle: "Canales de comunicación de la Asociación Cultural DULCESOR.",
      contact_block_title: "Información de contacto",
      contact_email_label: "Información general",
      contact_contact_label: "Contacto institucional",
      contact_contest_label: "Concursos",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4  47002 Valladolid (España)",
      contact_note:
        "Si deseas colaborar o ampliar información, escríbenos y te responderemos a la mayor brevedad.",

      /* Rutas / Museos (navegación interna) */
      routes_title: "Rutas monacales",
      routes_subtitle:
        "Línea cultural de DULCESOR dedicada a la difusión del patrimonio monástico y la tradición artesana, con enlaces institucionales y recursos culturales.",
      routes_nav_routes: "Rutas",
      routes_nav_museums: "Museos",
      routes_section_title: "Rutas",
      routes_section_note: "Accede también a la sección de Museos desde la navegación superior.",
      routes_focus_title: "Enfoque cultural",
      routes_focus_text_1:
        "Este espacio se concibe como una línea de difusión cultural y patrimonial. No es una web turística genérica: se prioriza un tono institucional, sobrio y respetuoso, promoviendo el conocimiento y la puesta en valor del patrimonio monástico y la repostería artesanal.",
      routes_focus_note:
        "La información y los listados se ampliarán progresivamente conforme avance la actividad de la asociación.",
      routes_morning_title: "Rutas de una mañana",
      routes_morning_text:
        "Prepararemos pequeñas rutas culturales (mañana o media jornada) para visitar tres o cuatro monasterios, museos o espacios patrimoniales, con posibilidad de enlazar a la compra de productos si la comunidad dispone de canales oficiales.",
      routes_in_prep: "En preparación",
      routes_morning_note:
        "Estas rutas se publicarán cuando estén contrastadas y presenten un enfoque cultural y respetuoso con las comunidades.",
      routes_monasteries_title: "Conventos y monasterios",
      routes_monasteries_text:
        "Enlaces directos a webs oficiales o canales institucionales de conventos y monasterios. Cuando existan tiendas online o sistemas de venta propios, se enlazarán para facilitar el acceso a sus productos.",
      routes_monasteries_note:
        "DULCESOR no comercializa productos en esta web. Los enlaces dirigen a plataformas externas gestionadas por cada comunidad o entidad.",
      routes_example_1_title: "Convento / Monasterio (Ejemplo 1)",
      routes_example_1_text:
        "Bloque preparado para incorporar nombre, localidad, breve descripción institucional y enlace oficial.",
      routes_example_2_title: "Convento / Monasterio (Ejemplo 2)",
      routes_example_2_text:
        "Bloque preparado para incorporar nombre, localidad, breve descripción institucional y enlace oficial.",
      routes_example_web_soon: "Web oficial · Próximamente",
      routes_example_shop_soon: "Compra de productos · Próximamente",
      routes_example_hint:
        "Para añadir un nuevo convento/monasterio, duplica uno de los bloques “Ejemplo” y cambia título, texto y enlaces.",

      museums_section_title: "Museos",
      museums_section_intro:
        "La Asociación Cultural DULCESOR promueve la conservación y difusión del patrimonio cultural vinculado a la vida conventual, apoyando especialmente a los museos conventuales como espacios vivos de memoria, arte y tradición.",
      museums_priority_title: "Museo del Real Monasterio de San Joaquín y Santa Ana (Valladolid)",
      museums_priority_text:
        "Museo de arte sacro barroco en el monasterio cisterciense, con un conjunto patrimonial de gran relevancia. Espacio vinculado a la identidad cultural de DULCESOR.",
      museums_pill_priority: "Prioritario",
      museums_pill_conventual: "Museo conventual",
      museums_pill_city: "Valladolid",
      museums_btn_official: "Web oficial del museo",
      museums_btn_vr_soon: "Experiencia virtual (RV) · Próximamente",
      museums_priority_note:
        "Se está desarrollando una experiencia virtual (RV) vinculada a piezas del museo, que se presentará próximamente.",
      museums_other_title: "Otros museos y espacios conventuales",
      museums_item_santa_isabel_title: "Museo del Monasterio de Santa Isabel (Valladolid)",
      museums_item_santa_isabel_text: "Enlace informativo institucional disponible.",
      museums_item_san_pablo_title: "Iglesia Conventual de San Pablo – Dominicos (Valladolid)",
      museums_item_san_pablo_text: "Enlace institucional disponible.",
      museums_btn_visit_web: "Visitar web",
      museums_more_prep_title: "Otros museos (en preparación)",
      museums_prep_1_title: "Monasterio de Santa Clara (Tordesillas) · Conjunto monumental",
      museums_prep_1_text:
        "Espacio monástico con valor histórico y patrimonial destacado. Este bloque está preparado para completarse con información institucional y enlace oficial.",
      museums_prep_2_title: "Convento de San Francisco (Medina de Rioseco) · Patrimonio sacro",
      museums_prep_2_text:
        "Espacio vinculado al patrimonio conventual de la provincia. Este bloque está preparado para completarse con información institucional y enlace oficial.",
      museums_more_note:
        "Este apartado se ampliará progresivamente incorporando otros museos y espacios conventuales que compartan los valores culturales y patrimoniales de DULCESOR.",
    },

    /* =========================
       ENGLISH
    ========================= */
    en: {
      nav_home: "Home",
      nav_association: "Association",
      nav_projects: "Projects",
      nav_contests: "Contests",
      nav_routes: "Monastic routes",
      nav_sponsors: "Sponsors",
      nav_contact: "Contact",

      home_title: "DULCESOR CULTURAL ASSOCIATION",
      home_subtitle: "Convent pastry · Gastronomic heritage · Culture and tradition",
      home_intro:
        'The <strong>DULCESOR</strong> Cultural Association promotes the preservation, dissemination and enhancement of <strong>convent monastic pastry</strong> and the gastronomic heritage linked to religious communities, fostering cultural projects with national and international reach.',
      home_project_title: "Main project under development",
      home_project_desc: "1st International Convent Desserts Contest – Valladolid 2026",
      home_project_status: "Information in preparation",
      home_identity_title: "Identity",
      home_identity_name_label: "Name:",
      home_identity_name: "DULCESOR Cultural Association",
      home_identity_nature_label: "Nature:",
      home_identity_nature: "Non-profit cultural association",
      home_identity_scope_label: "Scope:",
      home_identity_scope: "Cultural and gastronomic",
      home_goals_title: "Aims and objectives",
      home_goal_1: "Preserve and share convent pastry as cultural heritage.",
      home_goal_2: "Give visibility to the artisanal work of religious communities.",
      home_goal_3: "Promote cultural and gastronomic projects with international reach.",

      assoc_title: "Association",
      assoc_subtitle:
        "Identity, aims and principles of the DULCESOR Cultural Association – Convent Monastic Pastry",
      assoc_identity_title: "Identity",
      assoc_identity_text:
        "The DULCESOR Cultural Association is a non-profit entity devoted to preserving, researching, promoting and disseminating the monastic and convent pastry heritage, understanding pastry-making as a cultural, artistic and gastronomic expression with historical and spiritual value.",
      assoc_goals_title: "Aims and objectives",
      assoc_goal_1:
        "Preserve and disseminate the pastry tradition of monasteries and convents as an essential part of intangible cultural heritage.",
      assoc_goal_2:
        "Promote cultural, gastronomic and academic activities that foster knowledge and social appreciation of monastic-convent pastry.",
      assoc_goal_3:
        "Encourage research, collection and documentation of recipes, techniques and traditional processes passed down by religious communities.",
      assoc_goal_4:
        "Build cooperation links with cultural, educational and religious institutions to promote joint conservation and dissemination projects.",
      assoc_values_title: "Principles and values",
      assoc_values_text:
        "The DULCESOR Cultural Association works with historical rigor, respect for heritage and ethical commitment to the producing religious communities. It promotes recognition of monastic pastry as a gastronomic expression and, at the same time, as a living testimony of spirituality, tradition and artisanal dedication transmitted through the centuries.",
      assoc_admin_title: "Administrative information",
      assoc_admin_scope_label: "Scope of activity",
      assoc_admin_scope_value: "Cultural and gastronomic (national and international)",
      assoc_admin_legal_label: "Legal nature",
      assoc_admin_legal_value: "Non-profit cultural association",
      assoc_admin_note: "The association is in the process of official registration under current legislation.",

      projects_title: "Projects",
      projects_subtitle:
        "Cultural and gastronomic initiatives devoted to preserving and disseminating monastic-convent pastry.",
      projects_intro_title: "General overview",
      projects_intro_text:
        "DULCESOR projects aim to highlight the pastry heritage of convents and monasteries, strengthen the link between gastronomy and culture, and open a space for collaboration between artisans, institutions and citizens.",
      projects_lines_title: "Lines of action",
      projects_line_1: "Organization of contests, showcases and events devoted to convent pastry.",
      projects_line_2:
        "Development of routes and cultural gatherings to encourage visits to monasteries and museums related to pastry tradition.",
      projects_line_3:
        "Publication of educational and outreach materials on history, techniques and pastry legacy.",
      projects_line_4:
        "Collaboration with academic and cultural institutions for research and dissemination.",
      projects_featured_title: "Featured projects",
      projects_featured_project_title: "1st International Convent Monastic Pastry Contest",
      projects_featured_project_text:
        "First international call promoted by DULCESOR, dedicated to recognizing and disseminating traditional pastry made in monasteries and convents, with Valladolid as the first host city.",
      projects_featured_more: "Learn more about the contests",
      projects_future_title: "Upcoming projects",
      projects_future_text:
        "DULCESOR is currently designing new initiatives linked to research and outreach of convent heritage, as well as creating international alliances to strengthen cultural and gastronomic dissemination of pastry legacy.",
      projects_future_note:
        "If you are an institution, entity or group interested in collaborating, contact us to explore ways to participate.",

      contests_title: "Contests",
      contests_subtitle: "Cultural and gastronomic calls promoted by the DULCESOR Cultural Association.",
      contests_frame_title: "General framework",
      contests_frame_text:
        "The DULCESOR Cultural Association promotes cultural and gastronomic contests aimed at preserving and disseminating monastic-convent pastry.",
      contests_in_prep: "In preparation",
      contests_featured_title: "Featured call",
      contests_pill_init: "Initial call",
      contests_reg_title: "Registration",
      contests_reg_text: "Participation will be open according to the official rules of each call.",
      contests_docs_title: "Official documentation",
      contests_docs_text: "Access the official documentation of the call (rules and application).",
      contests_btn_bases: "Rules (PDF)",
      contests_btn_form: "Application (PDF)",
      contests_pill_pdf: "PDF documentation",
      contests_poster_caption: "Poster of the 1st International DULCESOR Convent Monastic Pastry Contest",
      contests_sponsors_title: "Contest sponsors",
      contests_sponsors_subtitle: "Collaborating entities for the current edition.",

      sponsors_title: "Sponsors",
      sponsors_subtitle: "Collaborating entities of the DULCESOR Cultural Association.",
      sponsors_assoc_title: "Association sponsors",
      sponsors_assoc_text: "These entities support the overall development of the DULCESOR Cultural Association.",
      sponsors_nb21_text: "Sponsor of the DULCESOR Cultural Association.",
      sponsors_visit_web: "Visit website",

      contact_title: "Contact",
      contact_subtitle: "Contact channels of the DULCESOR Cultural Association.",
      contact_block_title: "Contact information",
      contact_email_label: "General information",
      contact_contact_label: "Institutional contact",
      contact_contest_label: "Contests",
      contact_address_label: "Headquarters",
      contact_address_value: "Plaza Santa Ana, 4  47002 Valladolid (Spain)",
      contact_note: "If you wish to collaborate or request more information, write to us and we will reply as soon as possible.",

      routes_title: "Monastic routes",
      routes_subtitle:
        "DULCESOR’s cultural line devoted to disseminating monastic heritage and artisanal tradition, with institutional links and cultural resources.",
      routes_nav_routes: "Routes",
      routes_nav_museums: "Museums",
      routes_section_title: "Routes",
      routes_section_note: "You can also access the Museums section from the navigation above.",
      routes_focus_title: "Cultural approach",
      routes_focus_text_1:
        "This space is conceived as a cultural and heritage dissemination line. It is not a generic tourism website: we prioritize an institutional, sober and respectful tone, promoting knowledge and enhancement of monastic heritage and artisanal pastry.",
      routes_focus_note:
        "Information and listings will be expanded progressively as the association’s activity advances.",
      routes_morning_title: "Half-day routes",
      routes_morning_text:
        "We will prepare small cultural routes (morning or half-day) to visit three or four monasteries, museums or heritage sites, with the option to link to official product purchases when available.",
      routes_in_prep: "In preparation",
      routes_morning_note:
        "These routes will be published once verified and aligned with a cultural, respectful approach to communities.",
      routes_monasteries_title: "Convents and monasteries",
      routes_monasteries_text:
        "Direct links to official websites or institutional channels of convents and monasteries. When official online stores or sales systems exist, they will be linked to facilitate access to their products.",
      routes_monasteries_note:
        "DULCESOR does not sell products on this website. Links point to external platforms managed by each community or entity.",
      routes_example_1_title: "Convent / Monastery (Example 1)",
      routes_example_1_text:
        "Template block to include name, location, short institutional description and official link.",
      routes_example_2_title: "Convent / Monastery (Example 2)",
      routes_example_2_text:
        "Template block to include name, location, short institutional description and official link.",
      routes_example_web_soon: "Official website · Coming soon",
      routes_example_shop_soon: "Buy products · Coming soon",
      routes_example_hint:
        "To add a new convent/monastery, duplicate one of the “Example” blocks and update title, text and links.",

      museums_section_title: "Museums",
      museums_section_intro:
        "The DULCESOR Cultural Association promotes the conservation and dissemination of cultural heritage linked to convent life, especially supporting convent museums as living spaces of memory, art and tradition.",
      museums_priority_title: "Museum of the Royal Monastery of San Joaquín y Santa Ana (Valladolid)",
      museums_priority_text:
        "Baroque sacred art museum within the Cistercian monastery, with a highly relevant heritage collection. A space linked to DULCESOR’s cultural identity.",
      museums_pill_priority: "Priority",
      museums_pill_conventual: "Convent museum",
      museums_pill_city: "Valladolid",
      museums_btn_official: "Official museum website",
      museums_btn_vr_soon: "Virtual experience (VR) · Coming soon",
      museums_priority_note:
        "A virtual (VR) experience linked to museum pieces is being developed and will be presented soon.",
      museums_other_title: "Other museums and convent spaces",
      museums_item_santa_isabel_title: "Museum of the Monastery of Santa Isabel (Valladolid)",
      museums_item_santa_isabel_text: "Institutional information link available.",
      museums_item_san_pablo_title: "Convent Church of San Pablo – Dominicans (Valladolid)",
      museums_item_san_pablo_text: "Institutional link available.",
      museums_btn_visit_web: "Visit website",
      museums_more_prep_title: "Other museums (in preparation)",
      museums_prep_1_title: "Monastery of Santa Clara (Tordesillas) · Monumental complex",
      museums_prep_1_text:
        "Monastic site with outstanding historical and heritage value. This block is prepared to be completed with institutional information and official link.",
      museums_prep_2_title: "Convent of San Francisco (Medina de Rioseco) · Sacred heritage",
      museums_prep_2_text:
        "Space linked to the province’s convent heritage. This block is prepared to be completed with institutional information and official link.",
      museums_more_note:
        "This section will be expanded progressively to include other museums and convent spaces that share DULCESOR’s cultural and heritage values.",
    },

    /* =========================
       PORTUGUÊS
    ========================= */
    pt: {
      nav_home: "Início",
      nav_association: "Associação",
      nav_projects: "Projetos",
      nav_contests: "Concursos",
      nav_routes: "Rotas monacais",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",

      home_title: "ASSOCIAÇÃO CULTURAL DULCESOR",
      home_subtitle: "Doçaria monacal conventual · Património gastronómico · Cultura e tradição",
      home_intro:
        'A Associação Cultural <strong>DULCESOR</strong> promove a preservação, divulgação e valorização da <strong>doçaria monacal conventual</strong> e do património gastronómico ligado a comunidades religiosas, impulsionando projetos culturais de alcance nacional e internacional.',
      home_project_title: "Projeto principal em desenvolvimento",
      home_project_desc: "I Concurso Internacional de Doces Conventuais – Valladolid 2026",
      home_project_status: "Informação em preparação",
      home_identity_title: "Identidade",
      home_identity_name_label: "Nome:",
      home_identity_name: "Associação Cultural DULCESOR",
      home_identity_nature_label: "Natureza:",
      home_identity_nature: "Associação cultural sem fins lucrativos",
      home_identity_scope_label: "Âmbito:",
      home_identity_scope: "Cultural e gastronómico",
      home_goals_title: "Fins e objetivos",
      home_goal_1: "Preservar e divulgar a doçaria conventual como património cultural.",
      home_goal_2: "Dar visibilidade ao trabalho artesanal de comunidades religiosas.",
      home_goal_3: "Impulsionar projetos culturais e gastronómicos com projeção internacional.",

      assoc_title: "Associação",
      assoc_subtitle:
        "Identidade, fins e princípios da Associação Cultural DULCESOR – Doçaria Monacal Conventual",
      assoc_identity_title: "Identidade",
      assoc_identity_text:
        "A Associação Cultural DULCESOR constitui-se como uma entidade sem fins lucrativos dedicada à preservação, investigação, promoção e divulgação do património doceiro monacal e conventual, entendendo a doçaria como uma manifestação cultural, artística e gastronómica com valor histórico e espiritual.",
      assoc_goals_title: "Fins e objetivos",
      assoc_goal_1:
        "Preservar e divulgar a tradição doceira de mosteiros e conventos como parte essencial do património cultural imaterial.",
      assoc_goal_2:
        "Promover atividades culturais, gastronómicas e académicas que favoreçam o conhecimento e a valorização social da doçaria monacal conventual.",
      assoc_goal_3:
        "Fomentar a investigação, recolha e documentação de receitas, técnicas e processos tradicionais transmitidos por comunidades religiosas.",
      assoc_goal_4:
        "Estabelecer vínculos de cooperação com instituições culturais, educativas e religiosas para impulsionar projetos conjuntos de conservação e divulgação.",
      assoc_values_title: "Princípios e valores",
      assoc_values_text:
        "A Associação Cultural DULCESOR desenvolve o seu trabalho com rigor histórico, respeito patrimonial e compromisso ético com as comunidades religiosas produtoras. Promove o reconhecimento da doçaria monacal como expressão gastronómica e, ao mesmo tempo, como testemunho vivo de espiritualidade, tradição e dedicação artesanal transmitida ao longo dos séculos.",
      assoc_admin_title: "Informação administrativa",
      assoc_admin_scope_label: "Âmbito de atuação",
      assoc_admin_scope_value: "Cultural e gastronómico (âmbito nacional e internacional)",
      assoc_admin_legal_label: "Natureza jurídica",
      assoc_admin_legal_value: "Associação cultural sem fins lucrativos",
      assoc_admin_note:
        "A associação encontra-se em processo de inscrição oficial de acordo com a legislação em vigor.",

      projects_title: "Projetos",
      projects_subtitle:
        "Iniciativas culturais e gastronómicas dedicadas à preservação e divulgação da doçaria monacal conventual.",
      projects_intro_title: "Apresentação geral",
      projects_intro_text:
        "Os projetos da Associação Cultural DULCESOR têm como objetivo valorizar o património doceiro de conventos e mosteiros, reforçar a ligação entre gastronomia e cultura e abrir um espaço de colaboração entre artesãs, instituições e cidadania.",
      projects_lines_title: "Linhas de ação",
      projects_line_1: "Organização de concursos, mostras e jornadas dedicadas à doçaria conventual.",
      projects_line_2:
        "Desenvolvimento de rotas e encontros culturais para promover visitas a mosteiros e museus relacionados com a tradição doceira.",
      projects_line_3:
        "Edição de materiais divulgativos e educativos sobre história, técnicas e legado doceiro.",
      projects_line_4:
        "Colaborações com instituições académicas e culturais para investigação e divulgação.",
      projects_featured_title: "Projetos em destaque",
      projects_featured_project_title: "I Concurso Internacional de Doçaria Monacal Conventual",
      projects_featured_project_text:
        "Primeira convocatória internacional impulsionada pela DULCESOR, dedicada a reconhecer e divulgar a doçaria tradicional elaborada em mosteiros e conventos, com Valladolid como primeiro cenário.",
      projects_featured_more: "Ver mais sobre os concursos",
      projects_future_title: "Projetos futuros",
      projects_future_text:
        "Atualmente, a Associação Cultural DULCESOR trabalha no desenho de novas iniciativas ligadas à investigação e divulgação do património conventual, bem como na criação de alianças internacionais que fortaleçam a difusão cultural e gastronómica do legado doceiro.",
      projects_future_note:
        "Se é uma instituição, entidade ou coletivo interessado em colaborar, pode contactar-nos para explorar formas de participação.",

      contests_title: "Concursos",
      contests_subtitle: "Convocatórias culturais e gastronómicas impulsionadas pela Associação Cultural DULCESOR.",
      contests_frame_title: "Enquadramento geral",
      contests_frame_text:
        "A Associação Cultural DULCESOR promove concursos culturais e gastronómicos destinados a preservar e divulgar a doçaria monacal conventual.",
      contests_in_prep: "Em preparação",
      contests_featured_title: "Convocatória em destaque",
      contests_pill_init: "Convocatória inicial",
      contests_reg_title: "Inscrição",
      contests_reg_text: "A participação estará aberta de acordo com as bases oficiais de cada convocatória.",
      contests_docs_title: "Documentação oficial",
      contests_docs_text: "Acesso à documentação oficial da convocatória (bases e formulário).",
      contests_btn_bases: "Bases (PDF)",
      contests_btn_form: "Formulário (PDF)",
      contests_pill_pdf: "Documentação em PDF",
      contests_poster_caption: "Cartaz do I Concurso Internacional de Doçaria Monacal Conventual DULCESOR",
      contests_sponsors_title: "Patrocinadores do concurso",
      contests_sponsors_subtitle: "Entidades colaboradoras do concurso (edição atual).",

      sponsors_title: "Patrocinadores",
      sponsors_subtitle: "Entidades colaboradoras da Associação Cultural DULCESOR.",
      sponsors_assoc_title: "Patrocinadores da associação",
      sponsors_assoc_text: "Estas entidades apoiam o desenvolvimento geral da Associação Cultural DULCESOR.",
      sponsors_nb21_text: "Patrocinador da Associação Cultural DULCESOR.",
      sponsors_visit_web: "Visitar site",

      contact_title: "Contacto",
      contact_subtitle: "Canais de comunicação da Associação Cultural DULCESOR.",
      contact_block_title: "Informações de contacto",
      contact_email_label: "Informação geral",
      contact_contact_label: "Contacto institucional",
      contact_contest_label: "Concursos",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4  47002 Valladolid (Espanha)",
      contact_note:
        "Se deseja colaborar ou obter mais informações, escreva-nos e responderemos o mais brevemente possível.",

      routes_title: "Rotas monacais",
      routes_subtitle:
        "Linha cultural da DULCESOR dedicada à divulgação do património monástico e da tradição artesanal, com ligações institucionais e recursos culturais.",
      routes_nav_routes: "Rotas",
      routes_nav_museums: "Museus",
      routes_section_title: "Rotas",
      routes_section_note: "Aceda também à secção de Museus através da navegação superior.",
      routes_focus_title: "Enfoque cultural",
      routes_focus_text_1:
        "Este espaço foi concebido como uma linha de difusão cultural e patrimonial. Não é um site turístico genérico: privilegia-se um tom institucional, sóbrio e respeitoso, promovendo o conhecimento e a valorização do património monástico e da doçaria artesanal.",
      routes_focus_note:
        "A informação e as listagens serão ampliadas progressivamente à medida que avance a atividade da associação.",
      routes_morning_title: "Rotas de meio dia",
      routes_morning_text:
        "Prepararemos pequenas rotas culturais (manhã ou meio dia) para visitar três ou quatro mosteiros, museus ou espaços patrimoniais, com possibilidade de ligação à compra de produtos se existir canal oficial.",
      routes_in_prep: "Em preparação",
      routes_morning_note:
        "Estas rotas serão publicadas quando estiverem validadas e alinhadas com uma abordagem cultural e respeitosa.",
      routes_monasteries_title: "Conventos e mosteiros",
      routes_monasteries_text:
        "Ligações diretas a sites oficiais ou canais institucionais de conventos e mosteiros. Quando existirem lojas online oficiais, serão adicionadas para facilitar o acesso aos produtos.",
      routes_monasteries_note:
        "A DULCESOR não comercializa produtos neste site. As ligações direcionam para plataformas externas geridas por cada comunidade ou entidade.",
      routes_example_1_title: "Convento / Mosteiro (Exemplo 1)",
      routes_example_1_text:
        "Bloco preparado para incluir nome, localidade, breve descrição institucional e ligação oficial.",
      routes_example_2_title: "Convento / Mosteiro (Exemplo 2)",
      routes_example_2_text:
        "Bloco preparado para incluir nome, localidade, breve descrição institucional e ligação oficial.",
      routes_example_web_soon: "Site oficial · Em breve",
      routes_example_shop_soon: "Comprar produtos · Em breve",
      routes_example_hint:
        "Para adicionar um novo convento/mosteiro, duplique um dos blocos “Exemplo” e altere título, texto e ligações.",

      museums_section_title: "Museus",
      museums_section_intro:
        "A Associação Cultural DULCESOR promove a conservação e divulgação do património cultural ligado à vida conventual, apoiando especialmente os museus conventuais como espaços vivos de memória, arte e tradição.",
      museums_priority_title: "Museu do Real Mosteiro de San Joaquín y Santa Ana (Valladolid)",
      museums_priority_text:
        "Museu de arte sacra barroca no mosteiro cisterciense, com um conjunto patrimonial de grande relevância. Espaço ligado à identidade cultural da DULCESOR.",
      museums_pill_priority: "Prioritário",
      museums_pill_conventual: "Museu conventual",
      museums_pill_city: "Valladolid",
      museums_btn_official: "Site oficial do museu",
      museums_btn_vr_soon: "Experiência virtual (RV) · Em breve",
      museums_priority_note:
        "Está a ser desenvolvida uma experiência virtual (RV) ligada a peças do museu, a apresentar em breve.",
      museums_other_title: "Outros museus e espaços conventuais",
      museums_item_santa_isabel_title: "Museu do Mosteiro de Santa Isabel (Valladolid)",
      museums_item_santa_isabel_text: "Ligação informativa institucional disponível.",
      museums_item_san_pablo_title: "Igreja Conventual de San Pablo – Dominicanos (Valladolid)",
      museums_item_san_pablo_text: "Ligação institucional disponível.",
      museums_btn_visit_web: "Visitar site",
      museums_more_prep_title: "Outros museus (em preparação)",
      museums_prep_1_title: "Mosteiro de Santa Clara (Tordesillas) · Conjunto monumental",
      museums_prep_1_text:
        "Espaço monástico com destacado valor histórico e patrimonial. Este bloco está preparado para ser completado com informação institucional e ligação oficial.",
      museums_prep_2_title: "Convento de San Francisco (Medina de Rioseco) · Património sacro",
      museums_prep_2_text:
        "Espaço ligado ao património conventual da província. Este bloco está preparado para ser completado com informação institucional e ligação oficial.",
      museums_more_note:
        "Este apartado será ampliado progressivamente incorporando outros museus e espaços conventuais que partilhem os valores culturais e patrimoniais da DULCESOR.",
    },

    /* =========================
       FRANÇAIS
    ========================= */
    fr: {
      nav_home: "Accueil",
      nav_association: "Association",
      nav_projects: "Projets",
      nav_contests: "Concours",
      nav_routes: "Routes monastiques",
      nav_sponsors: "Sponsors",
      nav_contact: "Contact",

      home_title: "ASSOCIATION CULTURELLE DULCESOR",
      home_subtitle: "Pâtisserie monastique · Patrimoine gastronomique · Culture et tradition",
      home_intro:
        'L’Association culturelle <strong>DULCESOR</strong> promeut la préservation, la diffusion et la mise en valeur de la <strong>pâtisserie monastique conventuelle</strong> et du patrimoine gastronomique lié aux communautés religieuses, en développant des projets culturels à portée nationale et internationale.',
      home_project_title: "Projet principal en cours",
      home_project_desc: "1er Concours international de desserts conventuels – Valladolid 2026",
      home_project_status: "Informations en préparation",
      home_identity_title: "Identité",
      home_identity_name_label: "Nom :",
      home_identity_name: "Association culturelle DULCESOR",
      home_identity_nature_label: "Nature :",
      home_identity_nature: "Association culturelle à but non lucratif",
      home_identity_scope_label: "Champ :",
      home_identity_scope: "Culturel et gastronomique",
      home_goals_title: "Objectifs",
      home_goal_1: "Préserver et diffuser la pâtisserie conventuelle comme patrimoine culturel.",
      home_goal_2: "Donner de la visibilité au travail artisanal des communautés religieuses.",
      home_goal_3: "Promouvoir des projets culturels et gastronomiques à portée internationale.",

      assoc_title: "Association",
      assoc_subtitle:
        "Identité, objectifs et principes de l’Association culturelle DULCESOR – Pâtisserie monastique conventuelle",
      assoc_identity_title: "Identité",
      assoc_identity_text:
        "L’Association culturelle DULCESOR est une entité à but non lucratif dédiée à la préservation, à la recherche, à la promotion et à la diffusion du patrimoine pâtissier monastique et conventuel, considérant la pâtisserie comme une expression culturelle, artistique et gastronomique à valeur historique et spirituelle.",
      assoc_goals_title: "Objectifs",
      assoc_goal_1:
        "Préserver et diffuser la tradition pâtissière des monastères et des couvents comme partie essentielle du patrimoine culturel immatériel.",
      assoc_goal_2:
        "Promouvoir des activités culturelles, gastronomiques et académiques favorisant la connaissance et la valorisation sociale de la pâtisserie monastique-conventuelle.",
      assoc_goal_3:
        "Encourager la recherche, la collecte et la documentation de recettes, techniques et procédés traditionnels transmis par les communautés religieuses.",
      assoc_goal_4:
        "Établir des liens de coopération avec des institutions culturelles, éducatives et religieuses pour promouvoir des projets communs de conservation et de diffusion.",
      assoc_values_title: "Principes et valeurs",
      assoc_values_text:
        "L’Association culturelle DULCESOR agit avec rigueur historique, respect du patrimoine et engagement éthique envers les communautés religieuses productrices. Elle promeut la reconnaissance de la pâtisserie monastique comme expression gastronomique et, en même temps, comme témoignage vivant de spiritualité, de tradition et de dévouement artisanal transmis au fil des siècles.",
      assoc_admin_title: "Informations administratives",
      assoc_admin_scope_label: "Champ d’action",
      assoc_admin_scope_value: "Culturel et gastronomique (national et international)",
      assoc_admin_legal_label: "Statut juridique",
      assoc_admin_legal_value: "Association culturelle à but non lucratif",
      assoc_admin_note:
        "L’association est en cours d’enregistrement officiel conformément à la législation en vigueur.",

      projects_title: "Projets",
      projects_subtitle:
        "Initiatives culturelles et gastronomiques dédiées à la préservation et à la diffusion de la pâtisserie monastique-conventuelle.",
      projects_intro_title: "Présentation générale",
      projects_intro_text:
        "Les projets de l’Association culturelle DULCESOR visent à valoriser le patrimoine pâtissier des couvents et monastères, à renforcer le lien entre gastronomie et culture, et à ouvrir un espace de collaboration entre artisanes, institutions et citoyens.",
      projects_lines_title: "Axes d’action",
      projects_line_1: "Organisation de concours, d’expositions et de journées dédiées à la pâtisserie conventuelle.",
      projects_line_2:
        "Développement de routes et de rencontres culturelles pour promouvoir la visite de monastères et de musées liés à la tradition pâtissière.",
      projects_line_3:
        "Édition de supports pédagogiques et de vulgarisation sur l’histoire, les techniques et l’héritage pâtissier.",
      projects_line_4:
        "Collaborations avec des institutions académiques et culturelles pour la recherche et la diffusion.",
      projects_featured_title: "Projets phares",
      projects_featured_project_title: "1er Concours international de pâtisserie monastique-conventuelle",
      projects_featured_project_text:
        "Première initiative internationale portée par DULCESOR, dédiée à reconnaître et diffuser la pâtisserie traditionnelle élaborée dans les monastères et couvents, avec Valladolid comme première ville d’accueil.",
      projects_featured_more: "En savoir plus sur les concours",
      projects_future_title: "Projets à venir",
      projects_future_text:
        "DULCESOR travaille actuellement à la conception de nouvelles initiatives liées à la recherche et à la diffusion du patrimoine conventuel, ainsi qu’à la création d’alliances internationales renforçant la diffusion culturelle et gastronomique de cet héritage.",
      projects_future_note:
        "Si vous êtes une institution, une entité ou un collectif intéressé, contactez-nous pour explorer des formes de participation.",

      contests_title: "Concours",
      contests_subtitle: "Appels culturels et gastronomiques portés par l’Association culturelle DULCESOR.",
      contests_frame_title: "Cadre général",
      contests_frame_text:
        "L’Association culturelle DULCESOR promeut des concours culturels et gastronomiques destinés à préserver et diffuser la pâtisserie monastique-conventuelle.",
      contests_in_prep: "En préparation",
      contests_featured_title: "Appel à participation",
      contests_pill_init: "Appel initial",
      contests_reg_title: "Inscription",
      contests_reg_text: "La participation sera ouverte conformément aux règles officielles de chaque appel.",
      contests_docs_title: "Documentation officielle",
      contests_docs_text: "Accès à la documentation officielle (règlement et formulaire).",
      contests_btn_bases: "Règlement (PDF)",
      contests_btn_form: "Formulaire (PDF)",
      contests_pill_pdf: "Documentation PDF",
      contests_poster_caption: "Affiche du 1er Concours international de pâtisserie monastique-conventuelle DULCESOR",
      contests_sponsors_title: "Sponsors du concours",
      contests_sponsors_subtitle: "Entités partenaires du concours (édition en cours).",

      sponsors_title: "Sponsors",
      sponsors_subtitle: "Entités partenaires de l’Association culturelle DULCESOR.",
      sponsors_assoc_title: "Sponsors de l’association",
      sponsors_assoc_text: "Ces entités soutiennent le développement général de l’Association culturelle DULCESOR.",
      sponsors_nb21_text: "Sponsor de l’Association culturelle DULCESOR.",
      sponsors_visit_web: "Visiter le site",

      contact_title: "Contact",
      contact_subtitle: "Canaux de communication de l’Association culturelle DULCESOR.",
      contact_block_title: "Informations de contact",
      contact_email_label: "Informations générales",
      contact_contact_label: "Contact institutionnel",
      contact_contest_label: "Concours",
      contact_address_label: "Siège",
      contact_address_value: "Plaza Santa Ana, 4  47002 Valladolid (Espagne)",
      contact_note:
        "Si vous souhaitez collaborer ou obtenir davantage d’informations, écrivez-nous et nous vous répondrons dans les plus brefs délais.",

      routes_title: "Routes monastiques",
      routes_subtitle:
        "Ligne culturelle de DULCESOR dédiée à la diffusion du patrimoine monastique et de la tradition artisanale, avec des liens institutionnels et des ressources culturelles.",
      routes_nav_routes: "Routes",
      routes_nav_museums: "Musées",
      routes_section_title: "Routes",
      routes_section_note: "Accédez aussi à la section Musées via la navigation ci-dessus.",
      routes_focus_title: "Approche culturelle",
      routes_focus_text_1:
        "Cet espace est conçu comme une démarche de diffusion culturelle et patrimoniale. Ce n’est pas un site touristique générique : nous privilégions un ton institutionnel, sobre et respectueux, favorisant la connaissance et la valorisation du patrimoine monastique et de la pâtisserie artisanale.",
      routes_focus_note:
        "Les informations et les listes seront enrichies progressivement au fur et à mesure de l’activité de l’association.",
      routes_morning_title: "Routes d’une demi-journée",
      routes_morning_text:
        "Nous préparerons de petites routes culturelles (matinée ou demi-journée) pour visiter trois ou quatre monastères, musées ou sites patrimoniaux, avec la possibilité de liens vers l’achat officiel de produits lorsqu’il existe.",
      routes_in_prep: "En préparation",
      routes_morning_note:
        "Ces routes seront publiées une fois vérifiées et dans le respect des communautés.",
      routes_monasteries_title: "Couvents et monastères",
      routes_monasteries_text:
        "Liens directs vers les sites officiels ou canaux institutionnels des couvents et monastères. Lorsqu’il existe des boutiques en ligne officielles, elles seront indiquées pour faciliter l’accès à leurs produits.",
      routes_monasteries_note:
        "DULCESOR ne commercialise pas de produits sur ce site. Les liens renvoient vers des plateformes externes gérées par chaque communauté ou entité.",
      routes_example_1_title: "Couvent / Monastère (Exemple 1)",
      routes_example_1_text:
        "Bloc modèle pour inclure le nom, la localité, une brève description institutionnelle et le lien officiel.",
      routes_example_2_title: "Couvent / Monastère (Exemple 2)",
      routes_example_2_text:
        "Bloc modèle pour inclure le nom, la localité, une brève description institutionnelle et le lien officiel.",
      routes_example_web_soon: "Site officiel · Bientôt",
      routes_example_shop_soon: "Acheter des produits · Bientôt",
      routes_example_hint:
        "Pour ajouter un nouveau couvent/monastère, dupliquez l’un des blocs « Exemple » et modifiez le titre, le texte et les liens.",

      museums_section_title: "Musées",
      museums_section_intro:
        "L’Association culturelle DULCESOR promeut la conservation et la diffusion du patrimoine culturel lié à la vie conventuelle, en soutenant tout particulièrement les musées conventuels comme espaces vivants de mémoire, d’art et de tradition.",
      museums_priority_title: "Musée du Monastère royal de San Joaquín y Santa Ana (Valladolid)",
      museums_priority_text:
        "Musée d’art sacré baroque au sein du monastère cistercien, avec un ensemble patrimonial de grande importance. Un espace lié à l’identité culturelle de DULCESOR.",
      museums_pill_priority: "Prioritaire",
      museums_pill_conventual: "Musée conventuel",
      museums_pill_city: "Valladolid",
      museums_btn_official: "Site officiel du musée",
      museums_btn_vr_soon: "Expérience virtuelle (VR) · Bientôt",
      museums_priority_note:
        "Une expérience virtuelle (VR) liée à des pièces du musée est en cours de développement et sera présentée prochainement.",
      museums_other_title: "Autres musées et espaces conventuels",
      museums_item_santa_isabel_title: "Musée du Monastère de Santa Isabel (Valladolid)",
      museums_item_santa_isabel_text: "Lien d’information institutionnelle disponible.",
      museums_item_san_pablo_title: "Église conventuelle de San Pablo – Dominicains (Valladolid)",
      museums_item_san_pablo_text: "Lien institutionnel disponible.",
      museums_btn_visit_web: "Visiter le site",
      museums_more_prep_title: "Autres musées (en préparation)",
      museums_prep_1_title: "Monastère de Santa Clara (Tordesillas) · Ensemble monumental",
      museums_prep_1_text:
        "Espace monastique à forte valeur historique et patrimoniale. Ce bloc est prêt à être complété avec des informations institutionnelles et un lien officiel.",
      museums_prep_2_title: "Couvent de San Francisco (Medina de Rioseco) · Patrimoine sacré",
      museums_prep_2_text:
        "Espace lié au patrimoine conventuel de la province. Ce bloc est prêt à être complété avec des informations institutionnelles et un lien officiel.",
      museums_more_note:
        "Cette section sera enrichie progressivement en intégrant d’autres musées et espaces conventuels partageant les valeurs culturelles et patrimoniales de DULCESOR.",
    },

    /* =========================
       ITALIANO
    ========================= */
    it: {
      nav_home: "Home",
      nav_association: "Associazione",
      nav_projects: "Progetti",
      nav_contests: "Concorsi",
      nav_routes: "Itinerari monastici",
      nav_sponsors: "Sponsor",
      nav_contact: "Contatto",

      home_title: "ASSOCIAZIONE CULTURALE DULCESOR",
      home_subtitle: "Pasticceria monastica · Patrimonio gastronomico · Cultura e tradizione",
      home_intro:
        'L’Associazione culturale <strong>DULCESOR</strong> promuove la conservazione, la diffusione e la valorizzazione della <strong>pasticceria monastica conventuale</strong> e del patrimonio gastronomico legato alle comunità religiose, sostenendo progetti culturali di portata nazionale e internazionale.',
      home_project_title: "Progetto principale in sviluppo",
      home_project_desc: "I Concorso Internazionale di Dolci Conventuali – Valladolid 2026",
      home_project_status: "Informazioni in preparazione",
      home_identity_title: "Identità",
      home_identity_name_label: "Nome:",
      home_identity_name: "Associazione culturale DULCESOR",
      home_identity_nature_label: "Natura:",
      home_identity_nature: "Associazione culturale senza scopo di lucro",
      home_identity_scope_label: "Ambito:",
      home_identity_scope: "Culturale e gastronomico",
      home_goals_title: "Finalità e obiettivi",
      home_goal_1: "Preservare e diffondere la pasticceria conventuale come patrimonio culturale.",
      home_goal_2: "Dare visibilità al lavoro artigianale delle comunità religiose.",
      home_goal_3: "Promuovere progetti culturali e gastronomici con proiezione internazionale.",

      assoc_title: "Associazione",
      assoc_subtitle:
        "Identità, finalità e principi dell’Associazione culturale DULCESOR – Pasticceria monastica conventuale",
      assoc_identity_title: "Identità",
      assoc_identity_text:
        "L’Associazione culturale DULCESOR è un ente senza scopo di lucro dedicato alla conservazione, ricerca, promozione e diffusione del patrimonio dolciario monastico e conventuale, considerando la pasticceria come espressione culturale, artistica e gastronomica di valore storico e spirituale.",
      assoc_goals_title: "Finalità e obiettivi",
      assoc_goal_1:
        "Preservare e diffondere la tradizione dolciaria di monasteri e conventi come parte essenziale del patrimonio culturale immateriale.",
      assoc_goal_2:
        "Promuovere attività culturali, gastronomiche e accademiche che favoriscano la conoscenza e la valorizzazione sociale della pasticceria monastica-conventuale.",
      assoc_goal_3:
        "Incentivare la ricerca, la raccolta e la documentazione di ricette, tecniche e processi tradizionali tramandati dalle comunità religiose.",
      assoc_goal_4:
        "Stabilire legami di cooperazione con istituzioni culturali, educative e religiose per promuovere progetti congiunti di conservazione e diffusione.",
      assoc_values_title: "Principi e valori",
      assoc_values_text:
        "L’Associazione culturale DULCESOR opera con rigore storico, rispetto del patrimonio e impegno etico verso le comunità religiose produttrici. Promuove il riconoscimento della pasticceria monastica come espressione gastronomica e, al tempo stesso, come testimonianza viva di spiritualità, tradizione e dedizione artigianale trasmessa nei secoli.",
      assoc_admin_title: "Informazioni amministrative",
      assoc_admin_scope_label: "Ambito di attività",
      assoc_admin_scope_value: "Culturale e gastronomico (nazionale e internazionale)",
      assoc_admin_legal_label: "Natura giuridica",
      assoc_admin_legal_value: "Associazione culturale senza scopo di lucro",
      assoc_admin_note:
        "L’associazione è in fase di registrazione ufficiale secondo la normativa vigente.",

      projects_title: "Progetti",
      projects_subtitle:
        "Iniziative culturali e gastronomiche dedicate alla conservazione e diffusione della pasticceria monastica-conventuale.",
      projects_intro_title: "Presentazione generale",
      projects_intro_text:
        "I progetti dell’Associazione culturale DULCESOR mirano a valorizzare il patrimonio dolciario di conventi e monasteri, rafforzare il legame tra gastronomia e cultura e aprire uno spazio di collaborazione tra artigiane, istituzioni e cittadinanza.",
      projects_lines_title: "Linee di azione",
      projects_line_1: "Organizzazione di concorsi, mostre e giornate dedicate alla pasticceria conventuale.",
      projects_line_2:
        "Sviluppo di itinerari e incontri culturali per promuovere la visita a monasteri e musei legati alla tradizione dolciaria.",
      projects_line_3:
        "Pubblicazione di materiali divulgativi ed educativi su storia, tecniche e patrimonio dolciario.",
      projects_line_4:
        "Collaborazioni con istituzioni accademiche e culturali per ricerca e diffusione.",
      projects_featured_title: "Progetti in evidenza",
      projects_featured_project_title: "I Concorso Internazionale di Pasticceria Monastica Conventuale",
      projects_featured_project_text:
        "Prima convocazione internazionale promossa da DULCESOR, dedicata a riconoscere e diffondere la pasticceria tradizionale elaborata in monasteri e conventi, con Valladolid come primo scenario.",
      projects_featured_more: "Scopri di più sui concorsi",
      projects_future_title: "Progetti futuri",
      projects_future_text:
        "Attualmente l’Associazione culturale DULCESOR lavora alla progettazione di nuove iniziative legate alla ricerca e alla divulgazione del patrimonio conventuale, nonché alla creazione di alleanze internazionali che rafforzino la diffusione culturale e gastronomica dell’eredità dolciaria.",
      projects_future_note:
        "Se sei un’istituzione, un ente o un collettivo interessato a collaborare, contattaci per esplorare modalità di partecipazione.",

      contests_title: "Concorsi",
      contests_subtitle: "Convocazioni culturali e gastronomiche promosse dall’Associazione culturale DULCESOR.",
      contests_frame_title: "Quadro generale",
      contests_frame_text:
        "L’Associazione culturale DULCESOR promuove concorsi culturali e gastronomici finalizzati a preservare e diffondere la pasticceria monastica-conventuale.",
      contests_in_prep: "In preparazione",
      contests_featured_title: "Convocazione in evidenza",
      contests_pill_init: "Convocazione iniziale",
      contests_reg_title: "Iscrizione",
      contests_reg_text: "La partecipazione sarà aperta secondo i regolamenti ufficiali di ogni convocazione.",
      contests_docs_title: "Documentazione ufficiale",
      contests_docs_text: "Accesso alla documentazione ufficiale (regolamento e domanda).",
      contests_btn_bases: "Regolamento (PDF)",
      contests_btn_form: "Domanda (PDF)",
      contests_pill_pdf: "Documentazione PDF",
      contests_poster_caption: "Manifesto del I Concorso Internazionale DULCESOR di Pasticceria Monastica Conventuale",
      contests_sponsors_title: "Sponsor del concorso",
      contests_sponsors_subtitle: "Enti collaboratori del concorso (edizione attuale).",

      sponsors_title: "Sponsor",
      sponsors_subtitle: "Entità collaboratrici dell’Associazione culturale DULCESOR.",
      sponsors_assoc_title: "Sponsor dell’associazione",
      sponsors_assoc_text:
        "Queste entità sostengono lo sviluppo generale dell’Associazione culturale DULCESOR.",
      sponsors_nb21_text: "Sponsor dell’Associazione culturale DULCESOR.",
      sponsors_visit_web: "Visita il sito",

      contact_title: "Contatto",
      contact_subtitle: "Canali di comunicazione dell’Associazione culturale DULCESOR.",
      contact_block_title: "Informazioni di contatto",
      contact_email_label: "Informazioni generali",
      contact_contact_label: "Contatto istituzionale",
      contact_contest_label: "Concorsi",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4  47002 Valladolid (Spagna)",
      contact_note:
        "Se desideri collaborare o richiedere maggiori informazioni, scrivici e ti risponderemo al più presto.",

      routes_title: "Itinerari monastici",
      routes_subtitle:
        "Linea culturale di DULCESOR dedicata alla diffusione del patrimonio monastico e della tradizione artigianale, con link istituzionali e risorse culturali.",
      routes_nav_routes: "Itinerari",
      routes_nav_museums: "Musei",
      routes_section_title: "Itinerari",
      routes_section_note: "Puoi accedere anche alla sezione Musei dalla navigazione superiore.",
      routes_focus_title: "Approccio culturale",
      routes_focus_text_1:
        "Questo spazio è concepito come linea di divulgazione culturale e patrimoniale. Non è un sito turistico generico: privilegia un tono istituzionale, sobrio e rispettoso, promuovendo la conoscenza e la valorizzazione del patrimonio monastico e della pasticceria artigianale.",
      routes_focus_note:
        "Le informazioni e gli elenchi verranno ampliati progressivamente con l’avanzare dell’attività dell’associazione.",
      routes_morning_title: "Itinerari di mezza giornata",
      routes_morning_text:
        "Prepareremo piccoli itinerari culturali (mattina o mezza giornata) per visitare tre o quattro monasteri, musei o siti patrimoniali, con la possibilità di collegarsi all’acquisto ufficiale di prodotti quando disponibile.",
      routes_in_prep: "In preparazione",
      routes_morning_note:
        "Questi itinerari saranno pubblicati quando verificati e coerenti con un approccio culturale e rispettoso verso le comunità.",
      routes_monasteries_title: "Conventi e monasteri",
      routes_monasteries_text:
        "Link diretti a siti ufficiali o canali istituzionali di conventi e monasteri. Quando esistono negozi online o sistemi di vendita ufficiali, verranno collegati per facilitare l’accesso ai prodotti.",
      routes_monasteries_note:
        "DULCESOR non vende prodotti su questo sito. I link rimandano a piattaforme esterne gestite da ciascuna comunità o ente.",
      routes_example_1_title: "Convento / Monastero (Esempio 1)",
      routes_example_1_text:
        "Blocco modello per inserire nome, località, breve descrizione istituzionale e link ufficiale.",
      routes_example_2_title: "Convento / Monastero (Esempio 2)",
      routes_example_2_text:
        "Blocco modello per inserire nome, località, breve descrizione istituzionale e link ufficiale.",
      routes_example_web_soon: "Sito ufficiale · Prossimamente",
      routes_example_shop_soon: "Acquisto prodotti · Prossimamente",
      routes_example_hint:
        "Per aggiungere un nuovo convento/monastero, duplica uno dei blocchi “Esempio” e modifica titolo, testo e link.",

      museums_section_title: "Musei",
      museums_section_intro:
        "L’Associazione culturale DULCESOR promuove la conservazione e la diffusione del patrimonio culturale legato alla vita conventuale, sostenendo in particolare i musei conventuali come spazi vivi di memoria, arte e tradizione.",
      museums_priority_title: "Museo del Real Monasterio de San Joaquín y Santa Ana (Valladolid)",
      museums_priority_text:
        "Museo di arte sacra barocca nel monastero cistercense, con un insieme patrimoniale di grande rilevanza. Spazio legato all’identità culturale di DULCESOR.",
      museums_pill_priority: "Prioritario",
      museums_pill_conventual: "Museo conventuale",
      museums_pill_city: "Valladolid",
      museums_btn_official: "Sito ufficiale del museo",
      museums_btn_vr_soon: "Esperienza virtuale (VR) · Prossimamente",
      museums_priority_note:
        "È in sviluppo un’esperienza virtuale (VR) legata a opere del museo, che verrà presentata prossimamente.",
      museums_other_title: "Altri musei e spazi conventuali",
      museums_item_santa_isabel_title: "Museo del Monastero di Santa Isabel (Valladolid)",
      museums_item_santa_isabel_text: "Link informativo istituzionale disponibile.",
      museums_item_san_pablo_title: "Chiesa conventuale di San Pablo – Domenicani (Valladolid)",
      museums_item_san_pablo_text: "Link istituzionale disponibile.",
      museums_btn_visit_web: "Visita il sito",
      museums_more_prep_title: "Altri musei (in preparazione)",
      museums_prep_1_title: "Monastero di Santa Clara (Tordesillas) · Complesso monumentale",
      museums_prep_1_text:
        "Sito monastico di grande valore storico e patrimoniale. Questo blocco è pronto per essere completato con informazioni istituzionali e link ufficiale.",
      museums_prep_2_title: "Convento di San Francisco (Medina de Rioseco) · Patrimonio sacro",
      museums_prep_2_text:
        "Spazio legato al patrimonio conventuale della provincia. Questo blocco è pronto per essere completato con informazioni istituzionali e link ufficiale.",
      museums_more_note:
        "Questa sezione verrà ampliata progressivamente includendo altri musei e spazi conventuali che condividono i valori culturali e patrimoniali di DULCESOR.",
    },
  };

  function normalizeLang(lang) {
    const v = (lang || "").toLowerCase().trim();
    return SUPPORTED.includes(v) ? v : "es";
  }

  function guessLang() {
    const raw = (navigator.language || "es").slice(0, 2).toLowerCase();
    return normalizeLang(raw);
  }

  function getLang() {
    return normalizeLang(localStorage.getItem(STORAGE_KEY) || guessLang() || "es");
  }

  function t(key, lang) {
    const L = normalizeLang(lang || getLang());
    return (DICT[L] && DICT[L][key]) || (DICT.es && DICT.es[key]) || "";
  }

  function applyI18n(root) {
    const scope = root || document;
    const lang = getLang();
    const dict = DICT[lang] || DICT.es || {};

    scope.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key] ?? (DICT.es ? DICT.es[key] : undefined);
      if (typeof value === "string") el.innerHTML = value;
    });

    // Opcional: traducir atributos con data-i18n-attr="placeholder,title"
    scope.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = dict[key] ?? (DICT.es ? DICT.es[key] : undefined);
      if (typeof value !== "string") return;

      const attrs = (el.getAttribute("data-i18n-attr") || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      attrs.forEach((attr) => el.setAttribute(attr, value));
    });
  }

  function setLanguage(lang) {
    const next = normalizeLang(lang);
    localStorage.setItem(STORAGE_KEY, next);

    // Notifica al resto (header.js escucha esto)
    document.dispatchEvent(new CustomEvent("dulcesor:langchange", { detail: { lang: next } }));

    // Aplica traducciones
    applyI18n();
  }

  // Exponemos API global para header.js y otras páginas
  window.dulcesorI18n = {
    getLang,
    setLanguage,
    applyI18n,
    t,
    supported: SUPPORTED.slice(),
  };

  // Si el script se carga con defer, DOM ya está parseado, aun así:
  document.addEventListener("DOMContentLoaded", () => applyI18n());
})();
