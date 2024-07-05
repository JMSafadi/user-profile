# Perfil de usuario.

Aplicacion simple de perfil de usuario con formulario de contacto validado con Yup.<br> Construido en Nextjs.

## Requisitos previos.
Asegurate de tener instalados:
- Node.js
- NPM o YARN

## Instalacion.
Sigue estos pasos para configurar y ejecutar el proyecto localmente.
1. Clonar el respositorio

```
git clone https://github.com/tu-usuario/contact-form-project.git
```
2. Naveger al directorio del proyecto
- Con NPM

```
npm install
```
- Con YARN

```
yarn install
```
## Ejecucion.
Para iniciar el sevidor en localhost, ejecuta los siguientes comandos

- Con NPM

```
npm run dev
```
- Con YARN

```
yarn dev
```

## Estructura del proyecto
```
user-profile/
├── public/                 # Archivos públicos como imágenes y favicon.
├── src/                    # Código fuente del proyecto.
│   ├── components/         # Componentes reutilizables, cada uno con su archivo de estilos.
│   ├── context/            # Context para alternar Modo oscuro.
│   ├── pages/              # Páginas de Next.js.
│   ├── styles/             # Archivos de estilos globales.
├── .gitignore              # Archivos y directorios que Git debe ignorar.
├── package.json            # Información del proyecto y dependencias.
├── README.md               # Documentación de configuracion e instalacion local del proyecto.
└── next.config.js          # Configuración de Next.js.
```
