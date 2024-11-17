import type { SiteConfig } from '../types/site';

export function generateSEO(
  title: string,
  description: string = '',
  siteConfig: SiteConfig,
  path: string = ''
) {
  const seo = {
    title: `${title} | ${siteConfig.name}`,
    description: description || siteConfig.description,
    canonical: `${siteConfig.url}${path}`,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
      url: `${siteConfig.url}${path}`,
      image: siteConfig.ogImage,
    },
  };

  return seo;
}
