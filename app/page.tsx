import { SimpleGrid, Box, Image, VStack, Text, Flex } from "@chakra-ui/react"

export default function Home() {
    return (
      <main>
        <Flex justify="center" padding="2%">
          <SimpleGrid columns={{base:1, lg:2}} marginTop="5" gap="6" width={{base:"80%", lg:"850px"}}>
            <Box h="400" w="400" borderColor="white" borderWidth="2px" borderRadius="xl">
              <Image 
                src="/images/me.png"
                alt="Image"
                width="full"
                height={400}
                borderRadius="xl"
              />
            </Box>
            <Box h="400"> 
              <VStack alignItems="center" justify="center" gap="5" width="fill" height="fill">
                <Text textStyle="3xl" fontWeight="bold" color="#dcdce0" marginTop="20%">
                  <Text
                    as="span"
                    backgroundImage="linear-gradient(to right, #2A7B9B, #3F9E91, #57C785, #90CF72, #EDDD53)"
                    backgroundClip="text"
                    color="transparent"
                  >
                    Hello
                  </Text >
                  {" 👽,"}
                </Text>
                <Text textStyle="2xl" fontWeight="bold" color="#dcdce0">I'm Evan Zhang!</Text>
                <Text textStyle="1xl" fontWeight="bold" color="#dcdce0">I'm a current
                  <Text 
                  color="#2774AE"
                  as="span"
                  >
                    {" UCLA "}
                  </Text>
                  student 🐻,
                  </Text>
                <Text textStyle="1xl" fontWeight="bold" color="#dcdce0" marginBottom="20%">I do math 🧮 and code 👨🏻‍💻!</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Flex>
      </main>
    )
}

