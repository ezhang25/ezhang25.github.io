import { EmotionRegistry } from "@/components/ui/emotion-registry"
import { Provider } from "@/components/ui/provider"
import NextLink from "next/link"
import { Tabs, Link, Separator, IconButton, HStack } from "@chakra-ui/react"
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export function NavBar() {
  return (
    <Tabs.Root value="none" size="lg" variant="subtle" padding="5" width="full">
      <Tabs.List width="full" display="flex">
        <Tabs.Trigger asChild value="evan" fontSize="30px" padding="5" marginTop="3" marginLeft="20" marginRight="auto">
          <NextLink href="/">Evan Zhang</NextLink>
        </Tabs.Trigger>
        <Tabs.Trigger value="about" fontSize="lg" padding="5" marginTop="3" marginRight="10">
          About               
        </Tabs.Trigger>
        <Tabs.Trigger asChild value="projects" fontSize="lg" padding="5" marginTop="3" marginRight="10">
          <NextLink href="/projects">Projects</NextLink>
        </Tabs.Trigger>
        <Tabs.Trigger asChild value="resume" fontSize="lg"  padding="5" marginTop="3" marginRight="20">
          <NextLink href="https://drive.google.com/file/d/17y5e7S-DUrizU3hRasIYAbhP1fDZi-3G/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</NextLink>
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html suppressHydrationWarning>
      <body>
        <EmotionRegistry>
          <Provider>
            <NavBar />
            <Separator borderWidth="2px" borderColor="blackAlpha.500" width="full" marginX="auto"/>


            {children}

            <br />
            <br />

            <Separator borderWidth="1px" borderColor="blackAlpha.50" width="80%" marginX="auto"/>

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

          </Provider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
