/* =====================================================
   i18n.js — Sistema de idiomas global (DULCESOR)
   - Traducciones centralizadas
   - applyI18n(root?) para re-traducir tras inyecciones (header/footer)
   - Soporte opcional:
       * data-i18n-html  -> usa innerHTML
       * data-i18n-attr="placeholder|title|aria-label|..."
   ===================================================== */

(function () {
  const translations = {
    es: {
      /* NAV */
      nav_home: "Inicio",
      nav_association: "Asociación",
      nav_projects: "Proyectos",
      nav_contests: "Concursos",
      nav_routes: "Rutas monacales",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",

      /* HOME */
      home_title: "DULCESOR",
      home_subtitle: "Asociación Cultural · Repostería Monacal-Conventual",
      home_intro:
        "Preservamos, investigamos y difundimos la tradición repostera monacal y conventual como patrimonio cultural, artístico y gastronómico.",
      home_project_title: "Proyecto principal",
      home_project_desc:
        "Impulsamos iniciativas culturales y gastronómicas para poner en valor la repostería monacal y conventual, conectando tradición, territorio e instituciones.",
      home_project_status: "En preparación",
      home_identity_title: "Identidad",
      home_identity_name_label: "Denominación",
      home_identity_name:
        "Asociación Cultural DULCESOR – Repostería Monacal Conventual",
      home_identity_nature_label: "Naturaleza jurídica",
      home_identity_nature: "Entidad sin ánimo de lucro",
      home_identity_scope_label: "Ámbito",
      home_identity_scope: "Cultural y gastronómico, con proyección nacional e internacional",
      home_goals_title: "Fines",
      home_goal_1:
        "Preservar y difundir la tradición repostera de monasterios y conventos.",
      home_goal_2:
        "Promover actividades culturales, gastronómicas y divulgativas.",
      home_goal_3:
        "Fomentar la investigación, documentación y colaboración institucional.",

      /* ASOCIACIÓN */
      assoc_title: "Asociación",
      assoc_subtitle:
        "Identidad, fines y principios de la Asociación Cultural DULCESOR – Repostería Monacal Conventual",
      assoc_identity_title: "Identidad",
      assoc_identity_text:
        "La Asociación Cultural DULCESOR se constituye como una entidad sin ánimo de lucro dedicada a la preservación, investigación, promoción y difusión del patrimonio repostero monacal y conventual, entendiendo la repostería como una manifestación cultural, artística y gastronómica con valor histórico y espiritual.",
      assoc_purpose_title: "Fines y objetivos",
      assoc_purpose_1:
        "Preservar y difundir la tradición repostera de los monasterios y conventos como parte esencial del patrimonio cultural inmaterial.",
      assoc_purpose_2:
        "Promover actividades culturales, gastronómicas y académicas que favorezcan el conocimiento y la valoración social de la repostería monacal conventual.",
      assoc_purpose_3:
        "Fomentar la investigación, recopilación y documentación de recetas, técnicas y procesos tradicionales transmitidos por comunidades religiosas.",
      assoc_purpose_4:
        "Establecer vínculos de cooperación con instituciones culturales, educativas y religiosas para impulsar proyectos conjuntos de conservación y difusión.",
      assoc_values_title: "Principios y valores",
      assoc_values_text:
        "La Asociación Cultural DULCESOR desarrolla su labor bajo criterios de rigor histórico, respeto patrimonial y compromiso ético con las comunidades religiosas productoras. Promueve el reconocimiento de la repostería monacal como una expresión gastronómica y, al mismo tiempo, como testimonio vivo de espiritualidad, tradición y dedicación artesanal transmitida a través de los siglos.",
      assoc_admin_title: "Información administrativa",
      assoc_admin_scope_label: "Ámbito de actuación",
      assoc_admin_scope:
        "Cultural y gastronómico (ámbito nacional e internacional)",
      assoc_admin_nature_label: "Naturaleza jurídica",
      assoc_admin_nature: "Asociación cultural sin ánimo de lucro",
      assoc_admin_note:
        "La asociación se encuentra en proceso de inscripción oficial conforme a la legislación vigente.",

      /* PROYECTOS */
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
      projects_featured_project_title:
        "I Concurso Internacional de Repostería Monacal Conventual",
      projects_featured_project_text:
        "Primera convocatoria internacional impulsada por DULCESOR, dedicada a reconocer y difundir la repostería tradicional elaborada en monasterios y conventos, con la ciudad de Valladolid como primer escenario.",
      projects_featured_more: "Ver más sobre los concursos",
      projects_future_title: "Futuros proyectos",
      projects_future_text:
        "Actualmente la Asociación Cultural DULCESOR trabaja en el diseño de nuevas iniciativas vinculadas a la investigación y divulgación del patrimonio conventual, así como en la creación de alianzas internacionales que fortalezcan la difusión cultural y gastronómica del legado repostero.",
      projects_future_note:
        "Si eres una institución, entidad o colectivo interesado en colaborar, puedes ponerte en contacto para explorar formas de participación.",

      /* CONCURSOS */
      contests_title: "Concursos",
      contests_subtitle:
        "Convocatorias culturales y gastronómicas impulsadas por la Asociación Cultural DULCESOR.",
      contests_frame_title: "Marco general",
      contests_frame_text:
        "La Asociación Cultural DULCESOR promueve concursos culturales y gastronómicos destinados a preservar y difundir la repostería monacal conventual.",
      contests_in_prep: "En preparación",
      contests_featured_title: "Convocatoria destacada",
      contests_reg_title: "Inscripción",
      contests_reg_text:
        "La participación estará abierta conforme a las bases oficiales de cada convocatoria.",
      contests_pill_init: "Convocatoria inicial",
      contests_docs_title: "Documentación oficial",
      contests_docs_text:
        "Acceso a la documentación oficial de la convocatoria (bases y solicitud).",
      contests_btn_bases: "Bases (PDF)",
      contests_btn_form: "Solicitud (PDF)",
      contests_pill_pdf: "Documentación en PDF",
      contests_poster_caption:
        "Cartel del I Concurso Internacional de Repostería Monacal Conventual DULCESOR",
      contests_sponsors_title: "Patrocinadores del concurso",
      contests_sponsors_subtitle:
        "Entidades colaboradoras del concurso (edición actual).",

      /* RUTAS (base, por si faltan claves) */
      routes_title: "Rutas monacales",
      routes_subtitle:
        "Línea cultural de DULCESOR dedicada a la difusión del patrimonio monástico y la tradición artesana, con enlaces institucionales y recursos culturales.",
      routes_block_title: "Enfoque cultural",
      routes_block_text:
        "Propuesta de divulgación y visita a espacios monásticos y patrimoniales vinculados a la tradición conventual y a su legado cultural.",

      /* PATROCINADORES (ASOCIACIÓN) */
      sponsors_title: "Patrocinadores",
      sponsors_subtitle:
        "Entidades colaboradoras de la Asociación Cultural DULCESOR.",
      sponsors_assoc_title: "Patrocinadores de la asociación",
      sponsors_assoc_text:
        "Estas entidades apoyan el desarrollo general de la Asociación Cultural DULCESOR.",
      sponsors_nb21_desc:
        "Patrocinador de la Asociación Cultural DULCESOR.",
      sponsors_visit_web: "Visitar web",

      /* CONTACTO */
      contact_title: "Contacto",
      contact_subtitle:
        "Canales de comunicación de la Asociación Cultural DULCESOR.",
      contact_block_title: "Información de contacto",
      contact_email_label: "Información general",
      contact_contact_label: "Contacto institucional",
      contact_contest_label: "Concursos",
      contact_address_label: "Sede",
      contact_address_value: "Valladolid (España)",
      contact_note:
        "Si deseas colaborar o ampliar información, escríbenos y te responderemos a la mayor brevedad.",

      /* FOOTER (IMPORTANTE: incluir {year}) */
      footer_line1:
        "© {year} Asociación Cultural “DULCESOR” – Repostería Monacal Conventual",
      footer_line2:
        "Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo",

      /* ALIAS (compatibilidad si quedan claves antiguas en alguna página) */
      CONTESTS_TITLE: "Concursos",
      CONTESTS_FRAME_TITLE: "Marco general",
      CONTESTS_FEATURED_TITLE: "Convocatoria destacada",
      CONTESTS_REG_TITLE: "Inscripción",
      CONTESTS_DOCS_TITLE: "Documentación oficial",
      CONTESTS_BTN_BASES: "Bases (PDF)",
      CONTESTS_BTN_FORM: "Solicitud (PDF)",
      CONTESTS_PILL_INITL: "Convocatoria inicial",
      CONTESTS_PILL_PDF: "Documentación en PDF",
      CONTESTS_IN_PREP: "En preparación"
    },

    /* ---------------- EN ---------------- */
    en: {
      nav_home: "Home",
      nav_association: "Association",
      nav_projects: "Projects",
      nav_contests: "Contests",
      nav_routes: "Monastic routes",
      nav_sponsors: "Sponsors",
      nav_contact: "Contact",

      home_title: "DULCESOR",
      home_subtitle: "Cultural Association · Monastic-Conventual Pastry",
      home_intro:
        "We preserve, research and promote monastic and conventual pastry traditions as cultural, artistic and gastronomic heritage.",
      home_project_title: "Main project",
      home_project_desc:
        "We promote cultural and gastronomic initiatives to highlight monastic and conventual pastry, connecting tradition, territory and institutions.",
      home_project_status: "In preparation",
      home_identity_title: "Identity",
      home_identity_name_label: "Name",
      home_identity_name:
        "Cultural Association DULCESOR – Monastic Conventual Pastry",
      home_identity_nature_label: "Legal nature",
      home_identity_nature: "Non-profit entity",
      home_identity_scope_label: "Scope",
      home_identity_scope:
        "Cultural and gastronomic, with national and international outreach",
      home_goals_title: "Goals",
      home_goal_1:
        "Preserve and share the pastry tradition of monasteries and convents.",
      home_goal_2: "Promote cultural, gastronomic and outreach activities.",
      home_goal_3:
        "Encourage research, documentation and institutional collaboration.",

      assoc_title: "Association",
      assoc_subtitle:
        "Identity, objectives and principles of the Cultural Association DULCESOR – Monastic Conventual Pastry",
      assoc_identity_title: "Identity",
      assoc_identity_text:
        "The Cultural Association DULCESOR is a non-profit entity dedicated to preserving, researching, promoting and disseminating monastic and conventual pastry heritage, understanding pastry as a cultural, artistic and gastronomic expression with historical and spiritual value.",
      assoc_purpose_title: "Objectives",
      assoc_purpose_1:
        "Preserve and disseminate the pastry tradition of monasteries and convents as essential intangible cultural heritage.",
      assoc_purpose_2:
        "Promote cultural, gastronomic and academic activities that enhance knowledge and social appreciation of monastic conventual pastry.",
      assoc_purpose_3:
        "Encourage research, collection and documentation of recipes, techniques and traditional processes transmitted by religious communities.",
      assoc_purpose_4:
        "Build cooperation links with cultural, educational and religious institutions to promote joint conservation and dissemination projects.",
      assoc_values_title: "Principles and values",
      assoc_values_text:
        "The Cultural Association DULCESOR works with historical rigor, heritage respect and ethical commitment to the producing religious communities. It promotes recognition of monastic pastry as a gastronomic expression and a living testimony of spirituality, tradition and artisanal dedication transmitted through the centuries.",
      assoc_admin_title: "Administrative information",
      assoc_admin_scope_label: "Scope of activity",
      assoc_admin_scope: "Cultural and gastronomic (national and international)",
      assoc_admin_nature_label: "Legal nature",
      assoc_admin_nature: "Non-profit cultural association",
      assoc_admin_note:
        "The association is currently undergoing official registration under applicable regulations.",

      projects_title: "Projects",
      projects_subtitle:
        "Cultural and gastronomic initiatives dedicated to preserving and promoting monastic conventual pastry.",
      projects_intro_title: "Overview",
      projects_intro_text:
        "DULCESOR projects aim to highlight convent and monastery pastry heritage, strengthen the link between gastronomy and culture, and foster collaboration among artisans, institutions and citizens.",
      projects_lines_title: "Lines of action",
      projects_line_1: "Organization of contests, exhibitions and events.",
      projects_line_2:
        "Development of routes and cultural meetings to promote visits to monasteries and museums related to pastry tradition.",
      projects_line_3:
        "Publishing outreach and educational materials about history, techniques and heritage.",
      projects_line_4:
        "Collaboration with academic and cultural institutions for research and dissemination.",
      projects_featured_title: "Featured projects",
      projects_featured_project_title:
        "1st International Monastic Conventual Pastry Contest",
      projects_featured_project_text:
        "The first international call promoted by DULCESOR, aimed at recognizing and disseminating traditional pastry made in monasteries and convents, with Valladolid as the first venue.",
      projects_featured_more: "See more about contests",
      projects_future_title: "Future projects",
      projects_future_text:
        "DULCESOR is currently designing new initiatives linked to research and dissemination of conventual heritage, as well as international alliances to strengthen cultural and gastronomic outreach.",
      projects_future_note:
        "If you are an institution or group interested in collaborating, contact us to explore ways to participate.",

      contests_title: "Contests",
      contests_subtitle:
        "Cultural and gastronomic calls promoted by the Cultural Association DULCESOR.",
      contests_frame_title: "General framework",
      contests_frame_text:
        "The Cultural Association DULCESOR promotes cultural and gastronomic contests aimed at preserving and disseminating monastic conventual pastry traditions.",
      contests_in_prep: "In preparation",
      contests_featured_title: "Featured call",
      contests_reg_title: "Registration",
      contests_reg_text:
        "Participation will be open according to the official rules of each call.",
      contests_pill_init: "Initial call",
      contests_docs_title: "Official documentation",
      contests_docs_text:
        "Access the official documents of the call (rules and application).",
      contests_btn_bases: "Rules (PDF)",
      contests_btn_form: "Application (PDF)",
      contests_pill_pdf: "PDF documentation",
      contests_poster_caption:
        "Poster of the 1st International Monastic Conventual Pastry Contest DULCESOR",
      contests_sponsors_title: "Contest sponsors",
      contests_sponsors_subtitle: "Partner entities for the current edition.",

      routes_title: "Monastic routes",
      routes_subtitle:
        "DULCESOR cultural line dedicated to monastic heritage and artisan tradition, with institutional links and cultural resources.",
      routes_block_title: "Cultural approach",
      routes_block_text:
        "Outreach and visits to monastic and heritage sites connected to conventual tradition and its cultural legacy.",

      sponsors_title: "Sponsors",
      sponsors_subtitle: "Partner entities of the Cultural Association DULCESOR.",
      sponsors_assoc_title: "Association sponsors",
      sponsors_assoc_text:
        "These entities support the overall development of the Cultural Association DULCESOR.",
      sponsors_nb21_desc: "Sponsor of the Cultural Association DULCESOR.",
      sponsors_visit_web: "Visit website",

      contact_title: "Contact",
      contact_subtitle: "Contact channels of the Cultural Association DULCESOR.",
      contact_block_title: "Contact information",
      contact_email_label: "General information",
      contact_contact_label: "Institutional contact",
      contact_contest_label: "Contests",
      contact_address_label: "Headquarters",
      contact_address_value: "Valladolid (Spain)",
      contact_note:
        "If you would like to collaborate or request more information, write to us and we will reply as soon as possible.",

      footer_line1:
        "© {year} Cultural Association “DULCESOR” – Monastic Conventual Pastry",
      footer_line2:
        "Non-profit cultural association · Registration in progress · Valladolid (Spain) · Website developed by Apolo Studio Creativo"
    },

    /* ---------------- PT ---------------- */
    pt: {
      nav_home: "Início",
      nav_association: "Associação",
      nav_projects: "Projetos",
      nav_contests: "Concursos",
      nav_routes: "Rotas monásticas",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",

      home_title: "DULCESOR",
      home_subtitle: "Associação Cultural · Doçaria Monástica-Conventual",
      home_intro:
        "Preservamos, investigamos e divulgamos a doçaria monástica e conventual como património cultural, artístico e gastronómico.",
      home_project_title: "Projeto principal",
      home_project_desc:
        "Promovemos iniciativas culturais e gastronómicas para valorizar a doçaria monástica e conventual, ligando tradição, território e instituições.",
      home_project_status: "Em preparação",
      home_identity_title: "Identidade",
      home_identity_name_label: "Denominação",
      home_identity_name:
        "Associação Cultural DULCESOR – Doçaria Monástica Conventual",
      home_identity_nature_label: "Natureza jurídica",
      home_identity_nature: "Entidade sem fins lucrativos",
      home_identity_scope_label: "Âmbito",
      home_identity_scope:
        "Cultural e gastronómico, com projeção nacional e internacional",
      home_goals_title: "Fins",
      home_goal_1:
        "Preservar e divulgar a tradição doceira de mosteiros e conventos.",
      home_goal_2: "Promover atividades culturais, gastronómicas e divulgativas.",
      home_goal_3:
        "Fomentar investigação, documentação e colaboração institucional.",

      assoc_title: "Associação",
      assoc_subtitle:
        "Identidade, fins e princípios da Associação Cultural DULCESOR – Doçaria Monástica Conventual",
      assoc_identity_title: "Identidade",
      assoc_identity_text:
        "A Associação Cultural DULCESOR é uma entidade sem fins lucrativos dedicada à preservação, investigação, promoção e divulgação do património doceiro monástico e conventual.",
      assoc_purpose_title: "Fins e objetivos",
      assoc_purpose_1:
        "Preservar e divulgar a tradição doceira como património cultural imaterial.",
      assoc_purpose_2:
        "Promover atividades culturais, gastronómicas e académicas.",
      assoc_purpose_3:
        "Fomentar investigação e documentação de receitas e técnicas tradicionais.",
      assoc_purpose_4:
        "Cooperar com instituições culturais, educativas e religiosas.",
      assoc_values_title: "Princípios e valores",
      assoc_values_text:
        "Rigor histórico, respeito patrimonial e compromisso ético com as comunidades produtoras.",
      assoc_admin_title: "Informação administrativa",
      assoc_admin_scope_label: "Âmbito de atuação",
      assoc_admin_scope: "Cultural e gastronómico (nacional e internacional)",
      assoc_admin_nature_label: "Natureza jurídica",
      assoc_admin_nature: "Associação cultural sem fins lucrativos",
      assoc_admin_note:
        "A associação encontra-se em processo de inscrição oficial.",

      projects_title: "Projetos",
      projects_subtitle:
        "Iniciativas culturais e gastronómicas dedicadas à preservação e divulgação da doçaria monástica conventual.",
      projects_intro_title: "Apresentação geral",
      projects_intro_text:
        "Os projetos da DULCESOR valorizam o património doceiro, reforçam a ligação entre gastronomia e cultura e promovem a colaboração.",
      projects_lines_title: "Linhas de ação",
      projects_line_1: "Organização de concursos e jornadas.",
      projects_line_2:
        "Desenvolvimento de rotas e encontros culturais.",
      projects_line_3:
        "Edição de materiais divulgativos e educativos.",
      projects_line_4:
        "Colaborações com instituições académicas e culturais.",
      projects_featured_title: "Projetos em destaque",
      projects_featured_project_title:
        "I Concurso Internacional de Doçaria Monástica Conventual",
      projects_featured_project_text:
        "Primeira convocatória internacional promovida pela DULCESOR, com Valladolid como primeiro cenário.",
      projects_featured_more: "Ver mais sobre os concursos",
      projects_future_title: "Futuros projetos",
      projects_future_text:
        "A DULCESOR trabalha em novas iniciativas de investigação e divulgação do património conventual.",
      projects_future_note:
        "Se pretende colaborar, contacte-nos para explorar formas de participação.",

      contests_title: "Concursos",
      contests_subtitle:
        "Convocatórias culturais e gastronómicas promovidas pela Associação Cultural DULCESOR.",
      contests_frame_title: "Enquadramento geral",
      contests_frame_text:
        "A DULCESOR promove concursos para preservar e divulgar a doçaria monástica conventual.",
      contests_in_prep: "Em preparação",
      contests_featured_title: "Convocatória em destaque",
      contests_reg_title: "Inscrição",
      contests_reg_text:
        "A participação estará aberta de acordo com o regulamento oficial.",
      contests_pill_init: "Convocatória inicial",
      contests_docs_title: "Documentação oficial",
      contests_docs_text:
        "Acesso à documentação oficial (regulamento e inscrição).",
      contests_btn_bases: "Regulamento (PDF)",
      contests_btn_form: "Inscrição (PDF)",
      contests_pill_pdf: "Documentação em PDF",
      contests_poster_caption:
        "Cartaz do I Concurso Internacional de Doçaria Monástica Conventual DULCESOR",
      contests_sponsors_title: "Patrocinadores do concurso",
      contests_sponsors_subtitle: "Entidades colaboradoras (edição atual).",

      routes_title: "Rotas monásticas",
      routes_subtitle:
        "Linha cultural dedicada ao património monástico e recursos culturais.",
      routes_block_title: "Enfoque cultural",
      routes_block_text:
        "Divulgação e visita a espaços monásticos e patrimoniais.",

      sponsors_title: "Patrocinadores",
      sponsors_subtitle: "Entidades colaboradoras da Associação Cultural DULCESOR.",
      sponsors_assoc_title: "Patrocinadores da associação",
      sponsors_assoc_text:
        "Estas entidades apoiam o desenvolvimento geral da Associação Cultural DULCESOR.",
      sponsors_nb21_desc: "Patrocinador da Associação Cultural DULCESOR.",
      sponsors_visit_web: "Visitar site",

      contact_title: "Contacto",
      contact_subtitle: "Canais de contacto da Associação Cultural DULCESOR.",
      contact_block_title: "Informação de contacto",
      contact_email_label: "Informação geral",
      contact_contact_label: "Contacto institucional",
      contact_contest_label: "Concursos",
      contact_address_label: "Sede",
      contact_address_value: "Valladolid (Espanha)",
      contact_note:
        "Se pretende colaborar ou pedir informação, escreva-nos e responderemos o mais breve possível.",

      footer_line1:
        "© {year} Associação Cultural “DULCESOR” – Doçaria Monástica Conventual",
      footer_line2:
        "Associação cultural sem fins lucrativos · Inscrição em curso · Valladolid (Espanha) · Web desenvolvida por Apolo Studio Creativo"
    },

    /* ---------------- FR ---------------- */
    fr: {
      nav_home: "Accueil",
      nav_association: "Association",
      nav_projects: "Projets",
      nav_contests: "Concours",
      nav_routes: "Routes monastiques",
      nav_sponsors: "Partenaires",
      nav_contact: "Contact",

      home_title: "DULCESOR",
      home_subtitle: "Association Culturelle · Pâtisserie monastique-conventuelle",
      home_intro:
        "Nous préservons, étudions et valorisons la pâtisserie monastique et conventuelle comme patrimoine culturel, artistique et gastronomique.",
      home_project_title: "Projet principal",
      home_project_desc:
        "Nous menons des initiatives culturelles et gastronomiques pour mettre en valeur la tradition pâtissière monastique, en reliant tradition, territoire et institutions.",
      home_project_status: "En préparation",
      home_identity_title: "Identité",
      home_identity_name_label: "Dénomination",
      home_identity_name:
        "Association Culturelle DULCESOR – Pâtisserie monastique conventuelle",
      home_identity_nature_label: "Statut",
      home_identity_nature: "Association à but non lucratif",
      home_identity_scope_label: "Champ d’action",
      home_identity_scope:
        "Culturel et gastronomique, avec portée nationale et internationale",
      home_goals_title: "Objectifs",
      home_goal_1:
        "Préserver et diffuser la tradition pâtissière des monastères et couvents.",
      home_goal_2: "Promouvoir des actions culturelles et gastronomiques.",
      home_goal_3: "Encourager la recherche et la coopération institutionnelle.",

      assoc_title: "Association",
      assoc_subtitle:
        "Identité, objectifs et principes de l’Association Culturelle DULCESOR – Pâtisserie monastique conventuelle",
      assoc_identity_title: "Identité",
      assoc_identity_text:
        "L’Association Culturelle DULCESOR est une organisation à but non lucratif dédiée à la préservation, la recherche, la promotion et la diffusion du patrimoine pâtissier monastique et conventuel.",
      assoc_purpose_title: "Objectifs",
      assoc_purpose_1:
        "Préserver et diffuser la tradition pâtissière comme patrimoine immatériel.",
      assoc_purpose_2:
        "Promouvoir des activités culturelles, gastronomiques et académiques.",
      assoc_purpose_3:
        "Encourager la recherche et la documentation de recettes et techniques traditionnelles.",
      assoc_purpose_4:
        "Coopérer avec des institutions culturelles, éducatives et religieuses.",
      assoc_values_title: "Principes et valeurs",
      assoc_values_text:
        "Rigueur historique, respect patrimonial et engagement éthique.",
      assoc_admin_title: "Informations administratives",
      assoc_admin_scope_label: "Champ d’action",
      assoc_admin_scope: "Culturel et gastronomique (national et international)",
      assoc_admin_nature_label: "Statut",
      assoc_admin_nature: "Association culturelle à but non lucratif",
      assoc_admin_note:
        "L’association est en cours d’enregistrement officiel.",

      projects_title: "Projets",
      projects_subtitle:
        "Initiatives culturelles et gastronomiques dédiées à la préservation et à la diffusion de la pâtisserie monastique conventuelle.",
      projects_intro_title: "Présentation",
      projects_intro_text:
        "Les projets de DULCESOR valorisent le patrimoine pâtissier et favorisent la collaboration.",
      projects_lines_title: "Axes d’action",
      projects_line_1: "Organisation de concours et d’événements.",
      projects_line_2: "Développement de routes et de rencontres culturelles.",
      projects_line_3: "Édition de supports pédagogiques et de médiation.",
      projects_line_4: "Partenariats avec des institutions académiques et culturelles.",
      projects_featured_title: "Projets à la une",
      projects_featured_project_title:
        "1er Concours International de Pâtisserie Monastique Conventuelle",
      projects_featured_project_text:
        "Première édition portée par DULCESOR, avec Valladolid comme premier lieu.",
      projects_featured_more: "Voir plus sur les concours",
      projects_future_title: "Projets futurs",
      projects_future_text:
        "DULCESOR prépare de nouvelles initiatives de recherche et de diffusion du patrimoine conventuel.",
      projects_future_note:
        "Si vous souhaitez collaborer, contactez-nous pour envisager des formes de participation.",

      contests_title: "Concours",
      contests_subtitle:
        "Appels culturels et gastronomiques portés par l’Association Culturelle DULCESOR.",
      contests_frame_title: "Cadre général",
      contests_frame_text:
        "DULCESOR organise des concours pour préserver et promouvoir la pâtisserie monastique conventuelle.",
      contests_in_prep: "En préparation",
      contests_featured_title: "Appel à participation",
      contests_reg_title: "Inscription",
      contests_reg_text:
        "La participation est ouverte selon le règlement officiel.",
      contests_pill_init: "Appel initial",
      contests_docs_title: "Documentation officielle",
      contests_docs_text:
        "Accès aux documents officiels (règlement et formulaire).",
      contests_btn_bases: "Règlement (PDF)",
      contests_btn_form: "Formulaire (PDF)",
      contests_pill_pdf: "Documentation PDF",
      contests_poster_caption:
        "Affiche du 1er Concours International de Pâtisserie Monastique Conventuelle DULCESOR",
      contests_sponsors_title: "Partenaires du concours",
      contests_sponsors_subtitle: "Entités partenaires (édition actuelle).",

      routes_title: "Routes monastiques",
      routes_subtitle:
        "Ligne culturelle dédiée au patrimoine monastique et aux ressources culturelles.",
      routes_block_title: "Approche culturelle",
      routes_block_text:
        "Médiation et visites de sites monastiques et patrimoniaux.",

      sponsors_title: "Partenaires",
      sponsors_subtitle: "Entités partenaires de l’Association Culturelle DULCESOR.",
      sponsors_assoc_title: "Partenaires de l’association",
      sponsors_assoc_text:
        "Ces entités soutiennent le développement général de l’Association Culturelle DULCESOR.",
      sponsors_nb21_desc: "Partenaire de l’Association Culturelle DULCESOR.",
      sponsors_visit_web: "Visiter le site",

      contact_title: "Contact",
      contact_subtitle: "Canaux de contact de l’Association Culturelle DULCESOR.",
      contact_block_title: "Informations de contact",
      contact_email_label: "Informations générales",
      contact_contact_label: "Contact institutionnel",
      contact_contest_label: "Concours",
      contact_address_label: "Siège",
      contact_address_value: "Valladolid (Espagne)",
      contact_note:
        "Pour collaborer ou demander des informations, écrivez-nous et nous répondrons dès que possible.",

      footer_line1:
        "© {year} Association Culturelle “DULCESOR” – Pâtisserie monastique conventuelle",
      footer_line2:
        "Association à but non lucratif · Enregistrement en cours · Valladolid (Espagne) · Site développé par Apolo Studio Creativo"
    },

    /* ---------------- IT ---------------- */
    it: {
      nav_home: "Home",
      nav_association: "Associazione",
      nav_projects: "Progetti",
      nav_contests: "Concorsi",
      nav_routes: "Percorsi monastici",
      nav_sponsors: "Sponsor",
      nav_contact: "Contatti",

      home_title: "DULCESOR",
      home_subtitle: "Associazione Culturale · Pasticceria monastica-conventuale",
      home_intro:
        "Preserviamo, studiamo e promuoviamo la pasticceria monastica e conventuale come patrimonio culturale, artistico e gastronomico.",
      home_project_title: "Progetto principale",
      home_project_desc:
        "Promuoviamo iniziative culturali e gastronomiche per valorizzare la tradizione monastica e conventuale, collegando tradizione, territorio e istituzioni.",
      home_project_status: "In preparazione",
      home_identity_title: "Identità",
      home_identity_name_label: "Denominazione",
      home_identity_name:
        "Associazione Culturale DULCESOR – Pasticceria monastica conventuale",
      home_identity_nature_label: "Natura giuridica",
      home_identity_nature: "Ente senza scopo di lucro",
      home_identity_scope_label: "Ambito",
      home_identity_scope:
        "Culturale e gastronomico, con proiezione nazionale e internazionale",
      home_goals_title: "Obiettivi",
      home_goal_1:
        "Preservare e diffondere la tradizione dolciaria di monasteri e conventi.",
      home_goal_2: "Promuovere attività culturali e gastronomiche.",
      home_goal_3: "Favorire ricerca e collaborazione istituzionale.",

      assoc_title: "Associazione",
      assoc_subtitle:
        "Identità, obiettivi e principi dell’Associazione Culturale DULCESOR – Pasticceria monastica conventuale",
      assoc_identity_title: "Identità",
      assoc_identity_text:
        "L’Associazione Culturale DULCESOR è un ente senza scopo di lucro dedicato alla preservazione, ricerca, promozione e diffusione del patrimonio dolciario monastico e conventuale.",
      assoc_purpose_title: "Obiettivi",
      assoc_purpose_1:
        "Preservare e diffondere la tradizione come patrimonio culturale immateriale.",
      assoc_purpose_2:
        "Promuovere attività culturali, gastronomiche e accademiche.",
      assoc_purpose_3:
        "Favorire ricerca e documentazione di ricette e tecniche tradizionali.",
      assoc_purpose_4:
        "Cooperare con istituzioni culturali, educative e religiose.",
      assoc_values_title: "Principi e valori",
      assoc_values_text:
        "Rigore storico, rispetto del patrimonio e impegno etico.",
      assoc_admin_title: "Informazioni amministrative",
      assoc_admin_scope_label: "Ambito di attività",
      assoc_admin_scope: "Culturale e gastronomico (nazionale e internazionale)",
      assoc_admin_nature_label: "Natura giuridica",
      assoc_admin_nature: "Associazione culturale senza scopo di lucro",
      assoc_admin_note:
        "L’associazione è in fase di registrazione ufficiale.",

      projects_title: "Progetti",
      projects_subtitle:
        "Iniziative culturali e gastronomiche dedicate alla preservazione e diffusione della pasticceria monastica conventuale.",
      projects_intro_title: "Presentazione",
      projects_intro_text:
        "I progetti DULCESOR valorizzano il patrimonio dolciario e favoriscono la collaborazione.",
      projects_lines_title: "Linee d’azione",
      projects_line_1: "Organizzazione di concorsi ed eventi.",
      projects_line_2: "Sviluppo di percorsi e incontri culturali.",
      projects_line_3: "Pubblicazione di materiali divulgativi ed educativi.",
      projects_line_4: "Collaborazioni con istituzioni accademiche e culturali.",
      projects_featured_title: "Progetti in evidenza",
      projects_featured_project_title:
        "1° Concorso Internazionale di Pasticceria Monastica Conventuale",
      projects_featured_project_text:
        "Prima edizione promossa da DULCESOR, con Valladolid come primo scenario.",
      projects_featured_more: "Scopri di più sui concorsi",
      projects_future_title: "Progetti futuri",
      projects_future_text:
        "DULCESOR prepara nuove iniziative di ricerca e divulgazione del patrimonio conventuale.",
      projects_future_note:
        "Se vuoi collaborare, contattaci per esplorare modalità di partecipazione.",

      contests_title: "Concorsi",
      contests_subtitle:
        "Bandi culturali e gastronomici promossi dall’Associazione Culturale DULCESOR.",
      contests_frame_title: "Quadro generale",
      contests_frame_text:
        "DULCESOR promuove concorsi per preservare e valorizzare la pasticceria monastica conventuale.",
      contests_in_prep: "In preparazione",
      contests_featured_title: "Bando in evidenza",
      contests_reg_title: "Iscrizione",
      contests_reg_text:
        "La partecipazione è aperta secondo il regolamento ufficiale.",
      contests_pill_init: "Bando iniziale",
      contests_docs_title: "Documentazione ufficiale",
      contests_docs_text: "Accesso ai documenti ufficiali (regolamento e modulo).",
      contests_btn_bases: "Regolamento (PDF)",
      contests_btn_form: "Modulo (PDF)",
      contests_pill_pdf: "Documentazione PDF",
      contests_poster_caption:
        "Locandina del 1° Concorso Internazionale di Pasticceria Monastica Conventuale DULCESOR",
      contests_sponsors_title: "Sponsor del concorso",
      contests_sponsors_subtitle: "Enti partner (edizione attuale).",

      routes_title: "Percorsi monastici",
      routes_subtitle:
        "Linea culturale dedicata al patrimonio monastico e alle risorse culturali.",
      routes_block_title: "Approccio culturale",
      routes_block_text:
        "Divulgazione e visite di siti monastici e patrimoniali.",

      sponsors_title: "Sponsor",
      sponsors_subtitle: "Enti partner dell’Associazione Culturale DULCESOR.",
      sponsors_assoc_title: "Sponsor dell’associazione",
      sponsors_assoc_text:
        "Questi enti supportano lo sviluppo generale dell’Associazione Culturale DULCESOR.",
      sponsors_nb21_desc: "Sponsor dell’Associazione Culturale DULCESOR.",
      sponsors_visit_web: "Visita il sito",

      contact_title: "Contatti",
      contact_subtitle: "Canali di contatto dell’Associazione Culturale DULCESOR.",
      contact_block_title: "Informazioni di contatto",
      contact_email_label: "Informazioni generali",
      contact_contact_label: "Contatto istituzionale",
      contact_contest_label: "Concorsi",
      contact_address_label: "Sede",
      contact_address_value: "Valladolid (Spagna)",
      contact_note:
        "Se vuoi collaborare o richiedere informazioni, scrivici e risponderemo il prima possibile.",

      footer_line1:
        "© {year} Associazione Culturale “DULCESOR” – Pasticceria monastica conventuale",
      footer_line2:
        "Associazione senza scopo di lucro · Registrazione in corso · Valladolid (Spagna) · Sito sviluppato da Apolo Studio Creativo"
    }
  };

  const STORAGE_KEY = "dulcesor_lang";
  let currentLang = (localStorage.getItem(STORAGE_KEY) || "es").toLowerCase();
  if (!translations[currentLang]) currentLang = "es";

  /**
   * Aplica traducciones a elementos con data-i18n (en todo el documento o dentro de un root)
   * - data-i18n="clave"
   * - data-i18n-html   -> usa innerHTML (solo si necesitas HTML)
   * - data-i18n-attr="placeholder|title|aria-label|..."
   */
  function applyI18n(root = document) {
    const dict = translations[currentLang] || {};
    const scope =
      root && root.querySelectorAll ? root : document;

    scope.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key] ?? key;

      const attr = el.getAttribute("data-i18n-attr");
      const htmlMode = el.hasAttribute("data-i18n-html");

      if (attr) {
        el.setAttribute(attr, value);
        return;
      }

      if (htmlMode) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    // Aviso a otros scripts si quieren engancharse a “idioma aplicado”
    document.dispatchEvent(
      new CustomEvent("dulcesor:i18n-applied", { detail: { lang: currentLang } })
    );
  }

  /** Cambia idioma + persiste + reaplica */
  function setLanguage(lang) {
    const normalized = (lang || "").toLowerCase();
    if (!translations[normalized]) return;

    currentLang = normalized;
    localStorage.setItem(STORAGE_KEY, currentLang);

    applyI18n();

    // Marca botones activos si existen
    document.querySelectorAll(".langBtn").forEach((b) => {
      const active = b.dataset.lang === currentLang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-current", active ? "true" : "false");
    });

    // Evento para que header/footer/otros reaccionen
    document.dispatchEvent(
      new CustomEvent("dulcesor:lang-changed", { detail: { lang: currentLang } })
    );
  }

  // API global
  window.dulcesorI18n = {
    getLang: () => currentLang,
    setLanguage,
    applyI18n
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyI18n();
  });
})();
