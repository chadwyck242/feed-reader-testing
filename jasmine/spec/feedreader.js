/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    // A test suite name 'RSS Feeds', tests if allFeeds are defined,
    // have an URL and a name.
    describe('RSS Feeds', function() {
        // tests to make sure that the allFeeds variable has been
        // defined and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         // test that loops through each feed in the allFeeds object
         // and ensures it has a URL defined and that the URL is not empty.
        it('have an URL defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);

            });
        });

        // A test that loops through each feed in the allFeeds object
        // and ensures it has a name defined and that the name is not empty.
         it('have a name defined and is not empty', function() {
             allFeeds.forEach(function(feed) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name).not.toBe(0);

             });
         });

    });

    // A new test suite named "The menu"
    describe('The menu', function() {
         let slideMenu, testIcon;

         beforeEach(function() {
             slideMenu = $("body");
             testIcon = $(".menu-icon-link");
         });

         afterEach(function() {
             slideMenu = '';
             testIcon = '';
         });

         // A test that ensures the menu element is hidden by default.
         it('is hidden by default', function() {
             expect(slideMenu.hasClass("menu-hidden")).toBe(true);
         });

         // A test that ensures the menu changes visibility when the menu
         // icon is clicked.
         it('changes visibility when clicked', function() {
             testIcon.trigger('click');
             expect(slideMenu.hasClass("menu-hidden")).toBe(false);
             testIcon.trigger('click');
             expect(slideMenu.hasClass("menu-hidden")).toBe(true);
         });
    });

    // A new test suite named "Initial Entries"
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    });

    // A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
