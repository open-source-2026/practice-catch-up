import {ArticleResource, TopHeadlinesResponse} from './top-headlines-response';
import {Article} from '../domain/model/article.entity';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {DateTime} from '../../shared/domain/model/date-time';
import {Url} from '../../shared/domain/model/url';
import {Source} from '../domain/model/source.entity';
import {inject, Injectable} from '@angular/core';

/**
 * Maps article resources from the news API into Article domain entities.
 */
@Injectable({providedIn: 'root'})
export class ArticleAssembler {
  /** Shared logo provider dependency kept for assembler consistency. */
  private logoApi = inject(LogoDevApi);

  /**
   * Converts a provider article resource into an Article entity.
   *
   * @param resource - Raw article object returned by the provider.
   */
  toEntityFromResource(resource: ArticleResource): Article {
    let article = new Article();
    article.author = resource.author || '';
    article.source = new Source();
    article.source.id = resource.source.id || '';
    article.source.name = resource.source.name;
    article.source.url = new Url('');
    article.source.urlToLogo = new Url(this.logoApi.getUrlToLogo(resource.url));
    article.title = resource.title;
    article.description = resource.description || '';
    article.url = new Url(resource.url);
    article.urlToImage = new Url(resource.urlToImage || '');
    article.publishedAt = new DateTime(resource.publishedAt);
    return article;
  }

  /**
   * Converts a top-headlines payload into Article entities.
   *
   * @param response - Provider response with article resources.
   */
  toEntitiesFromResponse(response: TopHeadlinesResponse): Article[] {
    return response.articles.map(article => this.toEntityFromResource(article));
  }
}
