import { Grid, GridItem, Box, Image, Button, Text, Card, Separator, Heading, SimpleGrid} from "@chakra-ui/react"

const projects = [
  {
    title: "Run Routify",
    desc: "A C++ application that generates running loops.",
    img: "/images/run-routify.png",
    link: "https://github.com/yourname/run-routify",
  },
  {
    title: "Fraud Detector",
    desc: "Detects suspicious Hypixel Skyblock auctions.",
    img: "/images/fraud-detector.png",
    link: "https://github.com/yourname/fraud-detector",
  },
  {
    title: "Drawing Game",
    desc: "A multiplayer browser-based drawing game.",
    img: "/images/drawing-game.png",
    link: "https://github.com/yourname/drawing-game",
  },
]

type ProjectCardProps = {
  title: string
  desc: string
  img: string
  link: string
}

function ProjectCard({title, desc, img, link}:ProjectCardProps) {
  return (
    <Card.Root>
    <Card.Body>
      <Heading>{title}</Heading>
      <Text>{desc}</Text>
    </Card.Body>

    <Card.Footer>
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View project
          </a>
        </Button>
      </Card.Footer>
    </Card.Root>
  )
  
}

export default function Projects() {
    return (
      <main>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          gap="8" 
          width="90%"
          maxWidth="1200px"
          marginX="auto"
          paddingY="10"
        >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </SimpleGrid>
      </main>
    )
}

