import { MyFundsTracker.NgAppPage } from './app.po';

describe('my-funds-tracker.ng-app App', () => {
  let page: MyFundsTracker.NgAppPage;

  beforeEach(() => {
    page = new MyFundsTracker.NgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
