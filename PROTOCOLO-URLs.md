# Protocolo de gestión de URLs de producto

## Regla obligatoria

Cualquier producto eliminado de `data/products.ts` debe llevar su redirect en `next.config.ts` **en el mismo commit**.

Sin excepción. Si se elimina un producto sin su redirect, Google detectará el 404, lo registrará en GSC y potencialmente desindexará páginas relacionadas.

---

## Destino del redirect

| Situación | Destino |
|---|---|
| Existe producto sustituto | `/tienda/[categoria]/[slug-sustituto]` |
| No existe sustituto | `/tienda/[categoria]` (la categoría padre) |

## Sintaxis en `next.config.ts`

```ts
{
  source: "/tienda/[categoria]/[slug-eliminado]",
  destination: "/tienda/[categoria]",  // o slug sustituto
  permanent: true,  // emite HTTP 308, equivalente SEO a 301
},
```

## Mensaje de commit estándar

```
fix(seo): redirect 308 [slug-eliminado] → [destino]
```

---

## Gestión periódica hasta activar Creators API

**Frecuencia recomendada: semanal**

1. Abrir GSC → Indexación → Páginas → filtrar "No se ha encontrado (404)"
2. Por cada URL nueva de `/tienda/`: identificar si el producto fue retirado del catálogo
3. Añadir redirect en `next.config.ts` y hacer commit con mensaje estándar
4. Tras deploy, pulsar "Validar corrección" en GSC

---

## Automatización futura — Creators API

Cuando el programa alcance 10 ventas/30 días (requisito de activación):
- Usar `getItems()` para consultar `Availability` de cada ASIN del catálogo
- Si `availability = OUT_OF_STOCK` persistente (>14 días): generar redirect automático y retirar el producto en el mismo PR

---

## Redirects activos (historial)

*(Ninguno aún — registrar aquí cada redirect añadido)*

| Source | Destination | Tipo | Commit |
|---|---|---|---|

---

## Pendientes SEO identificados

- [ ] Implementar `og:image` para páginas de producto individual (`tienda/[categoria]/[producto]`)

---

*Última actualización: agosto 2026 — auditoría SEO completa, commit d81cd94*
