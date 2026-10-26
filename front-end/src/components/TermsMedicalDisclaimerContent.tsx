import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GREEN = '#164F43';
const BG = '#F8FAFB';
const TEXT = '#18312F';
const BORDER = '#E0E5E5';

export default function TermsMedicalDisclaimerContent({ onBack }: { onBack?: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => onBack?.()} style={styles.backButton} accessibilityRole="button" accessibilityLabel="Go back">
          <Ionicons name="arrow-back" size={25} color={GREEN} />
        </Pressable>
        <Text style={styles.headerTitle}>Medical Disclaimer</Text>
        <View style={{ width: 36 }} />
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.legalPageContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.lastUpdated}>Last updated: October 5, 2026</Text>
        <Text style={styles.legalHeading}>For Information Only</Text>
        <Text style={styles.legalBody}>MediScan helps you keep track of medicines at home. It does not diagnose, treat or give medical advice.</Text>
        <Text style={styles.legalHeading}>Verify Scan Results</Text>
        <Text style={styles.legalBody}>Text recognition can make mistakes. Always double-check the medicine name, dosage and expiration date on the actual package.</Text>
        <Text style={styles.legalHeading}>Consult a Professional</Text>
        <Text style={styles.legalBody}>Ask your doctor or pharmacist before starting, stopping or changing any medicine.</Text>
        <Text style={styles.legalHeading}>Emergencies</Text>
        <Text style={styles.legalBody}>In case of a medical emergency or suspected overdose, call your local emergency number immediately.</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },
  header: { height: 58, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, borderBottomWidth: 1, borderBottomColor: BORDER, backgroundColor: BG },
  backButton: { width: 36, alignItems: 'flex-start', justifyContent: 'center' },
  headerTitle: { fontSize: 21, fontWeight: '700', color: TEXT },
  scroll: { flex: 1 },
  legalPageContent: { paddingHorizontal: 14, paddingTop: 10, paddingBottom: 30 },
  lastUpdated: { color: '#7C8986', fontSize: 12, lineHeight: 17, marginBottom: 10 },
  legalHeading: { color: '#243B38', fontSize: 15, lineHeight: 21, fontWeight: '700', marginTop: 2, marginBottom: 6 },
  legalBody: { color: '#687875', fontSize: 13, lineHeight: 19, marginBottom: 12 },
});
