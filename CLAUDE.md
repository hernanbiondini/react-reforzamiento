# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript-based learning/practice repository focused on JavaScript/TypeScript fundamentals as preparation for React development. It uses Vite as the build tool and development server.

## Commands

### Development
- `npm run dev` - Start Vite development server with hot reload
- `npm run build` - Type check with TypeScript, then build for production
- `npm run preview` - Preview the production build locally

## Architecture

### Project Structure

The project is organized as a series of learning modules in `src/bases/`:
- Each numbered file (e.g., `01-const-let.ts`, `02-string.ts`) contains standalone exercises/examples
- Files are imported individually in `src/main.ts` to run specific exercises
- The main entry point (`src/main.ts`) also renders a simple HTML output to `#app`

### Development Workflow

To work on or test a specific exercise:
1. Import the desired file in `src/main.ts` (other imports can be commented out)
2. Run `npm run dev` to see console output in the browser
3. Exercise files are self-contained and log their results to the console

### TypeScript Configuration

The project uses strict TypeScript settings:
- Target: ES2022
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- Module resolution: bundler mode (Vite-specific)
- No emit mode (Vite handles bundling)

### Current Exercises

The `src/bases/` directory contains progressive learning modules:
1. `01-const-let.ts` - Variable declarations
2. `02-string.ts` - String operations
3. `03-object-literal.ts` - Object literals
4. `04-arrays.ts` - Array operations
5. `05-functions.ts` - Function declarations, arrow functions, typed functions
6. `06-obj-destructuring.ts` - Object destructuring patterns and optional properties

Each file demonstrates specific JavaScript/TypeScript concepts with console logging for observation.
