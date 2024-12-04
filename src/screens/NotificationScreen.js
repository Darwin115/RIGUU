import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { auth } from "../firebaseConfig";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firestore = getFirestore();

function ProfileScreen() {
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
          alert("Usuario no autenticado.");
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
        console.error("Error fetching user data: ", error);
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

      alert("Los datos se han actualizado correctamente.");
    } catch (error) {
      console.error("Error saving user data: ", error);
      alert("No se pudieron guardar los datos.");
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
        <Text style={styles.titleText}>Email:</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      {/* Nombre */}
      <View style={styles.editableField}>
        <Text style={styles.titleText}>Username:</Text>
        <TouchableOpacity onPress={() => openModal("Username", nombre)}>
          <Text style={styles.text}>{nombre}</Text>
        </TouchableOpacity>
        <MaterialIcons name="edit" size={24} color="#468585" />
      </View>

      {/* Teléfono */}
      <View style={styles.editableField}>
        <Text style={styles.titleText}>Phone:</Text>
        <TouchableOpacity onPress={() => openModal("Phone", phone)}>
          <Text style={styles.text}>{phone}</Text>
        </TouchableOpacity>
        <MaterialIcons name="edit" size={24} color="#468585" />
      </View>

      {/* Ubicación */}
      <View style={styles.editableField}>
        <Text style={styles.titleText}>Location:</Text>
        <TouchableOpacity onPress={() => openModal("Location", location)}>
          <Text style={styles.text}>{location}</Text>
        </TouchableOpacity>
        <MaterialIcons name="edit" size={24} color="#468585" />
      </View>

      {/* Botón para guardar cambios */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
      </TouchableOpacity>

      {/* Modal para edición */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar {fieldToEdit}</Text>
            <TextInput
              style={styles.modalInput}
              value={editValue}
              onChangeText={setEditValue}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setIsModalVisible(false)} color="#FF6F61" />
              <Button title="Guardar" onPress={saveEdit} color="#50B498" />
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
    backgroundColor: "#9CDBA6",
    padding: 20,
  },
  userIcon: {
    marginBottom: 20,
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginVertical: 10,
  },
  editableField: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#468585",
    textAlign: "left",
  },
  text: {
    fontSize: 18,
    color: "#468585",
    textAlign: "right",
    flex: 1,
    marginHorizontal: 10,
  },
  saveButton: {
    backgroundColor: "#50B498",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "90%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalInput: {
    width: "100%",
    borderColor: "#468585",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default ProfileScreen;
