/* =====================================================
   i18n.js — Sistema de idiomas global (DULCESOR)
   - Traducciones centralizadas
   - Función global applyI18n() para re-traducir tras inyecciones (header/footer)
   ===================================================== */

const translations = {
  es: {
    /* =========================
       NAV
    ========================= */
    nav_home: "Inicio",
    nav_association: "Asociación",
    nav_projects: "Proyectos",
    nav_contests: "Concursos",
    nav_routes: "Rutas monacales",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    /* =========================
       FOOTER
    ========================= */
    footer_line1: "Asociación Cultural “DULCESOR” – Repostería Monacal Conventual",
    footer_line2: "Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España)",
    footer_line3: "Web desarrollada por Apolo Studio Creativo",

    /* =========================
       ASOCIACIÓN (página completa)
    ========================= */
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
    assoc_admin_scope: "Cultural y gastronómico (ámbito nacional e internacional)",
    assoc_admin_nature_label: "Naturaleza jurídica",
    assoc_admin_nature: "Asociación cultural sin ánimo de lucro",
    assoc_admin_note:
      "La asociación se encuentra en proceso de inscripción oficial conforme a la legislación vigente.",

    /* =========================
       CONCURSOS
    ========================= */
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

    /* Alias por compatibilidad (claves antiguas / variantes) */
    CONTESTS_TITLE: "Concursos",
    CONTESTS_SUBTITLE: "Convocatorias culturales y gastronómicas impulsadas por la Asociación Cultural DULCESOR.",
    CONTESTS_FRAME_TITLE: "Marco general",
    CONTESTS_FRAME_TEXT:
      "La Asociación Cultural DULCESOR promueve concursos culturales y gastronómicos destinados a preservar y difundir la repostería monacal conventual.",
    CONTESTS_FEATURED_TITLE: "Convocatoria destacada",
    CONTESTS_REG_TITLE: "Inscripción",
    CONTESTS_REG_TEXT:
      "La participación estará abierta conforme a las bases oficiales de cada convocatoria.",
    CONTESTS_DOCS_TITLE: "Documentación oficial",
    CONTESTS_DOCS_TEXT:
      "Acceso a la documentación oficial de la convocatoria (bases y solicitud).",
    CONTESTS_BTN_BASES: "Bases (PDF)",
    CONTESTS_BTN_FORM: "Solicitud (PDF)",
    CONTESTS_PILL_INITL: "Convocatoria inicial",
    CONTESTS_PILL_INTL: "Convocatoria inicial", /* typo visto en capturas */
    CONTESTS_PILL_PDF: "Documentación en PDF",
    CONTESTS_IN_PREP: "En preparación",
    CONTESTS_POSTER_CAPTION:
      "Cartel del I Concurso Internacional de Repostería Monacal Conventual DULCESOR",

    /* =========================
       PROYECTOS
    ========================= */
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
  },

  en: {
    nav_home: "Home",
    nav_association: "Association",
    nav_projects: "Projects",
    nav_contests: "Contests",
    nav_routes: "Monastic routes",
    nav_sponsors: "Sponsors",
    nav_contact: "Contact",

    footer_line1: "Cultural Association “DULCESOR” – Monastic Conventual Pastry",
    footer_line2: "Non-profit cultural association · Registration in progress · Valladolid (Spain)",
    footer_line3: "Website developed by Apolo Studio Creativo",

    assoc_title: "Association",
    assoc_subtitle:
      "Identity, principles and objectives of the Cultural Association DULCESOR – Monastic Conventual Pastry",

    assoc_identity_title: "Identity",
    assoc_identity_text:
      "The Cultural Association DULCESOR is a non-profit entity dedicated to preserving, researching, promoting and disseminating monastic and conventual pastry heritage, understanding pastry-making as a cultural, artistic and gastronomic expression with historical and spiritual value.",

    assoc_purpose_title: "Aims and objectives",
    assoc_purpose_1:
      "Preserve and promote the pastry tradition of monasteries and convents as an essential part of intangible cultural heritage.",
    assoc_purpose_2:
      "Promote cultural, gastronomic and academic activities that foster knowledge and social appreciation of monastic conventual pastry.",
    assoc_purpose_3:
      "Encourage research, collection and documentation of recipes, techniques and traditional processes passed on by religious communities.",
    assoc_purpose_4:
      "Build cooperation links with cultural, educational and religious institutions to promote joint conservation and dissemination projects.",

    assoc_values_title: "Principles and values",
    assoc_values_text:
      "The Cultural Association DULCESOR works under criteria of historical rigor, heritage respect and ethical commitment to producing religious communities. It promotes recognition of monastic pastry both as a gastronomic expression and as a living testimony of spirituality, tradition and artisanal dedication passed down through the centuries.",

    assoc_admin_title: "Administrative information",
    assoc_admin_scope_label: "Scope",
    assoc_admin_scope: "Cultural and gastronomic (national and international)",
    assoc_admin_nature_label: "Legal nature",
    assoc_admin_nature: "Non-profit cultural association",
    assoc_admin_note:
      "The association is currently undergoing official registration in accordance with current legislation.",

    contests_title: "Contests",
    contests_subtitle:
      "Cultural and gastronomic calls promoted by the Cultural Association DULCESOR.",
    contests_frame_title: "General framework",
    contests_frame_text:
      "The Cultural Association DULCESOR promotes cultural and gastronomic contests aimed at preserving and promoting monastic conventual pastry traditions.",
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

    CONTESTS_TITLE: "Contests",
    CONTESTS_SUBTITLE: "Cultural and gastronomic calls promoted by the Cultural Association DULCESOR.",
    CONTESTS_FRAME_TITLE: "General framework",
    CONTESTS_FRAME_TEXT:
      "The Cultural Association DULCESOR promotes cultural and gastronomic contests aimed at preserving and promoting monastic conventual pastry traditions.",
    CONTESTS_FEATURED_TITLE: "Featured call",
    CONTESTS_REG_TITLE: "Registration",
    CONTESTS_REG_TEXT:
      "Participation will be open according to the official rules of each call.",
    CONTESTS_DOCS_TITLE: "Official documentation",
    CONTESTS_DOCS_TEXT:
      "Access the official documents of the call (rules and application).",
    CONTESTS_BTN_BASES: "Rules (PDF)",
    CONTESTS_BTN_FORM: "Application (PDF)",
    CONTESTS_PILL_INITL: "Initial call",
    CONTESTS_PILL_INTL: "Initial call",
    CONTESTS_PILL_PDF: "PDF documentation",
    CONTESTS_IN_PREP: "In preparation",
    CONTESTS_POSTER_CAPTION:
      "Poster of the 1st International Monastic Conventual Pastry Contest DULCESOR",

    projects_title: "Projects",
    projects_subtitle:
      "Cultural and gastronomic initiatives dedicated to preserving and disseminating monastic conventual pastry heritage.",

    projects_intro_title: "General overview",
    projects_intro_text:
      "The projects of the Cultural Association DULCESOR aim to highlight the pastry heritage of convents and monasteries, strengthen the link between gastronomy and culture, and open a space for collaboration among artisans, institutions and citizens.",

    projects_lines_title: "Lines of action",
    projects_line_1:
      "Organization of contests, exhibitions and events dedicated to conventual pastry.",
    projects_line_2:
      "Development of routes and cultural meetings to encourage visits to monasteries and museums related to pastry tradition.",
    projects_line_3:
      "Publication of educational and outreach materials on history, techniques and pastry heritage.",
    projects_line_4:
      "Collaboration with academic and cultural institutions for research and dissemination.",

    projects_featured_title: "Featured projects",
    projects_featured_project_title:
      "1st International Monastic Conventual Pastry Contest",
    projects_featured_project_text:
      "First international call promoted by DULCESOR, dedicated to recognizing and disseminating traditional pastry made in monasteries and convents, with Valladolid as the first host city.",
    projects_featured_more: "Learn more about the contests",

    projects_future_title: "Future projects",
    projects_future_text:
      "The Cultural Association DULCESOR is currently designing new initiatives linked to research and dissemination of conventual heritage, as well as building international partnerships to strengthen cultural and gastronomic outreach.",
    projects_future_note:
      "If you are an institution or group interested in collaborating, you can get in touch to explore ways to participate.",
  },

  pt: {
    nav_home: "Início",
    nav_association: "Associação",
    nav_projects: "Projetos",
    nav_contests: "Concursos",
    nav_routes: "Rotas monásticas",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    footer_line1: "Associação Cultural “DULCESOR” – Doçaria Monástica Conventual",
    footer_line2: "Associação cultural sem fins lucrativos · Inscrição em curso · Valladolid (Espanha)",
    footer_line3: "Website desenvolvido por Apolo Studio Creativo",

    assoc_title: "Associação",
    assoc_subtitle:
      "Identidade, fins e princípios da Associação Cultural DULCESOR – Doçaria Monástica Conventual",

    assoc_identity_title: "Identidade",
    assoc_identity_text:
      "A Associação Cultural DULCESOR é uma entidade sem fins lucrativos dedicada à preservação, investigação, promoção e divulgação do património da doçaria monástica e conventual, entendendo a doçaria como uma manifestação cultural, artística e gastronómica com valor histórico e espiritual.",

    assoc_purpose_title: "Fins e objetivos",
    assoc_purpose_1:
      "Preservar e divulgar a tradição doceira de mosteiros e conventos como parte essencial do património cultural imaterial.",
    assoc_purpose_2:
      "Promover atividades culturais, gastronómicas e académicas que favoreçam o conhecimento e a valorização social da doçaria monástica conventual.",
    assoc_purpose_3:
      "Incentivar a investigação, recolha e documentação de receitas, técnicas e processos tradicionais transmitidos por comunidades religiosas.",
    assoc_purpose_4:
      "Estabelecer vínculos de cooperação com instituições culturais, educativas e religiosas para impulsionar projetos conjuntos de conservação e divulgação.",

    assoc_values_title: "Princípios e valores",
    assoc_values_text:
      "A Associação Cultural DULCESOR desenvolve o seu trabalho com rigor histórico, respeito patrimonial e compromisso ético com as comunidades religiosas produtoras. Promove o reconhecimento da doçaria monástica como expressão gastronómica e, simultaneamente, como testemunho vivo de espiritualidade, tradição e dedicação artesanal transmitida ao longo dos séculos.",

    assoc_admin_title: "Informação administrativa",
    assoc_admin_scope_label: "Âmbito de atuação",
    assoc_admin_scope: "Cultural e gastronómico (âmbito nacional e internacional)",
    assoc_admin_nature_label: "Natureza jurídica",
    assoc_admin_nature: "Associação cultural sem fins lucrativos",
    assoc_admin_note:
      "A associação encontra-se em processo de inscrição oficial de acordo com a legislação em vigor.",

    contests_title: "Concursos",
    contests_subtitle:
      "Convocatórias culturais e gastronómicas promovidas pela Associação Cultural DULCESOR.",
    contests_frame_title: "Enquadramento geral",
    contests_frame_text:
      "A Associação Cultural DULCESOR promove concursos culturais e gastronómicos destinados a preservar e divulgar a doçaria monástica conventual.",
    contests_in_prep: "Em preparação",
    contests_featured_title: "Convocatória em destaque",
    contests_reg_title: "Inscrição",
    contests_reg_text:
      "A participação estará aberta de acordo com o regulamento oficial de cada convocatória.",
    contests_pill_init: "Convocatória inicial",
    contests_docs_title: "Documentação oficial",
    contests_docs_text:
      "Acesso à documentação oficial da convocatória (regulamento e inscrição).",
    contests_btn_bases: "Regulamento (PDF)",
    contests_btn_form: "Inscrição (PDF)",
    contests_pill_pdf: "Documentação em PDF",
    contests_poster_caption:
      "Cartaz do I Concurso Internacional de Doçaria Monástica Conventual DULCESOR",

    projects_title: "Projetos",
    projects_subtitle:
      "Iniciativas culturais e gastronómicas dedicadas à preservação e divulgação da doçaria monástica conventual.",

    projects_intro_title: "Apresentação geral",
    projects_intro_text:
      "Os projetos da Associação Cultural DULCESOR visam valorizar o património doceiro de conventos e mosteiros, reforçar o vínculo entre gastronomia e cultura e abrir um espaço de colaboração entre artesãs, instituições e cidadania.",

    projects_lines_title: "Linhas de ação",
    projects_line_1:
      "Organização de concursos, mostras e jornadas dedicadas à doçaria conventual.",
    projects_line_2:
      "Desenvolvimento de rotas e encontros culturais para promover visitas a mosteiros e museus ligados à tradição doceira.",
    projects_line_3:
      "Edição de materiais de divulgação e educativos sobre história, técnicas e legado doceiro.",
    projects_line_4:
      "Colaborações com instituições académicas e culturais para investigação e divulgação.",

    projects_featured_title: "Projetos em destaque",
    projects_featured_project_title:
      "I Concurso Internacional de Doçaria Monástica Conventual",
    projects_featured_project_text:
      "Primeira convocatória internacional promovida pela DULCESOR para reconhecer e divulgar a doçaria tradicional elaborada em mosteiros e conventos, com Valladolid como primeiro cenário.",
    projects_featured_more: "Ver mais sobre os concursos",

    projects_future_title: "Projetos futuros",
    projects_future_text:
      "Atualmente, a Associação Cultural DULCESOR trabalha no desenho de novas iniciativas ligadas à investigação e divulgação do património conventual, bem como na criação de alianças internacionais que reforcem a difusão cultural e gastronómica do legado doceiro.",
    projects_future_note:
      "Se é uma instituição ou coletivo interessado em colaborar, pode entrar em contacto para explorar formas de participação.",
  },

  fr: {
    nav_home: "Accueil",
    nav_association: "Association",
    nav_projects: "Projets",
    nav_contests: "Concours",
    nav_routes: "Routes monastiques",
    nav_sponsors: "Partenaires",
    nav_contact: "Contact",

    footer_line1: "Association Culturelle « DULCESOR » – Pâtisserie monastique conventuelle",
    footer_line2: "Association culturelle à but non lucratif · Inscription en cours · Valladolid (Espagne)",
    footer_line3: "Site web développé par Apolo Studio Creativo",

    assoc_title: "Association",
    assoc_subtitle:
      "Identité, finalités et principes de l’Association Culturelle DULCESOR – Pâtisserie monastique conventuelle",

    assoc_identity_title: "Identité",
    assoc_identity_text:
      "L’Association Culturelle DULCESOR est une structure à but non lucratif dédiée à la préservation, à la recherche, à la promotion et à la diffusion du patrimoine pâtissier monastique et conventuel, en considérant la pâtisserie comme une expression culturelle, artistique et gastronomique à valeur historique et spirituelle.",

    assoc_purpose_title: "Finalités et objectifs",
    assoc_purpose_1:
      "Préserver et valoriser la tradition pâtissière des monastères et des couvents comme élément essentiel du patrimoine culturel immatériel.",
    assoc_purpose_2:
      "Promouvoir des activités culturelles, gastronomiques et académiques favorisant la connaissance et la reconnaissance sociale de la pâtisserie monastique conventuelle.",
    assoc_purpose_3:
      "Encourager la recherche, la collecte et la documentation de recettes, techniques et procédés traditionnels transmis par les communautés religieuses.",
    assoc_purpose_4:
      "Établir des liens de coopération avec des institutions culturelles, éducatives et religieuses afin de développer des projets communs de conservation et de diffusion.",

    assoc_values_title: "Principes et valeurs",
    assoc_values_text:
      "L’Association Culturelle DULCESOR agit avec rigueur historique, respect du patrimoine et engagement éthique envers les communautés religieuses productrices. Elle promeut la pâtisserie monastique comme expression gastronomique et comme témoignage vivant de spiritualité, de tradition et de savoir-faire artisanal transmis au fil des siècles.",

    assoc_admin_title: "Informations administratives",
    assoc_admin_scope_label: "Champ d’action",
    assoc_admin_scope: "Culturel et gastronomique (niveau national et international)",
    assoc_admin_nature_label: "Nature juridique",
    assoc_admin_nature: "Association culturelle à but non lucratif",
    assoc_admin_note:
      "L’association est en cours d’inscription officielle conformément à la législation en vigueur.",

    contests_title: "Concours",
    contests_subtitle:
      "Appels culturels et gastronomiques portés par l’Association Culturelle DULCESOR.",
    contests_frame_title: "Cadre général",
    contests_frame_text:
      "L’Association Culturelle DULCESOR organise des concours culturels et gastronomiques pour préserver et promouvoir la pâtisserie monastique conventuelle.",
    contests_in_prep: "En préparation",
    contests_featured_title: "Appel à participation",
    contests_reg_title: "Inscription",
    contests_reg_text:
      "La participation sera ouverte conformément au règlement officiel de chaque appel.",
    contests_pill_init: "Appel initial",
    contests_docs_title: "Documentation officielle",
    contests_docs_text:
      "Accès aux documents officiels (règlement et formulaire).",
    contests_btn_bases: "Règlement (PDF)",
    contests_btn_form: "Formulaire (PDF)",
    contests_pill_pdf: "Documentation PDF",
    contests_poster_caption:
      "Affiche du 1er Concours International de Pâtisserie Monastique Conventuelle DULCESOR",

    projects_title: "Projets",
    projects_subtitle:
      "Initiatives culturelles et gastronomiques dédiées à la préservation et à la diffusion du patrimoine pâtissier monastique conventuel.",

    projects_intro_title: "Présentation générale",
    projects_intro_text:
      "Les projets de l’Association Culturelle DULCESOR visent à valoriser le patrimoine pâtissier des couvents et monastères, à renforcer le lien entre gastronomie et culture et à ouvrir un espace de collaboration entre artisanes, institutions et citoyens.",

    projects_lines_title: "Axes d’action",
    projects_line_1:
      "Organisation de concours, expositions et rencontres dédiées à la pâtisserie conventuelle.",
    projects_line_2:
      "Développement de routes et rencontres culturelles pour promouvoir les visites de monastères et musées liés à la tradition pâtissière.",
    projects_line_3:
      "Édition de supports pédagogiques et de vulgarisation sur l’histoire, les techniques et l’héritage pâtissier.",
    projects_line_4:
      "Collaborations avec des institutions académiques et culturelles pour la recherche et la diffusion.",

    projects_featured_title: "Projets à la une",
    projects_featured_project_title:
      "1er Concours International de Pâtisserie Monastique Conventuelle",
    projects_featured_project_text:
      "Première initiative internationale portée par DULCESOR pour reconnaître et diffuser la pâtisserie traditionnelle élaborée dans les monastères et couvents, avec Valladolid comme première étape.",
    projects_featured_more: "En savoir plus sur les concours",

    projects_future_title: "Projets à venir",
    projects_future_text:
      "L’Association Culturelle DULCESOR travaille actuellement à la conception de nouvelles initiatives liées à la recherche et à la diffusion du patrimoine conventuel, ainsi qu’à la création de partenariats internationaux renforçant la valorisation culturelle et gastronomique de cet héritage.",
    projects_future_note:
      "Si vous êtes une institution ou un collectif intéressé par une collaboration, vous pouvez nous contacter pour explorer des formes de participation.",
  },

  it: {
    nav_home: "Home",
    nav_association: "Associazione",
    nav_projects: "Progetti",
    nav_contests: "Concorsi",
    nav_routes: "Percorsi monastici",
    nav_sponsors: "Sponsor",
    nav_contact: "Contatti",

    footer_line1: "Associazione Culturale “DULCESOR” – Pasticceria monastica conventuale",
    footer_line2: "Associazione culturale senza scopo di lucro · Registrazione in corso · Valladolid (Spagna)",
    footer_line3: "Sito web sviluppato da Apolo Studio Creativo",

    assoc_title: "Associazione",
    assoc_subtitle:
      "Identità, fini e principi dell’Associazione Culturale DULCESOR – Pasticceria monastica conventuale",

    assoc_identity_title: "Identità",
    assoc_identity_text:
      "L’Associazione Culturale DULCESOR è un ente senza scopo di lucro dedicato alla tutela, ricerca, promozione e diffusione del patrimonio della pasticceria monastica e conventuale, intesa come espressione culturale, artistica e gastronomica di valore storico e spirituale.",

    assoc_purpose_title: "Finalità e obiettivi",
    assoc_purpose_1:
      "Preservare e valorizzare la tradizione dolciaria di monasteri e conventi come parte essenziale del patrimonio culturale immateriale.",
    assoc_purpose_2:
      "Promuovere attività culturali, gastronomiche e accademiche che favoriscano la conoscenza e l’apprezzamento sociale della pasticceria monastica conventuale.",
    assoc_purpose_3:
      "Incentivare ricerca, raccolta e documentazione di ricette, tecniche e processi tradizionali tramandati dalle comunità religiose.",
    assoc_purpose_4:
      "Stabilire legami di cooperazione con istituzioni culturali, educative e religiose per sviluppare progetti congiunti di conservazione e diffusione.",

    assoc_values_title: "Principi e valori",
    assoc_values_text:
      "L’Associazione Culturale DULCESOR opera con rigore storico, rispetto per il patrimonio e impegno etico verso le comunità religiose produttrici. Promuove il riconoscimento della pasticceria monastica come espressione gastronomica e come testimonianza viva di spiritualità, tradizione e dedizione artigianale tramandata nei secoli.",

    assoc_admin_title: "Informazioni amministrative",
    assoc_admin_scope_label: "Ambito di attività",
    assoc_admin_scope: "Culturale e gastronomico (nazionale e internazionale)",
    assoc_admin_nature_label: "Natura giuridica",
    assoc_admin_nature: "Associazione culturale senza scopo di lucro",
    assoc_admin_note:
      "L’associazione è attualmente in fase di registrazione ufficiale secondo la normativa vigente.",

    contests_title: "Concorsi",
    contests_subtitle:
      "Bandi culturali e gastronomici promossi dall’Associazione Culturale DULCESOR.",
    contests_frame_title: "Quadro generale",
    contests_frame_text:
      "L’Associazione Culturale DULCESOR promuove concorsi culturali e gastronomici per preservare e valorizzare la pasticceria monastica conventuale.",
    contests_in_prep: "In preparazione",
    contests_featured_title: "Bando in evidenza",
    contests_reg_title: "Iscrizione",
    contests_reg_text:
      "La partecipazione sarà aperta secondo il regolamento ufficiale di ciascun bando.",
    contests_pill_init: "Bando iniziale",
    contests_docs_title: "Documentazione ufficiale",
    contests_docs_text: "Accesso ai documenti ufficiali (regolamento e modulo).",
    contests_btn_bases: "Regolamento (PDF)",
    contests_btn_form: "Modulo (PDF)",
    contests_pill_pdf: "Documentazione PDF",
    contests_poster_caption:
      "Locandina del 1° Concorso Internazionale di Pasticceria Monastica Conventuale DULCESOR",

    projects_title: "Progetti",
    projects_subtitle:
      "Iniziative culturali e gastronomiche dedicate alla tutela e alla diffusione del patrimonio della pasticceria monastica conventuale.",

    projects_intro_title: "Presentazione generale",
    projects_intro_text:
      "I progetti dell’Associazione Culturale DULCESOR mirano a valorizzare il patrimonio dolciario di conventi e monasteri, rafforzare il legame tra gastronomia e cultura e creare uno spazio di collaborazione tra artigiane, istituzioni e cittadinanza.",

    projects_lines_title: "Linee d’azione",
    projects_line_1:
      "Organizzazione di concorsi, mostre e giornate dedicate alla pasticceria conventuale.",
    projects_line_2:
      "Sviluppo di percorsi e incontri culturali per promuovere la visita di monasteri e musei legati alla tradizione dolciaria.",
    projects_line_3:
      "Pubblicazione di materiali divulgativi ed educativi su storia, tecniche ed eredità dolciaria.",
    projects_line_4:
      "Collaborazioni con istituzioni accademiche e culturali per ricerca e diffusione.",

    projects_featured_title: "Progetti in evidenza",
    projects_featured_project_title:
      "1° Concorso Internazionale di Pasticceria Monastica Conventuale",
    projects_featured_project_text:
      "Prima iniziativa internazionale promossa da DULCESOR per riconoscere e diffondere la pasticceria tradizionale dei monasteri e conventi, con Valladolid come primo scenario.",
    projects_featured_more: "Scopri di più sui concorsi",

    projects_future_title: "Progetti futuri",
    projects_future_text:
      "L’Associazione Culturale DULCESOR sta lavorando alla progettazione di nuove iniziative legate alla ricerca e alla divulgazione del patrimonio conventuale, nonché alla creazione di alleanze internazionali che rafforzino la diffusione culturale e gastronomica di questo patrimonio.",
    projects_future_note:
      "Se sei un’istituzione o un collettivo interessato a collaborare, puoi contattarci per esplorare modalità di partecipazione.",
  }
};

const STORAGE_KEY = "dulcesor_lang";
let currentLang = (localStorage.getItem(STORAGE_KEY) || "es").toLowerCase();
if (!translations[currentLang]) currentLang = "es";

/** Aplica traducciones a todos los elementos con data-i18n */
function applyI18n() {
  const dict = translations[currentLang] || {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = dict[key] || key;
  });
}

/** Cambia idioma global + persiste + reaplica */
function setLanguage(lang) {
  const normalized = (lang || "").toLowerCase();
  if (!translations[normalized]) return;

  currentLang = normalized;
  localStorage.setItem(STORAGE_KEY, currentLang);

  applyI18n();

  // Actualiza botones activos si existen
  document.querySelectorAll(".langBtn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === currentLang);
  });

  // Ajuste SEO/accesibilidad
  document.documentElement.lang = currentLang;
}

/* Exponer funciones globales para header/footer */
window.dulcesorI18n = {
  getLang: () => currentLang,
  setLanguage,
  applyI18n
};

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  applyI18n();
});
