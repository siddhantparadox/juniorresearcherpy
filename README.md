# Junior Researcher

Junior Researcher is an intelligent research assistant powered by AI that performs deep, multi-layered research on any topic. It leverages Next.js, React, TypeScript, Shadcn UI, and Tailwind CSS for the frontend, and FastAPI for the backend.

## How to Run the Project

1.  **Backend:** Navigate to the `backend/` directory and run `python -m uvicorn api:app --host 0.0.0.0 --port 8080 --reload`
2.  **Frontend:** Navigate to the `frontend/` directory and run `npm run dev`

## Project Structure

*   `backend/`: Contains the FastAPI backend code.
*   `frontend/`: Contains the Next.js frontend code.

## Project Details

Junior Researcher automates the process of gathering, analyzing, and synthesizing information, reducing research time from hours or days to minutes. It enables recursive deep diving into a subject, providing exhaustive exploration. By processing multiple unique queries concurrently, the application ensures comprehensive coverage of diverse aspects of a topic. Automated tracking of sources and generation of properly formatted citations streamline the research process and enhance credibility. The tool aggregates findings from multiple sources into a coherent, well-structured final report with proper formatting and typography.

## Technologies Used

*   Frontend: Next.js, React, TypeScript, Shadcn UI, Tailwind CSS
*   Backend: FastAPI
*   AI: Google Gemini API

## How to setup the backend

1. Go to backend folder
2. Create and activate a virtual environment (`python -m venv venv`
   `source venv/bin/activate`  # On Windows: `venv\Scripts\activate`)
3. Install dependencies:

   `pip install -r requirements.txt`

4. Create a `.env` file in the root directory and add your Gemini API key:

   `GEMINI_KEY=your_api_key_here`


Please let us know or make a pull request if you want to make any updates
