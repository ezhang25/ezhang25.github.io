import { EmotionRegistry } from "@/components/ui/emotion-registry"
import { Provider } from "@/components/ui/provider"
import NextLink from "next/link"
import { Tabs, Link, Separator, IconButton, HStack, Flex, Text, Theme, Center } from "@chakra-ui/react"
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export function NavBar() {
  return (
    <Center maxW="1200px" width="full" marginX="auto">
      <Flex flexDir={{base:"column", md:"row"}} width="full" align="center" justify="space-between">
        <Flex asChild justify="center" fontSize="200%" padding="5">
          <NextLink href="/" style={{ whiteSpace: "nowrap" }}>
            <Text fontSize="100%">
              Evan Zhang
            </Text>
          </NextLink>
        </Flex>
        <Tabs.Root value="none" size="sm" variant="subtle" justify={{base:"center", md:"end"}} padding="5" width="full">
          <Tabs.List display="flex" flexWrap="nowrap" gap="3%">
            <Tabs.Trigger value="about" fontSize="lg">
              About               
            </Tabs.Trigger>
            <Tabs.Trigger asChild value="projects" fontSize="lg">
              <NextLink href="/projects">
                  Projects  
              </NextLink>
            </Tabs.Trigger>
            <Tabs.Trigger asChild value="resume" fontSize="lg">
              <NextLink href="https://drive.google.com/file/d/17y5e7S-DUrizU3hRasIYAbhP1fDZi-3G/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</NextLink>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Flex>
    </Center>
  )
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html suppressHydrationWarning>
      <body>
        <EmotionRegistry>
          <Provider>
          <Theme appearance="light" colorScheme="blue">

            <NavBar />
            <Separator borderWidth="2px" borderColor="grey" width="full" marginX="auto"/>


            {children}

            <br />
            <br />

            <Separator borderWidth="1px" borderColor="white" width="80%" marginX="auto"/>

            <br />
            <br />

            <HStack marginX="auto" justify="center">
              <Link href="https://github.com/ezhang25" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="GitHub Profile"> 
                  <FaGithub size="2em" />
                </IconButton>
              </Link>
              <Link href="https://www.linkedin.com/in/evan-zhang-387574374/" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Linkedin Profile"> 
                  <FaLinkedinIn size="2em" />
                </IconButton>
              </Link>
              <Link href="mailto:evanzhang68@g.ucla.edu" target="_blank" rel="noopener noreferrer">
                <IconButton aria-label="Gmail"> 
                  <FaEnvelope size="2em" />
                </IconButton>
              </Link>
            </HStack>

          </Theme>
          </Provider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
