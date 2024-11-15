import React, { useContext, useState } from "react";
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Image from "../../assets/DigitalMarketingImage.jpg";

import { insertUserValues, readAllUserList, validateLogin } from "./Operations";
import { useNavigation } from "@react-navigation/native";
import { userData } from "./customscreens/Context";

const HomeScreen = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigation();
  const { data, handleFunction } = useContext(userData);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
  });

  const [logindetails, setLoginDetails] = useState({
    usermail: "",
    userpswd: "",
  });

  const handleRegister = async () => {
    console.log("successful");
    try {
      const res = await insertUserValues(details);

      setDetails((prev) => ({
        ...prev,
        name: "",
        email: "",
        phoneNumber: "",
        age: "",
        password: "",
      }));
    } catch (error) {
      console.error("Error adding entries:", error);
    }

    handleReadEntries();
  };

  const handleLogin = async () => {
    console.log("clickedlogin");
    console.log("loginDetails", logindetails);
    try {
      const res = await validateLogin(logindetails);
      console.log("result in res ", res);
      if (res) {
        navigation.navigate("Tabs");
        handleFunction(res);
      } else if (res === null) {
        setLoginDetails((prev) => ({
          ...prev,
          usermail: "",
          userpswd: "",
        }));
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.error("Error adding entries:", error);
    }
  };

  const handleReadEntries = async () => {
    try {
      const data = await readAllUserList();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error handling entries:", error);
    }
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <TextInput */}
        <ImageBackground
          source={Image}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <View className="w-[80%] mx-auto bg-[#ffffffec] p-5 rounded">
            {isLogin ? (
              <View>
                <View className="flex flex-row justify-center items-center mb-3">
                  <Text className="text-xl font-bold bg-[#a2a2a298] rounded px-2 py-1">
                    Sign Up
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsLogin(!isLogin);
                    }}
                  >
                    <Text className=" text-xl font-bold underline px-2 py-1">
                      Log in
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="border border-[#2e2e2e9e] rounded my-1 ">
                  <TextInput
                    className="ml-2 h-[35px]"
                    placeholder="Enter full name"
                    placeholderTextColor="black"
                    value={details.name}
                    onChangeText={(text) =>
                      setDetails((prev) => ({
                        ...prev,
                        name: text,
                      }))
                    }
                  />
                </View>
                <View className="border border-[#2e2e2e9e] rounded my-1 ">
                  <TextInput
                    className="ml-2 h-[35px]"
                    placeholder="Enter email"
                    placeholderTextColor="black"
                    value={details.email}
                    onChangeText={(text) =>
                      setDetails((prev) => ({
                        ...prev,
                        email: text,
                      }))
                    }
                  />
                </View>
                <View className="border border-[#2e2e2e9e] rounded my-1 ">
                  <TextInput
                    className="ml-2 h-[35px]"
                    placeholder="Enter phone number"
                    placeholderTextColor="black"
                    value={details.phoneNumber}
                    onChangeText={(text) =>
                      setDetails((prev) => ({
                        ...prev,
                        phoneNumber: text,
                      }))
                    }
                  />
                </View>
                <View className="border border-[#2e2e2e9e] rounded my-1 ">
                  <TextInput
                    className="ml-2 h-[35px]"
                    placeholder="Enter age"
                    placeholderTextColor="black"
                    value={details.age}
                    onChangeText={(text) =>
                      setDetails((prev) => ({
                        ...prev,
                        age: text,
                      }))
                    }
                  />
                </View>
                <View className="border border-[#2e2e2e9e] rounded my-1 ">
                  <TextInput
                    className="ml-2 h-[35px]"
                    placeholder="Enter password"
                    placeholderTextColor="black"
                    value={details.password}
                    onChangeText={(text) =>
                      setDetails((prev) => ({
                        ...prev,
                        password: text,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    console.log("okay");
                    handleRegister();
                  }}
                >
                  <View className="bg-[#2246a2db] p-2 rounded mt-2">
                    <Text className="text-center text-white font-bold tracking-widest text-base ">
                      Sign Up
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <View className="flex flex-row justify-center items-center mb-3">
                  <TouchableOpacity
                    onPress={() => {
                      setIsLogin(!isLogin);
                    }}
                  >
                    <Text className=" text-xl font-bold underline px-2 py-1">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                  <Text className="text-xl font-bold bg-[#a2a2a298] rounded px-2 py-1">
                    Log In
                  </Text>
                </View>
                <View className="border border-[#2e2e2e9e] rounded my-1 ">
                  <TextInput
                    className="ml-2 h-[35px]"
                    placeholder="Enter email"
                    placeholderTextColor="black"
                    value={details.usermail}
                    onChangeText={(text) =>
                      setLoginDetails((prev) => ({
                        ...prev,
                        usermail: text,
                      }))
                    }
                  />
                </View>
                <View className="border border-[#2e2e2e9e] rounded my-1 ">
                  <TextInput
                    className="ml-2 h-[35px]"
                    placeholder="Enter password"
                    placeholderTextColor="black"
                    value={details.userpswd}
                    onChangeText={(text) =>
                      setLoginDetails((prev) => ({
                        ...prev,
                        userpswd: text,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    handleLogin();
                  }}
                >
                  <View className="bg-[#2246a2db] p-2 rounded mt-2">
                    <Text className="text-center text-white font-bold tracking-widest text-base ">
                      Login
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
