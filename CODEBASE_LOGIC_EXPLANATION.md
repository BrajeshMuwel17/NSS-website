# NSS Website Codebase - Logical Architecture Explanation

## Overview
This is a full-stack web application for the NSS (National Service Scheme) IIT Guwahati website. It consists of:
- **Frontend**: React.js application (`newnss/` folder)
- **Backend**: Node.js/Express server (`server/` folder)
- **Database**: MongoDB with Mongoose ODM

---

## 1. Application Architecture

### Frontend Architecture (React)

#### Entry Point Flow
```
index.js → App.js → Router → Components
```

1. **`index.js`**: Renders the root React component
2. **`App.js`**: Main application component that:
   - Sets up React Router for navigation
   - Fetches initial data (members and posts) from the backend API
   - Defines all application routes

#### Routing Structure
The app uses React Router with the following routes:
- `/` → `NavBar` component (main landing page with all sections)
- `/login` → `Login` component (authentication)
- `/post` → `Post` component (admin: create posts)
- `/member` → `Member` component (admin: add team members)
- `/welcome` → `Welcome` component (admin dashboard)

---

## 2. Data Flow Architecture

### Backend to Frontend Flow

```
Database (MongoDB) 
    ↓
Mongoose Models (Post, Member)
    ↓
Express Routes (postroutes.js, memberroutes.js)
    ↓
REST API Endpoints (GET /posts, GET /members, POST /posts, POST /members)
    ↓
Frontend Axios Calls (in App.js useEffect)
    ↓
React State (members, posts arrays)
    ↓
Props passed to child components
    ↓
UI Rendering
```

### Example: Loading Posts
1. **App.js** (lines 23-28): On component mount, makes GET request to `https://nss-website.onrender.com/posts`
2. **Server** (`server/postroutes.js`, lines 15-22): Handles GET request, queries MongoDB via Mongoose
3. **Response**: Returns JSON array of all posts
4. **State Update**: Sets `posts` state in App.js
5. **Prop Passing**: `posts` passed to `NavBar` component, then to `Activities` component
6. **Display**: `ActivityCard` component renders each post in cards with pagination

---

## 3. Backend Logic (Server-Side)

### Server Setup (`server/index.js`)

**Key Components:**
- **Express App**: Main server application
- **MongoDB Connection**: Uses Mongoose to connect to MongoDB (lines 27-47)
- **CORS**: Enabled for cross-origin requests (line 25)
- **Route Mounting**: 
  - `/posts` → postRoutes
  - `/members` → memberRoutes

**Database Connection:**
```javascript
mongoose.connect(MONGODB_URI, { dbName: DB_NAME })
```
Connects to MongoDB using connection string from environment variables.

### API Routes

#### Posts API (`server/postroutes.js`)

**GET `/posts`** (lines 15-22):
- Fetches all posts from database
- Returns JSON array of post objects

**POST `/posts`** (lines 25-46):
- Handles multipart/form-data (for image uploads)
- Uses Multer middleware to handle file uploads
- Creates new Post document with:
  - title, content, hashtag, date
  - instalink, twitterlink
- Uploads image to Cloudinary (cloud image hosting)
- Updates post with Cloudinary image URL
- Returns created post

**Image Upload Flow:**
```
Client sends FormData with file
    ↓
Multer saves file temporarily to 'uploads/' folder
    ↓
Cloudinary uploads file to cloud storage
    ↓
Cloudinary returns secure URL
    ↓
URL saved to MongoDB post document
```

#### Members API (`server/memberroutes.js`)

**GET `/members`** (lines 16-23):
- Fetches all team members
- Returns JSON array

**POST `/members`** (lines 26-45):
- Similar to posts, handles member creation
- Fields: name, designation, website hyperlink
- Profile picture uploaded to Cloudinary

### Database Models

#### Post Model (`server/postmodel.js`)
```javascript
Schema fields:
- title: String (required)
- content: String
- hashtag: String (categories: Cleanliness, Donations, Teaching, Welfare, Awareness)
- date: Date (default: current date)
- instalink: String (Instagram link)
- twitterlink: String (Twitter link)
- imagelink: String (Cloudinary URL)
```

#### Member Model (`server/membermodel.js`)
```javascript
Schema fields:
- name: String (required)
- imagelink: String (profile picture URL)
- designation: String (role/position)
- hyperlink: String (personal website/social link)
```

---

## 4. Frontend Component Logic

### Main Components Hierarchy

```
App
└── NavBar (for route "/")
    ├── ResponsiveAppBar (Navigation bar)
    ├── Objective (Objectives section)
    ├── Activities (posts={posts})
    │   └── ActivityCard (displays filtered posts)
    ├── About (About NSS section)
    ├── Profile (members={members})
    │   └── TeamMember (displays each member card)
    ├── VolunteerList
    └── Footer
```

### Key Component Logic

#### NavBar Component (`components/navbar.js`)

**Responsive Navigation:**
- Transparent header that becomes opaque on scroll (lines 43-60)
- Smooth scroll navigation to page sections
- Mobile-responsive drawer menu

**Main Landing Page:**
- Hero section with banner image and call-to-action
- Renders all main sections sequentially:
  - Objective
  - Activities (with posts)
  - About
  - Profile (with members)
  - VolunteerList
  - Footer

#### Activities Component (`components/activities.js`)

**Filtering Logic:**
- Tabs for filtering posts by hashtag: All, Cleanliness, Donations, Teaching, Welfare, Awareness
- Uses `filter()` method to show posts matching selected hashtag (lines 25-32)
- Responsive: dropdown on mobile, tabs on desktop

**State Management:**
- `activeTab`: Tracks currently selected filter
- `isDropdown`: Boolean for mobile/desktop view toggle

#### ActivityCard Component (`components/ActivityCard.js`)

**Post Display:**
- Material-UI Card component for styling
- **Pagination**: Shows 5 posts per page (lines 206-241)
- **Content Expansion**: Shows truncated content (first 200 chars) with "Show More" button
- **Social Links**: Instagram and Twitter icons linking to post's social media
- **Metadata Display**: Hashtag badge and formatted date

**Pagination Logic:**
```javascript
const postsPerPage = 5;
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
```

#### Login Component (`components/LoginPage.js`)

**Authentication Logic:**
- Simple credential check (hardcoded - lines 31-33):
  - Email: `aryan.arya@iitg.ac.in`
  - Password: `nss`
- Stores credentials in `localStorage`
- Redirects to `/welcome` on successful login

**Security Note:** This is a basic authentication. In production, this should use proper session management, JWT tokens, or OAuth.

#### Welcome Component (`components/Welcome.js`)

**Admin Dashboard:**
- Central hub after login
- Three actions:
  - "Add Members" → Navigate to `/member`
  - "Create a Post" → Navigate to `/post`
  - "Logout" → Clear localStorage, redirect to `/`

**Access Control:**
- Checks localStorage for email/password (line 41)
- Only renders if credentials match

#### Post Component (`components/Post.js`)

**Post Creation Form:**
- Form fields: title, content, hashtag (dropdown), date, Instagram link, Twitter link, image upload
- **File Upload**: Uses native file input, stores in state as FileList
- **FormData**: Creates multipart/form-data for image + text fields
- **API Call**: POST request to `/posts` endpoint
- **Redirect**: Navigates to home page after successful creation

**Access Control:** Same as Welcome - checks localStorage credentials

#### Member Component (`components/Member.js`)

**Member Creation Form:**
- Fields: name, designation, website link, profile picture
- Similar file upload logic as Post component
- POST request to `/members` endpoint
- Redirects after successful creation

---

## 5. State Management

### React State Flow

**Global State (App.js):**
- `members`: Array of all team members
- `posts`: Array of all activity posts
- Both fetched once on component mount via `useEffect`
- Passed down as props to child components

**Local Component State:**
- Each component manages its own local state (filters, form inputs, UI toggles)
- Examples:
  - `Activities`: `activeTab`, `isDropdown`
  - `ActivityCard`: `currentPage`, `expanded`
  - `Post/Member`: Form input states

**Persistence:**
- Authentication credentials stored in `localStorage`
- No global state management library (Redux/Context) used - prop drilling pattern

---

## 6. Key Features Logic

### 1. Image Upload System

**Process:**
1. User selects image file in form
2. File stored in React state
3. On form submit, file included in FormData
4. Multer middleware saves file to `server/uploads/` temporarily
5. Cloudinary uploads file to cloud storage
6. Cloudinary returns secure URL
7. URL saved to MongoDB document
8. Temporary file can be deleted (currently not implemented)

### 2. Post Filtering

**Implementation:**
- Posts have `hashtag` field (category)
- Activities component filters array based on selected tab
- Uses JavaScript `filter()` method:
```javascript
posts.filter((post) => post.hashtag === "Cleanliness")
```

### 3. Pagination

**Logic:**
- Client-side pagination in ActivityCard component
- Calculates start/end indices based on current page
- Uses `slice()` to get subset of posts
- Material-UI Pagination component for controls

### 4. Responsive Design

**Breakpoints:**
- Mobile: < 768px (dropdown menu, stacked layouts)
- Desktop: ≥ 768px (horizontal tabs, side-by-side layouts)
- Uses Material-UI breakpoints and CSS media queries

---

## 7. API Endpoints Summary

| Method | Endpoint | Purpose | Auth Required |
|--------|----------|---------|---------------|
| GET | `/posts` | Fetch all posts | No |
| POST | `/posts` | Create new post | Yes (implied) |
| GET | `/members` | Fetch all members | No |
| POST | `/members` | Add new member | Yes (implied) |

**Note:** Backend doesn't have explicit authentication middleware - it relies on frontend routing protection.

---

## 8. Data Flow Example: Creating a Post

```
1. Admin logs in → Welcome page
2. Clicks "Create a Post" → /post route
3. Fills form (title, content, hashtag, date, links, image)
4. Clicks "Post" button
5. handleSubmit() creates FormData object
6. Axios POST to https://nss-website.onrender.com/posts
7. Server receives request
8. Multer saves file to uploads/
9. Post document created in MongoDB
10. Cloudinary uploads image
11. Post document updated with image URL
12. Response sent back to client
13. Frontend navigates to home page
14. App.js refetches posts (or should be refetched)
15. New post appears in Activities section
```

---

## 9. Security Considerations

**Current Implementation:**
- ✅ CORS enabled
- ⚠️ Basic authentication (hardcoded credentials)
- ⚠️ Credentials stored in localStorage
- ⚠️ No server-side authentication middleware
- ⚠️ No input validation/sanitization
- ⚠️ Cloudinary credentials hardcoded (should be in env variables)

**Recommendations for Production:**
- Implement JWT tokens or session-based auth
- Add server-side authentication middleware
- Input validation and sanitization
- Rate limiting
- Environment variables for sensitive data
- HTTPS enforcement

---

## 10. Key Dependencies

**Frontend:**
- `react`, `react-dom`: UI framework
- `react-router-dom`: Routing
- `axios`: HTTP client
- `@mui/material`: UI components
- `react-scroll`: Smooth scrolling

**Backend:**
- `express`: Web server framework
- `mongoose`: MongoDB ODM
- `multer`: File upload handling
- `cloudinary`: Image hosting
- `cors`: Cross-origin resource sharing

---

## 11. File Structure Logic

```
newnss/
├── src/
│   ├── App.js              # Main app, routing, data fetching
│   ├── components/         # Reusable UI components
│   │   ├── navbar.js      # Main landing page + navigation
│   │   ├── activities.js  # Post filtering and display
│   │   ├── ActivityCard.js # Individual post cards + pagination
│   │   ├── Profile.js     # Team members display
│   │   ├── LoginPage.js   # Authentication
│   │   ├── Welcome.js     # Admin dashboard
│   │   ├── Post.js        # Post creation form
│   │   └── Member.js      # Member addition form
│   └── images/            # Static assets

server/
├── index.js              # Server setup, DB connection, route mounting
├── postroutes.js         # POST/GET endpoints for posts
├── memberroutes.js       # POST/GET endpoints for members
├── postmodel.js          # Post Mongoose schema
├── membermodel.js        # Member Mongoose schema
└── uploads/              # Temporary file storage (before Cloudinary)
```

---

## Summary

The application follows a **standard MERN stack architecture**:
- **MongoDB**: Database
- **Express**: Backend API
- **React**: Frontend UI
- **Node.js**: Runtime

The logic flow is straightforward:
1. Backend provides RESTful API for CRUD operations
2. Frontend fetches data on load and displays it
3. Admin can create new content through protected routes
4. Images are handled via Cloudinary cloud storage
5. Simple authentication controls admin access

The codebase uses modern React patterns (hooks, functional components) and follows a component-based architecture with clear separation between presentation and data fetching layers.

