export const initAOS = async () => {
    try {
      const AOS = (await import('aos')).default;
      
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
        delay: 50,
        disable: window.innerWidth < 768,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
  
      return AOS;
    } catch (error) {
      console.error('Error initializing AOS:', error);
      return null;
    }
  };
  
  export const refreshAOS = (aosInstance: any) => {
    if (aosInstance?.refresh) {
      aosInstance.refresh();
    }
  };