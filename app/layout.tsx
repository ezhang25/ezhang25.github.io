"use client"

import { EmotionRegistry } from "@/components/ui/emotion-registry"
import NextLink from "next/link"
import { ChakraProvider, Tabs, Link, Separator, IconButton, HStack, Flex, Text, Theme, Center } from "@chakra-ui/react"
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { system } from "@/components/ui/theme";

export function NavBar() {
  return (
    <Center maxW="1200px" width="full" marginX="auto">
      <Flex flexDir={{base:"column", md:"row"}} width="full" align="center" justify="space-between">
        <Flex asChild justify="center" fontSize="200%" padding="5">
          <NextLink href="/" style={{ whiteSpace: "nowrap" }}>
            <Text fontSize="100%" color="white" font="Monaco" fontWeight="bold">
              Evan Zhang
            </Text>
          </NextLink>
        </Flex>
        <Tabs.Root value="none" size="sm" variant="subtle" justify={{base:"center", md:"end"}} padding="5" width="full">
          <Tabs.List display="flex" flexWrap="nowrap" gap="3%">
            <Tabs.Trigger value="about" fontSize="lg">
              <Text fontSize="100%" color="#dcdce0">
                About
              </Text>
            </Tabs.Trigger>
            <Tabs.Trigger asChild value="projects" fontSize="lg">
              <NextLink href="/projects">
                <Text fontSize="100%" color="#dcdce0">
                  Projects
                </Text>
              </NextLink>
            </Tabs.Trigger>
            <Tabs.Trigger asChild value="resume" fontSize="lg">
              <NextLink href="https://drive.google.com/file/d/17y5e7S-DUrizU3hRasIYAbhP1fDZi-3G/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Text fontSize="100%" color="#dcdce0">
                  Resume
                </Text>
              </NextLink>
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
          <ChakraProvider value={system}> 
            <NavBar />

            {children}

            <br />
            <br />

            <Separator borderWidth="1px" borderColor="grey" maxW="1150px" width="80%" marginX="auto"/>

            <HStack marginX="auto" justify="center" align="center" height="200px">
              <Link href="https://github.com/ezhang25" target="_blank" rel="noopener noreferrer">
                <Theme appearance="dark">
                  <IconButton aria-label="GitHub Profile"> 
                    <FaGithub size="2em" />
                  </IconButton>
                </Theme>
              </Link>
              <Link href="https://www.linkedin.com/in/evan-zhang-387574374/" target="_blank" rel="noopener noreferrer">
                <Theme appearance="dark">
                  <IconButton aria-label="Linkedin Profile"> 
                    <FaLinkedinIn size="2em" />
                  </IconButton>
                </Theme>
              </Link>
              <Link href="mailto:evanzhang68@g.ucla.edu" target="_blank" rel="noopener noreferrer">
                <Theme appearance="dark">
                  <IconButton aria-label="Gmail"> 
                    <FaEnvelope size="2em" />
                  </IconButton>
                </Theme>
              </Link>
            </HStack>              
          </ChakraProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
