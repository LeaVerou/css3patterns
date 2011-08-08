C3P.Gallery.Patterns = Spine.Controller.create({
    //
    // Patterns' list (Render element pattern)
    //
    
    proxied: ["addAll", "addOne"],

    init: function () {
        C3P.Pattern.bind("refresh change", this.addAll);
        C3P.Pattern.bind("create",  this.addOne);
    },

    addOne: function (item) {
        var pattern = C3P.Gallery.Patterns.Item.init({item: item});
        this.el.append(pattern.render().el);
    },

    addAll: function () {
        C3P.Pattern.each(this.addOne);
    }
});