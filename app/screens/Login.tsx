import { View, Text  , StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView} from 'react-native';
import React,{ useState } from 'react';
import { FIREBASE_AUTH } from '../../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('')
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
    
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error:any) {
      console.error(error);
      alert(`Sign in failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth , email, password);
      console.log(response);
    } catch (error:any) { 
      console.error(error);
      alert(`Registration failed: ${error.message}`); 
    } finally {
      setLoading(false);
    }
  };
  return(
    <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
  <TextInput
    value={email} // Bind value to email state
    style={styles.input}
    placeholder="Email"
    autoCapitalize="none"
    onChangeText={(text) => setEmail(text)}
  />
  <TextInput
    value={password} // Bind value to password state
    secureTextEntry={true}
    style={styles.input}
    placeholder="Password" // Correct typo
    autoCapitalize="none"
    onChangeText={(text) => setPassword(text)}
  />

  {loading ? (
    <ActivityIndicator size="large" color="#0000ff" />
  ) : (
    <View>
      <Button title="Login" onPress={signIn} />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  )}
  </KeyboardAvoidingView>
</View>

  );
}

export default Login;

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      flex: 1,
      justifyContent: 'center',
    },
    input: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      backgroundColor: '#fff',
    },
  });