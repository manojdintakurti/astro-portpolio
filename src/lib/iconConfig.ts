export const iconConfig = {
    logos: {
      react: "logos:react",
      nextjs: "logos:nextjs-icon",
      typescript: "logos:typescript-icon",
      tailwind: "logos:tailwindcss-icon",
      vue: "logos:vue",
      astro: "logos:astro",
      nodejs: "logos:nodejs-icon",
      python: "logos:python",
      graphql: "logos:graphql",
      express: "logos:express",
      mongodb: "logos:mongodb-icon",
      postgresql: "logos:postgresql",
      docker: "logos:docker-icon",
      git: "logos:git-icon",
      aws: "logos:aws",
      firebase: "logos:firebase",
      kubernetes: "logos:kubernetes",
      redis: "logos:redis"
    }
  } as const;
  
  export type IconName = keyof typeof iconConfig.logos;