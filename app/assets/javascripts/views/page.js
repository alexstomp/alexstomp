(function(module) {

    /*
    * Dependencies
    */

    /*
    * Views
    */

    module.HeaderView = Backbone.BaseView.extend({
        initialize: function() {
            _.bindObj(this);

            /* Cached Elements */
            this.nav_el = this.$el.find('.js-nav');
            this.slider_link_el = this.$el.find('.js-slide-section');

            /* DOM Events */
            this.slider_link_el.click(this.slide_section);
        },
        slide_section: function() {
            $('html, body').animate({
                scrollTop: $('#page').offset().top
            }, 750);
        }
    });

    module.PortfolioView = Backbone.BaseView.extend({
        initialize: function() {
            _.bindObj(this);

            // open links
            this.open_design_gallery_link_el = this.$el.find('.js-open-gallery.design');
            this.open_projects_gallery_link_el = this.$el.find('.js-open-gallery.projects');
            this.open_wordpress_gallery_link_el = this.$el.find('.js-open-gallery.wordpress');
            this.open_pi_gallery_link_el = this.$el.find('.js-open-gallery.pi');

            // galleries
            this.galleries_el = this.$el.find('.js-gallery-overlay');
            this.design_gallery_el = this.$el.find('#design-gallery');
            this.projects_gallery_el = this.$el.find('#projects-gallery');
            this.wordpress_gallery_el = this.$el.find('#wordpress-gallery');
            this.pi_gallery_el = this.$el.find('#pi-gallery');

            // close links
            this.close_gallery_link_el = this.$el.find('.js-close-gallery');

            /* DOM Events */
            this.open_design_gallery_link_el.click(this.open_design_gallery);
            this.open_projects_gallery_link_el.click(this.open_projects_gallery);
            this.open_wordpress_gallery_link_el.click(this.open_wordpress_gallery);
            this.open_pi_gallery_link_el.click(this.open_pi_gallery);
            this.close_gallery_link_el.click(this.close_galleries);

            $('body').keydown(this.keyDown);
        },
        keyDown: function(e) {
            if (e.keyCode == 27) {
                this.close_galleries();
            }
        },
        open_design_gallery: function() {
            this.design_gallery_el.fadeIn();
        },
        open_projects_gallery: function() {
            this.projects_gallery_el.fadeIn();
        },
        open_wordpress_gallery: function() {
            this.wordpress_gallery_el.fadeIn();
        },
        open_pi_gallery: function() {
            this.pi_gallery_el.fadeIn();
        },
        close_galleries: function() {
            this.galleries_el.hide();
        }
    });

})(alexstomp.module('views.page'));
