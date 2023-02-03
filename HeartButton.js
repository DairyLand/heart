import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { sendPushNotification } from './PushNotification';

const HeartButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    sendPushNotification();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {isPressed ? (
          <Ionicons name="ios-heart" size={60} color="#e74c3c" />
        ) : (
          <Ionicons name="ios-heart-empty" size={60} color="#e74c3c" />
        )}
        <Text style={styles.label}>Press for attention</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    color: '#e74c3c',
  },
});

export default HeartButton;
