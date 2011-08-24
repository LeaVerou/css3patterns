C3P.Gallery = Spine.Controller.create({
    //
    // Patterns' gallery
    //
    
    elements: {'form': 'formEl'},
    
    init: function () {
        this.render();
        
        // Init patterns list
        C3P.Gallery.Patterns.init({el: this.$('ol')});
        // Init filters
        //C3P.Gallery.Filters.init({el: this.formEl});
        
        // Manually set records since I don't want (for now) any DB
        // @MACCMAN: Is there a better way of doing this, still using no DB?
        C3P.Pattern.refresh([
            {
                title: 'Houndtooth',
                author: {
                    name: 'Antoine BERNIER',
                    url: 'http://abernier.name'
                },
                code: 'background:\n  -webkit-linear-gradient(-45deg, white 25%, transparent 25%, transparent 75%, black 75%, black) 0 0,\n  -webkit-linear-gradient(-45deg, black 25%, transparent 25%, transparent 75%, white 75%, white) 1em 1em,\n  -webkit-linear-gradient(45deg, black 17%, transparent 17%, transparent 25%, black 25%, black 36%, transparent 36%, transparent 64%, black 64%, black 75%, transparent 75%, transparent 83%, black 83%) 1em 1em;\nbackground-color: white;\nbackground-size: 2em 2em;'
            },
            {
                title: 'Pacman',
                author: {
                    name: 'Antoine BERNIER',
                    url: 'http://abernier.name'
                },
                code: 'background:\n    -webkit-linear-gradient(90deg, blue 0, blue 0.02925em, transparent 0.02925em, transparent 0.26325em, blue 0.26325em, blue 0.2925em, transparent 0) 0em 0.14625em,\n    -webkit-radial-gradient(white 0.07605em, transparent 0em),\n    -webkit-linear-gradient(128deg, black 0.6201em, transparent 0) -0.585em 1.17em,\n    -webkit-linear-gradient(-128deg, black 0.6201em, transparent 0) -0.585em 1.17em,\n    -webkit-linear-gradient(115deg, black 0.351em, transparent 0) -0.585em 1.17em,\n    -webkit-linear-gradient(-115deg, black 0.351em, transparent 0) -0.585em 1.17em,\n    -webkit-linear-gradient(103deg, black 0.1755em, transparent 0) -0.585em 1.17em,\n    -webkit-linear-gradient(-103deg, black 0.1755em, transparent 0) -0.585em 1.17em,\n    -webkit-radial-gradient(yellow 0.585em, transparent 0) black;\nbackground-size: 2.34em 2.34em, 0.585em 2.34em, 9.36em 2.34em, 9.36em 2.34em, 7.02em 2.34em, 7.02em 2.34em, 4.68em 2.34em, 4.68em 2.34em, 2.34em 2.34em;'
            },
            {
                title: 'Stars',
                author: {
                    name: 'Nicolas Gallagher',
                    url: 'http://nicolasgallagher.com/'
                },
                code: 'background:\n    -webkit-linear-gradient(126deg, #232927 4%,   transparent 4%) -70px 43px,\n    -webkit-linear-gradient( 54deg, #232927 4%,   transparent 4%) 30px 43px,\n    -webkit-linear-gradient( 18deg, #e3d7bf 8.5%, transparent 8.5%) 30px 43px,\n    -webkit-linear-gradient(162deg, #e3d7bf 8.5%, transparent 8.5%) -70px 43px,\n    -webkit-linear-gradient(234deg, #e3d7bf 7.5%, transparent 7.5%) -70px 23px,\n    -webkit-linear-gradient(-54deg, #e3d7bf 7.5%, transparent 7.5%) 30px 23px,\n    \n    -webkit-linear-gradient(126deg, #232927 4%,   transparent 4%) -20px 93px,\n    -webkit-linear-gradient( 54deg, #232927 4%,   transparent 4%) 80px 93px,\n    -webkit-linear-gradient( 18deg, #e3d7bf 8.5%, transparent 8.5%) 80px 93px,\n    -webkit-linear-gradient(162deg, #e3d7bf 8.5%, transparent 8.5%) -20px 93px,\n    -webkit-linear-gradient(234deg, #e3d7bf 7.5%, transparent 7.5%) -20px 73px,\n    -webkit-linear-gradient(-54deg, #e3d7bf 7.5%, transparent 7.5%) 80px 73px;\nbackground-color: #232927;\nbackground-size: 100px 100px;'
            },
            {
                title: 'Blueprint',
                author: {
                    name: 'Lea Verou',
                    url: 'http://leaverou.me'
                },
                code: 'background-color:#269;\nbackground-image: -webkit-linear-gradient(white 2px, transparent 2px),\n  -webkit-linear-gradient(0, white 2px, transparent 2px),\n  -webkit-linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),\n  -webkit-linear-gradient(0, rgba(255,255,255,.3) 1px, transparent 1px);\nbackground-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;\nbackground-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px'
            }
        ]);
    },
    
    template: function () {
        return $('#gallery-template').tmpl();
    },

    render: function (item) {
        this.el.html(this.template());

        return this;
    }
});