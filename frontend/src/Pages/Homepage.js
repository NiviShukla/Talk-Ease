import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
   d="flex"
  justifyContent="center"
  alignItems="center"
  p={3}
  bg="linear-gradient(135deg, rgba(255,255,255,0), rgba(255,255,255,0))"
  backdropFilter="blur(1px)"
  w="100%"
  m="40px 0 15px 0"
  borderRadius="lg"
  borderWidth="1px"
  position="relative"
>
  <Text
    fontSize="4xl"
    fontFamily="Work Sans"
    fontWeight="bold"
    textAlign="center"
    bgClip="text"
    bgGradient="linear(to-l, #348f50, #56b4d3)"
    transition="transform 0.2s ease-in-out"
    _hover={{ transform: 'scale(1.1)' }}

  >
Talk-Ease
  </Text>
      </Box>
      <Box 
bg="linear-gradient(135deg, rgba(255,255,255,0), rgba(255,255,255,0))"
  backdropFilter="blur(1px)"
        w="100%" p={4} 
      borderRadius="lg" 
      borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="whatsapp.200">Login</Tab>
            <Tab color="whatsapp.200">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
