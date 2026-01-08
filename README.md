# React Tasks - ProfileCard Component

A beautiful React application featuring reusable ProfileCard components with glassmorphism design, smooth animations, and responsive layout.

## 🎨 Features

- ✨ **Reusable ProfileCard Component** - Flexible component accepting props for name, image, description, role, and social links
- 🎭 **Glassmorphism Design** - Modern UI with backdrop blur effects
- 🌈 **Vibrant Gradient Background** - Eye-catching purple-pink gradient
- 🎬 **Smooth Animations** - Hover effects and micro-animations
- 📱 **Fully Responsive** - Works seamlessly on all device sizes
- 🔗 **Social Media Integration** - GitHub, LinkedIn, and Twitter links
- 🌙 **Dark Mode Support** - Automatic dark mode detection

## 🚀 ProfileCard Component Usage

The ProfileCard component is designed to be highly reusable. Here's how to use it:

### Basic Usage

```jsx
import ProfileCard from './components/ProfileCard';

<ProfileCard
  name="John Doe"
  image="path/to/image.jpg"
  description="A brief description about the person"
/>
```

### Advanced Usage with All Props

```jsx
<ProfileCard
  name="Sarah Johnson"
  role="Frontend Developer"
  description="Passionate about creating beautiful and intuitive user interfaces."
  image="https://example.com/profile.jpg"
  social={{
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
  }}
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | Yes | The person's name |
| `image` | string | Yes | URL to the profile image |
| `description` | string | Yes | Brief description or bio |
| `role` | string | No | Job title or role |
| `social` | object | No | Social media links (github, linkedin, twitter) |

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/react-tasks.git
cd react-tasks
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🌐 Deploying to GitHub Pages

### Step 1: Update Configuration

1. Open `package.json` and update the `homepage` field:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/react-tasks"
```

2. Open `vite.config.js` and ensure the `base` path matches your repository name:
```javascript
base: '/react-tasks/'
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `react-tasks`
2. **DO NOT** initialize with README, .gitignore, or license (we already have these)

### Step 3: Initialize Git and Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: ProfileCard component project"

# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/react-tasks.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Install gh-pages and Deploy

```bash
# Install gh-pages package
npm install

# Build and deploy to GitHub Pages
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under "Source", select `gh-pages` branch
4. Click **Save**
5. Your site will be live at `https://YOUR_USERNAME.github.io/react-tasks`

## 🔄 Updating Your Deployed Site

Whenever you make changes and want to update the live site:

```bash
# Stage your changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
react-tasks/
├── src/
│   ├── components/
│   │   ├── ProfileCard.jsx      # Reusable ProfileCard component
│   │   └── ProfileCard.css      # ProfileCard styles
│   ├── App.jsx                  # Main app component with demo
│   ├── App.css                  # App styles
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                    # This file
```

## 🎯 For Your 5 Tasks

Since you mentioned having 5 tasks, you can:

1. **Task 1**: ProfileCard Component ✅ (Already done!)
2. **Task 2**: Create another component (e.g., ServiceCard, ProductCard)
3. **Task 3**: Add form handling or interactivity
4. **Task 4**: Implement routing with React Router
5. **Task 5**: Add state management or API integration

Each new component can follow the same pattern as ProfileCard - create a `.jsx` file and corresponding `.css` file in the `components` folder.

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Modern CSS** - Glassmorphism, animations, gradients
- **Google Fonts** - Inter font family
- **gh-pages** - Deployment to GitHub Pages

## 💡 Tips

- Use high-quality images for better visual appeal
- Customize colors in `ProfileCard.css` to match your brand
- Add more props as needed for your specific use case
- The component is fully responsive out of the box

## 📝 License

MIT License - feel free to use this in your projects!

---

**Made with ❤️ using React + Vite**
