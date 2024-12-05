import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, VStack, HStack, Box } from "native-base";
import { Skeleton, SkeletonText } from "native-base";
import { auth } from "../firebaseConfig";
import { getFirestore, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const firestore = getFirestore();

export default function DonationsScreen() {
  const { t } = useTranslation();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          alert(t("your_donations.must_be_logged_in"));
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
        console.error(t("your_donations.fetch_error"), error);
        alert(t("your_donations.load_fail"));
      }
    };

    fetchDonations();
  }, []);

  const renderDonation = ({ item }) => (
    <Box style={styles.donationBox}>
      <HStack space={3} justifyContent="space-between" alignItems="center">
        <VStack>
          <Text style={styles.categoryText}>{t("your_donations.category")}: {t(`your_donations.categories.${item.categoria}`)}</Text>
          <Text style={styles.productText}>{t("your_donations.product")}: {t(`your_donations.products.${item.producto}`)}</Text>
          <Text style={styles.amountText}>{t("your_donations.amount")}: {item.cantidad}</Text>
          <Text style={styles.locationText}>{t("your_donations.location")}: {t(`your_donations.centers.${item.location}`)}</Text>
          <Text style={styles.dateText}>
          {new Date(item.timestamp.toDate()).toLocaleDateString()}
        </Text>
        </VStack>
        
      </HStack>
    </Box>
  );

  return (
    <View style={styles.container}>


      <VStack space={4} alignItems="center" style={styles.content}>
        {loading ? (
          <>
          <Skeleton height={150} color={"#ffffff"}/>
          <Skeleton height={150} color={"#ffffff"}/>
          <Skeleton height={150} color={"#ffffff"}/>
          <Skeleton height={150} color={"#ffffff"}/>
          <Skeleton height={150} color={"#ffffff"}/>
          
          </>
        ) : donations.length === 0 ? (
          <Text style={styles.noDonationsText}>
            {t("your_donations.no_donations")}
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
    backgroundColor: "#9CDBA6", // Fondo verde claro
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
    color: "#fff",
    textAlign: "center",
  },
  list: {
    width: "100%",
  },
  donationBox: {
    backgroundColor: "#468585",
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
    color: "#fff",
  },
  productText: {
    fontSize: 16,
    color: "#fff",
  },
  amountText: {
    fontSize: 16,
    color: "#fff",
  },
  locationText: {
    fontSize: 16,
    color: "#fff",

  },
  dateText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "right",
    position: "fixed", // Utilizamos posición absoluta
    bottom: 1,           // Asegura que esté abajo
    right: 1,            // Asegura que esté a la derecha
  },
});
