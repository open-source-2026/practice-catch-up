import {Url} from '../../../shared/domain/model/url';

/**
 * Represents a news source in the News bounded context.
 */
export class Source {
  /** Stable identifier returned by the upstream provider. */
  id: string;
  /** Human-readable source name shown in the UI. */
  name: string;
  /** Optional description of the source. */
  description: string;
  /** Canonical source website URL used to open external content. */
  url: Url;
  /** Resolved logo URL generated from the provider domain. */
  urlToLogo: Url;
  /** The category of the source. */
  category: string;
  /** The language of the source. */
  language: string;
  /** The country of the source. */
  country: string;

  /**
   * Returns the URL as a string.
   * @returns The URL string.
   */
  get urlAsString(): string {
    return this.url.toString();
  }

  /**
   * Returns the logo URL as a string.
   * @returns The logo URL string.
   */
  get urlToLogoAsString(): string {
    return this.urlToLogo.toString();
  }

  /**
   * Creates an empty source placeholder.
   *
   * @remarks
   * The application layer fills this entity with provider data after hydration.
   */
  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.url = new Url('');
    this.urlToLogo = new Url('');
    this.category = '';
    this.language = '';
    this.country = '';
  }


}
