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
            this.alert_el = this.$el.find('.js-alert');
            this.content_el = this.$el.find('.js-content');
            this.header_el = this.$el.find('.js-nav');

            /* Subviews */
            this.header_view = new PageViews.HeaderView({
                'el': this.header_el
            });

            /* Events */
            this.alert_el.find('.js-close').click(this.close_alert);
        },
        close_alert: function() {
            this.alert_el.slideUp();
        }
    });

})(alexstomp.module('views.app'));
