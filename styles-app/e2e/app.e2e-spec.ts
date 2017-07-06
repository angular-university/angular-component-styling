import { StylesAppPage } from './app.po';

describe('styles-app App', () => {
  let page: StylesAppPage;

  beforeEach(() => {
    page = new StylesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
