
var main_story = {
    about : {
        title : "Lore Itself",
        by : "Lewey Geselowitz",
        url : "http://www.lewcid.com/lg/aboutme.html",
        first_page : "contents",
    },
    pages_by_id: {
        contents : {
            title : "Lore Story Editor",
            text : "Lore visualizes interactive stories.",
            options : {
                intro: "Begin",
                data_model : "Describe the data model",
            },
        },
        intro : {
            text : "The intro room",
            options : {
                person1 : "Talk to first person you see.",
                data_model : "Talk to the data guy",
                contents : "Head back where you came from."
            },
        },
        data_model : {
            title : "Lore Data Model",
            text : "Stories are collections of pages, pages contain text"
                + ", and options which link to other pages, and are presented"
                + " as buttons.",
            options : {
                contents : "Option back to the 'Contents' page.",
                intro : "Experiential example",
                story_data : {
                    text : "Story JSON file",
                    url : "https://github.com/leweyg/lore/blob/main/docs/story.json.js",
                },
                js_runtime : {
                    text : "JavaScript Runtime",
                    url : "https://github.com/leweyg/lore/blob/main/docs/lore.js",
                },
                html_host : {
                    text : "HTML Host Page",
                    url : "https://github.com/leweyg/lore/blob/main/docs/index.html",
                },
                bad_link : "Bad links don't work!",
            },
        },
        person1 : {
            text : "`I'm the first person, other than yourself of course. "
                + "Here to learn about interactive fiction eh?`",
            options : {
                person1_deeper : "Yes",
                data_model : "The facts only!",
                contents : "Nevermind",
            }
        },
        person1_deeper : {
            text : "`So is it really interactive or is it your own will acting" 
                + " with the system?'",
            options : {
                person1_good : "Interactivity is it's own medium of expression.",
                data_model : "It's all on rails",
            },
        },
        person1_good : {
            text : "`Good...`",
            options : {
                person1_end : "...",
            },
        },
        person1_end : {
            text : "`You understand this will end at some point yes?`",
        },
    }
};
