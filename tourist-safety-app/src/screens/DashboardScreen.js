import React, { useState, useEffect } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { Card, Title, Paragraph, Button, Chip, FAB } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { theme, styles } from '../styles/theme';
import { mockTourist, mockZones, mockAlerts } from '../data/mockData';
import SafetyScoreCard from '../components/SafetyScoreCard';
import LocationCard from '../components/LocationCard';
import QuickActionsCard from '../components/QuickActionsCard';

export default function DashboardScreen() {
  const [location, setLocation] = useState(mockTourist.currentLocation);
  const [safetyScore, setSafetyScore] = useState(mockTourist.safetyScore);
  const [currentZone, setCurrentZone] = useState(null);
  const [recentAlerts, setRecentAlerts] = useState(mockAlerts.slice(0, 2));

  useEffect(() => {
    checkCurrentZone();
    // Simulate real-time updates
    const interval = setInterval(() => {
      updateSafetyScore();
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [location]);

  const checkCurrentZone = () => {
    // Mock zone detection based on current location
    const zone = mockZones.find(zone => {
      const coords = zone.coordinates;
      const lat = location.latitude;
      const lng = location.longitude;
      
      // Simple point-in-polygon check (simplified for demo)
      if (lat >= coords[0].latitude && lat <= coords[2].latitude &&
          lng >= coords[0].longitude && lng <= coords[2].longitude) {
        return true;
      }
      return false;
    });

    if (zone && zone.id !== currentZone?.id) {
      setCurrentZone(zone);
      showZoneAlert(zone);
    }
  };

  const showZoneAlert = (zone) => {
    const alertType = zone.riskLevel === 'high' ? 'danger' : 
                     zone.riskLevel === 'medium' ? 'warning' : 'info';
    
    Alert.alert(
      `Entering ${zone.type} Zone`,
      zone.description,
      [{ text: 'OK', onPress: () => {} }]
    );
  };

  const updateSafetyScore = () => {
    // Mock safety score calculation based on various factors
    let score = 85;
    
    if (currentZone) {
      if (currentZone.riskLevel === 'high') score -= 20;
      else if (currentZone.riskLevel === 'medium') score -= 10;
    }
    
    // Random variation for demo
    score += Math.floor(Math.random() * 10) - 5;
    score = Math.max(0, Math.min(100, score));
    
    setSafetyScore(score);
  };

  const handlePanicButton = () => {
    Alert.alert(
      'Emergency Alert Sent',
      'Your location and emergency alert have been sent to local authorities and your emergency contacts.',
      [{ text: 'OK' }]
    );
  };

  const getScoreColor = (score) => {
    if (score >= 80) return theme.colors.success;
    if (score >= 60) return theme.colors.warning;
    return theme.colors.error;
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Welcome Card */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome, {mockTourist.name}</Title>
            <Paragraph>Tourist ID: {mockTourist.id}</Paragraph>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Chip 
                icon="calendar" 
                mode="outlined"
                style={{ marginRight: 8 }}
              >
                Day {Math.ceil((new Date() - new Date(mockTourist.checkInDate)) / (1000 * 60 * 60 * 24)) || 1} of {Math.ceil((new Date(mockTourist.checkOutDate) - new Date(mockTourist.checkInDate)) / (1000 * 60 * 60 * 24))}
              </Chip>
              {currentZone && (
                <Chip 
                  icon="map-marker" 
                  mode="outlined"
                  style={{ 
                    backgroundColor: currentZone.riskLevel === 'high' ? '#FFEBEE' : 
                                   currentZone.riskLevel === 'medium' ? '#FFF3E0' : '#E8F5E8'
                  }}
                >
                  {currentZone.name}
                </Chip>
              )}
            </View>
          </Card.Content>
        </Card>

        {/* Safety Score Card */}
        <SafetyScoreCard score={safetyScore} />

        {/* Current Location Card */}
        <LocationCard location={location} />

        {/* Recent Alerts */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Recent Alerts</Title>
            {recentAlerts.length > 0 ? (
              recentAlerts.map((alert, index) => (
                <View 
                  key={alert.id}
                  style={[
                    { padding: 12, marginTop: 8, borderRadius: 8 },
                    alert.severity === 'high' ? styles.alertHigh :
                    alert.severity === 'medium' ? styles.alertMedium : styles.alertLow
                  ]}
                >
                  <Paragraph style={{ fontWeight: 'bold' }}>{alert.title}</Paragraph>
                  <Paragraph style={{ fontSize: 12, marginTop: 4 }}>
                    {new Date(alert.timestamp).toLocaleTimeString()}
                  </Paragraph>
                </View>
              ))
            ) : (
              <Paragraph>No recent alerts</Paragraph>
            )}
          </Card.Content>
          <Card.Actions>
            <Button onPress={() => {}}>View All Alerts</Button>
          </Card.Actions>
        </Card>

        {/* Quick Actions */}
        <QuickActionsCard />

        {/* Today's Itinerary */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Today's Itinerary</Title>
            {mockTourist.itinerary
              .filter(item => item.date === new Date().toISOString().split('T')[0])
              .map((item, index) => (
                <View key={index} style={{ marginTop: 8 }}>
                  <Paragraph style={{ fontWeight: 'bold' }}>{item.location}</Paragraph>
                  {item.activities.map((activity, actIndex) => (
                    <Paragraph key={actIndex} style={{ marginLeft: 16, fontSize: 12 }}>
                      • {activity}
                    </Paragraph>
                  ))}
                </View>
              ))}
          </Card.Content>
        </Card>
      </ScrollView>

      {/* Floating Panic Button */}
      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: theme.colors.error,
        }}
        icon="emergency"
        label="SOS"
        onPress={handlePanicButton}
      />
    </View>
  );
}