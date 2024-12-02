import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Switch, Image } from 'react-native';
import { Mail } from 'lucide-react-native';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignInWithEmail = () => {
    console.log('Email sign in');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>  
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Enter your email below to create your account</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Email Login Button */}
        <TouchableOpacity
          style={styles.emailButton}
          onPress={handleSignInWithEmail}
        >
          <View style={styles.buttonContent}>
            <Mail size={20} color="white"/>
            <Text style={styles.buttonText}>Login with Email</Text>
          </View>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
          <View style={styles.divider} />
        </View>

        {/* Wallet Button */}
        <TouchableOpacity
          style={styles.walletButton}
          onPress={() => {}}
        >
          <Text style={styles.walletButtonText}>Connect with Metamask</Text>
        </TouchableOpacity>

        {/* Terms Switch */}
        <View style={styles.termsContainer}>
          <Switch
            value={acceptTerms}
            onValueChange={setAcceptTerms}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={acceptTerms ? '#2563eb' : '#f4f3f4'}
          />
          <Text style={styles.termsText}>Accept terms and conditions</Text>
        </View>

        {/* Terms Text */}
        <View style={styles.termsTextContainer}>
          <Text style={styles.termsDescription}>
            By clicking, you agree to our{' '}
            <Text style={styles.link} onPress={() => {}}>
              Terms of Service
            </Text>
            {' '}and{' '}
            <Text style={styles.link} onPress={() => {}}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    position: 'relative'
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    inset: 0
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  emailButton: {
    width: '100%',
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 12,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    paddingHorizontal: 16,
    color: '#666',
    fontSize: 12,
  },
  walletButton: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  walletButtonText: {
    fontSize: 16,
    color: '#000',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  termsText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  termsTextContainer: {
    marginTop: 8,
    paddingHorizontal: 24,
  },
  termsDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  link: {
    color: '#2563eb',
    textDecorationLine: 'underline',
  }
});

export default LoginPage;