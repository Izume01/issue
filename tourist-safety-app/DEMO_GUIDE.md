# Tourist Safety App - Demo Guide

## 🎯 Quick Start Demo

### Mobile Application Features

#### 1. **Dashboard Screen**
- **Safety Score**: Real-time safety assessment (85/100 for demo user)
- **Current Location**: Guwahati, Assam with location tracking
- **Welcome Card**: Shows tourist ID and current travel day
- **Recent Alerts**: Displays latest safety notifications
- **Quick Actions**: Emergency services buttons
- **Today's Itinerary**: Planned activities for the day
- **Floating SOS Button**: Emergency panic button (bottom right)

#### 2. **Digital Tourist ID (Profile)**
- **Blockchain-based ID**: Secure digital identity card
- **Personal Information**: Name, contact, nationality, documents
- **QR Code Generation**: Tap "Show QR" for verification
- **Visit Details**: Check-in/out dates, current location
- **Emergency Contacts**: Family and medical contacts with call buttons
- **Travel Itinerary**: Complete trip planning with dates and activities

#### 3. **Safety Alerts**
- **Real-time Notifications**: Geo-fence, weather, and safety alerts
- **Alert Filtering**: Filter by severity (High, Medium, Low) or status
- **Search Functionality**: Find specific alerts
- **Alert Statistics**: Summary of alert counts by priority
- **Interactive Management**: Mark as read, delete alerts

#### 4. **Emergency Screen**
- **Panic Button**: Large red emergency alert button
- **Emergency Services**: Direct access to Police (100), Medical (108), Fire (101), Tourist Helpline (1363)
- **Personal Contacts**: Quick access to registered emergency contacts
- **Location Sharing**: Immediate GPS coordinate sharing
- **Safety Tips**: Emergency preparedness guidelines

#### 5. **Settings**
- **Language Selection**: 10+ Indian languages including Hindi, Assamese, Bengali
- **Privacy Controls**: Location tracking, notifications, data sharing preferences
- **Data Management**: Export data, delete all data options
- **Emergency Configuration**: Contact management, medical information

### Web Dashboard (Tourism Department)

#### 1. **Real-time Map**
- **Tourist Locations**: Live GPS tracking of all registered tourists
- **Zone Overlays**: Safe (green), Protected (orange), Restricted (red) areas
- **Interactive Markers**: Click on tourist markers for details
- **Filter Controls**: View all tourists, safe zones only, or alerts only

#### 2. **Tourist Management**
- **Active Tourist List**: Left sidebar with search functionality
- **Tourist Details**: Complete profile information when selected
- **Status Monitoring**: Online/offline status with last seen timestamps
- **Safety Scores**: Real-time safety assessment for each tourist

#### 3. **Alert Center**
- **Recent Alerts**: Real-time notification panel
- **Alert Details**: Click to view complete alert information
- **Severity Levels**: Color-coded priority system
- **Emergency Response**: Direct action buttons for critical alerts

#### 4. **Statistics Dashboard**
- **Active Tourists**: Currently registered and active users
- **Alert Count**: Number of active safety alerts
- **Safe Zones**: Monitored area statistics
- **Emergency Calls**: Current emergency response activities

## 🧪 Demo Scenarios

### Scenario 1: Tourist Zone Entry Alert
1. Open mobile app dashboard
2. Notice current location in Guwahati (safe zone)
3. Simulated entry into Kaziranga (protected zone) triggers medium-priority alert
4. View alert in Alerts screen
5. Check web dashboard to see authority perspective

### Scenario 2: Emergency Response
1. Navigate to Emergency screen in mobile app
2. Press the red "SEND EMERGENCY ALERT" button
3. Confirm emergency alert in popup
4. View confirmation of alert sent to authorities and contacts
5. Check web dashboard for emergency notification

### Scenario 3: Language Switching
1. Go to Settings screen
2. Tap on "App Language" button
3. Select Hindi (हिंदी) or Assamese (অসমীয়া)
4. Observe interface language change
5. Navigate through screens to see multilingual support

### Scenario 4: Authority Monitoring
1. Open web dashboard in browser
2. Click on different tourist markers on map
3. View detailed tourist information
4. Filter tourists by safety status
5. Test alert management functionality

## 📊 Mock Data Overview

### Sample Tourist Profile (Demo User)
- **Name**: Rajesh Kumar
- **Tourist ID**: TID-2025-001234
- **Safety Score**: 85/100 (Excellent)
- **Current Location**: Guwahati, Assam
- **Travel Period**: Sep 25-30, 2025
- **Emergency Contacts**: 2 registered contacts

### Geo-fenced Zones
1. **Guwahati City Center** (Safe Zone) - Low risk
2. **Kaziranga National Park** (Protected Zone) - Medium risk, wildlife sanctuary
3. **Restricted Border Area** (Danger Zone) - High risk, military zone

### Alert Types Demonstrated
- **Geo-fence Alerts**: Zone entry/exit notifications
- **Weather Alerts**: Environmental warnings
- **Safety Score Alerts**: Risk level changes
- **Emergency Alerts**: Panic button activations

## 🔧 Technical Features Demonstrated

### Security & Privacy
- End-to-end encryption simulation
- Blockchain-based ID generation (mock)
- User-controlled privacy settings
- Secure emergency communication

### AI & Analytics
- Real-time safety score calculation
- Location-based risk assessment
- Behavioral pattern analysis (simulated)
- Predictive safety alerts

### Multilingual Support
- 10+ Indian languages supported
- Real-time language switching
- Voice command ready (simulated)
- Accessibility features

### Emergency Response
- One-tap panic button
- Automatic location sharing
- Multi-channel alert system
- Authority dashboard integration

## 🚨 Important Demo Notes

1. **All emergency features are simulated** - No actual emergency services are contacted
2. **Location data is mock** - Uses predefined coordinates for demo
3. **Blockchain integration is simulated** - Shows UI/UX concept
4. **AI features are mock** - Demonstrates scoring algorithms conceptually
5. **Real-time updates are simulated** - Uses timers for demonstration

## 🎮 How to Navigate the Demo

### Mobile App (Start with Dashboard)
1. **Dashboard** → Overview and panic button
2. **Profile** → Digital ID and travel details
3. **Alerts** → Safety notifications management
4. **Emergency** → Emergency services and contacts
5. **Settings** → Preferences and language selection

### Web Dashboard (Authority View)
1. **Map View** → Real-time tourist tracking
2. **Tourist List** → Individual tourist management
3. **Alert Panel** → Safety notification center
4. **Statistics** → System overview and metrics

## 🔗 Demo URLs

- **Mobile App**: Run `npm start` in `/workspace/tourist-safety-app`
- **Web Dashboard**: Open `/workspace/tourist-safety-app/web-dashboard/index.html`

## 📱 Testing Instructions

1. **Start Mobile App**: Use Expo Go app or web browser
2. **Navigate Screens**: Test all bottom tab navigation
3. **Trigger Alerts**: Use panic button for emergency simulation
4. **Test Language**: Switch languages in settings
5. **View Dashboard**: Open web dashboard in browser for authority perspective

This demo showcases a comprehensive tourist safety ecosystem with both tourist-facing mobile features and authority monitoring capabilities.