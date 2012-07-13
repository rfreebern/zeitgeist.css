zeitgeist.css
=============

zeitgeist.css is a crowdsourced, extendable basic CSS file that imparts a design based on current design aesthetics to any simple HTML file, such as those produced by compiling [markdown][1].

zeitgeist.css has the following goals:

1. Enable any HTML page to maintain a modern appearance effortlessly.
2. Ensure any page can easily embrace basic design best practices for readability, usability, accessibility, and compatibility.
3. Provide a central repository for community knowledge and examples of these best practices, and a history of how they change over time.

zeitgeist.css contains basic CSS normalization and best practices from [HTML5 Boilerplate][2]. Responsive design rules for desktop, tablets, and mobile phones are included, a set of styles for printing, and styles for projectors as well.

The spirit of the time
----------------------

Any page that links to the current version of zeitgeist.css will have a design that changes as zeitgeist.css changes. These changes are based on contributions and community decisions regarding the current state of web aesthetics, technology, and platform support.

Alternatively, a page can use a zeitgeist.css revision for any point in time in order to present a design reminiscent of that time period. The repository is tagged at the end of every month in order to facilitate linking to a revision from a specific point in time.

Usage
-----

Link directly to the current, regularly-updated master:

    <link rel="stylesheet" href="http://zeitgeist.rnf.me/zeitgeist.min.css" />

Link to a specific tagged version (e.g. for tag _2012-july_):

    <link rel="stylesheet" href="http://zeitgeist.rnf.me/archive/2012/july/zeitgeist.min.css" />

Use zeitgeist.css on any unstyled page by installing this Chrome extension, created by [@scottnelle][7]:

[http://www.scottnelle.com/318/zeitgeist-css-chrome-extension/][8]

Contributing
------------

Since zeitgeist.css is supposed to be representative of the opinions and knowledge of the web community as a whole, it needs the input of a large part of that community in order to be successful. If you're a designer, developer, or anyone else who feels the current state of zeitgeist.css doesn't reflect current design aesthetics or best practices, there are two ways to contribute:

1. **Open a new [issue][3] describing your opinion or idea.**
    Provide example code and/or links. This will allow the community to debate your suggestion and decide as a group if it should be included.

2. **[Fork][4] the code, make the necessary changes, and submit a pull request.**
    Include a description of and rationale for the changes you've made. This will also require community feedback, but it's much easier for me to merge your changes.

Necessarily, I must make the final decisions about what ends up in zeitgeist.css and what doesn't. Consider this a benevolent dictatorship; as I'm not a designer, I will allow the will of the community to guide my decisions fully, and make sure all issues are thoroughly discussed before a decision is made.

### Getting Started

After you have forked and cloned the zeitgeist.css repo, make your changes to the `zeitgeist.css` file, and open `examples/index.html` in your browser. By clicking the grey stylesheet toggle box in the upper right, you can switch between the current master stylesheet and your local version, to easily compare the changes you're making. You'll need to refresh your browser each time you save the file in order to see your latest modifications. When you are satisfied with your changes, commit them to your local repo, push to your github fork, and submit a pull request.

Credits
-------

zeitgeist.css is a work of the design community as a whole. The project was started by [Ryan Freebern][5]. Please [follow @rfreebern on twitter][6].

License
-------

As a product by and for the web design community as a whole, zeitgeist.css is public domain.

 [1]: http://daringfireball.net/projects/markdown "Daring Fireball: Markdown"
 [2]: http://h5bp.com "HTML5 Boilerplate"
 [3]: https://github.com/rfreebern/zeitgeist.css/issues "zeitgeist.css Issues"
 [4]: https://github.com/rfreebern/zeitgeist.css/fork_select "Fork zeitgeist.css"
 [5]: http://rnf.me "Ryan Freebern: I &hearts; the web."
 [6]: http://twitter.com/rfreebern "@rfreebern on Twitter"
 [7]: http://twitter.com/scottnelle "@scottnelle on Twitter"
 [8]: http://www.scottnelle.com/318/zeitgeist-css-chrome-extension/ "zeitgeist.css Chrome extension by Scott Nelle"
