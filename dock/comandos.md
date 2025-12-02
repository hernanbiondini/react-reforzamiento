# Comandos.txt - Archivo de Comandos y Notas

## Descripción

Este es un archivo de texto plano utilizado como referencia rápida para comandos, notas o snippets de código durante el desarrollo del proyecto.

## Comandos NPM del Proyecto

### Comandos de Desarrollo

#### `npm run dev`
- **Descripción**: Inicia el servidor de desarrollo Vite
- **Puerto**: Por defecto http://localhost:5173
- **Características**:
  - Hot Module Replacement (HMR) activado
  - Recarga automática al guardar cambios
  - Console logs visibles en el navegador
- **Uso típico**: Durante el desarrollo y testing de ejercicios

#### `npm run build`
- **Descripción**: Compila TypeScript y construye para producción
- **Proceso**:
  1. Ejecuta `tsc` para verificación de tipos
  2. Ejecuta `vite build` para bundling optimizado
- **Output**: Directorio `dist/` con archivos optimizados
- **Uso típico**: Antes de desplegar o compartir el proyecto

#### `npm run preview`
- **Descripción**: Previsualiza el build de producción localmente
- **Requisito**: Debe ejecutarse `npm run build` primero
- **Uso típico**: Verificar que el build de producción funciona correctamente

## Contenido del Archivo comandos.txt

El archivo contiene los comandos esenciales para inicializar y ejecutar un proyecto Vite:

```
npm create vite
npm install
npm run dev
```

### Análisis de los Comandos

#### 1. `npm create vite`
- **Propósito**: Comando de inicialización de proyecto con Vite
- **Función**: Crea un nuevo proyecto usando el scaffolding de Vite
- **Interactivo**: Solicita:
  - Nombre del proyecto
  - Framework (React, Vue, Vanilla, etc.)
  - Variante (TypeScript, JavaScript)
- **Output**: Genera estructura base del proyecto con:
  - `package.json` con scripts configurados
  - Archivos de configuración (`vite.config.js`, `tsconfig.json`)
  - Estructura de carpetas inicial (`src/`, `public/`)
  - Archivo HTML de entrada

#### 2. `npm install`
- **Propósito**: Instalar dependencias del proyecto
- **Función**: Lee `package.json` e instala todos los paquetes necesarios
- **Genera**:
  - Carpeta `node_modules/` con todas las dependencias
  - Archivo `package-lock.json` para versionado exacto
- **Cuándo usar**:
  - Después de clonar el repositorio
  - Después de `npm create vite`
  - Tras añadir nuevas dependencias al `package.json`

#### 3. `npm run dev`
- **Propósito**: Iniciar servidor de desarrollo
- **Función**: Ejecuta el script `dev` definido en `package.json` (`vite`)
- **Características**:
  - Servidor local en http://localhost:5173
  - Hot Module Replacement (HMR)
  - Recarga instantánea de cambios
  - TypeScript compilation on-the-fly
- **Cuándo usar**: Durante todo el desarrollo para ver cambios en tiempo real

## Secuencia de Configuración Inicial

Estos tres comandos representan el flujo típico para iniciar un nuevo proyecto Vite desde cero:

```bash
# Paso 1: Crear proyecto nuevo
npm create vite
# → Seleccionar opciones interactivas
# → Se genera la estructura del proyecto

# Paso 2: Navegar al directorio e instalar
cd nombre-proyecto
npm install
# → Se descargan e instalan dependencias

# Paso 3: Iniciar desarrollo
npm run dev
# → Servidor corriendo, listo para programar
```

## Contexto en este Proyecto

Este proyecto ya fue inicializado usando estos comandos. Para trabajar en el proyecto actual, solo necesitas:

1. **Primera vez** (después de clonar):
   ```bash
   npm install
   npm run dev
   ```

2. **Sesiones posteriores**:
   ```bash
   npm run dev
   ```

## Comandos Git Útiles

### Comandos Básicos

#### `git status`
- Ver el estado actual del repositorio
- Muestra archivos modificados, nuevos y staged

#### `git add .`
- Agregar todos los cambios al staging area
- Para archivos específicos: `git add src/bases/file.ts`

#### `git commit -m "mensaje"`
- Crear un commit con los cambios staged
- Ejemplo: `git commit -m "Add exercise 07"`

#### `git push`
- Enviar commits al repositorio remoto
- Rama actual: `main`

#### `git log --oneline`
- Ver historial de commits de forma compacta
- Para ver más detalle: `git log`

### Comandos de Ramas

#### `git branch`
- Listar todas las ramas locales
- Crear nueva rama: `git branch nombre-rama`

#### `git checkout -b nueva-rama`
- Crear y cambiar a una nueva rama en un solo comando

#### `git merge rama`
- Fusionar cambios de otra rama a la actual

## Comandos TypeScript

### Verificación de Tipos

#### `npx tsc --noEmit`
- Verificar errores de tipos sin generar archivos
- Útil para debugging rápido

#### `npx tsc --watch`
- Modo watch para verificación continua de tipos

## Comandos del Sistema de Archivos

### Navegación y Listado

#### `ls src/bases/`
- Listar archivos en el directorio de ejercicios
- Ver archivos con detalles: `ls -la src/bases/`

#### `code src/bases/archivo.ts`
- Abrir archivo en VS Code (si está instalado)

## Workflow Típico de Desarrollo

### 1. Crear nuevo ejercicio
```bash
# Crear archivo
touch src/bases/07-nuevo-tema.ts

# Abrir en editor
code src/bases/07-nuevo-tema.ts
```

### 2. Trabajar en el ejercicio
```bash
# Importar en main.ts
# Descomentar: import './bases/07-nuevo-tema'

# Iniciar servidor
npm run dev
```

### 3. Guardar cambios
```bash
# Ver cambios
git status

# Agregar archivos
git add src/bases/07-nuevo-tema.ts src/main.ts

# Crear commit
git commit -m "Add exercise 07: nuevo tema"

# Subir cambios
git push
```

## Formato recomendado para comandos.txt

Si decides usar el archivo `comandos.txt`, se recomienda esta estructura:

```
=== COMANDOS NPM ===
npm run dev - Iniciar servidor de desarrollo
npm run build - Construir para producción
npm run preview - Previsualizar build

=== COMANDOS GIT ===
git status - Ver estado
git add . - Agregar cambios
git commit -m "msg" - Crear commit
git push - Subir cambios

=== SNIPPETS ===
[Código o fragmentos útiles]

=== NOTAS ===
[Tareas pendientes o ideas]
```

## Buenas prácticas

- **Mantener actualizado**: Eliminar comandos obsoletos o notas completadas
- **Organización**: Usar secciones claras con separadores
- **Claridad**: Añadir breves descripciones a cada comando
- **Versionamiento**: Considerar si este archivo debe estar en `.gitignore` para notas personales

## Alternativas

Si este archivo crece mucho o necesitas más estructura, considera:

- Crear un archivo markdown (`comandos.md`) para mejor formato
- Usar un archivo JSON para datos estructurados
- Dividir en múltiples archivos por categoría
- Utilizar un gestor de snippets o extensión del editor

## Archivo de referencia

`src/bases/comandos.txt`
