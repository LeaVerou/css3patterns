(function(){

  var extend = {
    filter: function(query){
      if ( !query )
        return this.all();
      else
        return(this.select(function(item){
          return item.select(query);
        }));
    }
  };

  var include = {
    select: function(query){
      query = query.toLowerCase();
      var atts = (this.selectAttributes || this.attributes).apply(this);
      for(var key in atts) {
        var value = atts[key].toLowerCase();
        if (value && value.indexOf(query) != -1)
          return true;
      }
      return false;
    }
  };

  Spine.Model.Filter = {
    extended: function(){
      this.extend(extend);
      this.include(include);
    }
  };

})();