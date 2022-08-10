import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';

const LoginText = ({
  header,
  containerPlaceholder,
  keyboardType,
  textContentType,
  secureTextEntry,
  setValue,
}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.boxContainer}>
        <TextInput
          value={text}
          style={styles.textInput}
          autoCapitalize="none"
          autoComplete="none"
          placeholder={containerPlaceholder}
          keyboardType={keyboardType}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          onChangeText={text => {
            setText(text);
            setValue(text);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 358,
    alignSelf: 'center',
  },
  header: {
    fontSize: scale * 12,
    color: '#86858c',
    marginTop: height * 18,
    marginLeft: width * 16,
  },
  boxContainer: {
    width: width * 358,
    height: height * 44,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginTop: height * 6,
    justifyContent: 'center',
  },
  textInput: {
    marginLeft: width * 10,
    fontSize: scale * 17,
  },
});

export default LoginText;
