import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { auth } from "../firebaseConfig";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const firestore = getFirestore();

function ProfileScreen() {
  const { t } = useTranslation();
  const [email, setEmail] = useState(auth.currentUser?.email || "");
  const [nombre, setNombre] = useState("Ingresar");
  const [phone, setPhone] = useState("Ingresar");
  const [location, setLocation] = useState("Ingresar");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState("");
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          alert(t("profile.user_not_authenticated"));
          return;
        }

        const userDocRef = doc(firestore, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setNombre(userData.nombre || "Ingresar");
          setPhone(userData.phone || "Ingresar");
          setLocation(userData.location || "Ingresar");
        }
      } catch (error) {
        console.error(t("profile.fetch_error"), error);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      const user = auth.currentUser;

      const userDocRef = doc(firestore, "users", user.uid);
      await setDoc(
        userDocRef,
        {
          nombre,
          phone,
          location,
        },
        { merge: true }
      );

      alert(t("profile.save_success"));
    } catch (error) {
      console.error(t("profile.save_error"), error);
      alert(t("profile.save_error_message"));
    }
  };

  const openModal = (field, value) => {
    setFieldToEdit(field);
    setEditValue(value);
    setIsModalVisible(true);
  };

  const saveEdit = () => {
    if (fieldToEdit === "Username") {
      setNombre(editValue);
    } else if (fieldToEdit === "Phone") {
      setPhone(editValue);
    } else if (fieldToEdit === "Location") {
      setLocation(editValue);
    }
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Ícono grande de usuario */}
      <Ionicons name="person-circle-outline" size={100} color="#468585" style={styles.userIcon} />

      {/* Email */}
      
      <View style={styles.field}>
      <Text style={styles.titleText}>{t("profile.email")}:</Text>
        <Text style={styles.text}>{email}</Text>
   
      </View>

      {/* Nombre */}
      <View style={styles.editableField}>
        <Text style={styles.titleText}>{t("profile.name")}:</Text>
        <TouchableOpacity onPress={() => openModal("Username", nombre)}>
          <Text style={styles.text}>{nombre}</Text>
          
        </TouchableOpacity>
        <MaterialIcons name="edit" size={24} color="#468585" />
      </View>

      {/* Teléfono */}
      <View style={styles.editableField}>
        <Text style={styles.titleText}>{t("profile.phone")}:</Text>
        <TouchableOpacity onPress={() => openModal("Phone", phone)}>
          <Text style={styles.text}>{phone}</Text>
          
        </TouchableOpacity>
        <MaterialIcons name="edit" size={24} color="#468585" />
      </View>

      {/* Ubicación */}
      <View style={styles.editableField}>
        <Text style={styles.titleText}>{t("profile.location")}:</Text>
        
        <TouchableOpacity onPress={() => openModal("Location", location)}>
          <Text style={styles.text}>{location}</Text>
          
        </TouchableOpacity>
        <MaterialIcons name="edit" size={24} color="#468585" />
        
      </View>

      {/* Botón para guardar cambios */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>{t("profile.save_changes")}</Text>
      </TouchableOpacity>

      {/* Modal para edición */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t("profile.edit")} {t("profile." + fieldToEdit)}</Text>
            <TextInput
              style={styles.modalInput}
              value={editValue}
              onChangeText={setEditValue}
            />
            <View style={styles.modalButtons}>
              <Button title={t("profile.modal_cancel")} onPress={() => setIsModalVisible(false)} color="#FF6F61" />
              <Button title={t("profile.modal_save")} onPress={saveEdit} color="#50B498" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#9CDBA6", // Fondo más claro
    padding: 20,
  },
  userIcon: {
    marginBottom: 20,
    backgroundColor: "#E5F5EB", // Fondo alrededor del icono
    borderRadius: 50,
    padding: 10,
  },
  field: {
    flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%", // Asegúrate de que sea suficiente para mostrar el contenido
  marginVertical: 10,
  padding: 5,
  },
  editableField: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9CDBA6",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "90%",
    marginVertical: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#468585",
    textAlign: "left",
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: "#2F4F4F",
    textAlign: "right",
  },
  saveButton: {
    backgroundColor: "#50B498",
    padding: 12,
    borderRadius: 25,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "#9CDBA6",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#468585",
    marginBottom: 15,
  },
  modalInput: {
    width: "100%",
    borderColor: "#468585",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});


export default ProfileScreen;
