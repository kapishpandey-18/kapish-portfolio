// ============================================================================
// MAIN.JSX - THE ENTRY POINT OF YOUR REACT APPLICATION
// ============================================================================
// This is where React takes control of your HTML and starts rendering components.
// Think of this as the "ignition switch" that starts your React app.

// ============================================================================
// IMPORT 1: React Core Library
// ============================================================================
import React from "react";
//
// WHY: React is the core library that enables JSX syntax and component creation
// WHAT IT DOES:
// - Allows you to write JSX (HTML-like syntax in JavaScript)
// - Provides the React.StrictMode component (development helper)
// - Contains the core React algorithms for rendering and updating UI
//
// WITHOUT THIS: You couldn't write <div> or <Component /> syntax
// JSX like <App /> would throw errors because browser doesn't understand it
//
// EXAMPLE:
// <App /> is JSX that React transforms to: React.createElement(App, null)

// ============================================================================
// IMPORT 2: React DOM - The Bridge Between React and Browser
// ============================================================================
import { createRoot } from "react-dom/client";
//
// WHY: React is platform-agnostic (can render to web, mobile, VR, etc.)
//      ReactDOM is specifically for WEB browsers (DOM = Document Object Model)
//
// WHAT IT DOES:
// - createRoot() creates a "root" point where React will render
// - It takes control of a DOM element (usually <div id="root">)
// - Manages all updates to that part of the page efficiently
//
// THE PROCESS:
// 1. Browser loads HTML with <div id="root"></div>
// 2. createRoot(element) tells React: "This div is yours, take control"
// 3. React replaces/manages everything inside that div
//
// REACT 18 CHANGE:
// Old way: ReactDOM.render(<App />, element)
// New way: createRoot(element).render(<App />)
// New way enables "Concurrent Features" (better performance, smoother UX)

// ============================================================================
// IMPORT 3: React Router - Client-Side Navigation
// ============================================================================
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
//
// WHY: By default, clicking links reloads the entire page
//      BrowserRouter enables Single Page Application (SPA) behavior
//
// WHAT IT DOES:
// - Intercepts link clicks to prevent page reload
// - Updates URL without refreshing page
// - Shows different components based on URL
// - Manages browser history (back/forward buttons work correctly)
//
// HOW IT WORKS:
// User clicks <Link to="/about">
//   → BrowserRouter catches it
//   → Changes URL to /about (no reload!)
//   → React Router shows <About /> component
//   → Page updates instantly (no loading spinner)
//
// WITHOUT THIS:
// - Every navigation would reload entire page (slow!)
// - Lose all React state on navigation
// - No smooth transitions between pages
//
// ALTERNATIVES:
// - <HashRouter> - Uses /#/about in URL (works without server config)
// - <MemoryRouter> - No URL changes (for testing)
// - <BrowserRouter> - Clean URLs /about (requires server config)

// ============================================================================
// IMPORT 4: Your Main App Component
// ============================================================================
import App from "./App.jsx";
//
// WHY: This is YOUR code - the actual application you built
//
// WHAT IT CONTAINS:
// - All your routes (pages)
// - Layout components (Navbar, Footer)
// - Business logic and UI
//
// THE HIERARCHY:
// main.jsx (setup) → App.jsx (routes) → Components (Hero, Projects, etc.)

// ============================================================================
// IMPORT 5: Global Styles
// ============================================================================
import "./index.css";
//
// WHY: Import CSS once at the top level, applies to entire app
//
// WHAT'S IN IT:
// - Tailwind CSS directives (@tailwind base, components, utilities)
// - Global styles (body background, fonts, etc.)
// - Custom CSS classes (card-overlay, etc.)
//
// WHY HERE: Imported before App renders, so styles are ready immediately

// ============================================================================
// THE RENDERING PROCESS - THIS IS WHERE REACT TAKES CONTROL
// ============================================================================

// STEP 1: Find the HTML element React will control
// ----------------------------------------------------------------------------
createRoot(document.getElementById("root"))
  //
  // EXPLANATION:
  // - document.getElementById('root') finds <div id="root"> in index.html
  // - createRoot(element) tells React: "This div is now yours"
  // - React will manage EVERYTHING inside this div
  // - Nothing outside this div is affected by React
  //
  // IN index.html you have:
  // <body>
  //   <div id="root"></div>  ← React takes control of THIS
  //   <script src="/src/main.jsx"></script>
  // </body>

  // STEP 2: Tell React what to render
  // ----------------------------------------------------------------------------
  .render(
    // Everything inside render() is what React will display inside <div id="root">

    // WRAPPER 1: StrictMode (Development Helper)
    // --------------------------------------------------------------------------
    <React.StrictMode>
      {/* 
      WHAT IT DOES:
      - Activates extra checks and warnings (only in development)
      - Helps you write better React code
      - Catches common mistakes early
      - Automatically removed in production build (no performance cost)
      
      CHECKS IT PERFORMS:
      1. Warns about unsafe lifecycle methods
      2. Warns about deprecated APIs
      3. Detects unexpected side effects
      4. Double-invokes some functions to find bugs
      
      WHY YOU NEED IT:
      - Catches bugs before they reach users
      - Prepares your code for future React versions
      - Industry best practice
      
      REMOVES AUTOMATICALLY:
      - When you run `npm run build`, StrictMode is removed
      - No extra code in production
      - No performance impact
    */}

      {/* WRAPPER 2: BrowserRouter (Enables Routing) */}
      {/* ---------------------------------------------------------------------- */}
      <HelmetProvider>
        <BrowserRouter>
          {/*
        WHAT IT DOES:
        - Wraps your app to enable client-side routing
        - Listens to URL changes
        - Provides routing context to all child components
        
        HOW IT WORKS:
        1. User visits "/" → BrowserRouter tells React Router
        2. React Router checks routes in App.jsx
        3. Finds matching route: <Route path="/" element={<Home />} />
        4. Renders <Home /> component
        
        NAVIGATION FLOW:
        User clicks <Link to="/contact">
          ↓
        BrowserRouter intercepts click
          ↓
        Prevents default page reload
          ↓
        Updates URL to /contact
          ↓
        React Router finds matching route
          ↓
        Renders <Contact /> component
          ↓
        UI updates smoothly (no page reload!)
        
        WHY WRAP ENTIRE APP:
        - Every component inside can access routing features
        - <Link>, <Route>, useNavigate() all work
        - Without this wrapper, routing features would fail
      */}

          {/* WRAPPER 3: Container Div with Styling */}
          {/* ---------------------------------------------------------------------- */}
          <div className="min-h-screen text-neutral-100">
            {/*
          WHAT IT DOES:
          - Provides full-height background
          - Sets default text color for entire app
          
          CSS CLASSES EXPLAINED:
          - min-h-screen: Minimum height = viewport height (no short pages)
          - text-neutral-100: Light gray text color (from Tailwind)
          
          WHY HERE:
          - Global container for consistent styling
          - Ensures page fills entire screen
          - Sets baseline text color (children can override)
        */}

            {/* YOUR ACTUAL APPLICATION */}
            {/* ---------------------------------------------------------------------- */}
            <App />
            {/*
          THIS IS YOUR APP!
          
          WHAT HAPPENS HERE:
          1. React renders <App /> component
          2. App.jsx contains:
             - <ErrorBoundary> (catches errors)
             - <Navbar /> (navigation)
             - <Routes> (page routing)
               - Route "/" → Home (Hero, Projects, Services, etc.)
               - Route "/case-studies" → Case Studies page
               - Route "*" → 404 page
             - <Footer /> (bottom of page)
          
          3. Each component renders its children
          4. React builds the entire component tree
          5. Converts to actual HTML
          6. Updates the browser DOM
          
          COMPONENT TREE:
          <App>
            <ErrorBoundary>
              <Navbar />
              <Routes>
                <Route path="/">
                  <Home>
                    <Hero />
                    <Projects>
                      <ProjectCard />
                      <ProjectCard />
                      <ProjectCard />
                    </Projects>
                    <Services />
                    <Contact />
                  </Home>
                </Route>
              </Routes>
              <Footer />
            </ErrorBoundary>
          </App>
          
          REACT'S MAGIC:
          - When state changes, React re-renders only affected components
          - Virtual DOM compares old vs new
          - Updates only what changed (super efficient!)
          - You don't manually update HTML - React does it automatically
        */}
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

// ============================================================================
// THE BIG PICTURE - COMPLETE FLOW FROM START TO FINISH
// ============================================================================
//
// 1. USER VISITS YOUR SITE
//    └─ Browser requests index.html
//    └─ Server sends HTML file
//
// 2. BROWSER PARSES HTML
//    └─ Sees <div id="root"></div> (empty!)
//    └─ Sees <script src="/src/main.jsx"></script>
//    └─ Downloads and executes this file (main.jsx)
//
// 3. THIS FILE EXECUTES (main.jsx)
//    └─ Imports React library
//    └─ Imports ReactDOM (web renderer)
//    └─ Imports BrowserRouter (routing)
//    └─ Imports App component (your code)
//    └─ Imports CSS styles
//
// 4. createRoot() IS CALLED
//    └─ Finds <div id="root"> in HTML
//    └─ Creates a React "root" at that element
//    └─ React says: "I control this div now"
//
// 5. .render() IS CALLED
//    └─ React starts building the component tree
//    └─ Processes <StrictMode> wrapper
//    └─ Processes <BrowserRouter> wrapper
//    └─ Renders <App /> component
//
// 6. APP.JSX EXECUTES
//    └─ Looks at current URL (e.g., "/")
//    └─ Finds matching route
//    └─ Renders components for that route
//
// 7. COMPONENTS RENDER RECURSIVELY
//    └─ Each component renders its children
//    └─ React builds Virtual DOM (JavaScript representation of HTML)
//    └─ Compares Virtual DOM to real browser DOM
//    └─ Updates only differences (efficient!)
//
// 8. USER SEES THE PAGE
//    └─ Browser shows fully rendered React app
//    └─ All components are displayed
//    └─ Interactive elements work (buttons, forms, etc.)
//
// 9. USER INTERACTS (clicks, types, navigates)
//    └─ Event handlers trigger
//    └─ State updates
//    └─ React re-renders affected components
//    └─ Virtual DOM compares changes
//    └─ Browser DOM updates
//    └─ UI updates smoothly
//
// 10. USER NAVIGATES TO NEW PAGE
//    └─ Clicks <Link to="/about">
//    └─ BrowserRouter intercepts (no page reload!)
//    └─ URL changes to /about
//    └─ React Router finds matching route
//    └─ Renders new component
//    └─ Old component unmounts
//    └─ New component mounts
//    └─ UI transitions smoothly
//
// ============================================================================

// ============================================================================
// WHY THIS ARCHITECTURE?
// ============================================================================
//
// SEPARATION OF CONCERNS:
// - React (core) = Component logic, no platform knowledge
// - ReactDOM (renderer) = Web-specific rendering
// - React Router (navigation) = URL management
// - Your code (App.jsx) = Business logic and UI
//
// BENEFITS:
// 1. React can target multiple platforms (web, mobile, VR)
// 2. Easy to swap renderers (ReactDOM → React Native)
// 3. Clean separation makes testing easier
// 4. Each library does one thing well
//
// THE PHILOSOPHY:
// "React is a library, not a framework"
// - You choose how to structure your app
// - You choose which libraries to add (routing, state, etc.)
// - React just handles UI updates efficiently
//
// ============================================================================
