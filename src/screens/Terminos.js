import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';

function Terms({ navigation }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.termsBox}>
        <Text style={styles.termsText}>
          {t('terms.acceptance') + "\n\n"}
          {t('terms.use_of_application') + "\n\n"}
          {t('terms.intellectual_property') + "\n\n"}
          {t('terms.privacy') + "\n\n"}
          {t('terms.location')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9CDBA6',
    padding: 20,
  },
  termsBox: {
    backgroundColor: '#468585',
    padding: 25,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
  },
  termsText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Terms;
