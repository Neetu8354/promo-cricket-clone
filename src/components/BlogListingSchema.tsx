interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  desc?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

interface BlogListingSchemaProps {
  posts: BlogPost[];
}

const SITE = "https://www.khelo24id.live";

export const BlogListingSchema = ({ posts }: BlogListingSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Khelo24Id.live Blog",
    url: `${SITE}/blog`,
    description: "Expert cricket betting tips, Aviator strategies, and step-by-step guides for Indian players.",
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "Khelo24Id.live",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/favicon.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description || post.desc || "",
      url: `${SITE}${post.slug}`,
      image: post.image || `${SITE}/og-image.jpg`,
      datePublished: post.datePublished || "2026-01-15",
      dateModified: post.dateModified || "2026-05-01",
      author: {
        "@type": "Organization",
        name: "Khelo24Id.live",
        url: SITE,
      },
      publisher: {
        "@type": "Organization",
        name: "Khelo24Id.live",
        url: SITE,
        logo: {
          "@type": "ImageObject",
          url: `${SITE}/favicon.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE}${post.slug}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
