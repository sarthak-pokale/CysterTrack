# CysterCare - PCOS/PCOD Health Management Platform

## Overview

CysterCare is a comprehensive web application designed to help women manage PCOS/PCOD through symptom tracking, period monitoring, and community support. The platform provides evidence-based assessment tools, health tracking features, and educational resources for women's health management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: CSS Custom Properties with dark mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot module replacement via Vite integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Drizzle Kit for database schema management
- **Fallback**: In-memory storage implementation for development

## Key Components

### Database Schema
- **Users**: User profiles with authentication credentials
- **Symptom Assessments**: PCOS risk assessments with scoring
- **Period Entries**: Menstrual cycle tracking with symptoms
- **Forum Posts**: Community discussion platform

### API Structure
- **RESTful Design**: Standard HTTP methods for CRUD operations
- **Validation**: Zod schemas for input validation
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging for API endpoints

### User Interface Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components via Radix UI
- **Form Components**: Reusable form elements with validation
- **Navigation**: Sticky header with mobile menu support

## Data Flow

### Assessment Workflow
1. User completes symptom questionnaire
2. Frontend validates input using Zod schemas
3. Backend calculates risk score and level
4. Results stored in database and displayed to user
5. Local storage maintains session state

### Period Tracking Flow
1. User logs daily period information
2. Calendar interface for date selection
3. Symptom checkboxes and flow intensity
4. Data persisted to PostgreSQL via Drizzle ORM
5. Historical data retrieved for trend analysis

### Forum Interaction
1. Category-based post organization
2. Real-time post creation and retrieval
3. Like and reply tracking
4. Community moderation capabilities

## External Dependencies

### UI and Styling
- **Radix UI**: Headless component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Inter Font**: Typography via Google Fonts

### Development Tools
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

### Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations
- **Express Session**: User session management

## Deployment Strategy

### Development Environment
- **Replit Integration**: Native development environment support
- **Hot Reload**: Vite HMR for instant updates
- **Development Server**: Express with Vite middleware

### Production Build
- **Client Build**: Vite optimization with code splitting
- **Server Bundle**: ESBuild compilation to single file
- **Static Assets**: Served from dist/public directory

### Environment Configuration
- **Database URL**: Environment variable for connection string
- **Session Storage**: PostgreSQL-backed session store
- **Port Configuration**: Configurable via environment

### Scaling Considerations
- **Autoscale Deployment**: Configured for Replit autoscale
- **Database Connection**: Serverless-compatible connection pooling
- **Static Asset Serving**: Optimized for CDN delivery

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```