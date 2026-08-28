import { Grid, GridItem, Box, Image, VStack, Text, Separator} from "@chakra-ui/react"

export default function Home() {
    return (
      <main>
        <Grid templateColumns="repeat(4, 1fr)" gap="6" marginX="auto" marginTop="20" width="50%">
          <GridItem colSpan={2}>
            <Box h="400">
              <Image 
                src="/images/me.png"
                alt="Image"
                width={400}
                height={400}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box h="400"> 
              <VStack alignItems="left" marginLeft="10" marginTop="10" gap="10">
                <Text textStyle="3xl" fontWeight="bold">
                  <Text
                    as="span"
                    backgroundImage="linear-gradient(to right, #2A7B9B, #3F9E91, #57C785, #90CF72, #EDDD53)"
                    backgroundClip="text"
                    color="transparent"
                  >
                    Hello
                  </Text>
                  {" 👽,"}
                </Text>
                <Text textStyle="2xl" fontWeight="bold">I'm Evan Zhang!</Text>
                <Text textStyle="1xl" fontWeight="bold">I'm a current
                  <Text 
                  color="#2774AE"
                  as="span"
                  >
                    {" UCLA "}
                  </Text>
                  student 🐻,
                </Text>
                <Text textStyle="sm">and I'm studying Math of Computation 👨🏻‍💻!</Text>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </main>
    )
}

