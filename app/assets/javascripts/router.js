(function(module) {

    /*
    * Dependencies
    */

    var AppViews = alexstomp.module('views.app');

    /*
    * Custom Router
    */

    module.AppRouter = Backbone.Router.extend({
        force_navigate: function(fragment, options) {
            /* default to the current url fragment if it's not passed in */
            fragment = fragment || window.location.pathname.slice(1);

            /* load the url through the router to run the page-specific logic */
            Backbone.history.loadUrl(fragment);
        }
    });

    /*
    * Router for main app
    */

    module.Router = module.AppRouter.extend({
        initialize: function() {
            _.bindObj(this);

            /* Cached Elements */
            this.document_el = $(document);
            this.body_el = this.document_el.find('.js-body');

            /* create the central app view */
            this.app_view = new AppViews.AppView({
                'el': this.body_el
            });
        }
    });

})(alexstomp.module('modules.router'));
