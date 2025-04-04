# Taller Mecánico Automotriz - Prototipo Web

## 🚗 Descripción del Proyecto

Un sistema web para gestión de un taller mecánico, desarrollado como prototipo antes de migrar a Django.

[documentación detallada](https://github.com/maikCyphlock/uptp-taller/blob/main/documentatio.md)

## 🛠 Tecnologías Actuales

- **Backend**: Node.js con Express
- **Template Engine**: Nunjucks
- **Frontend**: Tailwind CSS
- **Tiempo Real**: Socket.IO
- **Desarrollo**: Live Reload

## 📂 Estructura del Proyecto

```
uptp-taller/
├── index.js # Servidor principal
├── package.json # Dependencias del proyecto
├── views/
│   ├── components/
│   │   ├── head.html
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── layout.html
│   │    ....
│   ├── admin.html
│   └── base.html
├── public/
└── README.md
```

## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js (v14 o superior)
- npm

### Pasos de Instalación

1. Clonar el repositorio

````bash
git clone https://github.com/maikcyphlock/uptp-taller.git
cd uptp-taller

2. Instalar dependencias
```bash
npm install
````

3. Iniciar el servidor

```bash
npm run dev
```

4. Acceder al prototipo

- Abre tu navegador y visita `http://localhost:3000`

## 📝 Notas

- Este prototipo es un ejemplo de cómo podría ser el sistema final.
- Se planea migrar a Django para un mejor desempeño y seguridad.
- Migración a Django
- Implementación de base de datos
- Añadir autenticación
- Mejorar funcionalidades de administración

## 📚 Documentación

- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.IO](https://socket.io/)

## 📋 Licencia

Este prototipo está disponible bajo la licencia MIT.
