import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react"

const config = defineConfig({
    globalCss:{
        "html, body": {
            bg:"#161621"
        }
    }
})

export const system = createSystem(defaultConfig, config)