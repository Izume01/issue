import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2E7D32', // Green for safety
    accent: '#FF5722', // Orange for alerts
    error: '#D32F2F', // Red for danger
    warning: '#F57C00', // Amber for warnings
    success: '#388E3C', // Green for success
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#212121',
    disabled: '#9E9E9E',
    placeholder: '#757575',
    backdrop: 'rgba(0, 0, 0, 0.5)',
  },
  roundness: 8,
};

export const styles = {
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  card: {
    margin: 8,
    padding: 16,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.roundness,
    elevation: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: theme.colors.text,
    lineHeight: 20,
  },
  button: {
    margin: 8,
    borderRadius: theme.roundness,
  },
  emergencyButton: {
    backgroundColor: theme.colors.error,
    margin: 16,
    padding: 16,
    borderRadius: theme.roundness,
    elevation: 4,
  },
  safetyScore: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mapContainer: {
    height: 200,
    margin: 8,
    borderRadius: theme.roundness,
    overflow: 'hidden',
  },
  alertHigh: {
    backgroundColor: '#FFEBEE',
    borderLeftColor: theme.colors.error,
    borderLeftWidth: 4,
  },
  alertMedium: {
    backgroundColor: '#FFF3E0',
    borderLeftColor: theme.colors.warning,
    borderLeftWidth: 4,
  },
  alertLow: {
    backgroundColor: '#E8F5E8',
    borderLeftColor: theme.colors.success,
    borderLeftWidth: 4,
  },
};