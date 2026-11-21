# AI Usage Report

## 1. AI Tool Used

For this assignment, I used ChatGPT as a coding assistant, learning partner, and documentation helper.

I used ChatGPT to:

- Understand the Assignment 3 requirements.
- Plan the new features before making changes.
- Add the GitHub API integration.
- Load public GitHub repositories dynamically.
- Add repository sorting by name, stars, and update date.
- Add loading and error messages for the API request.
- Maintain the existing project filtering feature.
- Improve the contact-form validation and feedback.
- Add CSS styling for the GitHub repository section.
- Add lazy loading to project images.
- Update the technical documentation and README.
- Receive guidance while uploading files and deploying the website with GitHub Pages.

## 2. Features Added with AI Assistance

### GitHub API Integration

ChatGPT helped me connect the portfolio website to the GitHub API.

The website requests public repositories from:

```text
https://api.github.com/users/Rimas449/repos?per_page=100
```

The repositories are loaded using JavaScript `fetch()` and `async/await`.

Each repository is displayed dynamically with:

- Repository name.
- Repository description.
- Number of stars.
- Number of forks.
- A link to the repository.

### Repository Sorting

A sorting dropdown was added to the GitHub section.

Users can sort repositories by:

- Recently updated.
- Name.
- Number of stars.

The sorting option updates the displayed repository cards without refreshing the page.

### Loading and Error Handling

The website displays a loading message while the GitHub API request is processing.

If the request fails, the website displays an error message instead of leaving the section empty.

The repository list is also cleared if the API request cannot be completed.

### Dynamic Project Filtering

The existing project filter was kept and improved.

The filter buttons are:

- All.
- Web.
- API.

JavaScript checks the `data-category` value of each project card and hides projects that do not match the selected category.

An empty-state message is shown if no projects match the selected filter.

### Dark and Light Theme

The original theme toggle was kept in the project.

The selected theme is stored using browser `localStorage`. This allows the website to remember the selected theme after the page is refreshed.

### Contact Form Validation

The contact form checks whether the name, email, and message fields are completed.

The form:

- Displays an error message when a field is empty.
- Displays a success message when the form is completed correctly.
- Prevents the page from refreshing during submission.
- Resets the form after a successful submission.

### Performance Improvements

The project images use lazy loading with the `loading="lazy"` attribute.

The website also avoids external frameworks and keeps the JavaScript file at the end of the HTML body.

## 3. Usage Log

| AI Tool | Date | Purpose | Files or Features Affected |
|---|---|---|---|
| ChatGPT | November 2026 | Reviewed Assignment 3 requirements and planned the implementation | Project plan |
| ChatGPT | November 2026 | Added GitHub API fetching and repository cards | `index.html`, `js/script.js` |
| ChatGPT | November 2026 | Added repository sorting by name, stars, and update date | `index.html`, `js/script.js` |
| ChatGPT | November 2026 | Added loading and error handling | `index.html`, `js/script.js` |
| ChatGPT | November 2026 | Updated styling for the GitHub section and sorting controls | `css/styles.css` |
| ChatGPT | November 2026 | Reviewed filtering, theme toggle, and contact-form features | `js/script.js` |
| ChatGPT | November 2026 | Updated project documentation | `README.md`, `docs/technical-documentation.md`, `docs/ai-usage-report.md` |
| ChatGPT | November 2026 | Explained GitHub upload and GitHub Pages deployment steps | Repository setup |

## 4. Benefits of Using AI

AI assistance provided several benefits:

- It helped me understand the Assignment 3 requirements.
- It provided examples of using `fetch()` and `async/await`.
- It helped me understand how to retrieve and display API data.
- It helped me understand how to sort an array of repositories.
- It helped me add loading and error states.
- It helped me improve the existing project filter.
- It helped me understand how `localStorage` keeps the selected theme.
- It helped me organize the project documentation.
- It helped me troubleshoot the GitHub repository and GitHub Pages setup.

## 5. Challenges and Manual Improvements

The AI-generated suggestions were reviewed before being used.

I made several manual decisions and improvements:

- I kept the existing portfolio design instead of rebuilding the entire website.
- I used my own GitHub username in the API request.
- I selected the sorting options used in the GitHub section.
- I decided how repository information should appear on each card.
- I kept the project filter simple and suitable for the assignment.
- I checked that the GitHub section and Contact section were separate.
- I checked that file paths matched the project folder structure.
- I tested the website using GitHub Pages.
- I tested the theme toggle, project filters, contact form, API loading, and repository sorting.
- I removed unnecessary or overly complicated suggestions.
- I edited the documentation so it describes my actual project.

## 6. Learning Outcomes

Through this assignment, I learned:

- How to use `fetch()` to request data from an external API.
- How to use `async` and `await` with JavaScript requests.
- How to check whether an API response was successful.
- How to display API data by creating HTML elements with JavaScript.
- How to use `textContent` when displaying external data.
- How to sort arrays using JavaScript.
- How to sort text using `localeCompare()`.
- How to sort repositories using stars and update dates.
- How to display loading and error messages.
- How to manage application state using variables and `localStorage`.
- How to use JavaScript event listeners.
- How to use `data-*` attributes for project filtering.
- How to show and hide elements using the `hidden` property.
- How to validate form input before accepting a submission.
- How to use `event.preventDefault()` to stop a form from refreshing.
- How lazy loading can improve page performance.
- How to deploy a static website using GitHub Pages.

## 7. Responsible Use of AI

I used ChatGPT as a support tool and learning assistant rather than submitting unmodified AI-generated work.

I worked through the project step by step and reviewed the suggested code before using it. I adapted the code to my existing portfolio, used my own GitHub username, selected the repository sorting options, and tested the features myself.

I also asked for explanations when I did not understand a step. This helped me understand how the HTML, CSS, JavaScript, and GitHub API work together.

The final project was reviewed, edited, tested, and adapted to meet the assignment requirements.

## 8. Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

