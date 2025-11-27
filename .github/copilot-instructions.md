# Copilot Instructions for BackendWithChai

## Project Context
**BackendWithChai** is a backend learning project following Hitesh Chaudhary's curriculum. The repository is in early stages with foundational setup underway.

## Getting Started

### Repository Structure (To Be Defined)
- Source code should follow Node.js/Express conventions (anticipated based on learning context)
- Configuration files at root level (`.env`, `package.json`, `tsconfig.json`)
- API routes in a dedicated directory (e.g., `src/routes/`)
- Database models/schemas in a dedicated directory (e.g., `src/models/`)
- Utilities and middleware in respective directories

### Essential Setup Commands
*Update as project evolves with actual build/test commands*

```bash
npm install              # Install dependencies
npm start               # Start development server
npm test                # Run tests
npm run build          # Build for production
```

## Development Patterns

### Code Style
- Follow Node.js best practices and ES6+ standards
- Use consistent naming: `camelCase` for variables/functions, `PascalCase` for classes/components
- Include JSDoc comments for public APIs

### Error Handling
- Use try-catch blocks for async operations
- Return consistent error response format
- Log errors with context (function name, relevant data)

### Testing
- Write unit tests for business logic
- Use meaningful test descriptions
- Aim for >70% code coverage on new features

### Environment Configuration
- Use `.env` for environment-specific variables
- Never commit `.env` files - include `.env.example` instead
- Load config early in application startup

## Integration Points
- Database connection patterns (to be documented)
- External API integrations (to be documented)
- Authentication/authorization (to be documented)

## Helpful Resources
- [Hitesh Chaudhary's Backend Course](https://www.youtube.com/c/HiteshChaudhary)
- Repository README: `/README.md`

---
**Last Updated**: November 27, 2025  
**Status**: Initial template - Update as project structure is established
