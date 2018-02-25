/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
  // Test Suite for the RSS feed
  describe('RSS Feeds', function() {
    // Validate that the allFeeds object exists and that it has at least one entry.
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).toBeGreaterThan(0);
    });

    // Validate that each feed contains a URL string that is not blank.
    it('has a URL for each feed', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).toBeGreaterThan(0);
      });
    });

    // Validate that each feed has a name string that is not blank.
    it('has a name for each feed', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).toBeGreaterThan(0);
      });
    });
  });

  // Test suite for the feed selection menu
  describe('The menu', function() {
    var body = document.querySelector('body');
    var menuIcon = document.querySelector('.menu-icon-link');

    // Validate that the menu is hidden when the page loads.
    it('is hidden by default', function() {
      expect(body).toBeDefined();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    // Validate that the menu is shown when the menu icon is clicked, and
    // disappears when the menu icon is clicked again.
    it('appears and hides when clicked', function() {
      expect(menuIcon).toBeDefined();
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  // Test suite for the initial feed entries.
  describe('Initial Entries', function() {

    // Load the default feed asynchronously to set up the test case
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    // Validate that feed entries loaded successfully
    it('will load entries into the feed', function() {
      var entries = document.querySelectorAll('.feed .entry');
      expect(entries).toBeDefined();
      expect(entries.length).toBeGreaterThan(0);
    });
  });

  // Test Suite for loading other feeds.
  describe('New Feed Selection', function() {
    var firstEntry, newFirstEntry;

    // Load two feeds asynchronously and save their first results on the page
    // to a pair of variables.
    beforeEach(function(done) {
      loadFeed(0, function() {
        firstEntry = document.querySelector('.feed .entry').innerHTML;
        loadFeed(1, function() {
          newFirstEntry = document.querySelector('.feed .entry').innerHTML;
          done();
        });
      });
    });

    // Validate that the entries were defined and that they are not the same.
    it('will replace the data with entries from a new feed', function() {
      expect(firstEntry).toBeDefined();
      expect(newFirstEntry).toBeDefined();
      expect(newFirstEntry).not.toBe(firstEntry);
    });
  });
}());
