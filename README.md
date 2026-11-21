# Personal Portfolio - Assignment 3

An interactive and responsive personal portfolio website built using HTML, CSS, and JavaScript.

This project improves the previous portfolio by adding GitHub API integration, dynamic repository loading, repository sorting, API error handling, project filtering, theme preferences, form validation, and responsive design.

## Features

- **Semantic HTML5**
  - Separate About, Projects, GitHub Repositories, and Contact sections.

- **Responsive Design**
  - Uses CSS Grid and Flexbox for desktop, tablet, and mobile screens.

- **GitHub API Integration**
  - Loads public repositories from the GitHub API.
  - Displays repository names, descriptions, stars, forks, and links.

- **Repository Sorting**
  - Sorts repositories by:
    - Recently updated.
    - Name.
    - Number of stars.

- **Loading and Error Handling**
  - Displays a loading message while repositories are being loaded.
  - Displays an error message if the API request fails.

- **Dynamic Project Filtering**
  - Users can filter projects by All, Web, or API.

- **Dark and Light Theme**
  - Users can switch between dark and light mode.
  - The selected theme is saved using `localStorage`.

- **Contact Form Validation**
  - Checks that all fields are completed.
  - Displays a success or error message without refreshing the page.

- **Accessibility**
  - Uses labels for form inputs.
  - Includes accessible status messages using `aria-live`.

- **Performance**
  - Uses lazy loading for project images.
  - Does not require external frameworks or build tools.

## Project Structure

```text
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub REST API
- Browser `localStorage`
- GitHub Pages
- GitHub

## GitHub API

The website retrieves public repositories using the following API endpoint:

```text
https://api.github.com/users/Rimas449/repos?per_page=100
```

The repository data is loaded using JavaScript `fetch()` and `async/await`.

## Setup and How to Run Locally

No build tools or installations are required.

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code or another code editor.
3. Open `index.html` in a web browser.
4. Alternatively, use the VS Code Live Server extension.
5. Right-click `index.html` and select **Open with Live Server**.

## How to Use the Website

### Change the Theme

Click the moon or sun button in the navigation bar to switch between light and dark mode.

The selected theme is saved automatically and remains active after refreshing the page.

### Filter Projects

Use the project filter buttons:

- **All** displays every project.
- **Web** displays web-based projects.
- **API** displays projects that use an API.

### Sort GitHub Repositories

Use the sorting dropdown in the GitHub section to sort repositories by:

- Recently updated.
- Name.
- Number of stars.

### Submit the Contact Form

Enter your name, email address, and message.

If a field is empty, an error message will appear. If all fields are completed, a confirmation message will appear.

## Testing

The following features were tested:

- Navigation links.
- Dark and light theme switching.
- Theme persistence after refreshing.
- All, Web, and API project filters.
- GitHub repository loading.
- Repository sorting.
- Repository links.
- API loading and error messages.
- Contact-form validation.
- Contact-form success feedback.
- Responsive mobile layout.
- Project image loading.
- GitHub Pages deployment.

## AI Usage

ChatGPT was used as a learning and development assistant during this assignment.

It helped with:

- Planning the Assignment 3 features.
- Adding the GitHub API integration.
- Creating repository sorting logic.
- Adding loading and error handling.
- Maintaining the project filter.
- Improving form validation and user feedback.
- Adding CSS styles for the GitHub section.
- Updating the technical documentation and README.
- Explaining GitHub Pages deployment and testing.

All AI-generated suggestions were reviewed, edited, and tested. I adapted the code to my existing portfolio and made sure I understood how the HTML, CSS, JavaScript, and API integration worked.

Detailed information is available in:

- [`docs/ai-usage-report.md`](docs/ai-usage-report.md)
- [`docs/technical-documentation.md`](docs/technical-documentation.md)

## Live Website

The website is deployed using GitHub Pages:

https://rimas449.github.io/202337410-rimasbinotay-assignment3/

## Repository

The source code is available on GitHub:

https://github.com/Rimas449/202337410-rimasbinotay-assignment3

## Author

Rimas Binotay

Student ID: 202337410


