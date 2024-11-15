import {
  Alert,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TextInput } from "react-native-gesture-handler";

import AntDesign from "@expo/vector-icons/AntDesign";

import {
  deleteUserEntry,
  readAllUserList,
  updateUserEntry,
} from "./Operations";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { userData } from "./customscreens/Context";

const Setting = () => {
  const { data } = useContext(userData);

  const [usersLists, setusersLists] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const bottomSheetRef = useRef(null);
  const [updateDetails, setUpdateDetails] = useState({
    id: "",
    fullname: "",
    email: "",
    phoneNumber: "",
    age: "",
  });

  const [newPsd, setNewPsd] = useState("");

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index === 0) {
      bottomSheetRef.current?.close();
    }
  }, []);

  const handleOpenPress = (item) => {
    console.log("items", item.age);
    bottomSheetRef.current?.expand();
    setUpdateDetails((prev) => ({
      ...prev,
      id: item.id,
      fullname: item.fullName,
      email: item.email,
      phoneNumber: item.phoneNumber,
      age: item.age,
    }));
  };
  const handleClosePress = () => {
    bottomSheetRef.current.close();
  };

  useEffect(() => {
    handleReadEntries();
    bottomSheetRef.current?.close();
  }, []);

  const handleReadEntries = async () => {
    try {
      const data = await readAllUserList();
      console.log("Fetched Data:", data);
      setusersLists(data);
    } catch (error) {
      console.error("Error handling entries:", error);
    }
  };

  const handleUpdate = (item) => {
    Alert.alert(
      "Confirmation",
      "Do You Want To Update User Data?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "UPDATE",
          onPress: () => handleOpenPress(item),
        },
      ],
      { cancelable: true }
    );
  };

  const handleConfirmUpdate = async (values) => {
    console.log(values);
    try {
      const res = await updateUserEntry(values);
      handleClosePress();
      handleReadEntries();
    } catch (error) {
      console.log("Error in upadteing", error);
    }
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Confirmation",
      "Do You Want To Proceed?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => handleConfirmDelete(id),
        },
      ],
      { cancelable: true }
    );
  };

  const handleConfirmDelete = async (id) => {
    console.log("id", id);
    try {
      const res = await deleteUserEntry(id);
      console.log("resulrt", res);
      handleReadEntries();
    } catch (error) {
      console.log("error5", error);
    }
  };

  const renderItem = ({ item }) => (
    <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
      <Text className="w-[25%] text-xs">{item.fullName || "--"}</Text>
      <Text className="w-[30%] text-xs">{item.email || "--"}</Text>
      <Text className="w-[20%] text-xs">{item.phoneNumber || "--"}</Text>
      <Text className="w-[10%] text-xs">{item.age || "--"}</Text>
      <View className="flex-row w-[15%] justify-between">
        <TouchableOpacity onPress={() => handleUpdate(item)}>
          <AntDesign name="edit" size={20} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <AntDesign name="delete" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleNewPassword = () => {};

  return (
    <>
      <SafeAreaView>
        <Text className="text-center text-xl font-semibold bg-gray-500">
          Your Account
        </Text>
        <View className="w-[95%] mx-auto">
          <View className="flex flex-row justify-between items-center">
            <Text className="font-semibold text-base">Full Name</Text>
            <Text>{data[0].fullName}</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="font-semibold text-base">Email</Text>
            <Text>{data[0].email}</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="font-semibold text-base">Mobile Number</Text>
            <Text>{data[0].phoneNumber}</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="font-semibold text-base">Age</Text>
            <Text>{data[0].age}</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="font-semibold text-base">password</Text>
            <Text>{data[0].password}</Text>
          </View>
          <View className="flex flex-row justify-end items-center mt-2">
            <TouchableOpacity
              className="bg-green-500 px-3 py-2 rounded"
              onPress={() => setIsModalVisible(true)}
            >
              <Text className="font-bold text-sm">Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-center text-xl font-semibold mt-2">UserList</Text>
        <View className="flex-row justify-between items-center p-4 bg-gray-200">
          <Text className="w-[25%] font-semibold ">Name</Text>
          <Text className="w-[30%] font-semibold ">Email</Text>
          <Text className="w-[20%] font-semibold ">Phone</Text>
          <Text className="w-[10%] font-semibold ">Age</Text>
          <Text className="w-[15%] font-semibold text-center">Actions</Text>
        </View>
        <FlatList
          data={usersLists}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </SafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["37%"]}
        initialSnapIndex={0}
        onChange={handleSheetChanges}
      >
        <BottomSheetView>
          <View>
            <Text className="text-center text-xl font-semibold">
              Update User
            </Text>
            <View className="flex flex-row items-center w-[90%] mx-auto mt-3">
              <Text className="text-base font-semibold w-[25%]">Full Name</Text>
              <TextInput
                className="pl-2 my-1 h-[38px] border rounded w-[75%]"
                placeholder="Enter full name"
                placeholderTextColor="black"
                value={updateDetails.fullname}
                onChangeText={(text) =>
                  setUpdateDetails((prev) => ({
                    ...prev,
                    fullname: text,
                  }))
                }
              />
            </View>
            <View className="flex flex-row items-center w-[90%] mx-auto">
              <Text className="text-base font-semibold w-[25%]">email</Text>
              <TextInput
                className="pl-2 my-1 h-[38px] border rounded w-[75%]"
                placeholder="Enter email"
                placeholderTextColor="black"
                value={updateDetails.email}
                onChangeText={(text) =>
                  setUpdateDetails((prev) => ({
                    ...prev,
                    email: text,
                  }))
                }
              />
            </View>
            <View className="flex flex-row items-center w-[90%] mx-auto">
              <Text className="text-base font-semibold w-[25%]">
                Phone Number
              </Text>
              <TextInput
                className="pl-2 my-1 h-[38px] border rounded w-[75%]"
                placeholder="Enter Phone Number"
                placeholderTextColor="black"
                value={updateDetails.phoneNumber}
                onChangeText={(text) =>
                  setUpdateDetails((prev) => ({
                    ...prev,
                    phoneNumber: text,
                  }))
                }
              />
            </View>
            <View className="flex flex-row items-center w-[90%] mx-auto">
              <Text className="text-base font-semibold w-[25%]">Age</Text>
              <TextInput
                className="pl-2 my-1 h-[38px] border rounded w-[75%]"
                placeholder="Enter age"
                placeholderTextColor="black"
                value={updateDetails.age.toString()}
                onChangeText={(text) =>
                  setUpdateDetails((prev) => ({
                    ...prev,
                    age: text,
                  }))
                }
              />
            </View>
            <View className="flex justify-center items-center mt-3">
              <TouchableOpacity
                className="bg-green-400 w-[25%] rounded"
                onPress={() => {
                  handleConfirmUpdate(updateDetails);
                }}
              >
                <Text className="text-center py-2 px-1 font-semibold">
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>

      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <StatusBar />
        <View
          style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="justify-center items-center"
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text className="text-center text-base font-bold">
              Change The Password
            </Text>
            <View className="flex flex-row items-center my-4">
              <Text className="w-[35%]">New Password</Text>
              <TextInput
                className="border-[0.5px] w-[65%] pl-2 rounded"
                placeholder="enter your new Password"
                value={newPsd}
                onChangeText={(text) => setNewPsd(text)}
              />
            </View>
            <View className="flex flex-row justify-end">
              <TouchableOpacity
                className="mr-5 bg-gray-100 px-2 py-1 rounded"
                onPress={() => {
                  setIsModalVisible(false);
                }}
              >
                <Text>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="mr-1 bg-green-100 px-2 py-1 rounded"
                onPress={() => {
                  handleNewPassword();
                }}
              >
                <Text>UPDATE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Setting;

const styles = StyleSheet.create({});
