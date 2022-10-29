# Welcome to the Fullstack JavaScript Engineer Task!

This **README** file contains the instructions you will need to complete your task.

#### Instructions

- This master branch already contains code which you will use for your task. Please add any new code to a new feature branch. When you’re done with the task, please submit a GitLab merge request to master.

- If you cannot satisfy all the acceptance criteria within the given timeframe, simply prioritize what you feel is important and mention what you have excluded and why in your README file (*README.md*).

- For the parts of the task which you feel are unclear, we encourage you to make your own assumptions as long as they are documented in your README file  (*widget/README.md*). However, if you have a question or concern that is blocking you from completing the work, please reach out to us via email.

Two weeks after your task start date, a Hotjar engineer will review your merge request and you will receive an email within 48 hours notifying you of the next steps. 

---

#### Why are we doing this?

At Hotjar we run a lot of experiments. Whenever we introduce any change to the website experience, we'd like to be able to make a data driven decision and understand which experience generated more signups, so in other words - increased the conversion rate. How does it work in practice? We prepare two different versions of the UI - we call them control (the current version of the UI) and variant1 (the version with the UI changes we believe will increase our conversion rate).

Your task is to build a web application which will mimic hotjar.com and its experimentation capabilities. We would like to test if people will be more willing to sign up if we show them the yearly prices of our product's plans. They come with the 20% discount and we hope that price clarity and the discount would encourage them to sign up.

You can find the detailed acceptance criteria below.

You are allowed to use:
- Node,
- Express.js
- HTML,
- CSS,
- JavaScript

#### Design Prototype

[Design link](https://www.figma.com/file/fDbzbXei9zQFFiPpEU8THZ/Fullstack-JavaScript-Engineer-task-design-files?node-id=0%3A1)

#### Acceptance Criteria


Using **Express.js** implement the web application which will:

- Detect directories in **pages** directory and serve its contents as separate URLs (so `blog/index.html` should be available under `/blog` ). Assume that the number of pages might change over time. The index files contain rudimentary HTML and that's alright. 
- Using the design link provided, implement two different variants of the pricing page - `variant1.html` and `control.html`. The buttons and the links do not have to work. 
- When `variant1.html` and `control.html` files are detected in the directory, the app should rotate between those two and show different experiences for different people with a 50%/50% split. Meaning, on average 50% of people should see `control.html` and 50% should see `variant1.html`. The URL should still be `/pricing` though.
- The assignment must be consistent per user. So, when they see variant1.html and do a page refresh, they’ll see the same page over and over again.
- Sometimes, for development or debugging purposes one might want to see selected variation on demand. Build a mechanism that will enable the person to force the variation they see.
- The app needs to be Dockerized for ease of deployment. The application should start (the port selection is up to you) after typing `docker run` in the parent directory. Then it must be available to access from a local machine.


#### Important Notes

- The designs provided show the intended experience/visuals for the website itself - the rest is up to you.
- You should not use any third-party libraries that end up in the output bundle.
    - It means you cannot use any rendering library or frameworks like React, Vue or any other - you need to do this task in Vanilla JavaScript, HTML and CSS.
    - You're still allowed to use TypeScript as a compiler or testing libraries like Jest, Cypress etc.
    - You're still allowed to use Express.js as a web framework. You might also use any Express.js middlewares from the [list](https://expressjs.com/en/resources/middleware.html)
- You are welcome to structure your commits in any way you want. Please make sure that the commit history reflects the changes that you have been introducing while working on a task. Please do not squash your commits into just one.
---

### Good luck!