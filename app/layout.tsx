"use client"

import { EmotionRegistry } from "@/components/ui/emotion-registry"
import NextLink from "next/link"
import { ChakraProvider, Tabs, Link, Separator, IconButton, HStack, Flex, Text, Theme, Center } from "@chakra-ui/react"
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { system } from "@/components/ui/theme";

export function NavBar() {
  return (
    <Center maxW="1200px" width="full" marginX="auto">
      <Flex flexDir={{base:"column", md:"row"}} width="80%" align="center" justify="space-between">
        <Flex asChild justify="center" padding="5">
          <NextLink href="/" style={{ whiteSpace: "nowrap" }}>
            <Text fontSize="200%" color="white" font="Monaco" fontWeight="1000">
              evan zhang
            </Text>
          </NextLink>
        </Flex>
        <Tabs.Root value="none" size="sm" variant="subtle" justify={{base:"center", md:"end"}} padding="5" width="full">
          <Tabs.List display="flex" flexWrap="nowrap" gap="3%">
            <Tabs.Trigger value="about" fontSize="lg">
              <NextLink href="/about">
                <Text fontSize="100%" color="#dcdce0">
                  about
                </Text>
              </NextLink>
            </Tabs.Trigger>
            <Tabs.Trigger asChild value="projects" fontSize="lg">
              <NextLink href="/projects">
                <Text fontSize="100%" color="#dcdce0">
                  projects
                </Text>
              </NextLink>
            </Tabs.Trigger>
            <Tabs.Trigger asChild value="resume" fontSize="lg">
              <NextLink href="https://drive.google.com/file/d/17y5e7S-DUrizU3hRasIYAbhP1fDZi-3G/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Text fontSize="100%" color="#dcdce0">
                  resume
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
      <head>
        <link rel="icon" href="/images/favicon.png"/>
        <title>
          Evan Zhang
        </title>
      </head>
      <body>
        <EmotionRegistry>
          <ChakraProvider value={system}> 
            <NavBar />

            {children}

            <br />
            <br />

            <Separator borderWidth="1px" borderColor="grey" maxW="1000px" width="80%" marginX="auto"/>

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
