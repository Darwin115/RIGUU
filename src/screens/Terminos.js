import { View, Text, StyleSheet } from "react-native";

function Terms({ navigation }) {
  return (
    <View style={styles.container}>
    

      {/* Box with the terms and conditions text */}
      <View style={styles.termsBox}>
        <Text style={styles.termsText}>
          1. Acceptance: By using RIGUU, you agree to these terms. If you do not agree, do not use the app.{"\n\n"}
          2. Use of the application: RIGUU is for personal use, not commercial. You must use it ethically.{"\n\n"}
          3. Intellectual Property: All content on RIGUU is owned by the app or its licensors. You cannot copy it without permission.{"\n\n"}
          4. Privacy: RIGUU collects data according to its privacy policy. Your information is protected.{"\n\n"}
          5. Location: The app may use your location to show nearby collection centers.{"\n\n"}
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
  headerText: {
    fontSize: 28,  
    fontWeight: 'bold',
    color: '#468585',
    marginBottom: 20,
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
