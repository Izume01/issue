import React, { useState } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import { Card, Title, Paragraph, Button, Chip, Searchbar, SegmentedButtons } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { theme, styles } from '../styles/theme';
import { mockAlerts } from '../data/mockData';

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState([
    ...mockAlerts,
    {
      id: "alert3",
      type: "zone",
      title: "Restricted Area Warning",
      message: "You are approaching a restricted border zone. Please maintain safe distance.",
      timestamp: "2025-09-25T16:15:00Z",
      severity: "high",
      acknowledged: false
    },
    {
      id: "alert4",
      type: "safety",
      title: "Safety Score Updated",
      message: "Your safety score has been updated based on current location and conditions.",
      timestamp: "2025-09-25T18:30:00Z",
      severity: "low",
      acknowledged: true
    },
    {
      id: "alert5",
      type: "update",
      title: "Travel Advisory",
      message: "Road conditions updated for Kaziranga National Park route.",
      timestamp: "2025-09-25T12:00:00Z",
      severity: "medium",
      acknowledged: false
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const acknowledgeAlert = (alertId) => {
    setAlerts(prevAlerts => 
      prevAlerts.map(alert => 
        alert.id === alertId ? { ...alert, acknowledged: true } : alert
      )
    );
  };

  const deleteAlert = (alertId) => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== alertId));
  };

  const getFilteredAlerts = () => {
    let filtered = alerts;
    
    if (filterType !== 'all') {
      if (filterType === 'unread') {
        filtered = filtered.filter(alert => !alert.acknowledged);
      } else {
        filtered = filtered.filter(alert => alert.severity === filterType);
      }
    }
    
    if (searchQuery) {
      filtered = filtered.filter(alert => 
        alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'geofence': return 'location-on';
      case 'weather': return 'cloud';
      case 'zone': return 'warning';
      case 'safety': return 'security';
      case 'update': return 'info';
      default: return 'notifications';
    }
  };

  const getAlertStyle = (severity) => {
    switch (severity) {
      case 'high': return styles.alertHigh;
      case 'medium': return styles.alertMedium;
      case 'low': return styles.alertLow;
      default: return {};
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return theme.colors.error;
      case 'medium': return theme.colors.warning;
      case 'low': return theme.colors.success;
      default: return theme.colors.primary;
    }
  };

  const filteredAlerts = getFilteredAlerts();

  return (
    <View style={styles.container}>
      {/* Search and Filter */}
      <View style={{ margin: 16, marginBottom: 0 }}>
        <Searchbar
          placeholder="Search alerts..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{ marginBottom: 16 }}
        />
        
        <SegmentedButtons
          value={filterType}
          onValueChange={setFilterType}
          buttons={[
            { value: 'all', label: 'All' },
            { value: 'unread', label: 'Unread' },
            { value: 'high', label: 'High' },
            { value: 'medium', label: 'Medium' },
            { value: 'low', label: 'Low' }
          ]}
          style={{ marginBottom: 16 }}
        />
      </View>

      <ScrollView 
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Alert Statistics */}
        <Card style={styles.card}>
          <Card.Content>
            <Title>Alert Summary</Title>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
              <View style={{ alignItems: 'center' }}>
                <Paragraph style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.error }}>
                  {alerts.filter(a => a.severity === 'high').length}
                </Paragraph>
                <Paragraph style={{ fontSize: 12 }}>High Priority</Paragraph>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Paragraph style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.warning }}>
                  {alerts.filter(a => a.severity === 'medium').length}
                </Paragraph>
                <Paragraph style={{ fontSize: 12 }}>Medium Priority</Paragraph>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Paragraph style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.success }}>
                  {alerts.filter(a => a.severity === 'low').length}
                </Paragraph>
                <Paragraph style={{ fontSize: 12 }}>Low Priority</Paragraph>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Paragraph style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.primary }}>
                  {alerts.filter(a => !a.acknowledged).length}
                </Paragraph>
                <Paragraph style={{ fontSize: 12 }}>Unread</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>

        {/* Alerts List */}
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert) => (
            <Card 
              key={alert.id} 
              style={[styles.card, getAlertStyle(alert.severity)]}
            >
              <Card.Content>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                  <MaterialIcons 
                    name={getAlertIcon(alert.type)} 
                    size={24} 
                    color={getSeverityColor(alert.severity)}
                    style={{ marginRight: 12, marginTop: 2 }}
                  />
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                      <Title style={{ fontSize: 16, flex: 1 }}>{alert.title}</Title>
                      {!alert.acknowledged && (
                        <View style={{
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: theme.colors.error,
                          marginLeft: 8
                        }} />
                      )}
                    </View>
                    
                    <Paragraph style={{ marginBottom: 8 }}>{alert.message}</Paragraph>
                    
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Chip 
                          mode="outlined" 
                          style={{ marginRight: 8, height: 24 }}
                          textStyle={{ fontSize: 10 }}
                        >
                          {alert.type.toUpperCase()}
                        </Chip>
                        <Chip 
                          mode="outlined" 
                          style={{ 
                            height: 24,
                            backgroundColor: getSeverityColor(alert.severity) + '20'
                          }}
                          textStyle={{ fontSize: 10, color: getSeverityColor(alert.severity) }}
                        >
                          {alert.severity.toUpperCase()}
                        </Chip>
                      </View>
                      <Paragraph style={{ fontSize: 12, color: theme.colors.placeholder }}>
                        {new Date(alert.timestamp).toLocaleString()}
                      </Paragraph>
                    </View>
                  </View>
                </View>
              </Card.Content>
              <Card.Actions>
                {!alert.acknowledged && (
                  <Button 
                    onPress={() => acknowledgeAlert(alert.id)}
                    mode="outlined"
                    compact
                  >
                    Mark as Read
                  </Button>
                )}
                <Button 
                  onPress={() => deleteAlert(alert.id)}
                  mode="text"
                  compact
                  textColor={theme.colors.error}
                >
                  Delete
                </Button>
              </Card.Actions>
            </Card>
          ))
        ) : (
          <Card style={styles.card}>
            <Card.Content style={{ alignItems: 'center', paddingVertical: 32 }}>
              <MaterialIcons name="notifications-off" size={48} color={theme.colors.placeholder} />
              <Title style={{ marginTop: 16, color: theme.colors.placeholder }}>
                No alerts found
              </Title>
              <Paragraph style={{ textAlign: 'center', marginTop: 8 }}>
                {searchQuery || filterType !== 'all' 
                  ? 'Try adjusting your search or filter criteria'
                  : 'You\'re all caught up! No new alerts at this time.'
                }
              </Paragraph>
            </Card.Content>
          </Card>
        )}
      </ScrollView>
    </View>
  );
}