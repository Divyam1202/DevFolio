# DevFolio

A full-stack Learning Management System (LMS) and Portfolio Management Platform built with modern web technologies.

## Overview

DevFolio is a comprehensive platform designed for educators and students to manage courses, create portfolios, conduct quizzes, and handle student support through complaint systems. The platform combines course management, portfolio showcasing, and interactive learning features.

## Features

### Core Features
- 👥 **User Management** - Multi-role support (Admin, Instructor, Student)
- 📚 **Course Management** - Create, manage, and enroll in courses
- 🎯 **Quiz System** - Interactive quizzes and assessments
- 🎨 **Portfolio Builder** - Showcase student work and projects
- 💬 **Complaint System** - Student support and issue tracking
- 🔐 **Authentication** - Secure user authentication and authorization
- ☁️ **Cloud Storage** - Cloudinary integration for media management

### Tech Stack

#### Frontend
- **Framework:** Next.js 14
- **UI Components:** Radix UI
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form
- **API Client:** Axios
- **State Management:** TanStack React Query

#### Backend
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** Clerk
- **File Upload:** Cloudinary
- **Password Reset:** Email-based recovery

## Project Structure

```
DevFolio/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router and pages
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and API client
│   └── types/              # TypeScript type definitions
│
├── backend/                 # Express.js backend API
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Express middleware
│   │   ├── services/       # Business logic
│   │   ├── config/         # Configuration files
│   │   └── scripts/        # Utility scripts
│   └── dist/               # Compiled JavaScript
│
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB instance (local or cloud)
- Cloudinary account for image storage
- Clerk account for authentication

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Divyam1202/DevFolio.git
cd DevFolio
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

### Environment Setup

Create `.env.local` files in both backend and frontend directories:

**Backend `.env`:**
```
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLERK_API_KEY=your_clerk_api_key
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
JWT_SECRET=your_jwt_secret
PORT=5000
```

**Frontend `.env.local`:**
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Development

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:5000`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:3000`

### Building for Production

**Backend:**
```bash
cd backend
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run start
```

## Available Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production server
- `npm run create-admin` - Create admin user

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course (Instructor)
- `GET /api/courses/:id` - Get course details
- `POST /api/courses/:id/enroll` - Enroll in course

### Quizzes
- `GET /api/quizzes` - Get all quizzes
- `POST /api/quizzes` - Create quiz
- `POST /api/quizzes/:id/submit` - Submit quiz answers

### Portfolio
- `GET /api/portfolio` - Get user portfolio
- `POST /api/portfolio` - Create portfolio entry
- `PUT /api/portfolio/:id` - Update portfolio entry

### Complaints
- `GET /api/complaints` - Get complaints
- `POST /api/complaints` - File new complaint
- `PUT /api/complaints/:id` - Update complaint status

## Database Models

- **User** - User accounts with roles and profiles
- **Course** - Course information and metadata
- **Quiz** - Quiz questions and configurations
- **Portfolio** - Student portfolio projects
- **Complaints** - Student support tickets

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Troubleshooting

### Backend won't start
- Check MongoDB connection string
- Ensure all environment variables are set
- Run `npm install` to install dependencies

### Frontend build fails
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules`: `rm -rf node_modules`
- Reinstall: `npm install`
- Rebuild: `npm run build`

### API connection errors
- Ensure backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` environment variable
- Verify CORS settings in backend

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the development team.

## Authors

- **Divyam Chandak** - [@Divyam1202](https://github.com/Divyam1202)

## Acknowledgments

- Next.js and React communities
- Express.js framework
- Radix UI components
- Tailwind CSS
- MongoDB and Mongoose
