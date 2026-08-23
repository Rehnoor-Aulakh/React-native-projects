import React, { useState } from "react";
import {
  View, 
  Text,
  Button
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
function App() {
  const [count, setCount] = useState<number>(0);
  const displayCount = Number.isFinite(count) ? count : 0;

  return (<SafeAreaView>
    <View style={{backgroundColor: "blue"}}>
      <Text style={{fontSize: 30, color: "white", padding: 20}}>
        Hello World!
      </Text>
      <Text style={{fontSize: 22, color: "white", paddingHorizontal: 20, paddingBottom: 12}}>
        Count: {displayCount}
      </Text>
      <Button
        title="Increment"
        onPress={() => {
          setCount((prevCount) => (Number.isFinite(prevCount) ? prevCount : 0) + 1);
        }}
      />
    </View>
  </SafeAreaView>) 
}

export default App;
