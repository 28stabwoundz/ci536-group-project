# Questionnaire Implementation

This document outlines the technical implementation of the questionnaire feature in the Prison Jobs Platform.

## Architecture Overview

The questionnaire feature follows a client-server architecture:

1. **Frontend**: React components for questionnaire form and results display
2. **Backend**: Express API with routes for questionnaire data and job matching
3. **Database**: JSON storage of questionnaire responses in the SQLite database

## Database Model

The questionnaire responses are stored in the `questionnaire_responses` table:

```javascript
// QuestionnaireResponse model
{
  id: UUID,
  user_id: UUID,  // References the users table
  answers: JSON,  // Stores all question answers as a JSON object
  created_at: Timestamp,
  updated_at: Timestamp
}
```

## Backend Implementation

### Routes

The questionnaire feature has three main routes:

#### 1. GET /api/questionnaire/questions
Returns the questionnaire structure with sections and questions.

#### 2. POST /api/questionnaire/submit
Saves user responses to the database.

#### 3. GET /api/questionnaire/results
Returns job recommendations based on the user's questionnaire responses.

### Matching Algorithm

The job matching algorithm in `questionnaire.js` evaluates user responses across multiple categories:

1. **General Eligibility**: Basic requirements for all prison jobs (legal right to work, background check, etc.)
2. **Skills Match**: Job-specific skills and experience (security experience, medical qualifications, etc.)
3. **Preference Match**: User's job category preferences

Each job is scored against the user's responses, with different weights applied to different question types. The algorithm generates a match percentage for each job, and returns them sorted by match score.

## Frontend Implementation

### Component Structure

1. **QuestionnairePage.jsx**: The multi-step questionnaire form
2. **QuestionnaireResults.jsx**: The results page showing job matches
3. **questionnaireService.js**: Service for API calls and utility functions

### Questionnaire Form

The questionnaire form is implemented as a multi-step form with the following features:

- **Section Navigation**: Users can navigate through different sections of the questionnaire
- **Progress Tracking**: A progress bar shows completion status
- **Validation**: Each section is validated before proceeding
- **Question Types**: Support for boolean, select, and multiselect questions
- **Responsive Design**: Mobile-friendly layout

### Results Display

The results page includes:

- **Job List**: A list of matched jobs sorted by match score
- **Match Details**: Visualization of match scores with breakdown by category
- **Job Description**: Details of the selected job
- **Action Buttons**: Quick access to view full details or apply for a job

## Service Layer

The `questionnaireService.js` provides utility functions for the questionnaire:

```javascript
// Key functions
getQuestionnaire()             // Fetch questionnaire data from API
submitQuestionnaire(answers)   // Submit answers to API
getJobRecommendations()        // Get job matches from API
getQuestionsBySection()        // Filter questions by section
validateSectionAnswers()       // Validate section inputs
calculateProgress()            // Calculate progress percentage
formatAnswersForDisplay()      // Format answers for display
```

## Styling

The questionnaire uses custom CSS for styling:

- **Questionnaire.css**: Styles for the form, including question types, navigation buttons, and progress indicators
- **QuestionnaireResults.css**: Styles for the results display, including match visualization and job details

## User Experience Flow

1. User starts the questionnaire
2. User navigates through sections, answering questions
3. Validation ensures required questions are answered
4. After completion, user submits the questionnaire
5. User is redirected to results page
6. Results page displays job matches with visual indicators
7. User can select jobs to see details
8. User can apply directly from the results page

## Security Considerations

- All questionnaire routes are protected by authentication middleware
- Role-based authorization ensures only job seekers can access the questionnaire
- User responses are associated with their user ID
- Validation is performed on both client and server sides

## Performance Optimizations

- Questions are grouped by section to reduce form complexity
- State updates are batched to minimize re-renders
- Calculations for matching are performed server-side
- Results are cached to improve performance on repeated views

## Error Handling

- Form validation provides immediate feedback
- API errors are caught and displayed to the user
- Loading states indicate when data is being fetched
- Fallback UI for cases where no matches are found 