# Technical Context: Junior Researcher

## Technologies Used

### Core Technologies

1. **Python 3.9+**
   - Primary programming language.
   - Chosen for its strong support for asynchronous programming and AI/ML libraries.
   - Requires version 3.9+ for compatibility with dependencies.

2. **Google Gemini API**
   - Powers all AI-driven functionality.
   - Used for query analysis, search execution, result processing, and report generation.
   - Requires an API key for authentication.

3. **Asyncio**
   - Python's asynchronous programming library.
   - Enables concurrent processing of multiple research queries.
   - Critical for performance optimization.

### Key Dependencies

1. **google-genai (v0.1.0)**
   - Official Google Generative AI Python client.
   - Provides access to Gemini models.
   - Manages API authentication and request formatting.

2. **google-generativeai (v0.8.3)**
   - Extended library offering additional functionality for Gemini models.
   - Supports advanced features like grounding and citations.

3. **python-dotenv (v1.0.1)**
   - Manages environment variables.
   - Securely loads API keys from a .env file.
   - Simplifies configuration management.

## Development Setup

### Local Development

1. **Environment Setup**
   - Install Python 3.9+.
   - Create and activate a virtual environment.
   - Install dependencies via pip and requirements.txt.

2. **API Configuration**
   - Ensure a valid Google Gemini API key is stored in a .env file (not version controlled).
   - The API key is loaded at runtime using python-dotenv.

3. **Running the Application**
   - Run via the command-line interface (using main.py or directly via a web server).
   - The FastAPI server is run using uvicorn.

### Containerization

Docker support has been removed. The backend is now deployed using uvicorn directly without using Docker containers.

## Technical Constraints

### API Limitations

1. **Rate Limits**
   - The Gemini API has rate limits that may affect research speed.
   - Concurrent requests are limited by API quotas.
   - Error handling is implemented to manage rate limit exceptions.

2. **Token Limits**
   - Maximum input and output token limits may affect query complexity and response depth.
   - Handled through chunking and summarization as needed.

3. **Cost Considerations**
   - API usage incurs costs based on token count.
   - Different models have different pricing.
   - Research modes are designed with cost efficiency in mind.

### Performance Considerations

1. **Concurrency Limits**
   - The number of concurrent queries is adjusted based on the research mode:
     - Fast mode: Maximum 3 concurrent queries.
     - Balanced mode: Maximum 7 concurrent queries.
     - Comprehensive mode: Maximum 5 initial queries with recursive expansion.

2. **Memory Usage**
   - The research tree structure may become large for complex topics.
   - Progress tracking maintains state for all queries.
   - JSON serialization is used for persistence.

3. **Processing Time**
   - Research completion time varies by mode:
     - Fast mode: ~1-3 minutes.
     - Balanced mode: ~3-6 minutes.
     - Comprehensive mode: ~5-12 minutes.

## Deployment Considerations

### Environment Requirements

1. **Python Runtime**
   - Python 3.9+ required.
   - Relies on standard library and external packages installed via pip.

2. **API Access**
   - Requires a valid Google Gemini API key.
   - Needs stable internet connectivity for API calls.
   - Implements error handling for network issues.

3. **File System Access**
   - Requires write access for output files.
   - Uses JSON for storing research trees.
   - Generates Markdown for final reports.

### Deployment Model

- The backend API is deployed directly using uvicorn, without Docker.
- The FastAPI server runs on port 8080 and communicates with the frontend via REST API calls.

## Future Technical Considerations

1. **Web Interface**
   - There is potential for further enhancements to the web-based UI.
   - Additional dependencies may be integrated if needed.

2. **Persistent Storage**
   - The system currently writes output to the file system.
   - Future improvements could involve database support for research history.

3. **Authentication**
   - Currently managed via an API key in the .env file.
   - Future iterations could include user authentication mechanisms.

4. **Scalability**
   - The design is optimized for single-user usage.
   - It may be expanded for multi-user support with necessary architectural changes.

## UI Technologies

The project uses the following technologies for the UI, aiming for an elegant, modern, clean, and minimal design:
- **FastAPI** for the backend.
- **React and Next.js (App Router)** for the user interface.
- **TypeScript** for type-safe code.
- **Shadcn UI and Tailwind CSS** for UI components and styling, ensuring a visually appealing and user-friendly experience.
