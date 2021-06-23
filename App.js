import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  NativeBaseProvider,
  Text,
  Box,
  extendTheme,
  Button,
  Stack,
  Icon,
} from "native-base";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
  primary: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E",
  },
  // Redefinig only one shade, rest of the color will remain same.
  amber: {
    400: "#d97706",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
};

const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NativeBaseProvider theme={theme}>
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        space={1}
        alignItems={{
          base: "center",
          md: "flex-start",
        }}
        justifyContent="center"
        bg="primary.100"
        flex={1}
      >
        <Text>Hello world</Text>
        {["xs", "sm", "md", "lg"].map((size) => (
          <Box>
            <Button
              colorScheme="secondary"
              onPress={() => console.log("hello world")}
              key={size}
              size={size}
            >
              PRIMARY
            </Button>
          </Box>
        ))}
        <Box>
          <Button isLoading isLoadingText="Submitting">
            BUTTON
          </Button>
        </Box>
        <Box>
          <Button
            variant="outline"
            startIcon={
              <Icon as={MaterialCommunityIcons} name="email" size={5} />
            }
          >
            Email
          </Button>
        </Box>
      </Stack>
    </NativeBaseProvider>
  );
}
