import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, ProgressBar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { theme, styles } from '../styles/theme';

export default function SafetyScoreCard({ score }) {
  const getScoreColor = (score) => {
    if (score >= 80) return theme.colors.success;
    if (score >= 60) return theme.colors.warning;
    return theme.colors.error;
  };

  const getScoreStatus = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Moderate';
    return 'Poor';
  };

  const getScoreIcon = (score) => {
    if (score >= 80) return 'check-circle';
    if (score >= 60) return 'warning';
    return 'error';
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Title>Safety Score</Title>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
              <MaterialIcons 
                name={getScoreIcon(score)} 
                size={24} 
                color={getScoreColor(score)} 
                style={{ marginRight: 8 }}
              />
              <Paragraph style={{ fontSize: 18, fontWeight: 'bold', color: getScoreColor(score) }}>
                {score}/100 - {getScoreStatus(score)}
              </Paragraph>
            </View>
            <ProgressBar 
              progress={score / 100} 
              color={getScoreColor(score)}
              style={{ marginTop: 8, height: 6, borderRadius: 3 }}
            />
          </View>
          <View style={{ 
            backgroundColor: getScoreColor(score), 
            borderRadius: 40, 
            width: 80, 
            height: 80,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Paragraph style={{ 
              color: 'white', 
              fontSize: 24, 
              fontWeight: 'bold' 
            }}>
              {score}
            </Paragraph>
          </View>
        </View>
        <Paragraph style={{ marginTop: 8, fontSize: 12, color: theme.colors.placeholder }}>
          Based on location, travel patterns, and zone safety
        </Paragraph>
      </Card.Content>
    </Card>
  );
}