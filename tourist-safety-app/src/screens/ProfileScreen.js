import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Card, Title, Paragraph, Chip, Divider, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { theme, styles } from '../styles/theme';
import { mockTourist } from '../data/mockData';

export default function ProfileScreen() {
  const generateQRCode = () => {
    alert('QR Code generated for digital ID verification');
  };

  const downloadID = () => {
    alert('Digital ID downloaded to device');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Digital ID Card */}
      <Card style={[styles.card, { backgroundColor: theme.colors.primary }]}>
        <Card.Content>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
            <MaterialIcons name="badge" size={32} color="white" />
            <Title style={{ color: 'white', marginLeft: 12 }}>Digital Tourist ID</Title>
          </View>
          
          <View style={{ 
            backgroundColor: 'white', 
            padding: 16, 
            borderRadius: 8,
            marginBottom: 12
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Paragraph style={{ fontSize: 18, fontWeight: 'bold', color: theme.colors.primary }}>
                  {mockTourist.name}
                </Paragraph>
                <Paragraph style={{ fontSize: 14, color: theme.colors.placeholder, marginTop: 4 }}>
                  ID: {mockTourist.id}
                </Paragraph>
              </View>
              <View style={{
                width: 60,
                height: 60,
                backgroundColor: '#E0E0E0',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <MaterialIcons name="person" size={32} color={theme.colors.placeholder} />
              </View>
            </View>
            
            <Divider style={{ marginVertical: 12 }} />
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Chip icon="calendar" mode="outlined" style={{ backgroundColor: '#E8F5E8' }}>
                Valid until {new Date(mockTourist.checkOutDate).toLocaleDateString()}
              </Chip>
              <Chip icon="verified" mode="outlined" style={{ backgroundColor: '#E3F2FD' }}>
                Verified
              </Chip>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button 
              mode="contained" 
              onPress={generateQRCode}
              style={{ flex: 1, marginRight: 8, backgroundColor: 'white' }}
              labelStyle={{ color: theme.colors.primary }}
              icon="qr-code"
            >
              Show QR
            </Button>
            <Button 
              mode="outlined" 
              onPress={downloadID}
              style={{ flex: 1, marginLeft: 8, borderColor: 'white' }}
              labelStyle={{ color: 'white' }}
              icon="download"
            >
              Download
            </Button>
          </View>
        </Card.Content>
      </Card>

      {/* Personal Information */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Personal Information</Title>
          <View style={{ marginTop: 16 }}>
            <InfoRow icon="email" label="Email" value={mockTourist.email} />
            <InfoRow icon="phone" label="Phone" value={mockTourist.phone} />
            <InfoRow icon="public" label="Nationality" value={mockTourist.nationality} />
            <InfoRow icon="credit-card" label="Document" value={`${mockTourist.documentType}: ${mockTourist.documentNumber}`} />
          </View>
        </Card.Content>
      </Card>

      {/* Visit Details */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Visit Details</Title>
          <View style={{ marginTop: 16 }}>
            <InfoRow icon="login" label="Check-in" value={new Date(mockTourist.checkInDate).toLocaleDateString()} />
            <InfoRow icon="logout" label="Check-out" value={new Date(mockTourist.checkOutDate).toLocaleDateString()} />
            <InfoRow icon="location-on" label="Current Location" value={mockTourist.currentLocation.address} />
          </View>
        </Card.Content>
      </Card>

      {/* Emergency Contacts */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Emergency Contacts</Title>
          {mockTourist.emergencyContacts.map((contact, index) => (
            <View key={index} style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              paddingVertical: 8,
              borderBottomWidth: index < mockTourist.emergencyContacts.length - 1 ? 1 : 0,
              borderBottomColor: '#E0E0E0'
            }}>
              <MaterialIcons name="contact-phone" size={20} color={theme.colors.primary} />
              <View style={{ marginLeft: 12, flex: 1 }}>
                <Paragraph style={{ fontWeight: 'bold' }}>{contact.name}</Paragraph>
                <Paragraph style={{ fontSize: 12, color: theme.colors.placeholder }}>
                  {contact.relationship}
                </Paragraph>
                <Paragraph style={{ fontSize: 14, color: theme.colors.primary }}>
                  {contact.phone}
                </Paragraph>
              </View>
              <Button 
                mode="outlined" 
                onPress={() => alert(`Calling ${contact.name}...`)}
                compact
                icon="phone"
              >
                Call
              </Button>
            </View>
          ))}
        </Card.Content>
      </Card>

      {/* Travel Itinerary */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Travel Itinerary</Title>
          {mockTourist.itinerary.map((item, index) => (
            <View key={index} style={{ 
              marginTop: 12, 
              padding: 12, 
              backgroundColor: '#F5F5F5', 
              borderRadius: 8 
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <MaterialIcons name="event" size={20} color={theme.colors.primary} />
                <Paragraph style={{ 
                  marginLeft: 8, 
                  fontWeight: 'bold', 
                  color: theme.colors.primary 
                }}>
                  {new Date(item.date).toLocaleDateString()} - {item.location}
                </Paragraph>
              </View>
              {item.activities.map((activity, actIndex) => (
                <Paragraph key={actIndex} style={{ 
                  marginLeft: 28, 
                  fontSize: 12, 
                  color: theme.colors.text 
                }}>
                  • {activity}
                </Paragraph>
              ))}
            </View>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <View style={{ 
      flexDirection: 'row', 
      alignItems: 'center', 
      paddingVertical: 8 
    }}>
      <MaterialIcons name={icon} size={20} color={theme.colors.primary} />
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Paragraph style={{ fontSize: 12, color: theme.colors.placeholder }}>
          {label}
        </Paragraph>
        <Paragraph style={{ fontSize: 14, fontWeight: '500' }}>
          {value}
        </Paragraph>
      </View>
    </View>
  );
}