/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
    readonly PUBLIC_GITHUB: string;
    readonly PUBLIC_LINKEDIN: string;
    readonly PUBLIC_TWITTER: string;
    readonly PUBLIC_EMAIL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module 'virtual:astro-icon' {
  interface IconComponent {
    name: string;
    pack?: string;
    class?: string;
  }
  const Icon: (props: IconComponent) => any;
  export { Icon };
}