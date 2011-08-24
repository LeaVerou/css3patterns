C3P.Gallery.Patterns.Item = Spine.Controller.create({
    //
    // Single pattern in the list
    //
    
    proxied: ['render', 'remove'],

    init: function () {
        this.item.bind('update change', this.render);
        this.item.bind('destroy', this.remove);
    },

    template: function (item) {
        return $('#gallery-patterns-item-template').tmpl(item.attributes());
    },

    render: function (item) {
        this.el = this.template(this.item);
        
        // Notify the app on clicking a pattern
        this.el.bind("click", this.proxy(function (item) {
            this.App.trigger("edit:pattern", this.item);
            //this.$('.pattern').addClass('active');
        }));

        return this;
    },

    remove: function () {
        this.el.remove();
    }
});