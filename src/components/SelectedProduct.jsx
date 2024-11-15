import React, { useRef, useState } from "react";
import { Image, Share, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const SelectedProduct = ({ route }) => {
  const { product } = route.params;
  console.log("selectedProduct%%", product);

  const imageList = [product.thumbnail, ...product.images];

  const parts = product.description.split(
    new RegExp(`(${product.title}|${product.brand})`, "gi")
  );

  const ratingcount = product.reviews.reduce(
    (sum, item) => sum + item.rating,
    0
  );

  const topRating =
    product.reviews.find((review) => review.rating === 5) ||
    product.reviews.find((review) => review.rating === 4) ||
    product.reviews.find((review) => review.rating === 3);

  const navigate = useNavigation();

  const handleShare = async (product) => {
    try {
      const result = await Share.share({
        message: `${product.thumbnail}`,
        url: `${product.thumbnail}`,
        title: "Product Title",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with activity type:", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  const [count, setCount] = useState(1);

  const addProduct = () => {
    if (product.stock > count && product.minimumOrderQuantity > count) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decProduct = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <SafeAreaView edges={["right", "bottom", "left"]} style={{ flex: 1 }}>
        <View style={{ flex: 0.9 }}>
          <ScrollView>
            <View style={{ flex: 1 }}>
              <FlatList
                data={imageList}
                horizontal
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View>
                    <Image
                      source={{ uri: item }}
                      style={{
                        backgroundColor: "#e3e3e3dd",
                        width: 300,
                        height: 300,
                        marginRight: 10,
                      }}
                      resizeMode="contain"
                    />
                  </View>
                )}
              />
            </View>
            <View className="w-[95%] mx-auto mt-2">
              <Text style={{ color: "#666" }}>
                {parts.map((part, index) =>
                  typeof part === "string" &&
                  (part.toLowerCase() === (product.title || "").toLowerCase() ||
                    part.toLowerCase() ===
                      (product.brand || "").toLowerCase()) ? (
                    <Text
                      key={index}
                      style={{ fontWeight: "bold", color: "#000" }}
                    >
                      {part}
                    </Text>
                  ) : (
                    <Text key={index}>{part}</Text>
                  )
                )}
              </Text>
              <View className="flex flex-row items-center my-2">
                <Text className="text-[#ff1616b8] line-through mr-1 font-semibold">
                  MRP{" "}
                  <FontAwesome6
                    name="indian-rupee-sign"
                    size={14}
                    color="#ff1616b8"
                  />
                  {product.price}
                </Text>
                <Text className="font-bold mr-2">
                  <FontAwesome6
                    name="indian-rupee-sign"
                    size={14}
                    color="black"
                  />
                  {(
                    product.price -
                    (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                </Text>
                <Text className="bg-[#ea5252de] p-1 rounded">
                  {product.discountPercentage}% OFF!
                </Text>
              </View>
            </View>

            <View className="border-t-[0.2px] w-[96%] mx-auto"></View>

            <View className="w-[92%] mx-auto ">
              <View className="flex flex-row items-center justify-between">
                <Text className="font-bold text-lg">Rating & Reviews</Text>
                <View className="mt-1">
                  <Entypo name="chevron-down" size={26} color="black" />
                </View>
              </View>
              <View className="flex flex-row items-center">
                <View className="flex flex-row items-center bg-[#57ff9add] py-[4px] px-2 mr-2 rounded">
                  <Text className="mr-[2px] font-semibold">
                    {product.rating.toFixed(1)}
                  </Text>
                  <FontAwesome name="star" size={16} color="black" />
                </View>
                <View>
                  <Text className="text-[#666]">
                    {ratingcount} ratings | {product.reviews.length} reviews
                  </Text>
                  <View className="flex flex-row justify-center items-center">
                    <MaterialIcons name="verified" size={17} color="green" />
                    <Text className="text-[#666]">By Verified Buyers Only</Text>
                  </View>
                </View>
              </View>
              <View className="p-4 bg-white rounded-md shadow-md mt-2">
                <View className="flex-row items-center mb-2">
                  <Text className="text-lg font-semibold">
                    {topRating.reviewerName}
                  </Text>
                  <Text className="text-sm text-gray-500 ml-2">
                    ({topRating.reviewerEmail})
                  </Text>
                </View>
                <View className="flex flex-row items-center">
                  <View className="flex-row items-center mr-2">
                    <Text className="text-base font-medium mr-[2px]">
                      {topRating.rating}
                    </Text>
                    <FontAwesome name="star" size={14} color="black" />
                  </View>
                  <Text className="text-gray-700 italic text-lg">
                    {topRating.comment}
                  </Text>
                </View>
                {/* <Text className="text-xs text-gray-400">
              {new Date(topRating.date).toLocaleDateString()}
            </Text> */}
              </View>

              <View className="flex flex-col justify-centers my-3">
                <Text
                  className="text-[#168d47] font-semibold text-base"
                  onPress={() => {
                    // console.log("clicked", item);
                    navigate.navigate("SelectedProductReview", {
                      productreview: product.reviews,
                      productrating: product.rating,
                    });
                  }}
                >
                  View all reviews({product.reviews.length}){" "}
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={14}
                    color="#168d47"
                  />
                </Text>
              </View>
            </View>

            <View className="border-t-[0.2px] w-[96%] mx-auto"></View>
            <View className="w-[95%] mx-auto">
              <Text className="text-base">{product.description}</Text>
              <View className="mt-1">
                <Text className="text-lg font-bold">Warranty Information</Text>
                <Text>{product.warrantyInformation}</Text>
              </View>
              <View className="mt-1">
                <Text className="text-lg font-bold">Shipping Information</Text>
                <Text>{product.shippingInformation}</Text>
              </View>
              <View className="mt-1">
                <Text className="text-lg font-bold">Return Policy</Text>
                <Text>{product.returnPolicy}</Text>
              </View>
              <View className="flex flex-row mt-5 items-center">
                <Text className="text-xl font-semibold w-[50%] ">
                  Select Quality
                </Text>
                <View className="flex flex-row justify-center items-center border rounded">
                  <Text
                    className="px-4 text-xl bg-gray-300 rounded-bl rounded-tl"
                    onPress={() => {
                      decProduct();
                    }}
                  >
                    <AntDesign name="minus" size={26} color="black" />
                  </Text>
                  <Text className="px-6 text-lg">{count}</Text>
                  <Text
                    className="px-4 text-xl bg-gray-300 rounded-br rounded-tr"
                    onPress={() => addProduct()}
                  >
                    <AntDesign name="plus" size={24} color="black" />
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View className="absolute -bottom-2 w-full flex flex-row justify-center items-center my-2 border-t-[0.2px] py-3 bg-g ray-100">
          <View className="w-[25%] flex justify-center items-center">
            <TouchableOpacity onPress={() => handleShare(product)}>
              <View className="px-6 py-3 bg-blue-300 rounded">
                <AntDesign name="sharealt" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="w-[25%] flex justify-center items-center">
            <View className="px-6 py-3 bg-green-300 rounded">
              <AntDesign
                name={`${false ? "heart" : "hearto"}`}
                size={24}
                color={`${false ? "#a30016" : "black"}`}
              />
            </View>
          </View>
          <View className="w-[50%] flex justify-center items-center">
            <TouchableOpacity>
              <View className="px-14 py-4 bg-red-500 rounded">
                <Text>Add To Card</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SelectedProduct;

const styles = StyleSheet.create({});
