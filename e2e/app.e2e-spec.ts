import { FairlysanePage } from './app.po';

describe('fairlysane App', function() {
  let page: FairlysanePage;

  beforeEach(() => {
    page = new FairlysanePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
