import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomSlider from "../components/customscreens/CustomSlider";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SelectedProductReview = ({ route }) => {
  const { productreview, productrating } = route.params;
  console.log(productreview, productrating);

  // Initialize an object to hold the counts for each rating (1-5)
  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  // Loop through each review and count the ratings
  productreview.forEach((review) => {
    if (ratingCounts.hasOwnProperty(review.rating)) {
      ratingCounts[review.rating] += 1;
    }
  });

  //   console.log(ratingCounts["1"]);

  return (
    <>
      <View className="flex flex-row justify-between w-[95%]">
        <View className="flex flex-row items-center border-r-[0.5px] w-[33%]">
          <Text className="text-6xl font-semibold">
            {productrating.toFixed(1)}{" "}
            <Octicons name="star-fill" size={24} color="black" />
          </Text>
        </View>
        <View className="w-[65%] flex flex-col justify-between items-center">
          <View className="my-2  flex flex-row justify-center items-center">
            <Text className="mr-2">
              5 <Octicons name="star-fill" size={15} color="black" />
            </Text>
            <CustomSlider value={ratingCounts["5"]} maxValue={5} />
            <Text className="ml-1">{ratingCounts["5"]}</Text>
          </View>
          <View className="my-2 flex flex-row justify-center items-center">
            <Text className="mr-2">
              4 <Octicons name="star-fill" size={15} color="black" />
            </Text>
            <CustomSlider value={ratingCounts["4"]} maxValue={5} />
            <Text className="ml-1">{ratingCounts["4"]}</Text>
          </View>
          <View className="my-2 flex flex-row justify-center items-center">
            <Text className="mr-2">
              3 <Octicons name="star-fill" size={15} color="black" />
            </Text>
            <CustomSlider value={ratingCounts["3"]} maxValue={5} />
            <Text className="ml-1">{ratingCounts["3"]}</Text>
          </View>
          <View className="my-2 flex flex-row justify-center items-center">
            <Text className="mr-2">
              2 <Octicons name="star-fill" size={15} color="black" />
            </Text>
            <CustomSlider value={ratingCounts["2"]} maxValue={5} />
            <Text className="ml-1">{ratingCounts["2"]}</Text>
          </View>
          <View className="my-2 flex flex-row justify-center items-center">
            <Text className="mr-2">
              1 <Octicons name="star-fill" size={15} color="black" />
            </Text>
            <CustomSlider value={ratingCounts["1"]} maxValue={5} />
            <Text className="ml-1">{ratingCounts["1"]}</Text>
          </View>
        </View>
      </View>
      <View className="border-t-[0.2px] w-[96%] mx-auto mb-5"></View>
      <View className="w-[95%] mx-auto">
        <Text className="text-xl font-semibold underline">
          All Product Reviews
        </Text>
      </View>

      {productreview.map((item, index) => {
        return (
          <View
            className="p-4 bg-white rounded-md shadow-md mt-3 w-[90%] mx-auto"
            key={index}
          >
            <View className="flex-row items-center mb-2">
              <Text className="text-lg font-semibold">{item.reviewerName}</Text>
              <Text className="text-sm text-gray-500 ml-2">
                ({item.reviewerEmail})
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="flex-row items-center mr-2">
                <Text className="text-base font-medium mr-[2px]">
                  {item.rating}
                </Text>
                <FontAwesome name="star" size={14} color="black" />
              </View>
              <Text className="text-gray-700 italic text-lg">
                {item.comment}
              </Text>
            </View>
            {/* <Text className="text-xs text-gray-400">
              {new Date(item.date).toLocaleDateString()}
            </Text> */}
          </View>
        );
      })}
    </>
  );
};

export default SelectedProductReview;

const styles = StyleSheet.create({});
