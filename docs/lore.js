

function lore_init(story, titleEl, paraEl, optionsEl) {
    var lore_type = {
        story : story,
        currentPageId : story.about.first_page,
        redraw : function () {
            var page = this.currentPage();
            titleEl.innerText = page.title ? page.title : "";
            paraEl.innerText = page.text;
            optionsEl.innerHTML = this.redraw_options(page);
            if (this.post_redraw) this.post_redraw();
        },
        restart : function() {
            this.gotoPage(this.story.about.first_page);
        },
        currentPage : function () {
            return this.story.pages_by_id[ this.currentPageId ];
        },
        gotoPage : function(pageId) {
            var page = this.story.pages_by_id[pageId];
            if (page) {
                this.currentPageId = pageId;
                this.redraw();
            } else {
                var msg = "Unknown page '" + pageId + "'";
                msg += " mentioned on page '" + this.currentPageId + "' ";
                alert(msg);
            }
        },
        setupStory : function(storyArg) {
            if (storyArg) {
                this.story = storyArg;
            }
            this.currentPageId = story.about.first_page;
            for (var page_id in this.story.pages_by_id)
            {
                var page = this.story.pages_by_id[page_id];
                if (!page.id) {
                    page.id = page_id;
                }
                for (var optionId in page.options) {
                    var option = page.options[optionId];
                    if (typeof(option) == "string") {
                        option = { text:option };
                        page.options[optionId] = option;
                    }
                    if (option.script) {
                        option.script();
                    }
                    if (!option.goto_page && !option.script) {
                        option.goto_page = optionId;
                    }
                }
            }
        },
        redraw_options : function(page) {
            var els = "";
            var isFirst = true;
            for (var optionId in page.options) {
                var option = page.options[optionId];
                var el = "<div class='option_div_style ";
                if (isFirst) el += " option_div_style_first ";
                el += "' onclick=\"lore.selected_option('" + optionId + "')\" ";
                el += ">" + option.text + "</div>\n";
                els += el;
                isFirst = false;
            }
            return els;
        },
        selected_option : function(optionId) {
            var page = this.currentPage();
            var option = page.options[optionId];
            if (option.goto_page) {
                this.gotoPage( option.goto_page );
            }
            this.redraw();
        },
    };
    var lore = new Object(lore_type);
    lore.setupStory(story);
    lore.currentPageId = story.about.first_page;

    lore.redraw();
    return lore;
};

