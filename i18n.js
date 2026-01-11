(function(){
  // Diccionario base (común)
  const BASE_I18N = {
    es: {
      brand_sub: "ASOCIACIÓN CULTURAL",
      nav_inicio: "INICIO",
      nav_asociacion: "ASOCIACIÓN",
      nav_proyectos: "PROYECTOS",
      nav_concursos: "CONCURSOS",
      nav_rutas: "RUTAS MONACALES",
      nav_patrocinadores: "PATROCINADORES",
      nav_contacto: "CONTACTO",
    },
    en: {
      brand_sub: "CULTURAL ASSOCIATION",
      nav_inicio: "HOME",
      nav_asociacion: "ASSOCIATION",
      nav_proyectos: "PROJECTS",
      nav_concursos: "CONTESTS",
      nav_rutas: "MONASTIC ROUTES",
      nav_patrocinadores: "SPONSORS",
      nav_contacto: "CONTACT",
    },
    pt: {
      brand_sub: "ASSOCIAÇÃO CULTURAL",
      nav_inicio: "INÍCIO",
      nav_asociacion: "ASSOCIAÇÃO",
      nav_proyectos: "PROJETOS",
      nav_concursos: "CONCURSOS",
      nav_rutas: "ROTAS MONÁSTICAS",
      nav_patrocinadores: "PATROCINADORES",
      nav_contacto: "CONTACTO",
    },
    fr: {
      brand_sub: "ASSOCIATION CULTURELLE",
      nav_inicio: "ACCUEIL",
      nav_asociacion: "ASSOCIATION",
      nav_proyectos: "PROJETS",
      nav_concursos: "CONCOURS",
      nav_rutas: "ITINÉRAIRES MONASTIQUES",
      nav_patrocinadores: "PARTENAIRES",
      nav_contacto: "CONTACT",
    },
    it: {
      brand_sub: "ASSOCIAZIONE CULTURALE",
      nav_inicio: "HOME",
      nav_asociacion: "ASSOCIAZIONE",
      nav_proyectos: "PROGETTI",
      nav_concursos: "CONCORSI",
      nav_rutas: "PERCORSI MONASTICI",
      nav_patrocinadores: "SPONSOR",
      nav_contacto: "CONTATTI",
    }
  };

  function mergeDict(base, extra){
    if(!extra) return base;
    const out = JSON.parse(JSON.stringify(base));
    Object.keys(extra).forEach(lang=>{
      out[lang] = out[lang] || {};
      Object.assign(out[lang], extra[lang]);
    });
    return out;
  }

  function getSavedLang(){
    try{ return localStorage.getItem("dulcesor_lang"); }catch(e){ return null; }
  }
  function saveLang(lang){
    try{ localStorage.setItem("dulcesor_lang", lang); }catch(e){}
  }

  function applyI18n(lang, dict){
    const d = (dict && dict[lang]) ? dict[lang] : (dict && dict.es) ? dict.es : {};
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      if(!(key in d)) return;

      const val = d[key];
      if(typeof val !== "string") return;

      // Soporta textos largos con saltos de línea
      if(val.includes("\n")){
        el.innerHTML = val.replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
      }else{
        el.textContent = val;
      }
    });

    document.querySelectorAll(".langBtn").forEach(btn=>{
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    saveLang(lang);
  }

  function initI18n(){
    // PAGE_I18N lo define la página (opcional) con sus textos propios
    const dict = mergeDict(BASE_I18N, window.PAGE_I18N);

    // Bind botones idioma (si están en el DOM)
    document.querySelectorAll(".langBtn").forEach(btn=>{
      btn.addEventListener("click", ()=> applyI18n(btn.dataset.lang, dict));
    });

    const saved = getSavedLang();
    applyI18n(saved || "es", dict);
  }

  window.DULCESOR_I18N = { initI18n, applyI18n };
})();
