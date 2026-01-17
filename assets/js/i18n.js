/* assets/js/i18n.js
   DULCESOR i18n (ES / EN / PT / FR / IT)
*/
(function () {
  const STORAGE_KEY = "dulcesor_lang";
  const SUPPORTED = ["es", "en", "pt", "fr", "it"];

  // =========================
  // Traducciones
  // =========================
  const MESSAGES = {
    es: {
      // ---- HOME (index) ----
      home_title: "ASOCIACIÓN CULTURAL DULCESOR",
      home_subtitle: "Repostería monacal conventual · Patrimonio gastronómico · Cultura y tradición",
      home_intro:
        "La Asociación Cultural <strong>DULCESOR</strong> impulsa la preservación, difusión y puesta en valor de la <strong>repostería monacal conventual</strong> y del patrimonio gastronómico ligado a comunidades religiosas, promoviendo proyectos culturales de alcance nacional e internacional.",
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

      // ---- ASOCIACIÓN ----
      assoc_title: "Asociación",
      assoc_subtitle:
        "Quiénes somos y para qué trabajamos: preservar la repostería monacal-conventual e impulsar proyectos culturales y el Concurso Internacional de Postres Conventuales.",
      assoc_identity_title: "Identidad",
      assoc_identity_p1:
        "La Asociación Cultural DULCESOR es una entidad sin ánimo de lucro dedicada a preservar, investigar y difundir la repostería monacal-conventual como patrimonio cultural.",
      assoc_identity_p2:
        "Trabajamos para poner en valor un legado vivo de recetas, técnicas y saberes transmitidos durante siglos, con respeto patrimonial y vocación de colaboración.",
      assoc_goals_title: "Fines y objetivos",
      assoc_goal_1:
        "Preservar y difundir la tradición repostera de monasterios y conventos como patrimonio cultural inmaterial.",
      assoc_goal_2:
        "Promover actividades culturales, gastronómicas y académicas que impulsen su conocimiento y valoración social.",
      assoc_goal_3:
        "Fomentar la investigación, recopilación y documentación de recetas, técnicas y procesos tradicionales.",
      assoc_goal_4:
        "Establecer vínculos de cooperación con instituciones culturales, educativas y religiosas.",
      assoc_goal_5:
        "Colaborar con administraciones públicas, instituciones culturales y entidades privadas.",
      assoc_goal_6:
        "Impulsar publicaciones y materiales de divulgación que contribuyan a su conservación.",
      assoc_goal_7:
        "Organizar y promover el Concurso Internacional de Postres Conventuales.",
      assoc_lines_title: "NUESTRAS LÍNEAS DE TRABAJO",
      assoc_lines_1_title: "Patrimonio y memoria",
      assoc_lines_1_text: "Investigación y preservación del patrimonio repostero monacal-conventual.",
      assoc_lines_2_title: "Artesanía",
      assoc_lines_2_text: "Puesta en valor del trabajo artesanal y de los procesos tradicionales.",
      assoc_lines_3_title: "Encuentro y cultura",
      assoc_lines_3_text: "Actividades culturales y fomento del Concurso Internacional de Postres Conventuales.",
      assoc_values_title: "Principios y valores",
      assoc_values_p1:
        "DULCESOR actúa con rigor histórico, respeto patrimonial y compromiso ético con las comunidades religiosas productoras.",
      assoc_values_p2:
        "Promovemos el reconocimiento de la repostería monacal como expresión cultural y gastronómica y como testimonio vivo de tradición, espiritualidad y artesanía.",
      assoc_admin_title: "Información administrativa",
      assoc_admin_scope_label: "Ámbito de actuación",
      assoc_admin_scope_value: "Cultural y gastronómico (ámbito nacional e internacional)",
      assoc_admin_legal_label: "Naturaleza jurídica",
      assoc_admin_legal_value: "Asociación cultural sin ánimo de lucro",
      assoc_admin_address_label: "Domicilio social",
      assoc_admin_address_value: "Convento de Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Duración",
      assoc_admin_duration_value: "Indefinida",
      assoc_admin_registry_label: "Situación registral",
      assoc_admin_registry_value: "Entidad en proceso de inscripción oficial (NIF/CIF solicitado)",
      assoc_collab_title: "Cómo colaborar",
      assoc_collab_intro:
        "Como entidad cultural, DULCESOR formaliza colaboraciones, patrocinios y apoyos mediante convenios, acuerdos o contratos, sin que dichas relaciones otorguen la condición de socio.",
      assoc_collab_forms_title: "Formas de colaboración",
      assoc_collab_1:
        "<strong>Alianza institucional</strong> (ayuntamientos, diputaciones, universidades, museos, archivos, entidades culturales).",
      assoc_collab_2:
        "<strong>Patrocinio</strong> del concurso y/o de actividades culturales y divulgativas.",
      assoc_collab_3:
        "<strong>Apoyo en especie o servicios</strong> (espacios, logística, comunicación, impresión, materiales, etc.).",
      assoc_collab_4:
        "<strong>Difusión y red cultural</strong> (medios, prescriptores, entidades colaboradoras).",
      assoc_collab_cta_1: "Proponer colaboración",
      assoc_collab_cta_2: "Contacto institucional",

      // ---- PROYECTOS ----
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

      // ---- CONCURSOS ----
      contests_title: "Concursos",
      contests_subtitle:
        "Convocatorias culturales y gastronómicas impulsadas por la Asociación Cultural DULCESOR.",
      contests_frame_title: "Marco general",
      contests_frame_text:
        "La Asociación Cultural DULCESOR promueve concursos culturales y gastronómicos destinados a preservar y difundir la repostería monacal conventual.",
      contests_in_prep: "En preparación",
      contests_featured_title: "Convocatoria destacada",
      contests_poster_caption: "Cartel del I Concurso Internacional de Repostería Monacal Conventual DULCESOR",
      contests_pill_init: "Convocatoria inicial",
      contests_reg_title: "Inscripción",
      contests_reg_text: "La participación estará abierta conforme a las bases oficiales de cada convocatoria.",
      contests_docs_title: "Documentación oficial",
      contests_docs_text: "Acceso a la documentación oficial de la convocatoria (bases y solicitud).",
      contests_btn_bases: "Bases (PDF)",
      contests_btn_form: "Solicitud (PDF)",
      contests_pill_pdf: "Documentación en PDF",

      // ---- PATROCINADORES ----
      sponsors_title: "Patrocinadores",
      sponsors_subtitle: "Entidades colaboradoras de la Asociación Cultural DULCESOR.",
      sponsors_assoc_title: "Patrocinadores de la asociación",
      sponsors_assoc_text:
        "Estas entidades apoyan el desarrollo general de la Asociación Cultural DULCESOR.",
      sponsors_nb21_text: "Patrocinador de la Asociación Cultural DULCESOR.",
      sponsors_visit_web: "Visitar web",

      // ---- CONTACTO ----
      contact_title: "Contacto",
      contact_subtitle: "Canales de comunicación de la Asociación Cultural DULCESOR.",
      contact_block_title: "Información de contacto",
      contact_email_label: "Información general",
      contact_contact_label: "Contacto institucional",
      contact_contest_label: "Concursos",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4 47001 Valladolid (España)",
      contact_note:
        "Si deseas colaborar o ampliar información, escríbenos y te responderemos a la mayor brevedad.",

      // ---- NAV (header.js) ----
      nav_home: "Inicio",
      nav_association: "Asociación",
      nav_projects: "Proyectos",
      nav_contests: "Concursos",
      nav_routes: "Rutas monacales",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",
    },

    // ========================= ENGLISH =========================
    en: {
      home_title: "DULCESOR CULTURAL ASSOCIATION",
      home_subtitle: "Monastic-convent pastry-making · Gastronomic heritage · Culture and tradition",
      home_intro:
        "The <strong>DULCESOR</strong> Cultural Association promotes the preservation, dissemination and enhancement of <strong>monastic-convent pastry-making</strong> and the gastronomic heritage linked to religious communities, fostering cultural projects with national and international reach.",
      home_project_title: "Main project in progress",
      home_project_desc: "1st International Convent Desserts Competition – Valladolid 2026",
      home_project_status: "Information in preparation",
      home_identity_title: "Identity",
      home_identity_name_label: "Name:",
      home_identity_name: "DULCESOR Cultural Association",
      home_identity_nature_label: "Type:",
      home_identity_nature: "Non-profit cultural association",
      home_identity_scope_label: "Scope:",
      home_identity_scope: "Cultural and gastronomic",
      home_goals_title: "Aims and objectives",
      home_goal_1: "Preserve and promote convent pastry-making as cultural heritage.",
      home_goal_2: "Give visibility to the artisanal work of religious communities.",
      home_goal_3: "Promote cultural and gastronomic projects with international projection.",

      assoc_title: "Association",
      assoc_subtitle:
        "Who we are and what we do: preserve monastic-convent pastry-making and promote cultural projects and the International Convent Desserts Competition.",
      assoc_identity_title: "Identity",
      assoc_identity_p1:
        "The DULCESOR Cultural Association is a non-profit entity dedicated to preserving, researching and disseminating monastic-convent pastry-making as cultural heritage.",
      assoc_identity_p2:
        "We work to highlight a living legacy of recipes, techniques and knowledge passed down over centuries, with respect for heritage and a collaborative vocation.",
      assoc_goals_title: "Aims and objectives",
      assoc_goal_1:
        "Preserve and promote the pastry tradition of monasteries and convents as intangible cultural heritage.",
      assoc_goal_2:
        "Promote cultural, gastronomic and academic activities that increase knowledge and social appreciation.",
      assoc_goal_3:
        "Encourage research, compilation and documentation of traditional recipes, techniques and processes.",
      assoc_goal_4:
        "Establish cooperation links with cultural, educational and religious institutions.",
      assoc_goal_5:
        "Collaborate with public administrations, cultural institutions and private entities.",
      assoc_goal_6:
        "Promote publications and outreach materials that contribute to its preservation.",
      assoc_goal_7:
        "Organize and promote the International Convent Desserts Competition.",
      assoc_lines_title: "OUR LINES OF WORK",
      assoc_lines_1_title: "Heritage and memory",
      assoc_lines_1_text: "Research and preservation of monastic-convent pastry heritage.",
      assoc_lines_2_title: "Craftsmanship",
      assoc_lines_2_text: "Enhancing artisanal work and traditional processes.",
      assoc_lines_3_title: "Community and culture",
      assoc_lines_3_text: "Cultural activities and support for the International Convent Desserts Competition.",
      assoc_values_title: "Principles and values",
      assoc_values_p1:
        "DULCESOR operates with historical rigor, respect for heritage and ethical commitment to the producing religious communities.",
      assoc_values_p2:
        "We promote recognition of monastic pastry-making as a cultural and gastronomic expression and as a living testimony of tradition, spirituality and craftsmanship.",
      assoc_admin_title: "Administrative information",
      assoc_admin_scope_label: "Scope of activity",
      assoc_admin_scope_value: "Cultural and gastronomic (national and international scope)",
      assoc_admin_legal_label: "Legal nature",
      assoc_admin_legal_value: "Non-profit cultural association",
      assoc_admin_address_label: "Registered office",
      assoc_admin_address_value: "Convent of Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Duration",
      assoc_admin_duration_value: "Indefinite",
      assoc_admin_registry_label: "Registration status",
      assoc_admin_registry_value: "Entity in the process of official registration (Tax ID requested)",
      assoc_collab_title: "How to collaborate",
      assoc_collab_intro:
        "As a cultural entity, DULCESOR formalizes collaborations, sponsorships and support through agreements or contracts, without granting membership status.",
      assoc_collab_forms_title: "Ways to collaborate",
      assoc_collab_1:
        "<strong>Institutional partnership</strong> (city councils, provincial councils, universities, museums, archives, cultural entities).",
      assoc_collab_2:
        "<strong>Sponsorship</strong> of the competition and/or cultural and outreach activities.",
      assoc_collab_3:
        "<strong>In-kind support or services</strong> (venues, logistics, communication, printing, materials, etc.).",
      assoc_collab_4:
        "<strong>Dissemination and cultural network</strong> (media, key opinion leaders, partner entities).",
      assoc_collab_cta_1: "Propose a collaboration",
      assoc_collab_cta_2: "Institutional contact",

      projects_title: "Projects",
      projects_subtitle:
        "Cultural and gastronomic initiatives dedicated to preserving and disseminating monastic-convent pastry-making.",
      projects_intro_title: "General overview",
      projects_intro_text:
        "The projects of the DULCESOR Cultural Association aim to highlight the pastry heritage of convents and monasteries, strengthen the link between gastronomy and culture, and create a space for collaboration among artisans, institutions and citizens.",
      projects_lines_title: "Lines of action",
      projects_line_1: "Organization of competitions, exhibitions and events dedicated to convent pastry-making.",
      projects_line_2:
        "Development of routes and cultural meetings to promote visits to monasteries and museums related to pastry tradition.",
      projects_line_3:
        "Publication of outreach and educational materials on history, techniques and pastry heritage.",
      projects_line_4:
        "Collaboration with academic and cultural institutions for research and dissemination.",
      projects_featured_title: "Featured projects",
      projects_featured_project_title: "1st International Monastic-Convent Pastry Competition",
      projects_featured_project_text:
        "First international call promoted by DULCESOR, dedicated to recognizing and disseminating traditional pastry-making in monasteries and convents, with Valladolid as the first venue.",
      projects_featured_more: "See more about competitions",
      projects_future_title: "Future projects",
      projects_future_text:
        "The DULCESOR Cultural Association is currently designing new initiatives linked to research and dissemination of convent heritage, as well as creating international alliances to strengthen the cultural and gastronomic outreach of this legacy.",
      projects_future_note:
        "If you are an institution, entity or group interested in collaborating, you can contact us to explore ways to participate.",

      contests_title: "Competitions",
      contests_subtitle:
        "Cultural and gastronomic calls promoted by the DULCESOR Cultural Association.",
      contests_frame_title: "General framework",
      contests_frame_text:
        "The DULCESOR Cultural Association promotes cultural and gastronomic competitions aimed at preserving and disseminating monastic-convent pastry-making.",
      contests_in_prep: "In preparation",
      contests_featured_title: "Featured call",
      contests_poster_caption: "Poster of the 1st International Monastic-Convent Pastry Competition (DULCESOR)",
      contests_pill_init: "Initial call",
      contests_reg_title: "Registration",
      contests_reg_text: "Participation will be open in accordance with the official rules of each call.",
      contests_docs_title: "Official documentation",
      contests_docs_text: "Access to the official documentation of the call (rules and application).",
      contests_btn_bases: "Rules (PDF)",
      contests_btn_form: "Application (PDF)",
      contests_pill_pdf: "PDF documentation",

      sponsors_title: "Sponsors",
      sponsors_subtitle: "Partner entities of the DULCESOR Cultural Association.",
      sponsors_assoc_title: "Association sponsors",
      sponsors_assoc_text: "These entities support the overall development of the DULCESOR Cultural Association.",
      sponsors_nb21_text: "Sponsor of the DULCESOR Cultural Association.",
      sponsors_visit_web: "Visit website",

      contact_title: "Contact",
      contact_subtitle: "Communication channels of the DULCESOR Cultural Association.",
      contact_block_title: "Contact information",
      contact_email_label: "General information",
      contact_contact_label: "Institutional contact",
      contact_contest_label: "Competitions",
      contact_address_label: "Headquarters",
      contact_address_value: "Plaza Santa Ana, 4 47001 Valladolid (Spain)",
      contact_note:
        "If you wish to collaborate or request more information, please write to us and we will respond as soon as possible.",

      nav_home: "Home",
      nav_association: "Association",
      nav_projects: "Projects",
      nav_contests: "Competitions",
      nav_routes: "Monastic routes",
      nav_sponsors: "Sponsors",
      nav_contact: "Contact",
    },

    // ========================= PORTUGUÊS =========================
    pt: {
      home_title: "ASSOCIAÇÃO CULTURAL DULCESOR",
      home_subtitle: "Doçaria monástica-conventual · Património gastronómico · Cultura e tradição",
      home_intro:
        "A Associação Cultural <strong>DULCESOR</strong> promove a preservação, a divulgação e a valorização da <strong>doçaria monástica-conventual</strong> e do património gastronómico ligado a comunidades religiosas, impulsionando projetos culturais de âmbito nacional e internacional.",
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
      home_goal_2: "Dar visibilidade ao trabalho artesanal das comunidades religiosas.",
      home_goal_3: "Impulsionar projetos culturais e gastronómicos com projeção internacional.",

      assoc_title: "Associação",
      assoc_subtitle:
        "Quem somos e para que trabalhamos: preservar a doçaria monástica-conventual e impulsionar projetos culturais e o Concurso Internacional de Doces Conventuais.",
      assoc_identity_title: "Identidade",
      assoc_identity_p1:
        "A Associação Cultural DULCESOR é uma entidade sem fins lucrativos dedicada a preservar, investigar e divulgar a doçaria monástica-conventual como património cultural.",
      assoc_identity_p2:
        "Trabalhamos para valorizar um legado vivo de receitas, técnicas e saberes transmitidos ao longo de séculos, com respeito patrimonial e vocação de colaboração.",
      assoc_goals_title: "Fins e objetivos",
      assoc_goal_1:
        "Preservar e divulgar a tradição doceira de mosteiros e conventos como património cultural imaterial.",
      assoc_goal_2:
        "Promover atividades culturais, gastronómicas e académicas que reforcem o seu conhecimento e valorização social.",
      assoc_goal_3:
        "Fomentar a investigação, recolha e documentação de receitas, técnicas e processos tradicionais.",
      assoc_goal_4:
        "Estabelecer vínculos de cooperação com instituições culturais, educativas e religiosas.",
      assoc_goal_5:
        "Colaborar com administrações públicas, instituições culturais e entidades privadas.",
      assoc_goal_6:
        "Impulsionar publicações e materiais de divulgação que contribuam para a sua conservação.",
      assoc_goal_7:
        "Organizar e promover o Concurso Internacional de Doces Conventuais.",
      assoc_lines_title: "AS NOSSAS LINHAS DE TRABALHO",
      assoc_lines_1_title: "Património e memória",
      assoc_lines_1_text: "Investigação e preservação do património doceiro monástico-conventual.",
      assoc_lines_2_title: "Artesanato",
      assoc_lines_2_text: "Valorização do trabalho artesanal e dos processos tradicionais.",
      assoc_lines_3_title: "Encontro e cultura",
      assoc_lines_3_text: "Atividades culturais e promoção do Concurso Internacional de Doces Conventuais.",
      assoc_values_title: "Princípios e valores",
      assoc_values_p1:
        "A DULCESOR atua com rigor histórico, respeito patrimonial e compromisso ético com as comunidades religiosas produtoras.",
      assoc_values_p2:
        "Promovemos o reconhecimento da doçaria monástica como expressão cultural e gastronómica e como testemunho vivo de tradição, espiritualidade e artesanato.",
      assoc_admin_title: "Informação administrativa",
      assoc_admin_scope_label: "Âmbito de atuação",
      assoc_admin_scope_value: "Cultural e gastronómico (âmbito nacional e internacional)",
      assoc_admin_legal_label: "Natureza jurídica",
      assoc_admin_legal_value: "Associação cultural sem fins lucrativos",
      assoc_admin_address_label: "Sede social",
      assoc_admin_address_value: "Convento de Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Duração",
      assoc_admin_duration_value: "Indefinida",
      assoc_admin_registry_label: "Situação registral",
      assoc_admin_registry_value: "Entidade em processo de inscrição oficial (NIF/CIF solicitado)",
      assoc_collab_title: "Como colaborar",
      assoc_collab_intro:
        "Como entidade cultural, a DULCESOR formaliza colaborações, patrocínios e apoios mediante acordos ou contratos, sem que essas relações concedam a condição de sócio.",
      assoc_collab_forms_title: "Formas de colaboração",
      assoc_collab_1:
        "<strong>Aliança institucional</strong> (câmaras municipais, deputações, universidades, museus, arquivos, entidades culturais).",
      assoc_collab_2:
        "<strong>Patrocínio</strong> do concurso e/ou de atividades culturais e de divulgação.",
      assoc_collab_3:
        "<strong>Apoio em espécie ou serviços</strong> (espaços, logística, comunicação, impressão, materiais, etc.).",
      assoc_collab_4:
        "<strong>Divulgação e rede cultural</strong> (meios, prescritores, entidades colaboradoras).",
      assoc_collab_cta_1: "Propor colaboração",
      assoc_collab_cta_2: "Contacto institucional",

      projects_title: "Projetos",
      projects_subtitle:
        "Iniciativas culturais e gastronómicas dedicadas à preservação e divulgação da doçaria monástica-conventual.",
      projects_intro_title: "Apresentação geral",
      projects_intro_text:
        "Os projetos da Associação Cultural DULCESOR têm como objetivo valorizar o património doceiro de conventos e mosteiros, fortalecer o vínculo entre gastronomia e cultura e abrir um espaço de colaboração entre artesãs, instituições e cidadãos.",
      projects_lines_title: "Linhas de ação",
      projects_line_1:
        "Organização de concursos, mostras e jornadas dedicadas à doçaria conventual.",
      projects_line_2:
        "Desenvolvimento de rotas e encontros culturais para promover visitas a mosteiros e museus relacionados com a tradição doceira.",
      projects_line_3:
        "Edição de materiais de divulgação e educativos sobre história, técnicas e legado doceiro.",
      projects_line_4:
        "Colaborações com instituições académicas e culturais para investigação e divulgação.",
      projects_featured_title: "Projetos em destaque",
      projects_featured_project_title: "I Concurso Internacional de Doçaria Monástica-Conventual",
      projects_featured_project_text:
        "Primeira convocatória internacional impulsionada pela DULCESOR, dedicada a reconhecer e divulgar a doçaria tradicional elaborada em mosteiros e conventos, com a cidade de Valladolid como primeiro cenário.",
      projects_featured_more: "Ver mais sobre os concursos",
      projects_future_title: "Projetos futuros",
      projects_future_text:
        "A Associação Cultural DULCESOR está atualmente a desenhar novas iniciativas ligadas à investigação e divulgação do património conventual, bem como a criar alianças internacionais que reforcem a difusão cultural e gastronómica deste legado.",
      projects_future_note:
        "Se é uma instituição, entidade ou coletivo interessado em colaborar, pode entrar em contacto para explorar formas de participação.",

      contests_title: "Concursos",
      contests_subtitle:
        "Convocatórias culturais e gastronómicas promovidas pela Associação Cultural DULCESOR.",
      contests_frame_title: "Enquadramento geral",
      contests_frame_text:
        "A Associação Cultural DULCESOR promove concursos culturais e gastronómicos destinados a preservar e divulgar a doçaria monástica-conventual.",
      contests_in_prep: "Em preparação",
      contests_featured_title: "Convocatória em destaque",
      contests_poster_caption: "Cartaz do I Concurso Internacional de Doçaria Monástica-Conventual (DULCESOR)",
      contests_pill_init: "Convocatória inicial",
      contests_reg_title: "Inscrição",
      contests_reg_text: "A participação estará aberta de acordo com as bases oficiais de cada convocatória.",
      contests_docs_title: "Documentação oficial",
      contests_docs_text: "Acesso à documentação oficial da convocatória (bases e inscrição).",
      contests_btn_bases: "Bases (PDF)",
      contests_btn_form: "Inscrição (PDF)",
      contests_pill_pdf: "Documentação em PDF",

      sponsors_title: "Patrocinadores",
      sponsors_subtitle: "Entidades colaboradoras da Associação Cultural DULCESOR.",
      sponsors_assoc_title: "Patrocinadores da associação",
      sponsors_assoc_text:
        "Estas entidades apoiam o desenvolvimento geral da Associação Cultural DULCESOR.",
      sponsors_nb21_text: "Patrocinador da Associação Cultural DULCESOR.",
      sponsors_visit_web: "Visitar site",

      contact_title: "Contacto",
      contact_subtitle: "Canais de comunicação da Associação Cultural DULCESOR.",
      contact_block_title: "Informação de contacto",
      contact_email_label: "Informação geral",
      contact_contact_label: "Contacto institucional",
      contact_contest_label: "Concursos",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4 47001 Valladolid (Espanha)",
      contact_note:
        "Se deseja colaborar ou obter mais informação, escreva-nos e responderemos com a maior brevidade possível.",

      nav_home: "Início",
      nav_association: "Associação",
      nav_projects: "Projetos",
      nav_contests: "Concursos",
      nav_routes: "Rotas monásticas",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",
    },

    // ========================= FRANÇAIS =========================
    fr: {
      home_title: "ASSOCIATION CULTURELLE DULCESOR",
      home_subtitle: "Pâtisserie monastique et conventuelle · Patrimoine gastronomique · Culture et tradition",
      home_intro:
        "L’Association culturelle <strong>DULCESOR</strong> œuvre pour la préservation, la diffusion et la valorisation de la <strong>pâtisserie monastique et conventuelle</strong> ainsi que du patrimoine gastronomique lié aux communautés religieuses, en développant des projets culturels à portée nationale et internationale.",
      home_project_title: "Projet principal en cours",
      home_project_desc: "I Concours international de desserts conventuels – Valladolid 2026",
      home_project_status: "Informations en préparation",
      home_identity_title: "Identité",
      home_identity_name_label: "Nom :",
      home_identity_name: "Association culturelle DULCESOR",
      home_identity_nature_label: "Statut :",
      home_identity_nature: "Association culturelle à but non lucratif",
      home_identity_scope_label: "Champ :",
      home_identity_scope: "Culturel et gastronomique",
      home_goals_title: "Objectifs",
      home_goal_1: "Préserver et promouvoir la pâtisserie conventuelle comme patrimoine culturel.",
      home_goal_2: "Mettre en valeur le travail artisanal des communautés religieuses.",
      home_goal_3: "Développer des projets culturels et gastronomiques à rayonnement international.",

      assoc_title: "Association",
      assoc_subtitle:
        "Qui nous sommes et pourquoi nous agissons : préserver la pâtisserie monastique et conventuelle et développer des projets culturels ainsi que le Concours international de desserts conventuels.",
      assoc_identity_title: "Identité",
      assoc_identity_p1:
        "L’Association culturelle DULCESOR est une structure à but non lucratif dédiée à la préservation, à la recherche et à la diffusion de la pâtisserie monastique et conventuelle en tant que patrimoine culturel.",
      assoc_identity_p2:
        "Nous valorisons un héritage vivant de recettes, de techniques et de savoir-faire transmis au fil des siècles, dans le respect du patrimoine et avec une vocation de coopération.",
      assoc_goals_title: "Objectifs",
      assoc_goal_1:
        "Préserver et promouvoir la tradition pâtissière des monastères et des couvents comme patrimoine culturel immatériel.",
      assoc_goal_2:
        "Développer des activités culturelles, gastronomiques et académiques favorisant sa connaissance et sa reconnaissance sociale.",
      assoc_goal_3:
        "Encourager la recherche, la collecte et la documentation de recettes, techniques et processus traditionnels.",
      assoc_goal_4:
        "Établir des liens de coopération avec des institutions culturelles, éducatives et religieuses.",
      assoc_goal_5:
        "Collaborer avec les administrations publiques, les institutions culturelles et les acteurs privés.",
      assoc_goal_6:
        "Promouvoir des publications et des supports de diffusion contribuant à sa conservation.",
      assoc_goal_7:
        "Organiser et promouvoir le Concours international de desserts conventuels.",
      assoc_lines_title: "NOS AXES DE TRAVAIL",
      assoc_lines_1_title: "Patrimoine et mémoire",
      assoc_lines_1_text: "Recherche et préservation du patrimoine pâtissier monastique et conventuel.",
      assoc_lines_2_title: "Savoir-faire",
      assoc_lines_2_text: "Mise en valeur du travail artisanal et des procédés traditionnels.",
      assoc_lines_3_title: "Rencontre et culture",
      assoc_lines_3_text: "Actions culturelles et promotion du Concours international de desserts conventuels.",
      assoc_values_title: "Principes et valeurs",
      assoc_values_p1:
        "DULCESOR agit avec rigueur historique, respect du patrimoine et engagement éthique envers les communautés religieuses productrices.",
      assoc_values_p2:
        "Nous défendons la reconnaissance de la pâtisserie monastique comme expression culturelle et gastronomique et comme témoignage vivant de tradition, de spiritualité et de savoir-faire.",
      assoc_admin_title: "Informations administratives",
      assoc_admin_scope_label: "Champ d’action",
      assoc_admin_scope_value: "Culturel et gastronomique (à l’échelle nationale et internationale)",
      assoc_admin_legal_label: "Statut juridique",
      assoc_admin_legal_value: "Association culturelle à but non lucratif",
      assoc_admin_address_label: "Siège social",
      assoc_admin_address_value: "Couvent de Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Durée",
      assoc_admin_duration_value: "Indéterminée",
      assoc_admin_registry_label: "Situation d’enregistrement",
      assoc_admin_registry_value: "Entité en cours d’enregistrement officiel (NIF/CIF demandé)",
      assoc_collab_title: "Comment collaborer",
      assoc_collab_intro:
        "En tant qu’entité culturelle, DULCESOR formalise des collaborations, des parrainages et des soutiens via des conventions ou contrats, sans que ces relations n’accordent le statut de membre.",
      assoc_collab_forms_title: "Formes de collaboration",
      assoc_collab_1:
        "<strong>Alliance institutionnelle</strong> (mairies, conseils provinciaux, universités, musées, archives, entités culturelles).",
      assoc_collab_2:
        "<strong>Parrainage</strong> du concours et/ou d’activités culturelles et de médiation.",
      assoc_collab_3:
        "<strong>Soutien en nature ou services</strong> (espaces, logistique, communication, impression, matériels, etc.).",
      assoc_collab_4:
        "<strong>Diffusion et réseau culturel</strong> (médias, prescripteurs, partenaires).",
      assoc_collab_cta_1: "Proposer une collaboration",
      assoc_collab_cta_2: "Contact institutionnel",

      projects_title: "Projets",
      projects_subtitle:
        "Initiatives culturelles et gastronomiques dédiées à la préservation et à la diffusion de la pâtisserie monastique et conventuelle.",
      projects_intro_title: "Présentation générale",
      projects_intro_text:
        "Les projets de l’Association culturelle DULCESOR visent à valoriser le patrimoine pâtissier des couvents et monastères, à renforcer le lien entre gastronomie et culture et à ouvrir un espace de collaboration entre artisanes, institutions et citoyens.",
      projects_lines_title: "Axes d’action",
      projects_line_1: "Organisation de concours, expositions et rencontres dédiés à la pâtisserie conventuelle.",
      projects_line_2:
        "Développement de routes et de rendez-vous culturels pour encourager la visite de monastères et musées liés à la tradition pâtissière.",
      projects_line_3:
        "Édition de supports de médiation et pédagogiques sur l’histoire, les techniques et l’héritage pâtissier.",
      projects_line_4:
        "Collaborations avec des institutions académiques et culturelles pour la recherche et la diffusion.",
      projects_featured_title: "Projets à la une",
      projects_featured_project_title: "I Concours international de pâtisserie monastique et conventuelle",
      projects_featured_project_text:
        "Première édition internationale portée par DULCESOR, dédiée à la reconnaissance et à la diffusion de la pâtisserie traditionnelle des monastères et couvents, avec Valladolid comme première ville hôte.",
      projects_featured_more: "En savoir plus sur les concours",
      projects_future_title: "Projets à venir",
      projects_future_text:
        "L’Association culturelle DULCESOR travaille actuellement à de nouvelles initiatives liées à la recherche et à la diffusion du patrimoine conventuel, ainsi qu’à la création d’alliances internationales renforçant le rayonnement culturel et gastronomique de cet héritage.",
      projects_future_note:
        "Si vous êtes une institution, une entité ou un collectif intéressé par une collaboration, contactez-nous pour explorer des formes de participation.",

      contests_title: "Concours",
      contests_subtitle:
        "Appels culturels et gastronomiques portés par l’Association culturelle DULCESOR.",
      contests_frame_title: "Cadre général",
      contests_frame_text:
        "L’Association culturelle DULCESOR organise des concours culturels et gastronomiques visant à préserver et à diffuser la pâtisserie monastique et conventuelle.",
      contests_in_prep: "En préparation",
      contests_featured_title: "Appel à la une",
      contests_poster_caption: "Affiche du I Concours international de pâtisserie monastique et conventuelle (DULCESOR)",
      contests_pill_init: "Appel initial",
      contests_reg_title: "Inscription",
      contests_reg_text: "La participation sera ouverte conformément aux règlements officiels de chaque appel.",
      contests_docs_title: "Documentation officielle",
      contests_docs_text: "Accès à la documentation officielle (règlement et dossier d’inscription).",
      contests_btn_bases: "Règlement (PDF)",
      contests_btn_form: "Inscription (PDF)",
      contests_pill_pdf: "Documentation PDF",

      sponsors_title: "Partenaires",
      sponsors_subtitle: "Entités partenaires de l’Association culturelle DULCESOR.",
      sponsors_assoc_title: "Partenaires de l’association",
      sponsors_assoc_text:
        "Ces entités soutiennent le développement général de l’Association culturelle DULCESOR.",
      sponsors_nb21_text: "Partenaire de l’Association culturelle DULCESOR.",
      sponsors_visit_web: "Visiter le site",

      contact_title: "Contact",
      contact_subtitle: "Canaux de communication de l’Association culturelle DULCESOR.",
      contact_block_title: "Informations de contact",
      contact_email_label: "Informations générales",
      contact_contact_label: "Contact institutionnel",
      contact_contest_label: "Concours",
      contact_address_label: "Siège",
      contact_address_value: "Plaza Santa Ana, 4 47001 Valladolid (Espagne)",
      contact_note:
        "Si vous souhaitez collaborer ou obtenir davantage d’informations, écrivez-nous : nous vous répondrons dans les meilleurs délais.",

      nav_home: "Accueil",
      nav_association: "Association",
      nav_projects: "Projets",
      nav_contests: "Concours",
      nav_routes: "Routes monastiques",
      nav_sponsors: "Partenaires",
      nav_contact: "Contact",
    },

    // ========================= ITALIANO =========================
    it: {
      home_title: "ASSOCIAZIONE CULTURALE DULCESOR",
      home_subtitle: "Pasticceria monastica e conventuale · Patrimonio gastronomico · Cultura e tradizione",
      home_intro:
        "L’Associazione Culturale <strong>DULCESOR</strong> promuove la conservazione, la diffusione e la valorizzazione della <strong>pasticceria monastica e conventuale</strong> e del patrimonio gastronomico legato alle comunità religiose, sviluppando progetti culturali di respiro nazionale e internazionale.",
      home_project_title: "Progetto principale in corso",
      home_project_desc: "I Concorso Internazionale di Dolci Conventuali – Valladolid 2026",
      home_project_status: "Informazioni in preparazione",
      home_identity_title: "Identità",
      home_identity_name_label: "Nome:",
      home_identity_name: "Associazione Culturale DULCESOR",
      home_identity_nature_label: "Natura:",
      home_identity_nature: "Associazione culturale senza scopo di lucro",
      home_identity_scope_label: "Ambito:",
      home_identity_scope: "Culturale e gastronomico",
      home_goals_title: "Finalità e obiettivi",
      home_goal_1: "Conservare e promuovere la pasticceria conventuale come patrimonio culturale.",
      home_goal_2: "Dare visibilità al lavoro artigianale delle comunità religiose.",
      home_goal_3: "Promuovere progetti culturali e gastronomici con proiezione internazionale.",

      assoc_title: "Associazione",
      assoc_subtitle:
        "Chi siamo e perché operiamo: preservare la pasticceria monastica-conventuale e promuovere progetti culturali e il Concorso Internazionale di Dolci Conventuali.",
      assoc_identity_title: "Identità",
      assoc_identity_p1:
        "L’Associazione Culturale DULCESOR è un ente senza scopo di lucro dedicato a conservare, studiare e diffondere la pasticceria monastica-conventuale come patrimonio culturale.",
      assoc_identity_p2:
        "Lavoriamo per valorizzare un patrimonio vivo di ricette, tecniche e saperi tramandati nei secoli, con rispetto per il patrimonio e vocazione alla collaborazione.",
      assoc_goals_title: "Finalità e obiettivi",
      assoc_goal_1:
        "Conservare e diffondere la tradizione dolciaria di monasteri e conventi come patrimonio culturale immateriale.",
      assoc_goal_2:
        "Promuovere attività culturali, gastronomiche e accademiche che ne rafforzino la conoscenza e la valorizzazione sociale.",
      assoc_goal_3:
        "Incentivare la ricerca, la raccolta e la documentazione di ricette, tecniche e processi tradizionali.",
      assoc_goal_4:
        "Stabilire legami di cooperazione con istituzioni culturali, educative e religiose.",
      assoc_goal_5:
        "Collaborare con amministrazioni pubbliche, istituzioni culturali ed enti privati.",
      assoc_goal_6:
        "Promuovere pubblicazioni e materiali divulgativi che contribuiscano alla sua conservazione.",
      assoc_goal_7:
        "Organizzare e promuovere il Concorso Internazionale di Dolci Conventuali.",
      assoc_lines_title: "LE NOSTRE LINEE DI LAVORO",
      assoc_lines_1_title: "Patrimonio e memoria",
      assoc_lines_1_text: "Ricerca e conservazione del patrimonio dolciario monastico-conventuale.",
      assoc_lines_2_title: "Artigianato",
      assoc_lines_2_text: "Valorizzazione del lavoro artigianale e dei processi tradizionali.",
      assoc_lines_3_title: "Incontro e cultura",
      assoc_lines_3_text: "Attività culturali e promozione del Concorso Internazionale di Dolci Conventuali.",
      assoc_values_title: "Principi e valori",
      assoc_values_p1:
        "DULCESOR opera con rigore storico, rispetto del patrimonio e impegno etico verso le comunità religiose produttrici.",
      assoc_values_p2:
        "Promuoviamo il riconoscimento della pasticceria monastica come espressione culturale e gastronomica e come testimonianza viva di tradizione, spiritualità e artigianato.",
      assoc_admin_title: "Informazioni amministrative",
      assoc_admin_scope_label: "Ambito di attività",
      assoc_admin_scope_value: "Culturale e gastronomico (ambito nazionale e internazionale)",
      assoc_admin_legal_label: "Natura giuridica",
      assoc_admin_legal_value: "Associazione culturale senza scopo di lucro",
      assoc_admin_address_label: "Sede legale",
      assoc_admin_address_value: "Convento di Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Durata",
      assoc_admin_duration_value: "Indeterminata",
      assoc_admin_registry_label: "Situazione registrale",
      assoc_admin_registry_value: "Ente in fase di registrazione ufficiale (NIF/CIF richiesto)",
      assoc_collab_title: "Come collaborare",
      assoc_collab_intro:
        "In quanto ente culturale, DULCESOR formalizza collaborazioni, sponsorizzazioni e supporti tramite accordi o contratti, senza che tali rapporti conferiscano lo status di socio.",
      assoc_collab_forms_title: "Forme di collaborazione",
      assoc_collab_1:
        "<strong>Alleanza istituzionale</strong> (comuni, province, università, musei, archivi, enti culturali).",
      assoc_collab_2:
        "<strong>Sponsorizzazione</strong> del concorso e/o di attività culturali e divulgative.",
      assoc_collab_3:
        "<strong>Supporto in beni o servizi</strong> (spazi, logistica, comunicazione, stampa, materiali, ecc.).",
      assoc_collab_4:
        "<strong>Diffusione e rete culturale</strong> (media, presìdi culturali, enti partner).",
      assoc_collab_cta_1: "Proponi una collaborazione",
      assoc_collab_cta_2: "Contatto istituzionale",

      projects_title: "Progetti",
      projects_subtitle:
        "Iniziative culturali e gastronomiche dedicate alla conservazione e alla diffusione della pasticceria monastica e conventuale.",
      projects_intro_title: "Presentazione generale",
      projects_intro_text:
        "I progetti dell’Associazione Culturale DULCESOR mirano a valorizzare il patrimonio dolciario di conventi e monasteri, rafforzare il legame tra gastronomia e cultura e aprire uno spazio di collaborazione tra artigiane, istituzioni e cittadinanza.",
      projects_lines_title: "Linee di azione",
      projects_line_1:
        "Organizzazione di concorsi, mostre e giornate dedicate alla pasticceria conventuale.",
      projects_line_2:
        "Sviluppo di itinerari e incontri culturali per promuovere la visita a monasteri e musei legati alla tradizione dolciaria.",
      projects_line_3:
        "Pubblicazione di materiali divulgativi ed educativi su storia, tecniche ed eredità dolciaria.",
      projects_line_4:
        "Collaborazioni con istituzioni accademiche e culturali per ricerca e diffusione.",
      projects_featured_title: "Progetti in evidenza",
      projects_featured_project_title: "I Concorso Internazionale di Pasticceria Monastica-Conventuale",
      projects_featured_project_text:
        "Prima iniziativa internazionale promossa da DULCESOR, dedicata a riconoscere e diffondere la pasticceria tradizionale di monasteri e conventi, con Valladolid come prima sede.",
      projects_featured_more: "Scopri di più sui concorsi",
      projects_future_title: "Progetti futuri",
      projects_future_text:
        "L’Associazione Culturale DULCESOR sta progettando nuove iniziative legate alla ricerca e alla divulgazione del patrimonio conventuale, oltre a creare alleanze internazionali che rafforzino la diffusione culturale e gastronomica di questo patrimonio.",
      projects_future_note:
        "Se sei un’istituzione, un ente o un collettivo interessato a collaborare, puoi contattarci per esplorare forme di partecipazione.",

      contests_title: "Concorsi",
      contests_subtitle:
        "Iniziative culturali e gastronomiche promosse dall’Associazione Culturale DULCESOR.",
      contests_frame_title: "Quadro generale",
      contests_frame_text:
        "L’Associazione Culturale DULCESOR promuove concorsi culturali e gastronomici finalizzati a conservare e diffondere la pasticceria monastica e conventuale.",
      contests_in_prep: "In preparazione",
      contests_featured_title: "Bando in evidenza",
      contests_poster_caption: "Locandina del I Concorso Internazionale di Pasticceria Monastica-Conventuale (DULCESOR)",
      contests_pill_init: "Bando iniziale",
      contests_reg_title: "Iscrizione",
      contests_reg_text: "La partecipazione sarà aperta secondo i regolamenti ufficiali di ciascun bando.",
      contests_docs_title: "Documentazione ufficiale",
      contests_docs_text: "Accesso alla documentazione ufficiale (regolamento e modulo di iscrizione).",
      contests_btn_bases: "Regolamento (PDF)",
      contests_btn_form: "Iscrizione (PDF)",
      contests_pill_pdf: "Documentazione PDF",

      sponsors_title: "Sponsor",
      sponsors_subtitle: "Enti collaboratori dell’Associazione Culturale DULCESOR.",
      sponsors_assoc_title: "Sponsor dell’associazione",
      sponsors_assoc_text:
        "Questi enti sostengono lo sviluppo generale dell’Associazione Culturale DULCESOR.",
      sponsors_nb21_text: "Sponsor dell’Associazione Culturale DULCESOR.",
      sponsors_visit_web: "Visita il sito",

      contact_title: "Contatti",
      contact_subtitle: "Canali di comunicazione dell’Associazione Culturale DULCESOR.",
      contact_block_title: "Informazioni di contatto",
      contact_email_label: "Informazioni generali",
      contact_contact_label: "Contatto istituzionale",
      contact_contest_label: "Concorsi",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4 47001 Valladolid (Spagna)",
      contact_note:
        "Se desideri collaborare o ricevere maggiori informazioni, scrivici: risponderemo il prima possibile.",

      nav_home: "Home",
      nav_association: "Associazione",
      nav_projects: "Progetti",
      nav_contests: "Concorsi",
      nav_routes: "Itinerari monastici",
      nav_sponsors: "Sponsor",
      nav_contact: "Contatti",
    },
  };

  // =========================
  // Helpers
  // =========================
  function normalizeLang(l) {
    const lang = (l || "").toLowerCase().trim();
    if (SUPPORTED.includes(lang)) return lang;
    // navigator like "en-US"
    const base = lang.split("-")[0];
    if (SUPPORTED.includes(base)) return base;
    return "es";
  }

  function getStoredLang() {
    try {
      return normalizeLang(localStorage.getItem(STORAGE_KEY));
    } catch {
      return "es";
    }
  }

  function guessLangFromBrowser() {
    const nav = (navigator.language || navigator.userLanguage || "es");
    return normalizeLang(nav);
  }

  function setHtmlLang(lang) {
    document.documentElement.setAttribute("lang", lang);
  }

  function t(key, lang) {
    const l = normalizeLang(lang);
    return (MESSAGES[l] && MESSAGES[l][key]) || (MESSAGES.es && MESSAGES.es[key]) || null;
  }

  function applyI18n(root = document) {
    const lang = getLang();
    setHtmlLang(lang);

    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      const value = t(key, lang);
      if (value == null) return;

      // Si el texto contiene HTML, lo respetamos. Si no, también funciona.
      el.innerHTML = value;
    });
  }

  function setLanguage(nextLang) {
    const lang = normalizeLang(nextLang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    setHtmlLang(lang);
    // Notifica a header.js (y cualquier otro listener)
    document.dispatchEvent(new CustomEvent("dulcesor:langchange", { detail: { lang } }));
  }

  function getLang() {
    const stored = getStoredLang();
    if (stored && stored !== "es") return stored;

    // si no hay guardado, usamos navegador
    return guessLangFromBrowser();
  }

  // API pública
  window.dulcesorI18n = {
    getLang,
    setLanguage,
    applyI18n,
    t: (key) => t(key, getLang()),
  };

  // Auto-apply cuando el DOM está listo
  document.addEventListener("DOMContentLoaded", () => {
    applyI18n();
  });
})();
