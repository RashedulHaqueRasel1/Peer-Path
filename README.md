# PeerPath

A comprehensive alumni and student management platform built with Next.js, featuring an advanced admin dashboard, e-commerce functionality, and interactive service configurators.

## Features

### 🎓 User Management

- **Multi-role System**: Support for Admin, Student, and Alumni roles
- **Authentication**: Secure login and registration system
- **Profile Management**: Comprehensive user profile with customizable settings

### 👨‍💼 Admin Dashboard

- **Overview Dashboard**: Real-time metrics and analytics
  - Total users, active courses, and reviews tracking
  - Platform growth visualization with grouped bar charts
  - Recent users and pending moderation sections
- **User Management**: Full CRUD operations for users with role and status management
- **Alumni Management**: Dedicated section for alumni profiles with department and batch tracking
- **Student Management**: Student profiles with department-specific categorization
- **Moderation System**: Approval workflow for pending registrations
- **Settings**: Admin profile and password management

### 🛒 E-commerce Features

- **Shopping Cart**: Add, remove, and manage cart items
- **Checkout System**: Two-step checkout process with order creation and payment
- **Payment Integration**: Integrated payment gateway support
- **Product Search**: Modal-based search functionality with real-time filtering

### 🔧 Service Configurators

- **Bending Service**: Interactive product configurator with:
  - Shape selection and customization
  - Dynamic dimension inputs
  - Real-time visualization with SVG rendering
  - Degree and size specifications
  - Direct add-to-cart functionality

### 📊 Department Support

- Computer Science & Engineering (CSE)
- Business Administration (BBA)
- Mass Communication & Journalism (MSJ)
- English
- Bangla

## Tech Stack

### Frontend

- **Framework**: [Next.js 16.0.3](https://nextjs.org/) with App Router
- **React**: 19.2.0
- **TypeScript**: Type-safe development
- **Styling**: Tailwind CSS 4 with custom configurations
- **UI Components**:
  - Radix UI primitives
  - Custom component library with shadcn/ui style
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Notifications**: Sonner toast library

### Development Tools

- **Linting**: ESLint with Next.js configuration
- **CSS Processing**: PostCSS with Tailwind
- **Animations**: tw-animate-css

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RashedulHaqueRasel1/Peer-Path.git
cd peer-path
```

2. Install dependencies:

```bash
npm install

```

3. Run the development server:

```bash
npm run dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Project Structure

```
peer-path/
├── app/
│   ├── (admin)/          # Admin dashboard routes
│   ├── (allUser)/        # Public and authenticated user routes
│   ├── (auth)/           # Authentication routes
│   ├── (student)/        # Student-specific routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── not-found.tsx     # 404 page
├── components/
│   ├── Admin/            # Admin dashboard components
│   │   └── Dashboard/    # Dashboard-specific components
│   └── ...               # Other shared components
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
└── ...                   # Configuration files
```

## Key Routes

- `/` - Home page
- `/login` - Authentication
- `/admin/dashboard` - Admin dashboard overview
- `/admin/users` - User management
- `/admin/alumni` - Alumni management
- `/admin/moderation` - Pending moderation queue
- `/admin/settings` - Admin settings
- `/cart` - Shopping cart
- `/bending` - Bending service configurator

## Development

### Code Quality

```bash
npm run lint
```

### Type Checking

TypeScript is configured for strict type checking across the entire application.

## Contributing

1. Create a feature branch
2. Make your changes
3. Ensure all TypeScript errors are resolved
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.

## Support

For questions and support, please contact the development team.


## 🧑‍💻 Author

**Rashedul Haque Rasel**

📧 Email: [rashedulhaquerasel1@gmail.com](mailto:rashedulhaquerasel1@gmail.com)

🌐 Portfolio: [https://rashedul-haque-rasel.vercel.app](https://rashedul-haque-rasel.vercel.app)

💼 LinkedIn: [https://www.linkedin.com/in/rashedul-haque-rasel](https://www.linkedin.com/in/rashedul-haque-rasel)

