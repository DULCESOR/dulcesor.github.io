/* -------------------------
   HEADER (definitivo 2 filas)
   - Fila 1: logo izq / idiomas dcha
   - Fila 2: nav debajo alineado a la izquierda
------------------------- */

#site-header{
  margin-bottom: 18px;
}

.headerShell{
  padding-top: 10px;
}

/* Fila superior */
.headerTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding: 6px 0 14px;
  border-bottom: var(--divider);
}

/* Marca: SOLO icono (sin texto) */
.brand{
  display:flex;
  align-items:center;
  text-decoration:none;
}

/* ⬅️ aquí va el “doble de tamaño” */
.brandMark{
  width: 64px;            /* antes estaba pequeño: ahora x2 aprox */
  height: 64px;
  border-radius: 16px;    /* cuadrado redondeado */
  background: rgba(255,255,255,0.85);
  border: 1px solid var(--border);
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: 0 6px 18px rgba(0,0,0,0.05);
}

.brandMark img{
  width: 75%;
  height: 75%;
  object-fit: contain;
  display:block;
}

/* Idiomas */
.lang{
  display:flex;
  gap:10px;
  align-items:center;
}

.langBtn{
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text-2);
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 13px;
  cursor: pointer;
  transition: transform .08s ease, border-color .15s ease, color .15s ease;
}

.langBtn:hover{
  border-color: #d4c7ae;
  color: var(--heading);
  transform: translateY(-1px);
}

.langBtn.active{
  border-color: #111;
  color: #111;
  font-weight: 600;
}

/* Fila inferior: NAV */
.headerNav{
  display:flex;
  justify-content:flex-start;   /* ✅ alineado a la izquierda */
  gap: 34px;
  padding: 16px 0;
  border-bottom: var(--divider);
}

.headerNav a{
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 12px;
  color: var(--text-2);
  padding: 10px 8px;
  border-radius: 999px;
  transition: background .15s ease, color .15s ease, border-color .15s ease;
  border: 1px solid transparent;
}

.headerNav a:hover{
  text-decoration:none;
  color: var(--heading);
  background: rgba(255,255,255,0.65);
  border-color: var(--border);
}

.headerNav a.current{
  color: var(--heading);
  border-color: #d9cfae;
  background: rgba(255,255,255,0.9);
}

/* Responsive */
@media (max-width: 900px){
  .headerNav{
    flex-wrap: wrap;
    gap: 12px 18px;
  }
  .headerNav a{
    font-size: 11px;
    padding: 8px 10px;
  }
  .brandMark{
    width: 56px;
    height: 56px;
    border-radius: 14px;
  }
}
