import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { theme, styles } from '../styles/theme';

export default function QuickActionsCard() {
  const actions = [
    {
      id: 'emergency',
      title: 'Emergency Call',
      icon: 'emergency',
      color: theme.colors.error,
      action: () => alert('Calling emergency services...')
    },
    {
      id: 'police',
      title: 'Police',
      icon: 'local-police',
      color: '#1976D2',
      action: () => alert('Calling police...')
    },
    {
      id: 'medical',
      title: 'Medical',
      icon: 'local-hospital',
      color: '#D32F2F',
      action: () => alert('Calling medical services...')
    },
    {
      id: 'tourist',
      title: 'Tourist Help',
      icon: 'info',
      color: theme.colors.primary,
      action: () => alert('Calling tourist helpline...')
    }
  ];

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>Quick Actions</Title>
        <View style={{ 
          flexDirection: 'row', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between',
          marginTop: 16 
        }}>
          {actions.map((action) => (
            <TouchableOpacity
              key={action.id}
              onPress={action.action}
              style={{
                width: '48%',
                backgroundColor: action.color,
                padding: 16,
                borderRadius: 8,
                alignItems: 'center',
                marginBottom: 12
              }}
            >
              <MaterialIcons name={action.icon} size={32} color="white" />
              <Paragraph style={{ 
                color: 'white', 
                marginTop: 8, 
                fontSize: 12,
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                {action.title}
              </Paragraph>
            </TouchableOpacity>
          ))}
        </View>
      </Card.Content>
    </Card>
  );
}