import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getDetails } from "../utils/ApiCalls";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MainHome = () => {
  const [ProductDetails, setProductDetails] = useState([]);
  const [fill, setFill] = useState({});
  const navigate = useNavigation();

  useEffect(() => {
    const handleProducts = async () => {
      try {
        const response = await getDetails();
        if (response.status === 200) {
          setProductDetails(response.data.products);
        }
        // console.log("response", response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    handleProducts();
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <TouchableWithoutFeedback>
            <View className="flex-row flex-wrap">
              {ProductDetails &&
                ProductDetails.map((item, index) => {
                  return (
                    <TouchableOpacity
                      className="w-[45%] flex flex-col m-2 "
                      key={index}
                    >
                      <View className="border p-1 rounded">
                        <View className="relative">
                          <Image
                            className="bg-[#e3e3e3dd] rounded object-cover "
                            source={{ uri: item.thumbnail }}
                            style={{ width: "100%", height: 170 }}
                          />
                          <View className="absolute bottom-2 left-2 flex flex-col justify-center items-center rounded-xl bg-[#c82525c2] w-[38%]">
                            <View>
                              <Text className="text-white text-xs font-medium my-1">
                                Top Rated
                              </Text>
                            </View>
                            <View className="flex flex-row justify-evenly items-center bg-gray-300 rounded-full w-full px-1">
                              <Text className="mr-[1px] text-xs text-black font-medium ">
                                {item.rating}
                              </Text>
                              <AntDesign
                                name="star"
                                size={10}
                                color="#f57542"
                              />
                              <Text className="ml-[1px] text-xs text-black font-medium ">
                                | {item.minimumOrderQuantity}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View className="flex flex-row justify-between my-1">
                          <View>
                            <Text className="text-black font-bold">
                              {item.brand || item.title}
                            </Text>
                            <Text className="text-[#1818188a]">
                              {item.title}
                            </Text>
                          </View>
                          <View className="mr-[2px] mt-[2px]">
                            <AntDesign
                              name={`${fill[item.sku] ? "heart" : "hearto"}`}
                              size={19}
                              color={`${fill[item.sku] ? "#a30016" : "black"}`}
                              onPress={() => {
                                setFill((prev) => {
                                  // Check if item.sku is already in fill and toggle its presence
                                  if (prev[item.sku]) {
                                    const updatedFill = { ...prev }; // If exists, remove it (unfill)
                                    delete updatedFill[item.sku];
                                    return updatedFill;
                                  } else {
                                    return { ...prev, [item.sku]: true }; // If not, add it (fill)
                                  }
                                });
                              }}
                            />
                          </View>
                        </View>

                        <View className="flex flex-row">
                          <Text className="text-[#ff1616b8] line-through mr-1 font-semibold">
                            <FontAwesome6
                              name="indian-rupee-sign"
                              size={14}
                              color="#ff1616b8"
                            />
                            {item.price}
                          </Text>
                          <Text className="text-[#009202e9] font-semibold">
                            ({item.discountPercentage}% off)
                          </Text>
                        </View>
                        <Text className="text-[#000000] font-semibold">
                          Best Price{" "}
                          <FontAwesome6
                            name="indian-rupee-sign"
                            size={14}
                            color="black"
                          />
                          {(
                            item.price -
                            (item.price * item.discountPercentage) / 100
                          ).toFixed(2)}{" "}
                          with offer
                        </Text>
                        <TouchableOpacity
                          className="bg-green-500 font-bold text-white py-2 my-1 rounded "
                          onPress={() => {
                            console.log("clicked", item);
                            navigate.navigate("SelectedProduct", {
                              product: item,
                            });
                          }}
                        >
                          <Text className="text-center">View</Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default MainHome;

const styles = StyleSheet.create({});
