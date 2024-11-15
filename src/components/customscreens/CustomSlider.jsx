import React from "react";
import { View } from "react-native";

const CustomSlider = ({ value, maxValue }) => {
  const fillWidth = `${(value / maxValue) * 100}%`;

  return (
    <View
      style={{
        width: "75%",
        marginHorizontal: "auto",
        height: 3.5,
        backgroundColor: "#cfcfcf",
        borderRadius: 2,
      }}
    >
      <View
        style={{
          width: fillWidth, // Dynamically set width based on value
          height: "100%",
          backgroundColor: "#f50515",
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default CustomSlider;
