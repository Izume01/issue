// Mock data for the dashboard
const mockTourists = [
    {
        id: "TID-2025-001234",
        name: "Rajesh Kumar",
        phone: "+91-9876543210",
        location: { lat: 26.1445, lng: 91.7362, address: "Guwahati, Assam" },
        safetyScore: 85,
        status: "online",
        zone: "safe",
        checkIn: "2025-09-25T08:00:00Z",
        lastSeen: "2025-09-25T14:30:00Z"
    },
    {
        id: "TID-2025-001235",
        name: "Priya Sharma",
        phone: "+91-9876543211",
        location: { lat: 26.5775, lng: 93.1712, address: "Kaziranga National Park" },
        safetyScore: 72,
        status: "online",
        zone: "medium",
        checkIn: "2025-09-25T06:00:00Z",
        lastSeen: "2025-09-25T14:25:00Z"
    },
    {
        id: "TID-2025-001236",
        name: "David Johnson",
        phone: "+1-555-123-4567",
        location: { lat: 25.5788, lng: 91.8933, address: "Shillong, Meghalaya" },
        safetyScore: 95,
        status: "online",
        zone: "safe",
        checkIn: "2025-09-24T10:00:00Z",
        lastSeen: "2025-09-25T14:28:00Z"
    },
    {
        id: "TID-2025-001237",
        name: "Maria Garcia",
        phone: "+34-666-789-012",
        location: { lat: 26.8500, lng: 92.8500, address: "Border Area, Assam" },
        safetyScore: 45,
        status: "alert",
        zone: "danger",
        checkIn: "2025-09-25T12:00:00Z",
        lastSeen: "2025-09-25T13:45:00Z"
    },
    {
        id: "TID-2025-001238",
        name: "Amit Patel",
        phone: "+91-9876543213",
        location: { lat: 26.2000, lng: 91.8000, address: "Dispur, Assam" },
        safetyScore: 88,
        status: "online",
        zone: "safe",
        checkIn: "2025-09-25T09:00:00Z",
        lastSeen: "2025-09-25T14:32:00Z"
    }
];

const mockAlerts = [
    {
        id: "alert1",
        touristId: "TID-2025-001237",
        touristName: "Maria Garcia",
        type: "zone_entry",
        severity: "high",
        message: "Tourist entered restricted border zone",
        timestamp: "2025-09-25T13:45:00Z",
        location: { lat: 26.8500, lng: 92.8500 }
    },
    {
        id: "alert2",
        touristId: "TID-2025-001235",
        touristName: "Priya Sharma",
        type: "safety_score",
        severity: "medium",
        message: "Safety score dropped below 75",
        timestamp: "2025-09-25T13:30:00Z",
        location: { lat: 26.5775, lng: 93.1712 }
    },
    {
        id: "alert3",
        touristId: "TID-2025-001234",
        touristName: "Rajesh Kumar",
        type: "weather",
        severity: "low",
        message: "Heavy rain warning for current location",
        timestamp: "2025-09-25T12:00:00Z",
        location: { lat: 26.1445, lng: 91.7362 }
    }
];

const mockZones = [
    {
        name: "Guwahati Safe Zone",
        type: "safe",
        coordinates: [[26.1200, 91.7200], [26.1600, 91.7600]]
    },
    {
        name: "Kaziranga Protected Area",
        type: "medium",
        coordinates: [[26.5500, 93.1500], [26.6000, 93.2000]]
    },
    {
        name: "Restricted Border Zone",
        type: "danger",
        coordinates: [[26.8000, 92.8000], [26.9000, 92.9000]]
    }
];

// Initialize the map
let map;
let touristMarkers = [];
let zoneOverlays = [];

function initializeMap() {
    map = L.map('map').setView([26.2041, 92.9376], 8);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add zone overlays
    mockZones.forEach(zone => {
        const color = zone.type === 'safe' ? '#28a745' : 
                     zone.type === 'medium' ? '#fd7e14' : '#dc3545';
        
        const bounds = [
            [zone.coordinates[0][0], zone.coordinates[0][1]],
            [zone.coordinates[1][0], zone.coordinates[1][1]]
        ];
        
        const overlay = L.rectangle(bounds, {
            color: color,
            weight: 2,
            opacity: 0.8,
            fillColor: color,
            fillOpacity: 0.2
        }).addTo(map);
        
        overlay.bindPopup(`<strong>${zone.name}</strong><br>Type: ${zone.type.toUpperCase()}`);
        zoneOverlays.push(overlay);
    });

    // Add tourist markers
    updateTouristMarkers();
}

function updateTouristMarkers() {
    // Clear existing markers
    touristMarkers.forEach(marker => map.removeLayer(marker));
    touristMarkers = [];

    mockTourists.forEach(tourist => {
        const iconColor = tourist.zone === 'safe' ? 'green' : 
                         tourist.zone === 'medium' ? 'orange' : 'red';
        
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: ${iconColor}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        const marker = L.marker([tourist.location.lat, tourist.location.lng], { icon })
            .addTo(map)
            .bindPopup(`
                <div>
                    <strong>${tourist.name}</strong><br>
                    ID: ${tourist.id}<br>
                    Safety Score: ${tourist.safetyScore}<br>
                    Status: <span class="text-${tourist.status === 'online' ? 'success' : 'danger'}">${tourist.status.toUpperCase()}</span><br>
                    Last Seen: ${new Date(tourist.lastSeen).toLocaleTimeString()}
                </div>
            `);

        marker.on('click', () => selectTourist(tourist.id));
        touristMarkers.push(marker);
    });
}

function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = now.toLocaleTimeString();
}

function populateTouristList() {
    const listContainer = document.getElementById('tourist-list');
    listContainer.innerHTML = '';

    mockTourists.forEach(tourist => {
        const statusIcon = tourist.status === 'online' ? 'fa-circle status-online' : 'fa-circle status-offline';
        const zoneClass = `zone-${tourist.zone === 'safe' ? 'safe' : tourist.zone === 'medium' ? 'medium' : 'danger'}`;
        
        const listItem = document.createElement('div');
        listItem.className = 'tourist-list-item';
        listItem.onclick = () => selectTourist(tourist.id);
        
        listItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <div class="fw-bold">${tourist.name}</div>
                    <small class="text-muted">${tourist.id}</small>
                    <div class="mt-1">
                        <span class="zone-indicator ${zoneClass}"></span>
                        <small>Score: ${tourist.safetyScore}</small>
                    </div>
                </div>
                <div class="text-end">
                    <i class="fas ${statusIcon} fa-sm"></i>
                    <div class="small text-muted">${new Date(tourist.lastSeen).toLocaleTimeString()}</div>
                </div>
            </div>
        `;
        
        listContainer.appendChild(listItem);
    });
}

function populateAlerts() {
    const alertsContainer = document.getElementById('alerts-list');
    alertsContainer.innerHTML = '';

    mockAlerts.forEach(alert => {
        const severityClass = `alert-${alert.severity}`;
        const iconClass = alert.severity === 'high' ? 'fa-exclamation-triangle' :
                         alert.severity === 'medium' ? 'fa-exclamation-circle' : 'fa-info-circle';
        
        const alertElement = document.createElement('div');
        alertElement.className = `alert-item ${severityClass} p-2 rounded mb-2`;
        
        alertElement.innerHTML = `
            <div class="d-flex align-items-start">
                <i class="fas ${iconClass} me-2 mt-1"></i>
                <div class="flex-grow-1">
                    <div class="fw-bold">${alert.touristName}</div>
                    <div class="small">${alert.message}</div>
                    <div class="small text-muted">${new Date(alert.timestamp).toLocaleString()}</div>
                </div>
                <button class="btn btn-sm btn-outline-secondary" onclick="viewAlert('${alert.id}')">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        `;
        
        alertsContainer.appendChild(alertElement);
    });
}

function selectTourist(touristId) {
    const tourist = mockTourists.find(t => t.id === touristId);
    if (!tourist) return;

    // Update tourist details panel
    const detailsContainer = document.getElementById('tourist-details');
    detailsContainer.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <h6>Personal Information</h6>
                <p><strong>Name:</strong> ${tourist.name}</p>
                <p><strong>ID:</strong> ${tourist.id}</p>
                <p><strong>Phone:</strong> ${tourist.phone}</p>
                <p><strong>Check-in:</strong> ${new Date(tourist.checkIn).toLocaleString()}</p>
            </div>
            <div class="col-md-6">
                <h6>Current Status</h6>
                <p><strong>Location:</strong> ${tourist.location.address}</p>
                <p><strong>Safety Score:</strong> 
                    <span class="badge bg-${tourist.safetyScore >= 80 ? 'success' : tourist.safetyScore >= 60 ? 'warning' : 'danger'}">
                        ${tourist.safetyScore}/100
                    </span>
                </p>
                <p><strong>Zone:</strong> 
                    <span class="zone-indicator zone-${tourist.zone === 'safe' ? 'safe' : tourist.zone === 'medium' ? 'medium' : 'danger'}"></span>
                    ${tourist.zone.toUpperCase()}
                </p>
                <p><strong>Last Seen:</strong> ${new Date(tourist.lastSeen).toLocaleString()}</p>
            </div>
        </div>
        <div class="mt-3">
            <button class="btn btn-primary btn-sm me-2" onclick="trackTourist('${tourist.id}')">
                <i class="fas fa-map-marker-alt me-1"></i>Track on Map
            </button>
            <button class="btn btn-outline-secondary btn-sm me-2" onclick="contactTourist('${tourist.id}')">
                <i class="fas fa-phone me-1"></i>Contact
            </button>
            <button class="btn btn-outline-warning btn-sm" onclick="sendAlert('${tourist.id}')">
                <i class="fas fa-exclamation-triangle me-1"></i>Send Alert
            </button>
        </div>
    `;

    // Highlight on map
    map.setView([tourist.location.lat, tourist.location.lng], 12);
    
    // Highlight in tourist list
    document.querySelectorAll('.tourist-list-item').forEach(item => {
        item.classList.remove('bg-light');
    });
    event.target.closest('.tourist-list-item')?.classList.add('bg-light');
}

function trackTourist(touristId) {
    const tourist = mockTourists.find(t => t.id === touristId);
    if (tourist) {
        map.setView([tourist.location.lat, tourist.location.lng], 15);
        // Flash the marker
        const marker = touristMarkers.find(m => 
            m.getLatLng().lat === tourist.location.lat && 
            m.getLatLng().lng === tourist.location.lng
        );
        if (marker) {
            marker.openPopup();
        }
    }
}

function contactTourist(touristId) {
    const tourist = mockTourists.find(t => t.id === touristId);
    if (tourist) {
        alert(`Calling ${tourist.name} at ${tourist.phone}...`);
    }
}

function sendAlert(touristId) {
    const tourist = mockTourists.find(t => t.id === touristId);
    if (tourist) {
        alert(`Safety alert sent to ${tourist.name}`);
    }
}

function viewAlert(alertId) {
    const alert = mockAlerts.find(a => a.id === alertId);
    if (alert) {
        document.getElementById('emergency-details').innerHTML = `
            <p><strong>Tourist:</strong> ${alert.touristName}</p>
            <p><strong>Type:</strong> ${alert.type.replace('_', ' ').toUpperCase()}</p>
            <p><strong>Severity:</strong> <span class="badge bg-${alert.severity === 'high' ? 'danger' : alert.severity === 'medium' ? 'warning' : 'success'}">${alert.severity.toUpperCase()}</span></p>
            <p><strong>Message:</strong> ${alert.message}</p>
            <p><strong>Time:</strong> ${new Date(alert.timestamp).toLocaleString()}</p>
            <p><strong>Location:</strong> ${alert.location.lat.toFixed(4)}, ${alert.location.lng.toFixed(4)}</p>
        `;
        new bootstrap.Modal(document.getElementById('emergencyModal')).show();
    }
}

function toggleLayer(type) {
    // Update button states
    document.querySelectorAll('.btn-group button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter markers based on type
    touristMarkers.forEach(marker => {
        map.removeLayer(marker);
    });

    const filteredTourists = type === 'all' ? mockTourists :
                           type === 'safe' ? mockTourists.filter(t => t.zone === 'safe') :
                           type === 'alert' ? mockTourists.filter(t => t.zone !== 'safe') : mockTourists;

    filteredTourists.forEach(tourist => {
        const iconColor = tourist.zone === 'safe' ? 'green' : 
                         tourist.zone === 'medium' ? 'orange' : 'red';
        
        const icon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: ${iconColor}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        const marker = L.marker([tourist.location.lat, tourist.location.lng], { icon })
            .addTo(map)
            .bindPopup(`
                <div>
                    <strong>${tourist.name}</strong><br>
                    ID: ${tourist.id}<br>
                    Safety Score: ${tourist.safetyScore}<br>
                    Status: <span class="text-${tourist.status === 'online' ? 'success' : 'danger'}">${tourist.status.toUpperCase()}</span><br>
                    Last Seen: ${new Date(tourist.lastSeen).toLocaleTimeString()}
                </div>
            `);

        marker.on('click', () => selectTourist(tourist.id));
    });
}

// Search functionality
document.getElementById('tourist-search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.tourist-list-item');
    
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    populateTouristList();
    populateAlerts();
    updateTime();
    
    // Update time every second
    setInterval(updateTime, 1000);
    
    // Simulate real-time updates
    setInterval(() => {
        // Randomly update some tourist positions and scores
        mockTourists.forEach(tourist => {
            if (Math.random() < 0.1) { // 10% chance to update
                tourist.safetyScore += Math.floor(Math.random() * 10) - 5;
                tourist.safetyScore = Math.max(0, Math.min(100, tourist.safetyScore));
                tourist.lastSeen = new Date().toISOString();
            }
        });
        
        populateTouristList();
        updateTouristMarkers();
    }, 30000); // Update every 30 seconds
});