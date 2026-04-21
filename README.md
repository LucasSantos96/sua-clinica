# Sua Clínica — Landing Page React

Landing page em React inspirada no layout enviado, com foco visual clean e elegante no segmento de estética.

## Stack

- React 18
- Vite 5
- Plugin oficial do React (`@vitejs/plugin-react`)
- CSS puro (organizado em um arquivo global)
- Google Fonts (Playfair Display + DM Sans)

## Como rodar

```bash
npm install
npm run dev
```

Acesse o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Scripts

- `npm run dev` — ambiente de desenvolvimento
- `npm run build` — build de produção
- `npm run preview` — preview local da build

## Estrutura

```text
src/
  App.jsx       # Seções da página (header, hero, tratamentos, etc.)
  main.jsx      # Bootstrap do React
  styles.css    # Estilos globais e responsividade
```

## Observações de design

- Paleta suave em tons de rosa/bege para acompanhar a referência.
- Tipografia serifada para títulos e sans-serif para textos.
- Layout responsivo para desktop, tablet e mobile.
- Componentização simples por seções, pronta para evoluir.


## Deploy na Vercel

Se aparecer página em branco no deploy, normalmente é porque a Vercel está servindo `index.html` sem build do Vite (tentando executar `src/main.jsx` direto no navegador).

Este projeto já inclui `vercel.json` para forçar:

- instalação com dependências de dev (`vite`)
- build com `npm run build`
- saída estática em `dist`

Em **Project Settings > Build & Output Settings**, deixe como padrão ou garanta os mesmos valores do `vercel.json`.
