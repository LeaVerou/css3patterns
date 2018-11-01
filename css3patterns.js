(function(){

var patterns = document.querySelectorAll("#patterns > li"),
	recentPattern = null,
	currentPattern = null;

for (var i=0; i<patterns.length; i++) {
	let pattern = patterns[i];

	let div = document.createElement("div"),
		heading = div.appendChild(document.createElement("h2")),
		code = document.createElement("textarea"),
		title = pattern.getAttribute("title"),
		close = div.appendChild(document.createElement("a"));

	pattern.id = title.toLowerCase().replace(/\s+/g, "-");

	heading.innerHTML = '<a href="#' + pattern.id + '">' + title + "</a>";

	code.value = pattern.getAttribute("style");
	code.setAttribute("wrap", "off");

	code.addEventListener("input", function(evt) {
		var byteSize = this.parentNode.querySelector(".bytesize");

		if (byteSize) {
			byteSize.innerHTML = ByteSize.format(ByteSize.count(this.value), true);
		}

		pattern.setAttribute("style", this.value);

		if (currentPattern === pattern) {
			// A pattern is opened
			document.body.setAttribute("style", this.value);
		}

		code.style.setProperty("--lines", this.value.trim().split(/\r?\n|\r/).length);
	});

	close.className = "close";
	close.href = "#";
	close.innerHTML = "✖";

	if (window.ByteSize) {
		heading.innerHTML += ' <span class="bytesize">(' + ByteSize.format(ByteSize.count(code.value), true) + ")</span>";
	}

	var author = pattern.getAttribute("data-author");
	if (author) {
		var p = div.appendChild(document.createElement("p")),
			authorUrl = pattern.getAttribute("data-author-url");
		p.innerHTML = "by " + (authorUrl? '<a href="' + authorUrl + '">' + author + "</a>" : author);
	}

	div.appendChild(code);

	pattern.appendChild(div);

	pattern.onclick = function(evt) {
		// Firefox has focus issues if we don't restrict this
		if (!/textarea/i.test(evt.target.nodeName)) {
			location.hash = "#" + this.id;
		}
	};

	window.Incrementable && new Incrementable(code);

	code.dispatchEvent(new InputEvent("input"));
}

(onhashchange = function() {
	var pattern = location.hash? document.querySelector("#patterns li" + location.hash) : null;

	if (pattern) {
		recentPattern = currentPattern = pattern;
		document.body.setAttribute("style", pattern.getAttribute("style"));
	}
	else {
		currentPattern = null;
		document.body.removeAttribute("style");
	}
})();

})();
