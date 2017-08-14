import { LastFm2Page } from './app.po';

describe('last-fm2 App', () => {
  let page: LastFm2Page;

  beforeEach(() => {
    page = new LastFm2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
