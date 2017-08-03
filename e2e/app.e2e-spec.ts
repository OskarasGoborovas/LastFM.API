import { LastfmPage } from './app.po';

describe('lastfm App', () => {
  let page: LastfmPage;

  beforeEach(() => {
    page = new LastfmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
