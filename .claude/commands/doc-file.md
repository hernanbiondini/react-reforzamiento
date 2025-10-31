---
description: Generate documentation for a source file and save it to dock/ folder
---

You are tasked with generating comprehensive documentation for a source code file and saving it in the `dock/` directory.

## Instructions

1. **Read the file**: The user will provide a file path as an argument to this command. Read the content of that file.

2. **Analyze the code**: Examine the code to identify:
   - Main topics covered
   - Key concepts demonstrated
   - Language features used (variables, functions, classes, etc.)
   - Code patterns and best practices shown
   - Important methods or APIs used

3. **Generate documentation**: Create a well-structured markdown document that includes:
   - A main title with the file number and topic (e.g., "# 01 - const y let")
   - A "## Temas cubiertos" (Topics Covered) section with detailed subsections
   - Code examples where relevant
   - Explanations of concepts
   - Best practices or important notes sections when applicable
   - A reference to the source file at the end

4. **File naming**:
   - Extract the base filename from the provided path
   - Create the documentation file in the `dock/` directory with the same base name but `.md` extension
   - Example: `src/bases/08-promises.ts` → `dock/08-promises.md`

5. **Format**: Use markdown with:
   - Clear headings (##, ###, ####)
   - Code blocks with proper language tags when showing examples
   - Bullet points for lists
   - Tables when comparing concepts
   - Spanish language (to match existing documentation style)

6. **Save**: Write the documentation to the `dock/` directory with the appropriate filename.

## Example structure:

```markdown
# [Number] - [Topic Title]

## Temas cubiertos

### [Concept Category]

#### 1. [Specific Topic]
- Description
- Example if needed
- Notes

#### 2. [Another Topic]
- Description
- Example

## [Additional sections as needed]
- Buenas prácticas
- Ventajas/Desventajas
- Casos de uso
- Conceptos importantes

## Archivo de referencia
`path/to/source/file`
```

Now, analyze the file provided as an argument and generate its documentation following this format.
