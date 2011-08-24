C3P.Pattern = Spine.Model.setup('Pattern', ['title', 'author', 'code']);
C3P.Pattern.include({
    classname: function () {
        return this.title.replace(/[^a-zA-Z0-9]*/g, '');
    },
    size: function () {
        return unescape(encodeURIComponent(this.code)).length;
    }
});