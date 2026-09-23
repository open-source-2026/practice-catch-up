/**
 * Raw response contract for the top-headlines endpoint.
 */
export interface TopHeadlinesResponse {
  /** Provider response status (for example, "ok"). */
  status: string;
  /** Total number of results reported by the provider. */
  totalResults: number;
  /** Collection of article resources included in the response. */
  articles: ArticleResource[];
}

/**
 * Raw article resource returned by the provider.
 */
export interface ArticleResource {
  /** Optional author name. */
  author: string | null;
  /** Provider source snapshot associated with the article. */
  source: { id: string | null; name: string };
  /** Article headline. */
  title: string;
  /** Optional article summary content. */
  description: string | null;
  /** URL to the original article. */
  url: string;
  /** Optional URL to the hero image. */
  urlToImage: string | null;
  /** Publication timestamp in ISO-8601 format. */
  publishedAt: string;
}
