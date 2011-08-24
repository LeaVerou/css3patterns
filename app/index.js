var C3P = Spine.Controller.create({
    elements: {
        "#body": "bodyEl"
    },

    init: function () {
        //
        // Router
        //
        
        this.routes({
            // Home
            '': function () {
                this.gallery = C3P.Gallery.init({el: this.bodyEl});
            },
            // Editor
            '/:id': function (id) {
                this.editor = C3P.Editor.init({
                    el: this.bodyEl,
                    patternId: id
                });
            }
        });
        Spine.Route.setup(/*{history: true}*/);
        this.navigate('');
        
        //
        // Listen on some global events
        //
        
        this.App.bind('edit:pattern', this.proxy(function (pattern) {
            this.navigate('/' + pattern.id);
        }));
    }
});