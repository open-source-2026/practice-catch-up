import {Source} from './source.entity';
import {DateTime} from '../../../shared/domain/model/date-time';
import {Url} from '../../../shared/domain/model/url';

/**
 * Represents a published article in the News bounded context.
 */
export class Article {
  author: string;
  /** Article headline used as the primary title in presentation components. */
  title: string;
  /** Optional summary text describing the article body. */
  description: string;
  /** Absolute URL to the article content in the source site. */
  url: Url;
  /** Optional image URL used for article cards. */
  urlToImage: Url;
  /** Publication timestamp (ISO-8601 string from the provider). */
  publishedAt: DateTime;
  /** Source that published the article. */
  source: Source;

  /**
   * Returns the article URL as a string.
   * @returns The article URL string.
   */
  get urlAsString(): string {
    return this.url.toString();
  }

  /**
   * Returns the article image URL as a string.
   * @returns The article image URL string.
   */
  get urlToImageAsString(): string {
    return this.urlToImage.toString();
  }

  /**
   * Creates an empty article placeholder.
   *
   * @remarks
   * Infrastructure assemblers and application services populate the entity.
   */
  constructor() {
    this.author = '';
    this.title = '';
    this.description = '';
    this.url = new Url('');
    this.urlToImage = new Url('');
    this.publishedAt = new DateTime();
    this.source = new Source();
  }

  public updateSourceInformation = (source: Source): void => {
    this.source.urlToLogo = source.urlToLogo;
    this.source.url = source.url;
    this.source.description = source.description;
    this.source.category = source.category;
    this.source.language = source.language;
    this.source.country = source.country;
  };

}
