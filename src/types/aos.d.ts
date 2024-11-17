declare module 'aos' {
    interface AOSSettings {
      duration?: number;
      easing?: string;
      once?: boolean;
      offset?: number;
      delay?: number;
      anchor?: string;
      anchorPlacement?: string;
      mirror?: boolean;
      disable?: boolean | (() => boolean) | string;
    }
  
    interface AOS {
      init(settings?: AOSSettings): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const aos: AOS;
    export default aos;
  }
  
  // Add custom event types
  interface CustomEventMap {
    'theme-change': CustomEvent<{ theme: 'light' | 'dark' }>;
    'astro:page-load': CustomEvent;
    'astro:after-swap': CustomEvent;
    'astro:before-preparation': CustomEvent;
  }
  
  declare global {
    interface Document {
      addEventListener<K extends keyof CustomEventMap>(
        type: K,
        listener: (this: Document, ev: CustomEventMap[K]) => void
      ): void;
      removeEventListener<K extends keyof CustomEventMap>(
        type: K,
        listener: (this: Document, ev: CustomEventMap[K]) => void
      ): void;
    }
  }
  
  export {};