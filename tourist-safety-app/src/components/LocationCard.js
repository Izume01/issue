import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { theme, styles } from '../styles/theme';

export default function LocationCard({ location }) {
  const handleShareLocation = () => {
    // Mock location sharing functionality
    alert('Location shared with emergency contacts');
  };

  const handleGetDirections = () => {
    // Mock directions functionality
    alert('Opening directions to nearest safe zone');
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <MaterialIcons name="location-on" size={24} color={theme.colors.primary} />
          <Title style={{ marginLeft: 8 }}>Current Location</Title>
        </View>
        
        <View style={{ 
          backgroundColor: '#E8F5E8', 
          padding: 12, 
          borderRadius: 8,
          marginBottom: 12
        }}>
          <Paragraph style={{ fontWeight: 'bold', fontSize: 16 }}>
            {location.address}
          </Paragraph>
          <Paragraph style={{ fontSize: 12, color: theme.colors.placeholder, marginTop: 4 }}>
            Lat: {location.latitude.toFixed(4)}, Lng: {location.longitude.toFixed(4)}
          </Paragraph>
          <Paragraph style={{ fontSize: 12, color: theme.colors.success, marginTop: 4 }}>
            ✓ Location tracking active
          </Paragraph>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button 
            mode="outlined" 
            onPress={handleShareLocation}
            style={{ flex: 1, marginRight: 8 }}
            icon="share"
          >
            Share Location
          </Button>
          <Button 
            mode="contained" 
            onPress={handleGetDirections}
            style={{ flex: 1, marginLeft: 8 }}
            icon="directions"
          >
            Get Directions
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}