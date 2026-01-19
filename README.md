# Property Pulse 🏠

Property Pulse is a comprehensive real estate application built with Next.js 16, designed to help users find and list rental properties. It provides a seamless experience for browsing properties, managing listings, and communicating with property owners.

## Images 🖼️
<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/53af8f86-71f8-44c8-9de2-87170febd465" />
<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/1cbc102c-8c07-4614-af97-edab41e7b16f" />


## ✨ Features

*   **User Authentication**: Secure user login and registration using Google OAuth (via NextAuth.js).
*   **Property Listings**:
    *   Browse a wide range of rental properties.
    *   Detailed property views with descriptions, amenities, and location.
    *   Advanced property search and filtering.
*   **Property Management**:
    *   Add new property listings with image uploads.
    *   Edit and delete existing listings.
*   **Interactive Maps**: View property locations on interactive maps powered by Mapbox.
*   **Messaging System**: Real-time communication between interested tenants and property owners.
*   **User Profiles**: Manage user account details and view posted listings.
*   **Bookmarking**: Save favorite properties for quick access.
*   **Social Sharing**: Share property listings on social media platforms.
*   **Responsive Design**: A modern, mobile-friendly interface built with Tailwind CSS.

## 🛠 Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Language**: JavaScript
*   **Database**: [MongoDB](https://www.mongodb.com/) (with Mongoose ODM)
*   **Authentication**: [NextAuth.js](https://next-auth.js.org/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **Maps**: [Mapbox GL](https://www.mapbox.com/) & [React Map GL](https://visgl.github.io/react-map-gl/)
*   **Image Storage**: [Cloudinary](https://cloudinary.com/)
*   **Geocoding**: Google Geocoding API / OpenCage (for converting addresses to coordinates)
*   **UI Components**: React Icons, React Spinners, React Toastify

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [MongoDB](https://www.mongodb.com/) account and connection string (or local instance).
*   [Cloudinary](https://cloudinary.com/) account for image hosting.
*   [Google Cloud Console](https://console.cloud.google.com/) account (for OAuth and Geocoding).
*   [Mapbox](https://www.mapbox.com/) account for map rendering.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/ibukun-brain/property-pulse.git
    cd property-pulse
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**

    Create a `.env` file in the root directory (you can use `.env.development` as a reference). Add the following variables:

    ```env
    NEXT_PUBLIC_DOMAIN=http://localhost:3000
    NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api
    
    # Database
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/property-pulse
    
    # Google OAuth
    GOOGLE_CLIENT_ID=<your-google-client-id>
    GOOGLE_CLIENT_SECRET=<your-google-client-secret>
    
    # NextAuth
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=<your-nextauth-secret> 
    
    # Cloudinary
    CLOUDINARY_CLOUD_NAME=<your-cloud-name>
    CLOUDINARY_API_KEY=<your-api-key>
    CLOUDINARY_API_SECRET=<your-api-secret>
    
    # Maps & Geocoding
    NEXT_PUBLIC_MAPBOX_TOKEN=<your-mapbox-token>
    NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY=<your-google-geocoding-key>
    OPENCAGE_API_KEY=<your-opencage-key>
    ```

4.  **Run the application:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
property-pulse/
├── app/                  # Next.js App Router pages and API routes
│   ├── api/              # Backend API endpoints
│   ├── properties/       # Property listing pages
│   ├── layout.jsx        # Main application layout
│   └── page.jsx          # Homepage
├── components/           # Reusable UI components
├── config/               # Configuration files (e.g., DB connection)
├── context/              # React Context wrappers (e.g., AuthProvider)
├── models/               # Mongoose database models
├── utils/                # Utility functions
├── public/               # Static assets
└── ...
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.
