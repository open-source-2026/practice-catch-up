/**
 * Raw response contract for the news provider sources endpoint.
 */
export interface SourcesResponse {
  /** Provider response status (for example, "ok"). */
  status: string;
  /** Collection of raw source resources returned by the provider. */
  sources: SourceResource[];
}

/**
 * Raw source resource returned by the provider.
 */
export interface SourceResource {
  /** Provider source identifier. */
  id: string;
  /** Name of the source. */
  name: string;
  /** Optional description of the source. */
  description: string;
  /** Source website URL. */
  url: string;
  /** Optional upstream logo URL when present in provider payloads. */
  urlToLogo: string;
  /** Optional category of the source. */
  category: string;
  /** Optional language of the source. */
  language: string;
  /** Optional country of the source. */
  country: string;
}
