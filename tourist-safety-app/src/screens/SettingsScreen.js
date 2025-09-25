import React, { useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { Card, Title, Paragraph, Button, Switch, List, Divider, Menu, Portal, Modal } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { theme, styles } from '../styles/theme';
import { languages, translations } from '../data/mockData';

export default function SettingsScreen() {
  const [settings, setSettings] = useState({
    locationTracking: true,
    notifications: true,
    emergencyAlerts: true,
    shareDataWithAuthorities: true,
    voiceAlerts: false,
    language: 'en'
  });
  
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === settings.language);
    return lang ? lang.name : 'English';
  };

  const handleDataExport = () => {
    Alert.alert(
      'Export Data',
      'Your tourist data and travel history will be exported. This may take a few minutes.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Export', onPress: () => Alert.alert('Success', 'Data export initiated. You will receive an email when complete.') }
      ]
    );
  };

  const handleDataDeletion = () => {
    Alert.alert(
      'Delete All Data',
      'This will permanently delete all your data including travel history, preferences, and emergency contacts. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => Alert.alert('Data Deleted', 'All your data has been permanently deleted.')
        }
      ]
    );
  };

  const SettingItem = ({ title, description, value, onValueChange, type = 'switch', options = [] }) => {
    return (
      <List.Item
        title={title}
        description={description}
        right={() => {
          if (type === 'switch') {
            return (
              <Switch
                value={value}
                onValueChange={onValueChange}
                color={theme.colors.primary}
              />
            );
          } else if (type === 'menu') {
            return (
              <Button mode="outlined" onPress={() => setShowLanguageMenu(true)}>
                {getCurrentLanguageName()}
              </Button>
            );
          }
          return null;
        }}
      />
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* App Settings */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>App Settings</Title>
        </Card.Content>
        <SettingItem
          title="Location Tracking"
          description="Allow app to track your location for safety monitoring"
          value={settings.locationTracking}
          onValueChange={(value) => updateSetting('locationTracking', value)}
        />
        <Divider />
        <SettingItem
          title="Push Notifications"
          description="Receive safety alerts and important updates"
          value={settings.notifications}
          onValueChange={(value) => updateSetting('notifications', value)}
        />
        <Divider />
        <SettingItem
          title="Emergency Alerts"
          description="Receive critical emergency notifications"
          value={settings.emergencyAlerts}
          onValueChange={(value) => updateSetting('emergencyAlerts', value)}
        />
        <Divider />
        <SettingItem
          title="Voice Alerts"
          description="Enable voice-based emergency alerts"
          value={settings.voiceAlerts}
          onValueChange={(value) => updateSetting('voiceAlerts', value)}
        />
      </Card>

      {/* Language Settings */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Language & Accessibility</Title>
        </Card.Content>
        <List.Item
          title="App Language"
          description="Choose your preferred language"
          right={() => (
            <Button mode="outlined" onPress={() => setShowLanguageMenu(true)}>
              {getCurrentLanguageName()}
            </Button>
          )}
        />
        <Divider />
        <List.Item
          title="Voice Commands"
          description="Configure voice command settings"
          right={() => (
            <Button mode="outlined" onPress={() => Alert.alert('Voice Commands', 'Voice command settings coming soon!')}>
              Configure
            </Button>
          )}
        />
      </Card>

      {/* Privacy & Security */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Privacy & Security</Title>
        </Card.Content>
        <SettingItem
          title="Share Data with Authorities"
          description="Allow sharing your data with tourism and law enforcement"
          value={settings.shareDataWithAuthorities}
          onValueChange={(value) => updateSetting('shareDataWithAuthorities', value)}
        />
        <Divider />
        <List.Item
          title="Privacy Policy"
          description="View our privacy policy and data usage"
          right={() => (
            <Button mode="outlined" onPress={() => setShowPrivacyModal(true)}>
              View
            </Button>
          )}
        />
        <Divider />
        <List.Item
          title="Data Encryption"
          description="All data is encrypted with AES-256"
          right={() => (
            <MaterialIcons name="lock" size={24} color={theme.colors.success} />
          )}
        />
      </Card>

      {/* Emergency Settings */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Emergency Settings</Title>
        </Card.Content>
        <List.Item
          title="Emergency Contacts"
          description="Manage your emergency contact list"
          right={() => (
            <Button mode="outlined" onPress={() => Alert.alert('Emergency Contacts', 'Contact management coming soon!')}>
              Manage
            </Button>
          )}
        />
        <Divider />
        <List.Item
          title="Medical Information"
          description="Update your medical emergency information"
          right={() => (
            <Button mode="outlined" onPress={() => Alert.alert('Medical Info', 'Medical information update coming soon!')}>
              Update
            </Button>
          )}
        />
      </Card>

      {/* Data Management */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Data Management</Title>
        </Card.Content>
        <List.Item
          title="Export My Data"
          description="Download all your data in portable format"
          right={() => (
            <Button mode="outlined" onPress={handleDataExport}>
              Export
            </Button>
          )}
        />
        <Divider />
        <List.Item
          title="Delete All Data"
          description="Permanently delete all your data"
          right={() => (
            <Button 
              mode="outlined" 
              onPress={handleDataDeletion}
              textColor={theme.colors.error}
              style={{ borderColor: theme.colors.error }}
            >
              Delete
            </Button>
          )}
        />
      </Card>

      {/* About */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>About</Title>
          <View style={{ marginTop: 16 }}>
            <Paragraph><strong>Tourist Safety App</strong></Paragraph>
            <Paragraph>Version 1.0.0</Paragraph>
            <Paragraph style={{ marginTop: 8 }}>
              A comprehensive safety monitoring and incident response system for tourists.
            </Paragraph>
            <View style={{ flexDirection: 'row', marginTop: 16 }}>
              <Button 
                mode="outlined" 
                onPress={() => Alert.alert('Help', 'Help documentation coming soon!')}
                style={{ marginRight: 8 }}
              >
                Help
              </Button>
              <Button 
                mode="outlined" 
                onPress={() => Alert.alert('Feedback', 'Feedback form coming soon!')}
              >
                Feedback
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* Language Selection Menu */}
      <Portal>
        <Modal
          visible={showLanguageMenu}
          onDismiss={() => setShowLanguageMenu(false)}
          contentContainerStyle={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 8,
            maxHeight: '80%'
          }}
        >
          <ScrollView>
            <View style={{ padding: 20 }}>
              <Title>Select Language</Title>
              {languages.map((lang) => (
                <List.Item
                  key={lang.code}
                  title={lang.name}
                  onPress={() => {
                    updateSetting('language', lang.code);
                    setShowLanguageMenu(false);
                    Alert.alert('Language Changed', `Language changed to ${lang.name}`);
                  }}
                  right={() => 
                    settings.language === lang.code ? (
                      <MaterialIcons name="check" size={24} color={theme.colors.primary} />
                    ) : null
                  }
                />
              ))}
            </View>
          </ScrollView>
        </Modal>
      </Portal>

      {/* Privacy Policy Modal */}
      <Portal>
        <Modal
          visible={showPrivacyModal}
          onDismiss={() => setShowPrivacyModal(false)}
          contentContainerStyle={{
            backgroundColor: 'white',
            margin: 20,
            padding: 20,
            borderRadius: 8,
            maxHeight: '80%'
          }}
        >
          <ScrollView>
            <Title>Privacy Policy</Title>
            <Paragraph style={{ marginTop: 16 }}>
              <strong>Data Collection:</strong> We collect location data, travel patterns, and emergency contact information to ensure your safety during travel.
            </Paragraph>
            <Paragraph style={{ marginTop: 12 }}>
              <strong>Data Usage:</strong> Your data is used for safety monitoring, emergency response, and improving tourism services.
            </Paragraph>
            <Paragraph style={{ marginTop: 12 }}>
              <strong>Data Sharing:</strong> Data may be shared with local authorities and emergency services when necessary for your safety.
            </Paragraph>
            <Paragraph style={{ marginTop: 12 }}>
              <strong>Data Security:</strong> All data is encrypted and stored securely using blockchain technology.
            </Paragraph>
            <Paragraph style={{ marginTop: 12 }}>
              <strong>Your Rights:</strong> You can access, modify, or delete your data at any time through the app settings.
            </Paragraph>
            <Button 
              mode="contained" 
              onPress={() => setShowPrivacyModal(false)}
              style={{ marginTop: 20 }}
            >
              Close
            </Button>
          </ScrollView>
        </Modal>
      </Portal>
    </ScrollView>
  );
}