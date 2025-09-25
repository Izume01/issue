# Smart Tourist Safety Monitoring & Incident Response System

A comprehensive mobile and web application system for tourist safety monitoring in Northeast India, featuring AI-powered safety scoring, geo-fencing alerts, emergency response, and real-time tracking.

## 🚀 Features

### Mobile Application (React Native/Expo)
- **Digital Tourist ID**: Secure blockchain-based identity with QR code generation
- **Real-time Safety Scoring**: AI-powered safety assessment based on location and behavior
- **Geo-fencing Alerts**: Automatic alerts when entering restricted or high-risk zones
- **Panic Button**: One-tap emergency alert with live location sharing
- **Real-time Tracking**: Optional location sharing with family and authorities
- **Multilingual Support**: Available in 10+ Indian languages including Hindi, Assamese, Bengali
- **Emergency Contacts**: Quick access to emergency services and personal contacts

### Web Dashboard (For Tourism Authorities)
- **Real-time Tourist Monitoring**: Live tracking of all registered tourists
- **Interactive Heat Maps**: Visual representation of tourist clusters and risk zones
- **Alert Management**: Centralized alert system with severity-based prioritization
- **Tourist Profile Management**: Access to digital IDs, travel history, and contact information
- **Emergency Response**: Direct communication and dispatch capabilities
- **Analytics Dashboard**: Safety statistics and incident reporting

## 📱 Mobile App Screens

1. **Dashboard**: Overview of safety score, current location, alerts, and itinerary
2. **Profile**: Digital tourist ID with QR code, personal information, and travel details
3. **Alerts**: Real-time safety notifications with filtering and search
4. **Emergency**: Panic button, emergency contacts, and quick actions
5. **Settings**: Privacy controls, language selection, and app preferences

## 🖥️ Web Dashboard Features

- **Interactive Map**: Real-time tourist locations with zone overlays
- **Tourist Management**: Search, filter, and track individual tourists
- **Alert Center**: Manage and respond to safety alerts
- **Emergency Response**: Direct communication and service dispatch
- **Analytics**: Safety statistics and performance metrics

## 🛠️ Technology Stack

### Mobile App
- **Frontend**: React Native with Expo
- **UI Framework**: React Native Paper
- **Navigation**: React Navigation
- **Maps**: React Native Maps
- **Location Services**: Expo Location
- **Storage**: Expo Secure Store

### Web Dashboard
- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap 5
- **Maps**: Leaflet.js
- **Icons**: Font Awesome

### Mock Data & Security
- Comprehensive mock data for all features
- Simulated blockchain-based ID generation
- AI-powered safety scoring algorithms
- End-to-end encryption simulation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Modern web browser for dashboard

### Mobile App Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tourist-safety-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   - For Android: `npm run android`
   - For iOS: `npm run ios`
   - For web: `npm run web`

### Web Dashboard Setup

1. **Navigate to the dashboard directory**
   ```bash
   cd web-dashboard
   ```

2. **Open the dashboard**
   - Open `index.html` in a modern web browser
   - Or serve it using a local web server:
     ```bash
     python -m http.server 8080
     # Visit http://localhost:8080
     ```

## 📊 Demo Data

The application includes comprehensive mock data:

- **5 Sample Tourists** with different safety profiles and locations
- **3 Geo-fenced Zones** (Safe, Protected, Restricted)
- **Multiple Alert Types** (Geo-fence, Weather, Safety Score, Emergency)
- **Emergency Contacts** for Indian emergency services
- **Multi-language Support** for major Indian languages

## 🔐 Security Features

- **Digital ID Verification**: Blockchain-based tourist identification
- **End-to-end Encryption**: Secure data transmission and storage
- **Privacy Controls**: User-controlled data sharing preferences
- **Secure Emergency Alerts**: Tamper-proof emergency communication
- **Data Protection**: Compliance with Indian data protection laws

## 🌐 Multilingual Support

Supported languages:
- English
- Hindi (हिंदी)
- Assamese (অসমীয়া)
- Bengali (বাংলা)
- Telugu (తెలుగు)
- Tamil (தமிழ்)
- Malayalam (മലയാളം)
- Kannada (ಕನ್ನಡ)
- Gujarati (ગુજરાતી)
- Marathi (मराठी)

## 🚨 Emergency Features

### Tourist App
- **One-tap Panic Button**: Immediate emergency alert
- **Automatic Location Sharing**: GPS coordinates sent to authorities
- **Emergency Contact Integration**: Automatic notification to registered contacts
- **Voice Emergency Access**: Voice-based emergency activation for accessibility

### Authority Dashboard
- **Real-time Emergency Alerts**: Immediate notification system
- **Automated E-FIR Generation**: Automatic incident report creation
- **Emergency Service Dispatch**: Direct communication with response teams
- **Incident Documentation**: Complete emergency response logging

## 📈 AI & Analytics Features

### Safety Score Calculation
- **Location-based Assessment**: Risk evaluation based on current location
- **Behavioral Analysis**: Travel pattern and deviation detection
- **Zone-based Scoring**: Automatic adjustment based on area safety
- **Real-time Updates**: Continuous safety score monitoring

### Anomaly Detection
- **Location Drop-offs**: Sudden GPS signal loss detection
- **Prolonged Inactivity**: Extended periods without movement
- **Route Deviation**: Departure from planned itinerary
- **Distress Behavior**: Unusual movement patterns

## 🛡️ Privacy & Compliance

- **Data Minimization**: Only necessary data collection
- **User Consent**: Explicit permission for all data usage
- **Right to Delete**: Complete data removal on request
- **Audit Trails**: Complete activity logging for transparency
- **Compliance**: Adherent to Indian IT Act and data protection laws

## 🔧 Configuration

### App Settings
- Location tracking preferences
- Notification settings
- Emergency alert configuration
- Language selection
- Privacy controls

### Dashboard Configuration
- Alert thresholds
- Zone definitions
- Emergency response protocols
- User access controls

## 📱 Testing the Demo

### Mobile App Testing
1. Start the Expo development server
2. Use Expo Go app to scan QR code or run on simulator
3. Navigate through all screens to test functionality
4. Test panic button (shows mock alert)
5. Verify multilingual interface

### Web Dashboard Testing
1. Open the dashboard in a web browser
2. Click on tourist markers on the map
3. View tourist details and alerts
4. Test emergency alert modal
5. Use filter and search functionality

## 🚀 Future Enhancements

- **IoT Integration**: Smart bands and tags for enhanced tracking
- **Blockchain Implementation**: Actual blockchain-based ID system
- **Machine Learning**: Advanced predictive safety analytics
- **Real-time Communication**: In-app chat with authorities
- **Offline Functionality**: Core features available without internet
- **Advanced Mapping**: 3D terrain and satellite imagery

## 🤝 Contributing

This is a demo application created for the Smart Tourist Safety Monitoring system. For production deployment, additional security measures, real API integrations, and compliance certifications would be required.

## 📞 Support

For demo purposes, all emergency features show mock alerts. In a production environment, these would integrate with actual emergency services and communication systems.

## 📄 License

This project is created as a demonstration of tourist safety technology capabilities. All mock data is for demonstration purposes only.