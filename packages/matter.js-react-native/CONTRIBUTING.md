# Contributing

Implementing and maintaining a protocol stack is a lot of work, therefore any
help is appreciated, from creating issues, to contributing documentation, 
fixing issues and adding new features.

Please follow the best-practice contribution guidelines as mentioned below 
when submitting any changes.

### Contributions License Agreement

Before contributing, please read the 
[Contributions License Agreement](./CLA.md).
Every contributor must sign this agreement before any code is merged into the
repository.

### Git

Please send us the pull request including details about your change and 
referencing relevant issues or discussions.

In the case that write access to the main repository were granted to 
contributors the following basic ground-rules should be applied:

* Do not use the main branch for ongoing work. Please use feature- or 
fix-branches instead

### Guidelines for contributions

The following general guidelines for contributions apply:
* If you plan to introduce new features, changes to the somewhat "magic" typings
or significant changes, the discussions in GitHub are a good idea to discuss 
details together with the community before starting to work on it. This can ease
the PR review provess because all parties know more context.
* The library tries to have "no external dependencies" to be used in also other 
JavaScript environments than just Node.js. Please do not introduce new 
dependencies without a discussion before committing the PR.
* If you had a discussion on the topic with one developer please make sure to 
include this developer in any case in your review list. When the PR got 
approved it will be merged by the reviewer.

In the case that write access to the main repository were granted to 
contributors the following rules should be applied:

* External API changes and significant modifications should use pull requests
to solicit feedback from other contributors.
* As a reviewer, upon approval, don't merge the PR, let the author do the 
final merge and associate post merge tasks if any.

### Code Style

Currently, there is no tooling in place to maintain code style. This might 
change in the future.

When contributing code please stick to the Code style you find in the code. 
If you see places where a reformatting makes sense to increase the readability 
please create separate commits for these formatting changes; ideally create 
separate PRs. This will allow reviews to better focus on the functional 
changes! Please try to avoid reformatting "just because your IDE settings are 
in a certain way/you are used to a certain style.". If you like to propose 
changes to code style please open a discussion about it.

If you find code places that can be enhanced because missing comments, missing 
documentation, missing tests, missing error handling, missing checks, missing 
logging, missing ... feel free to provide separate PRs too.
Let's work together to make the code of this library as good as possible and a 
professional basis for the future with Matter in TypeScript/JavaScript!

### Code documentation
Please add code documentation for new functions and classes. If you change 
existing code please try to update the documentation as well. The goal of the 
documentation is to support other developers to understand why the code is 
written that way, especially when there are some "magic" things happening.

### Building TypeScript
This project uses TypeScript and so needs to be build before it can be used 
in own projects

To build the project run

``` sh
npm run build
```

Please make sure check already locally that your code builds without warnings
or errors.

The compiled code will be generated in the build/ directory and it not 
commited to GitHub.

### Testing

Testing is done using [Mocha](https://mochajs.org/).

Please add tests if you add new features or fix bugs, if affordable. If you 
are unsure how to test something please ask.

Running all the tests can be done locally by executing:

``` sh
npm run test
```

You can also run a specific test using:

``` sh
npm run test -- -g [test name declared in describe()]
```

Please use the testing already locally to make sure the changes do not break 
the tests.
