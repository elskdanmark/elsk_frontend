import { ElskFrontendPage } from './app.po';

describe('elsk-frontend App', () => {
  let page: ElskFrontendPage;

  beforeEach(() => {
    page = new ElskFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
