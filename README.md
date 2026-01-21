# To-Do-List-Code-Refactor-and-Performance-Optimization

COMPANY : CODTECH IT SOLUTIONS

NAME : LOKESH AMOL PATIL

INTERN ID : CTIS3438

DOMAIN : SOFTWARE DEVELOPMENT

DURATION : 8 WEEKS

MENTOR : NEELA SANTOSH

##
This project is a basic To-Do List web application that was developed with the main intention of understanding how front-end web technologies work together in a real project and how code quality can be improved through refactoring and performance optimization. As an absolute beginner, I initially wrote the application using simple HTML, CSS, and JavaScript, focusing only on making the application work. After the basic functionality was completed, the next step was to refactor the code to improve readability, structure, and performance without changing the final output of the application. Refactoring helped me understand how professional-style code is written and maintained.

The project uses three main technologies: HTML, CSS, and JavaScript. HTML is used to create the basic structure of the application, such as the title, input area, buttons, and task list container. Semantic HTML elements like header, main, and section were used during refactoring to make the structure more meaningful and easier to understand. This also improves accessibility and helps browsers and developers understand the purpose of different parts of the page. CSS is used to style the application, including layout, colors, spacing, and hover effects. During optimization, unnecessary and repeated styles were removed, and related styles were grouped together. This made the stylesheet shorter, cleaner, and easier to modify in the future.

JavaScript is the core part of the application and is responsible for handling user interactions such as adding tasks, marking tasks as completed, and deleting tasks. Initially, the JavaScript code was functional but not well organized. During refactoring, variable names and function names were improved so that their purpose could be understood easily. For example, instead of unclear names, descriptive names were used for functions that add tasks, load tasks, or remove tasks. Event handling was optimized by using event delegation, which allows handling multiple button actions using a single event listener. This approach reduces memory usage and improves performance, especially when the list grows.

Local storage was used to store the tasks so that data is not lost when the page is refreshed. This helped me understand how browsers can store data on the client side without using a database. The code was refactored to ensure that data is stored and retrieved efficiently by using reusable functions. Input validation was also added using simple logic to prevent empty tasks from being added, which improves the overall user experience.

Performance optimization in this project mainly focuses on reducing unnecessary operations and improving code execution flow. DOM elements were selected once and reused instead of selecting them repeatedly. Inline logic was avoided, and separate functions were created for specific tasks, which makes the code easier to debug and maintain. These changes do not drastically change performance for a small project but reflect good programming practices that are important for larger applications.

The tools used in this project include Visual Studio Code as the code editor, which helped with syntax highlighting and file organization. Font Awesome was used for icons, and browser developer tools were used to test functionality and debug errors. No external frameworks were used, which helped in understanding pure JavaScript and core web concepts clearly.

Overall, this project helped me understand how refactoring improves code quality and how performance optimization is not only about speed but also about writing clean, structured, and maintainable code. The final version of the project produces the same output as the initial version but with better readability, improved structure, and optimized logic, making it suitable for learning purposes and academic submission.

##REPORT 
A REPORT ON CHANGES MADE AND THEIR IMPACT ON PERFORMANCE
1. Introduction

This project is a simple To-Do List web application developed using HTML, CSS, and JavaScript. The main objective of refactoring was to improve code readability, maintainability, and overall performance while keeping the functionality intact.

2. Changes Made in HTML

Used semantic HTML elements like <header>, <main>, and <section>

Replaced unnecessary class selectors with IDs for faster DOM access

Improved accessibility using aria-label

Impact:

Better readability and structure

Improved accessibility

Faster DOM selection and cleaner markup

3. Changes Made in JavaScript

Used meaningful variable and function names

Removed repetitive DOM queries

Implemented event delegation efficiently

Optimized localStorage handling

Used trim() to avoid empty task submission

Impact:

Faster execution and reduced memory usage

Easier debugging and maintenance

Cleaner logic flow and improved performance

4. Changes Made in CSS

Organized CSS into sections

Removed duplicate and unnecessary styles

Used consistent naming conventions

Improved hover and visual effects

Impact:

Faster CSS rendering

Easier styling updates

Improved UI consistency

5. Conclusion

The refactoring process significantly enhanced the code quality without changing the core functionality. The application is now more readable, efficient, and maintainable. These improvements make the project suitable for academic submission and internship evaluation.

##OUTPUT
