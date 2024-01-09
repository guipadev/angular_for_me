export const baseUrl = 'https://api.themoviedb.org/3';

export class constantUri {
  public static readonly apikey = '8764e6417ae516fb86bc820ee865a6d8';
  public static readonly validateWithLogin =
    baseUrl + '/authentication/token/validate_with_login';
  public static readonly tokenNew = baseUrl + '/authentication/token/new';
}
