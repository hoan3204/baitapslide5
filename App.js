import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function ColorButtons() {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  // Danh sách màu và giá trị tương ứng
  const colors = [
    { label: 'GREEN', value: 'green' },
    { label: 'BLUE', value: 'blue' },
    { label: 'BROWN', value: 'brown' },
    { label: 'YELLOW', value: 'yellow' },
    { label: 'RED', value: 'red' },
    { label: 'BLACK', value: 'black' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {colors.map((item) => (
        <TouchableOpacity
          key={item.value}
          style={[styles.button, { backgroundColor: item.value }]}
          onPress={() => setBgColor(item.value)}
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Canh lề trên để dễ nhìn, tùy chỉnh theo ý bạn
    paddingTop: 50,
  },
  button: {
    marginVertical: 8,
    marginHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
