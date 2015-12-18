(function(module) {

    /*
    * Dependencies
    */

    var PageViews = alexstomp.module('views.page');

    /*
    * Views
    */

    module.AppView = Backbone.BaseView.extend({
        initialize: function() {
            _.bindObj(this);

            /* Vars */
            this.original_title = document.title;

            /* Cached Elements */
            this.header_el = this.$el.find('.js-nav');
            this.content_el = this.$el.find('.js-content');

            /* Subviews */
            this.header_view = new PageViews.HeaderView({
                'el': this.header_el
            });
        }
    });

})(alexstomp.module('views.app'));
