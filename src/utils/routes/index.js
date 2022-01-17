export const baseUrl = '/';
export const descriptionUrl = '/description';
export const favoritesUrl = '/favorites';
export const searchUrl = '/search';

export const notHeaderAndFooterUrl = [descriptionUrl];

export const routeHeaders = {
  [baseUrl]: 'Главная',
  [favoritesUrl]: 'Избранное',
  [searchUrl]: 'Поиск',
}

export const getUrlName = (pathname = '/') => `/${pathname.split('/')[1]}`;