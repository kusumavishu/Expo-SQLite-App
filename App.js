import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screens from "./src";
import Context from "./src/components/customscreens/Context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          {/* <Context> */}
          <Screens />
          {/* </Context> */}
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </>
  );
}
