import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { login } from '../../api/api';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput value={username} onChangeText={setUsername} style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} />
      <Button
        title="Login"
        color={'red'}
        onPress={async () => {
          await login(username, password);
        }}
      />
    </View>
  );
};

export default Home;
