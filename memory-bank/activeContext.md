# Active Context: Junior Researcher

## Current Work Focus

The Junior Researcher project (formerly Open Gemini Deep Research) initially focused on CLI-driven research and has now evolved to provide a modern, web-based user interface. Core functionality has been implemented, including:

1. Query analysis and parameter determination
2. Follow-up question generation and integration in the UI flow
3. Multi-layered research with different modes
4. Progress tracking and visualization
5. Report generation with citations and proper formatting

The application is functional both as a command-line tool and as a web-based UI built with Next.js, React, TypeScript, Shadcn UI, and Tailwind CSS.

## Recent Changes

- Rebranded the application as "Junior Researcher" with a centered, cleaner UI design
- Implemented a bluish color scheme that's easy on the eyes
- Enhanced typography for research results with proper markdown rendering
- Added special handling for citations to ensure they're properly displayed
- Created a three-state research flow (initial query → followup questions → results)
- Improved the display of research modes with detailed information
- Added dynamic adjustment of query and depth parameters based on selected mode
- Enhanced the overall layout with a responsive grid system
- Migrated from a solely CLI-based interface to include a Next.js-based web UI
- Removed Docker containerization in favor of direct deployment using uvicorn
- Integrated the frontend and backend via a REST API on port 8080

## Active Decisions

1. **Research Modes**: Supports fast, balanced, and comprehensive modes with mode-specific UI adjustments.
2. **Progress Tracking**: Detailed progress is tracked via the ResearchProgress class.
3. **Tree-Based Research Structure**: Utilizes a hierarchical model for query and result flow.
4. **Concurrent Processing**: Implements asyncio for handling multiple queries concurrently.
5. **UI Flow**: Implemented a clear three-state flow for better user experience.

## Current Considerations

1. Optimize API usage and error handling.
2. Further enhance user experience through the modern web UI.
3. Implement comprehensive testing and documentation.

## Next Steps

### Short-term Tasks
- Develop a comprehensive test suite and improve documentation.
- Enhance error handling mechanisms and performance optimizations.
- Add dark mode toggle for the UI.

### Medium-term Goals
- Further refine the web UI and implement research history persistence.
- Support additional output formats.
- Improve citation display and management.

### Long-term Vision
- Expand to multi-user support and advanced visualization.
- Develop an integrated API service for third-party tools.

## UI Development

The UI has been significantly improved with a focus on delivering a responsive, modern, clean, and minimal design that complements the core research engine. Key UI improvements include:

1. **Color Scheme**: Implemented a soft blue-based theme that's easy on the eyes
2. **Typography**: Enhanced text rendering with proper spacing and hierarchy
3. **Layout**: Restructured the main page with a responsive grid system
4. **Components**: Refined all UI components with better styling and interactions
5. **Research Flow**: Created a clear three-state flow for better user experience
6. **Results Display**: Improved markdown rendering with proper citation handling
