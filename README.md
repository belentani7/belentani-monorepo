# belentani-monorepo

Monorepo del ecosistema Belentani.

## Qué es

Un solo repositorio para varios paquetes del ecosistema, con el objetivo de compartir
tipos y configuración en vez de duplicarlos.

## Estructura

```
packages/          paquetes compartidos
neon-mantra/       pieza propia del monorepo
tsconfig.base.json configuración TypeScript común
package.json       raíz del workspace
```

## Puesta en marcha

```bash
npm install
npm run build --workspaces
```

## Nota

Repositorio pequeño (~362 KB). Es el esqueleto del monorepo: la estructura está puesta, el
contenido se añade encima.

## Licencia

Sin licencia declarada.
