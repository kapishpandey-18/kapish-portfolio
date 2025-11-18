import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "../constants/config";

const buildAbsoluteUrl = (path) => {
  if (!path) return SITE_CONFIG.url;
  if (path.startsWith("http")) return path;
  const base = SITE_CONFIG.url?.replace(/\/$/, "") || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

export default function Seo({ title, description, image, pathname, children }) {
  const defaultTitle = `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
  const pageTitle = title ? `${title} | ${SITE_CONFIG.name}` : defaultTitle;
  const pageDescription = description || SITE_CONFIG.description || SITE_CONFIG.tagline;
  const canonicalUrl = buildAbsoluteUrl(pathname);
  const socialImage = buildAbsoluteUrl(image || SITE_CONFIG.defaultImage);
  const keywords = SITE_CONFIG.keywords?.join(", ");

  return (
    <Helmet prioritizeSeoTags>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={socialImage} />
      {SITE_CONFIG.twitterHandle && (
        <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
      )}

      {children}
    </Helmet>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  children: PropTypes.node,
};
