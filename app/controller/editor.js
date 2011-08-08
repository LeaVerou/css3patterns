C3P.Editor = Spine.Controller.create({
    init: function () {
        this.pattern = C3P.Pattern.find(this.patternId);
        
        this.render();
    },
    
    template: function () {
        return $('#editor-template').tmpl(this.pattern);
    },

    render: function (item) {
        this.el.html(this.template());

        return this;
    }
});