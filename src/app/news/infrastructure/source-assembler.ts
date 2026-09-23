import {SourceResource, SourcesResponse} from './sources-response';
import {LogoDevApi} from '../../shared/infrastructure/logo-dev-api';
import {Source} from '../domain/model/source.entity';
import {Url} from '../../shared/domain/model/url';
import {inject, Injectable} from '@angular/core';

/**
 * Maps source resources from the news API into Source domain entities.
 */
@Injectable({providedIn: 'root'})
export class SourceAssembler {
  /** Shared logo provider used to enrich source entities while mapping. */
  private logoApi = inject(LogoDevApi);

  /**
   * Converts a provider resource into a Source entity.
   *
   * @param resource - Raw source object returned by the provider.
   */
  toEntityFromResource(resource: SourceResource): Source {
    let source = new Source();
    source.id = resource.id;
    source.name = resource.name;
    source.description = resource.description || '';
    source.url = new Url(resource.url || '');
    source.category = resource.category || '';
    source.language = resource.language || '';
    source.country = resource.country || '';
    source.urlToLogo = new Url(this.logoApi.getUrlToLogo(resource.url));
    return source;
  }

  /**
   * Converts a source response payload into Source entities.
   *
   * @param response - Provider response with source resources.
   */
  toEntitiesFromResponse(response: SourcesResponse): Source[] {
    return response.sources.map(source => this.toEntityFromResource(source));
  }
}
