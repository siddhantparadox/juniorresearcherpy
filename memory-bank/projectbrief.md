# Project Brief: Junior Researcher
original project- [text](https://github.com/eRuaro/open-gemini-deep-research)
How to turn on the backend server: python -m uvicorn api:app --host 0.0.0.0 --port 8080 --reload
How to turn on the frontend server: npm run dev
## Project Overview
Junior Researcher (formerly Open Gemini Deep Research) is an intelligent research assistant powered by AI that performs deep, multi-layered research on any topic. Initially conceived as a CLI-driven tool, the project has evolved to integrate a modern web-based user interface built with Next.js, React, TypeScript, Shadcn UI, and Tailwind CSS. The backend is now deployed directly via uvicorn, eliminating Docker containerization in favor of a simpler and more lightweight deployment model. This integrated approach enhances user interactivity and accessibility while maintaining robust research capabilities.

## Core Requirements

1. **Automated Deep Research**
   - Perform multi-layered research with adjustable breadth and depth.
   - Generate follow-up questions for better context.
   - Process multiple research queries concurrently.
   - Track research progress with detailed logging.

2. **Research Modes**
   - Fast Mode: Quick, surface-level research with limited queries.
   - Balanced Mode: Moderate depth and breadth (default).
   - Comprehensive Mode: Exhaustive, in-depth research with recursive deep diving.

3. **Report Generation**
   - Generate comprehensive final reports with citations.
   - Track sources and manage citations.
   - Format text with inline citations.

4. **User Experience**
   - Provide both a command-line interface and a modern web-based user interface.
   - Interactive follow-up questions and progress visualization.
   - Easy initiation of research through a single query.
   - Transparent display of research progress and results in a clean, modern UI.

## Technical Goals

1. **Performance**
   - Efficient concurrent processing of multiple queries.
   - Optimized API usage with Google's Gemini AI.
   - Reasonable research completion times based on selected mode.

2. **Reliability**
   - Robust error handling and graceful degradation when API limits are reached.
   - Consistent research quality across different topics.

3. **Extensibility**
   - Modular design for adding new features.
   - Configurable research parameters.
   - Potential for future UI enhancements and multi-user support.

## Success Criteria

1. The application successfully generates comprehensive research reports on a wide range of topics.
2. Research outputs include relevant, accurate information with proper citations.
3. The system effectively handles different research modes.
4. Users can interact seamlessly with both the CLI and web-based interfaces.
5. The research process is transparent with clear tracking and logging.

## Constraints

1. Requires a valid Google Gemini API key.
2. Limited by Gemini API rate limits and token quotas.
3. Research quality is dependent on the capabilities of the Gemini AI.
4. While the CLI interface offers powerful functionality, its usability may be limited for non-technical users; hence, the web UI addresses this gap.
