import React, { useState, useEffect } from 'react';
import { View, Alert, Linking } from 'react-native';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, FAB, Chip } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { theme, styles } from '../styles/theme';
import { mockEmergencyContacts, mockTourist } from '../data/mockData';

export default function EmergencyScreen() {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let interval;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const triggerPanicButton = () => {
    Alert.alert(
      'Emergency Alert',
      'This will immediately send your location and alert to all emergency services and your emergency contacts. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'SEND ALERT', 
          style: 'destructive',
          onPress: () => {
            setEmergencyActive(true);
            setCountdown(10);
            sendEmergencyAlert();
          }
        }
      ]
    );
  };

  const cancelEmergency = () => {
    Alert.alert(
      'Cancel Emergency',
      'Are you sure you want to cancel the emergency alert?',
      [
        { text: 'No', style: 'cancel' },
        { 
          text: 'Yes, Cancel',
          onPress: () => {
            setEmergencyActive(false);
            setCountdown(0);
            Alert.alert('Emergency Cancelled', 'Emergency alert has been cancelled.');
          }
        }
      ]
    );
  };

  const sendEmergencyAlert = () => {
    // Mock emergency alert functionality
    setTimeout(() => {
      Alert.alert(
        'Emergency Alert Sent',
        `Emergency services and your contacts have been notified.\n\nLocation: ${mockTourist.currentLocation.address}\nTourist ID: ${mockTourist.id}\n\nHelp is on the way!`,
        [{ text: 'OK' }]
      );
    }, 1000);
  };

  const makeCall = (number, name) => {
    Alert.alert(
      `Call ${name}`,
      `Do you want to call ${number}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Call',
          onPress: () => {
            // In a real app, this would use Linking.openURL(`tel:${number}`)
            Alert.alert('Calling...', `Dialing ${name} at ${number}`);
          }
        }
      ]
    );
  };

  const shareLocation = () => {
    Alert.alert(
      'Location Shared',
      'Your current location has been shared with all emergency contacts.'
    );
  };

  const getContactIcon = (type) => {
    switch (type) {
      case 'emergency': return 'emergency';
      case 'medical': return 'local-hospital';
      case 'fire': return 'local-fire-department';
      case 'government': return 'account-balance';
      default: return 'phone';
    }
  };

  const getContactColor = (type) => {
    switch (type) {
      case 'emergency': return theme.colors.error;
      case 'medical': return '#D32F2F';
      case 'fire': return '#FF5722';
      case 'government': return theme.colors.primary;
      default: return theme.colors.primary;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Emergency Status */}
        {emergencyActive && (
          <Card style={[styles.card, { backgroundColor: theme.colors.error }]}>
            <Card.Content>
              <View style={{ alignItems: 'center' }}>
                <MaterialIcons name="warning" size={48} color="white" />
                <Title style={{ color: 'white', textAlign: 'center', marginTop: 8 }}>
                  EMERGENCY ALERT ACTIVE
                </Title>
                <Paragraph style={{ color: 'white', textAlign: 'center', marginTop: 8 }}>
                  Emergency services have been notified
                </Paragraph>
                {countdown > 0 && (
                  <Paragraph style={{ 
                    color: 'white', 
                    fontSize: 20, 
                    fontWeight: 'bold',
                    marginTop: 8
                  }}>
                    Cancel in: {countdown}s
                  </Paragraph>
                )}
                <Button 
                  mode="contained" 
                  onPress={cancelEmergency}
                  style={{ marginTop: 16, backgroundColor: 'white' }}
                  labelStyle={{ color: theme.colors.error }}
                >
                  Cancel Emergency
                </Button>
              </View>
            </Card.Content>
          </Card>
        )}

        {/* Panic Button */}
        <Card style={[styles.card, { backgroundColor: emergencyActive ? '#FFEBEE' : 'white' }]}>
          <Card.Content style={{ alignItems: 'center' }}>
            <MaterialIcons 
              name="emergency" 
              size={64} 
              color={theme.colors.error} 
            />
            <Title style={{ textAlign: 'center', marginTop: 16, color: theme.colors.error }}>
              Emergency Panic Button
            </Title>
            <Paragraph style={{ textAlign: 'center', margin: 16 }}>
              Press this button if you are in immediate danger. This will:
            </Paragraph>
            <View style={{ alignItems: 'flex-start', marginBottom: 16 }}>
              <Paragraph>• Send your exact location to authorities</Paragraph>
              <Paragraph>• Alert all emergency contacts</Paragraph>
              <Paragraph>• Connect you to emergency services</Paragraph>
              <Paragraph>• Generate automatic incident report</Paragraph>
            </View>
            <Button 
              mode="contained" 
              onPress={triggerPanicButton}
              style={{ 
                backgroundColor: theme.colors.error,
                paddingHorizontal: 32,
                paddingVertical: 8
              }}
              labelStyle={{ fontSize: 18, fontWeight: 'bold' }}
              disabled={emergencyActive}
            >
              {emergencyActive ? 'ALERT SENT' : 'SEND EMERGENCY ALERT'}
            </Button>
          </Card.Content>
        </Card>

        {/* Emergency Contacts */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Emergency Services</Title>
            <Paragraph style={{ marginBottom: 16, color: theme.colors.placeholder }}>
              Tap to call emergency services directly
            </Paragraph>
            {mockEmergencyContacts.map((contact, index) => (
              <View 
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  borderBottomWidth: index < mockEmergencyContacts.length - 1 ? 1 : 0,
                  borderBottomColor: '#E0E0E0'
                }}
              >
                <View style={{
                  backgroundColor: getContactColor(contact.type),
                  borderRadius: 24,
                  width: 48,
                  height: 48,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 16
                }}>
                  <MaterialIcons 
                    name={getContactIcon(contact.type)} 
                    size={24} 
                    color="white" 
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Paragraph style={{ fontWeight: 'bold', fontSize: 16 }}>
                    {contact.name}
                  </Paragraph>
                  <Paragraph style={{ 
                    fontSize: 18, 
                    color: getContactColor(contact.type),
                    fontWeight: 'bold'
                  }}>
                    {contact.number}
                  </Paragraph>
                </View>
                <Button 
                  mode="contained"
                  onPress={() => makeCall(contact.number, contact.name)}
                  style={{ backgroundColor: getContactColor(contact.type) }}
                  icon="phone"
                >
                  Call
                </Button>
              </View>
            ))}
          </Card.Content>
        </Card>

        {/* Personal Emergency Contacts */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Personal Emergency Contacts</Title>
            <Paragraph style={{ marginBottom: 16, color: theme.colors.placeholder }}>
              Your registered emergency contacts
            </Paragraph>
            {mockTourist.emergencyContacts.map((contact, index) => (
              <View 
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  borderBottomWidth: index < mockTourist.emergencyContacts.length - 1 ? 1 : 0,
                  borderBottomColor: '#E0E0E0'
                }}
              >
                <MaterialIcons 
                  name="contact-phone" 
                  size={24} 
                  color={theme.colors.primary}
                  style={{ marginRight: 16 }}
                />
                <View style={{ flex: 1 }}>
                  <Paragraph style={{ fontWeight: 'bold' }}>{contact.name}</Paragraph>
                  <Paragraph style={{ fontSize: 12, color: theme.colors.placeholder }}>
                    {contact.relationship}
                  </Paragraph>
                  <Paragraph style={{ color: theme.colors.primary }}>
                    {contact.phone}
                  </Paragraph>
                </View>
                <Button 
                  mode="outlined"
                  onPress={() => makeCall(contact.phone, contact.name)}
                  compact
                  icon="phone"
                >
                  Call
                </Button>
              </View>
            ))}
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Quick Actions</Title>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
              <Button 
                mode="outlined"
                onPress={shareLocation}
                style={{ flex: 1, marginRight: 8 }}
                icon="location-on"
              >
                Share Location
              </Button>
              <Button 
                mode="outlined"
                onPress={() => Alert.alert('Medical Info', 'Medical information sent to emergency services')}
                style={{ flex: 1, marginLeft: 8 }}
                icon="medical-services"
              >
                Send Medical Info
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* Safety Tips */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Emergency Safety Tips</Title>
            <View style={{ marginTop: 12 }}>
              <Paragraph style={{ marginBottom: 8 }}>• Stay calm and try to move to a safe location</Paragraph>
              <Paragraph style={{ marginBottom: 8 }}>• Keep your phone charged and location services on</Paragraph>
              <Paragraph style={{ marginBottom: 8 }}>• If possible, inform someone about your situation</Paragraph>
              <Paragraph style={{ marginBottom: 8 }}>• Follow local emergency procedures and authorities</Paragraph>
              <Paragraph style={{ marginBottom: 8 }}>• Keep important documents and contact info accessible</Paragraph>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}