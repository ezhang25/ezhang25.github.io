import { Image, Text, Card, Heading, Flex, HStack, Badge, Link } from "@chakra-ui/react"

const projects = [
  {
    title: "Personal Website",
    desc: "Welcome to my website! You're here right now!",
    img: "/images/personalwebsite.png",
    link: "https://evanzhang.xyz/",
    technologies: ["React", "Next.js", "TypeScript", "Chakra UI"]
  }
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
    <Link href={link} target="_blank" rel="noopener noreferrer">
    <Card.Root maxW="340px" width="100%" height="full" overflow="hidden" borderWidth="2px" borderColor="white" borderRadius="30px" bgColor="#222233" color="lightgrey" _hover={{transform: "translateY(-4px)", shadow: "lg"}}>
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
    </Link>
  )
}

export default function Projects() {
    return (
      <main>
        <Flex gap="8" wrap="wrap" marginX="8%" justify="center" padding="35px">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </Flex>
      </main>
    )
}

