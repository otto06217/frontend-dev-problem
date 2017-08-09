# System76 Frontend Developer Challenge

## Contents of This Repo

### HTML

The root document lives in `/index.html`, and uses partials from the `partials/`
directory are available via the `@@include()` preprocessor directive. We expect
the solution to be contained within `section.content` in the final rendered page,
but please feel free to structure the templates as you see fit.

Use `gulp serve` to build and run your application. Gulp is set up to host on
`localhost:7676` and to serve the compiled `/index.html` for any unknown
request.

### Scripts

The scripts are built from `scripts/app.js` and anything included therein via
`import`. Packages installed through NPM can be imported via their bare name
(i.e. `import 'jquery'`) and local files can be imported via a relative path
(i.e. `import './my-file'` for `/scripts/my-file.js`). We've left it mostly
empty to allow you the freedom to structure your solution as you see fit.

Results are compiled using [babel](https://babeljs.io/), with the `babel-env`
preset, a module loader, and the babel polyfill included, meaning that almost
any valid ESnext code should work. You are not expected to manually handle any
platform inconsistencies beyond what babel handles for you.

### Styles

The styles contains a simplified extraction from the production styles on
https://system76.com.

FIXME: what should someone know in order to get oriented to the existing code?

Results of the script are run through
[autoprefixer](https://github.com/postcss/autoprefixer). You are not expected to
manually handle explicit prefixes, special cases, or workarounds for any
platform beyond what autoprefixer handles for you.

## Challenge

The technical specifications for this challenge are intentionally open-ended.
Take all the time you need, consult anyone or anything you feel is appropriate,
and solve it in whatever manner you prefer. We expect you to pull in any tools
or frameworks you feel will help.

We intend for this to take about 2 hours of concentrated work, but feel free to
use as much or as little time as you need to complete it to your satisfaction.
Let us know when you're ready to have your code reviewed by submitting a pull
request.

We are looking to gauge your skills, not to trick you, so if there's anything
you don't understand or wish to have clarified please don't hesitate to ask. We
will be happy to respond to either an email or to an issue filed against this
repository.

### Description

We want users to be able to compare two System76 products and their tech specs.

Users should be able to visit a URL of the form `/compare/#model1#:#model2#`,
where `#model1#` and `#model2#` are model numbers from our current catalog. They
should see a brief header, including at least the human readable name, base
price, and thumbnail image, for each product. They should also see a combined
table of tech specs for both products. Please see the attached wireframes for
details.

Users should furthermore be able to change the selected products. Changes must
update the URL and load new content within the page. The browser's back and
forward buttons should navigate cleanly.

Tech specs are not directly correlated across products in our data set, but they
do have consistent copy conventions. For the purposes of this exercise, we
regard a spec as shared between two products if and only if the titles are
identical. Similarly, we regard the details of a shared spec to be equivalent if
and only if the details are an exact match. When in conflict, treat the sort
order of `#model1#` as authoritative.

### Wireframes

#### Smaller Displays

![Small Displays wireframe](/wireframes/small-displays.jpg)

#### Larger Displays

![Large Displays wireframe](/wireframes/large-displays.jpg)

### Relevant System76 URL Structure

All of our products have a thumbnail image available on our site at a URL of
`https://system76.com/assets/products/#model#/thumb.png`, where `#model#` is the
model number of the product.

### Relevant API Endpoints

Our API is available at `https://api-v2.system76.com/`.

`GET /products` provides a list of all the products in our catalog. The tech
specs for a given product are at `GET
/products/#product_id#/product_tech_specs`.

## Submitting your Code Sample

Fork this repository to your personal GitHub account, complete it to your
satisfaction, and file a pull request against this repository. We will expect
that pull request as your submission.

Note that because this repository is private, your fork will be private as well.
This does not count against your repository limit in GitHub. While any code you
generate is your own, we ask that in you not disclose your solution until after
our hiring search has concluded.

### Code Review

We (@bencates and @cassidyjames) will be reviewing your submission on GitHub. We
will add comments, ask questions, and critique decisions.

Treat this like a pull request you want to have merged. Take feedback, argue
with us where you disagree, and submit additional commits if you feel they are
warranted.

### What We're Looking For

We will be considering the totality of your submission, including but not
limited to compliance to the work request, quality of user experience, quality
of code, and any interactions we have with you during the review process.
