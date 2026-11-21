# Technical Documentation

## 1. Project Overview

This project is an interactive personal portfolio website created for Assignment 3.

It was developed using HTML5, CSS3, and JavaScript without external frameworks. The website includes About, Projects, GitHub Repositories, and Contact sections.

Assignment 3 improvements include:

- GitHub API integration.
- Dynamic GitHub repository loading.
- Repository sorting by name, stars, and update date.
- Loading and error messages for API requests.
- Dynamic project filtering.
- Dark and light theme switching.
- Saving the selected theme with `localStorage`.
- Contact-form validation and feedback.
- Responsive design for mobile and desktop screens.
- Lazy loading for project images.

## 2. Project Structure

- `index.html`: Main website structure and content.
- `css/styles.css`: Layout, colors, responsive styles, buttons, and animations.
- `js/script.js`: Theme toggle, project filtering, GitHub API integration, sorting, and form validation.
- `assets/images/`: Stores website image assets.
- `docs/ai-usage-report.md`: Describes how AI tools were used.
- `docs/technical-documentation.md`: Contains this technical documentation.
- `README.md`: Contains the project description, setup instructions, features, and links.

## 3. HTML Structure

The website uses semantic HTML elements:

- `header` for the navigation bar.
- `nav` for navigation links and the theme button.
- `main` for the main page content.
- `section` for the About, Projects, GitHub, and Contact sections.
- `article` for project and repository cards.
- `form` for the contact form.
- `footer` for copyright information.

The main sections use these IDs:

- `#about`
- `#projects`
- `#github-projects`
- `#contact`

The Projects section contains filter buttons:

- All
- Web
- API

Each project card includes a `data-category` attribute.

The GitHub section contains:

- A loading message.
- An error message.
- A sorting dropdown.
- A container for dynamically generated repositories.

## 4. CSS and Responsive Design

### Theme Variables

CSS custom properties are used for the website colors.

The light theme is defined under `:root`.

The dark theme is defined under `[data-theme="dark"]`.

JavaScript adds or removes the `data-theme="dark"` attribute from the `body` element.

### Layout

CSS Grid is used for project and repository cards:

    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

This allows cards to resize and wrap automatically.

Flexbox is used for:

- The navigation bar.
- Navigation links.
- Contact form fields.
- Project filter buttons.
- GitHub repository controls.

A media query for screens smaller than 600 pixels changes the navigation and GitHub controls to a mobile-friendly layout.

### Visual Effects

CSS transitions and hover effects are used for:

- Theme color changes.
- Navigation links.
- Project cards.
- Filter buttons.
- Submit buttons.
- Repository links.

Images in the project cards use lazy loading to improve page performance.

## 5. JavaScript Features

### Theme Toggle

The theme button uses a click event listener.

When clicked:

1. JavaScript checks whether dark mode is active.
2. The dark theme attribute is added or removed.
3. The button icon changes between a moon and a sun.
4. The selected theme is saved in `localStorage`.

When the page loads, the saved theme is restored.

### Project Filtering

The project filter uses buttons with the class `.filter-btn`.

When a filter is selected:

1. JavaScript reads the button's `data-filter` value.
2. The selected button receives the `active` class.
3. Each project's `data-category` value is checked.
4. Matching projects remain visible.
5. Non-matching projects are hidden.
6. The empty-project message is displayed when necessary.

### GitHub API Integration

The website retrieves public repositories from the GitHub API using:

    https://api.github.com/users/Rimas449/repos?per_page=100

The request uses the JavaScript `fetch()` function and `async/await`.

The process is:

1. A loading message is displayed.
2. JavaScript sends a request to the GitHub API.
3. The response is checked for errors.
4. Repository data is stored in the `repositories` array.
5. Repository cards are created dynamically.
6. The loading message is hidden.
7. An error message is displayed if the request fails.

Repository cards display:

- Repository name.
- Repository description.
- Star count.
- Fork count.
- A link to the GitHub repository.

Repository text is inserted using `textContent` to safely display API data.

### Repository Sorting

The sorting dropdown allows repositories to be sorted by:

- Recently updated.
- Name.
- Stars.

When the selected option changes, the repository list is sorted and rendered again.

The sorting logic uses:

- `localeCompare()` for repository names.
- `stargazers_count` for stars.
- `updated_at` dates for recently updated repositories.

### Contact Form Validation

The contact form uses a submit event listener.

When submitted:

1. `event.preventDefault()` stops the page from refreshing.
2. The form values are read.
3. Extra spaces are removed using `.trim()`.
4. JavaScript checks that all fields are completed.
5. An error message is shown if a field is empty.
6. A success message is displayed if the form is valid.
7. The form is reset after a successful submission.

The status message uses `aria-live="polite"` for accessibility.

## 6. State Management

The application manages several pieces of state:

- The selected theme is stored in `localStorage`.
- The loaded GitHub repositories are stored in the `repositories` array.
- The selected project filter is represented by the active filter button.
- The selected repository sort option is read from the sorting dropdown.
- Loading and error states are controlled using the `hidden` property.

This allows the interface to update without reloading the page.

## 7. Error Handling

The website handles errors in several ways:

- A GitHub API error displays an error message.
- The loading message is hidden after the request finishes.
- The repository area is cleared if the API request fails.
- Empty contact-form fields display an error message.
- The empty-project message appears when no projects match a filter.
- Browser validation checks the email input format.

## 8. Performance Improvements

The following performance improvements were used:

- No external frameworks or libraries are required.
- The JavaScript file is placed at the end of the HTML body.
- Project images use `loading="lazy"`.
- CSS variables reduce repeated styling rules.
- Repository cards are created only after API data is loaded.
- Reusable JavaScript functions are used for rendering and sorting.
- The project uses a simple static structure with no build tools.

## 9. How to Run the Project

The project does not require build tools or external dependencies.

To run it locally:

1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Alternatively, use the Live Server extension in Visual Studio Code.
5. Right-click `index.html` and select **Open with Live Server**.

The website is also deployed using GitHub Pages.

## 10. Testing

The following tests should be completed:

- The website opens correctly.
- Navigation links move to the correct sections.
- The dark/light theme button works.
- The selected theme remains after refreshing.
- The All filter displays all projects.
- The Web filter displays web projects.
- The API filter displays API projects.
- GitHub repositories load from the API.
- The loading message appears while repositories are loading.
- Repository sorting works by name, stars, and update date.
- Repository links open the correct GitHub pages.
- The API error message appears if the request fails.
- Empty form fields display an error message.
- Completed form fields display a success message.
- Project cards work on mobile and desktop screens.
- Hover effects and transitions work correctly.
- Images load correctly.
- The GitHub Pages website works online.

## 11. AI-Assisted Development

ChatGPT was used as a learning and development assistant.

It helped with:

- Planning Assignment 3 requirements.
- Adding the GitHub API integration.
- Creating repository sorting logic.
- Improving loading and error handling.
- Maintaining the project filter.
- Improving contact-form validation.
- Creating CSS styles for the new GitHub section.
- Updating the README and documentation.
- Explaining how to test and deploy the project.

The code was reviewed, edited, tested, and adapted to fit the existing portfolio design. The final project was not submitted as unmodified AI-generated output.
