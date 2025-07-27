# Course Crafter Client

Course Crafter Client is the frontend application for the Course Crafter platform—a dynamic solution for creating, managing, and participating in online courses. This repository provides a modern, responsive user interface for learners and instructors to interact with course content, track progress, and collaborate in real-time.

## 🌟 Overview

The client enables seamless course browsing, enrollment, content consumption, and interactive learning experiences. Built with scalability and accessibility in mind, Course Crafter Client ensures intuitive navigation and engaging UI for users of all skill levels.

## 🚀 Tech Stack

- **Frontend Framework:** React.js
- **State Management:** Redux / Context API
- **Styling:** CSS3, Styled Components, Bootstrap / Material UI, Tailwind CSS, DaisyUI
- **API Integration:** Axios / Fetch API
- **Other:** Responsive design, form validation, notifications, charting (chart.js)

## 🛠️ Features

- Browse, search, and filter available courses
- User registration and authentication
- Enroll in courses and track learning progress
- Interactive course content and quizzes
- Instructor dashboard for course management
- Real-time notifications and announcements
- Accessible and mobile-friendly interface

---

## Setup Instructions

1. **Clone the project**

    ```bash
    git clone https://github.com/vikas809028/Course-Crafter-Client.git
    ```

2. **Move into the directory**

    ```bash
    cd Course-Crafter-Client
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Run the development server**

    ```bash
    npm run dev
    ```

---

### Tailwind CSS Setup

Refer to the [Tailwind CSS official docs](https://tailwindcss.com/docs/installation) for more details.

1. **Install Tailwind CSS and dependencies**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

2. **Create Tailwind config file**

    ```bash
    npx tailwindcss init
    ```

3. **Add file extensions to the `content` property in `tailwind.config.js`**

    ```js
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./index.html"
    ],
    ```

4. **Add Tailwind directives at the top of your `index.css` file**

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. **Add plugins to the `plugins` property in `tailwind.config.js`**

    ```js
    plugins: [
      require("daisyui"),
      require("@tailwindcss/line-clamp")
    ],
    ```

---

### Adding Plugins and Dependencies

```bash
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

---

### Configure Auto Import Sort with ESLint

1. **Install the plugin**

    ```bash
    npm i -D eslint-plugin-simple-import-sort
    ```

2. **Add the rule in `.eslint.cjs`**

    ```js
    rules: {
      'simple-import-sort/imports': 'error',
      // other rules...
    }
    ```

3. **Add `simple-import-sort` to the plugins in `.eslint.cjs`**

    ```js
    plugins: [
      // other plugins...
      'simple-import-sort'
    ]
    ```

4. **Enable auto import sort on file save in VSCode**

    - Open `settings.json`
    - Add the following config:

    ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
    ```

---

## 📌 Usage

- Sign up or log in to your account.
- Browse and enroll in courses.
- Track your progress and participate in interactive lessons.
- Instructors can create and manage course content.

## 🤝 Contributing

Contributions and suggestions are welcome! Please open issues or submit pull requests.

## 📄 License

Distributed under the [MIT License](LICENSE).

## 📬 Contact

- Email: vikas809028@gmail.com
- Website: [vikastiwari.dev](https://vikastiwari.dev)
- Twitter:
