// Mock data for the Tourist Safety App

export const mockTourist = {
  id: "TID-2025-001234",
  name: "Rajesh Kumar",
  email: "rajesh.kumar@email.com",
  phone: "+91-9876543210",
  nationality: "Indian",
  documentType: "Aadhaar",
  documentNumber: "1234-5678-9012",
  checkInDate: "2025-09-25",
  checkOutDate: "2025-09-30",
  safetyScore: 85,
  currentLocation: {
    latitude: 26.1445,
    longitude: 91.7362,
    address: "Guwahati, Assam"
  },
  emergencyContacts: [
    {
      name: "Priya Kumar",
      relationship: "Wife",
      phone: "+91-9876543211"
    },
    {
      name: "Dr. Amit Sharma",
      relationship: "Family Doctor",
      phone: "+91-9876543212"
    }
  ],
  itinerary: [
    {
      date: "2025-09-25",
      location: "Guwahati",
      activities: ["Kamakhya Temple", "Brahmaputra River Cruise"]
    },
    {
      date: "2025-09-26",
      location: "Kaziranga National Park",
      activities: ["Wildlife Safari", "Elephant Ride"]
    },
    {
      date: "2025-09-27",
      location: "Shillong",
      activities: ["Elephant Falls", "Shillong Peak"]
    }
  ]
};

export const mockZones = [
  {
    id: "zone1",
    name: "Kaziranga National Park",
    type: "protected",
    riskLevel: "medium",
    coordinates: [
      { latitude: 26.5775, longitude: 93.1712 },
      { latitude: 26.5775, longitude: 93.2712 },
      { latitude: 26.6775, longitude: 93.2712 },
      { latitude: 26.6775, longitude: 93.1712 }
    ],
    description: "Wildlife sanctuary - follow park guidelines"
  },
  {
    id: "zone2",
    name: "Restricted Border Area",
    type: "restricted",
    riskLevel: "high",
    coordinates: [
      { latitude: 26.8000, longitude: 92.8000 },
      { latitude: 26.8000, longitude: 92.9000 },
      { latitude: 26.9000, longitude: 92.9000 },
      { latitude: 26.9000, longitude: 92.8000 }
    ],
    description: "Restricted military zone - entry prohibited"
  },
  {
    id: "zone3",
    name: "Guwahati City Center",
    type: "safe",
    riskLevel: "low",
    coordinates: [
      { latitude: 26.1200, longitude: 91.7200 },
      { latitude: 26.1200, longitude: 91.7600 },
      { latitude: 26.1600, longitude: 91.7600 },
      { latitude: 26.1600, longitude: 91.7200 }
    ],
    description: "Safe tourist area with good connectivity"
  }
];

export const mockAlerts = [
  {
    id: "alert1",
    type: "geofence",
    title: "Entering Protected Zone",
    message: "You are entering Kaziranga National Park. Please follow park guidelines.",
    timestamp: "2025-09-25T10:30:00Z",
    severity: "medium",
    acknowledged: false
  },
  {
    id: "alert2", 
    type: "weather",
    title: "Heavy Rain Alert",
    message: "Heavy rainfall expected in your area. Consider indoor activities.",
    timestamp: "2025-09-25T14:00:00Z",
    severity: "low",
    acknowledged: true
  }
];

export const mockEmergencyContacts = [
  {
    name: "Tourist Helpline",
    number: "1363",
    type: "government"
  },
  {
    name: "Police Control Room",
    number: "100",
    type: "emergency"
  },
  {
    name: "Medical Emergency",
    number: "108",
    type: "medical"
  },
  {
    name: "Fire Brigade",
    number: "101",
    type: "fire"
  }
];

export const mockTouristClusters = [
  {
    id: "cluster1",
    location: "Guwahati",
    touristCount: 45,
    coordinates: { latitude: 26.1445, longitude: 91.7362 },
    riskLevel: "low"
  },
  {
    id: "cluster2",
    location: "Kaziranga",
    touristCount: 23,
    coordinates: { latitude: 26.5775, longitude: 93.1712 },
    riskLevel: "medium"
  },
  {
    id: "cluster3",
    location: "Shillong",
    touristCount: 67,
    coordinates: { latitude: 25.5788, longitude: 91.8933 },
    riskLevel: "low"
  }
];

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'as', name: 'অসমীয়া' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'mr', name: 'मराठी' }
];

export const translations = {
  en: {
    appName: "Tourist Safety",
    dashboard: "Dashboard",
    profile: "Profile",
    alerts: "Alerts",
    emergency: "Emergency",
    safetyScore: "Safety Score",
    currentLocation: "Current Location",
    panicButton: "PANIC BUTTON",
    emergencyContacts: "Emergency Contacts",
    digitalId: "Digital Tourist ID",
    itinerary: "Travel Itinerary",
    settings: "Settings"
  },
  hi: {
    appName: "पर्यटक सुरक्षा",
    dashboard: "डैशबोर्ड",
    profile: "प्रोफाइल",
    alerts: "अलर्ट",
    emergency: "आपातकाल",
    safetyScore: "सुरक्षा स्कोर",
    currentLocation: "वर्तमान स्थान",
    panicButton: "आपातकालीन बटन",
    emergencyContacts: "आपातकालीन संपर्क",
    digitalId: "डिजिटल पर्यटक आईडी",
    itinerary: "यात्रा कार्यक्रम",
    settings: "सेटिंग्स"
  },
  as: {
    appName: "পৰ্যটক সুৰক্ষা",
    dashboard: "ড্যাশব'ৰ্ড",
    profile: "প্ৰ'ফাইল",
    alerts: "সতৰ্কবাণী",
    emergency: "জৰুৰীকালীন",
    safetyScore: "সুৰক্ষা স্ক'ৰ",
    currentLocation: "বৰ্তমান অৱস্থান",
    panicButton: "জৰুৰীকালীন বুটাম",
    emergencyContacts: "জৰুৰীকালীন যোগাযোগ",
    digitalId: "ডিজিটেল পৰ্যটক আইডি",
    itinerary: "ভ্ৰমণ কাৰ্যসূচী",
    settings: "ছেটিংছ"
  }
};