import {
  BaseMeta,
  BaseRepository,
  DefaultRepositorySettings,
  RepositorySettings
} from '@snap-alex/domain-js';

export class UDRepository<T, TList, Meta = BaseMeta> extends BaseRepository<
  T,
  TList,
  Meta
> {
  protected settings: RepositorySettings = {
    ...DefaultRepositorySettings,
    extractResponseMeta: undefined,
    extractResponseData: undefined
  };
}
