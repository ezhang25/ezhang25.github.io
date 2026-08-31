import { Image, Text, Card, Heading, Flex, HStack, Badge } from "@chakra-ui/react"

const projects = [
  {
    title: "Run Routify",
    desc: "A C++ application that generates running loops.",
    img: "/images/placeholder.png",
    link: "https://github.com/yourname/run-routify",
    technologies: ["C++", "C#", "Python", "AWS", "TypeScript"]
  },
  {
    title: "Fraud Detector",
    desc: "Detects suspicious Hypixel Skyblock auctions.",
    img: "/images/placeholder.png",
    link: "https://github.com/yourname/fraud-detector",
    technologies: ["C++", "C#", "AWS"]
  },
  {
    title: "Drawing Game",
    desc: "A multiplayer browser-based drawing game.",
    img: "/images/placeholder.png",
    link: "https://github.com/yourname/drawing-game",
    technologies: ["C++", "C#"]
  },
  {
    title: "Test1",
    desc: "A multiplayer browser-based drawing game.",
    img: "/images/placeholder.png",
    link: "https://github.com/yourname/drawing-game",
    technologies: ["C++", "C#"]
  },
  {
    title: "Test2",
    desc: "A multiplayer browser-based drawing game.",
    img: "/images/placeholder.png",
    link: "https://github.com/yourname/drawing-game",
    technologies: ["C++", "C#"]
  },
]

type ProjectCardProps = {
  title: string
  desc: string
  img: string
  link: string
  technologies: string[]
}

function ProjectCard({title, desc, img, link,technologies}:ProjectCardProps) {
  return (
    <Card.Root maxW="340px" width="100%" overflow="hidden" borderWidth="2px" borderColor="white" borderRadius="30px" bgColor="#222233" color="lightgrey" _hover={{transform: "translateY(-4px)", shadow: "lg"}}>
      <Image src={img} height="250px"/>
      <Card.Body>
        <Heading alignSelf="center" color="white"fontWeight="bold">{title}</Heading>
        <Text>{desc}</Text>
      </Card.Body>

      <Card.Footer height="full" alignContent="start" alignItems="start">
        <HStack widows="full" wrap="wrap" justifyContent="start">
          {technologies.map((tech, index) => (
            <Badge key={index} borderWidth="2px" borderColor="lightgrey" borderRadius="15px" bgColor="#222233" color="white" size="md">
              {tech}
            </Badge>
          ))}
        </HStack>
      </Card.Footer>
    </Card.Root>
  )
  
}

export default function Projects() {
    return (
      <main>
        <Flex
          gap="8" 
          wrap="wrap"
          marginX="8%"
          justify="center"
          padding="35px"
        >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </Flex>
      </main>
    )
}

