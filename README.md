# MT Technology - Landing Page

Landing page profesional para venta de servicios de seguridad electronica de MT Technology.

## Stack

- React
- Node.js con Express
- Vite para build del frontend
- CSS responsive mobile first
- CTAs con WhatsApp y mensajes prellenados

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
npm run dev
```

Este comando compila el frontend con Vite y luego levanta el servidor Node/Express.

Luego abre:

```text
http://localhost:5173
```

## Build de produccion

```bash
npm run build
```

## Preview de produccion

```bash
npm run preview
```

## Estructura

```text
.
|-- index.html
|-- package.json
|-- server.js
|-- README.md
|-- dist
`-- src
    |-- App.jsx
    |-- App.css
    |-- main.jsx
    |-- components
    |   |-- About.jsx
    |   |-- Contact.jsx
    |   |-- Footer.jsx
    |   |-- Header.jsx
    |   |-- Hero.jsx
    |   |-- Services.jsx
    |   |-- WhatsAppButton.jsx
    |   `-- WhyChooseUs.jsx
    `-- data
        `-- siteData.js
```

## Funcionalidad WhatsApp

Todos los llamados a la accion abren WhatsApp con un mensaje prellenado. El formulario no envia datos a un servidor: toma los campos ingresados, construye un mensaje con `encodeURIComponent` y abre WhatsApp en una nueva pestana.

Link principal:

```text
https://wa.me/56967524299?text=Hola,%20quiero%20cotizar%20un%20servicio%20con%20MT%20Technology
```
