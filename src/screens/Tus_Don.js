import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, VStack, HStack, Box } from "native-base";
import { auth } from "../firebaseConfig";
import { getFirestore, collection, query, where, getDocs, orderBy } from "firebase/firestore";

const firestore = getFirestore();

export default function DonationsScreen() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          alert("You must be logged in to view your donations.");
          return;
        }

        const q = query(
          collection(firestore, "donations"),
          where("userId", "==", user.uid),
          orderBy("timestamp", "desc") // Ordenar por fecha más reciente
        );

        const querySnapshot = await getDocs(q);
        const donationsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setDonations(donationsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching donations: ", error);
        alert("Failed to load donations.");
      }
    };

    fetchDonations();
  }, []);

  const renderDonation = ({ item }) => (
    <Box style={styles.donationBox}>
      <HStack space={3} justifyContent="space-between" alignItems="center">
        <VStack>
          <Text style={styles.categoryText}>Category: {item.categoria}</Text>
          <Text style={styles.productText}>Product: {item.producto}</Text>
          <Text style={styles.amountText}>Amount: {item.cantidad}</Text>
          <Text style={styles.locationText}>Location: {item.location}</Text>
        </VStack>
        <Text style={styles.dateText}>
          {new Date(item.timestamp.toDate()).toLocaleDateString()}
        </Text>
      </HStack>
    </Box>
  );

  return (
    <View style={styles.container}>


      <VStack space={4} alignItems="center" style={styles.content}>
        {loading ? (
          <Text style={styles.loadingText}>Loading your donations...</Text>
        ) : donations.length === 0 ? (
          <Text style={styles.noDonationsText}>
            You haven't made any donations yet.
          </Text>
        ) : (
          <FlatList
            data={donations}
            renderItem={renderDonation}
            keyExtractor={(item) => item.id}
            style={styles.list}
          />
        )}
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFF9CC", // Fondo verde claro
  },
  header: {
    backgroundColor: "#68A691", // Verde más oscuro
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    padding: 20,
    width: "100%",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  noDonationsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A4A4A",
    textAlign: "center",
  },
  list: {
    width: "100%",
  },
  donationBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2A9D8F",
  },
  productText: {
    fontSize: 16,
    color: "#4A4A4A",
  },
  amountText: {
    fontSize: 16,
    color: "#4A4A4A",
  },
  locationText: {
    fontSize: 16,
    color: "#4A4A4A",
  },
  dateText: {
    fontSize: 14,
    color: "#8E8E8E",
    textAlign: "right",
  },
});
