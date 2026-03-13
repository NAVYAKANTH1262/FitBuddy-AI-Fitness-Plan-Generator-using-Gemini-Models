# FitBuddy AI — Your Smart Fitness Planner 💪

An AI-powered fitness planning web application built with **FastAPI** and **Google Gemini AI**. FitBuddy helps users generate personalized workout plans and nutrition tips based on their fitness goals such as **weight loss, muscle gain, or general wellness**.

The system analyzes user details like **age, weight, fitness goal, and workout intensity** to generate a customized **7-day workout plan** and provide helpful **nutrition or recovery tips**.

---

## ✨ Features

- 🏋️ **Personalized Workout Plans** — AI generates a structured **7-day workout routine** tailored to the user's fitness goal
- 🤖 **AI-Powered Plan Updates** — Users can submit feedback to refine and regenerate workout plans
- 🥗 **Nutrition & Recovery Tips** — Get AI-generated suggestions aligned with your fitness goals
- 📊 **Admin Dashboard** — Coaches or admins can monitor users and their workout plans
- 💾 **User Data Storage** — SQLite database stores user details and generated plans
- 🌐 **Interactive Web Interface** — Simple and user-friendly interface to interact with the system
- ⚡ **Fast API Backend** — High-performance backend built using FastAPI

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Backend | FastAPI (Python) |
| AI | Google Gemini AI |
| Frontend | HTML, CSS, JavaScript |
| Database | SQLite |
| API Testing | FastAPI Swagger Docs |

---

## 📁 Project Structure

```
FitBuddy-AI-Fitness-Planner/
│
├── app.py                 # Main FastAPI application
├── database.db            # SQLite database
├── models.py              # Database models
├── requirements.txt       # Project dependencies
│
├── templates/             # HTML templates
│   ├── index.html
│   ├── workout_plan.html
│   ├── feedback.html
│   └── admin_dashboard.html
│
├── static/                # Static assets
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NAVYAKANTH1262/FitBuddy-AI-Fitness-Plan-Generator-using-Gemini-Models.git
cd FitBuddy-AI-Fitness-Planner
```

---

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it:

**Windows**
```bash
venv\Scripts\activate
```

**Mac/Linux**
```bash
source venv/bin/activate
```

---

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Set up environment variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

> Get your API key from **Google AI Studio**

---

### 5. Run the application

```bash
uvicorn app:app --reload
```

Open your browser:

```
http://127.0.0.1:8000
```

API documentation is available at:

```
http://127.0.0.1:8000/docs
```

---

## 📖 Usage Scenarios

### 🧑 Scenario 1: Generate a Personalized Workout Plan

A user enters:

- Name  
- Age  
- Weight  
- Fitness Goal (Weight Loss / Muscle Gain / Wellness)  
- Workout Intensity (Low / Medium / High)

The system generates a **customized 7-day workout plan** tailored to the user's fitness level and goals.

---

### 🔄 Scenario 2: Update Plan Using Feedback

Users can submit feedback such as:

- "Add more cardio exercises"
- "Include rest days"
- "Increase strength training"

The AI regenerates a **refined workout plan** based on the feedback.

---

### 🥗 Scenario 3: Nutrition or Recovery Tip

Users can request AI-generated health suggestions based on their goal.

Example:

> “Include protein-rich foods in your post-workout meal to support muscle recovery.”

---

### 👨‍🏫 Scenario 4: Admin / Coach Dashboard

Admins or fitness trainers can:

- View all registered users
- Monitor generated workout plans
- Compare updated and original plans
- Track user engagement

---

## 📦 Requirements

```
fastapi
uvicorn
google-generativeai
python-dotenv
jinja2
sqlite3
python-multipart
```

---

## 🔒 Environment Variables

| Variable | Description |
|--------|-------------|
| `GEMINI_API_KEY` | Google Gemini API Key |

> ⚠️ Do not commit your `.env` file to GitHub.

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Submit a pull request
   ## Demo link
   https://drive.google.com/file/d/1TGZyOoFx0J9g1KQSWevicIYFX7v1bOTR/view?usp=drivesdk
   ---
   ## Documentation Link
   https://docs.google.com/document/d/1yU9UHFc0SvBFDLNcHNfezD-ezj9tthil/edit?usp=drivesdk&ouid=102767940821479669936&rtpof=true&sd=true
   
   

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 👩‍💻 Author


AI & Web Developer  

GitHub: https://github.com/NAVYAKANTH1262

---

<div align="center">
Built with ❤️ using FastAPI & Google Gemini AI
</div>
