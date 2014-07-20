# Contributing

## General Workflow

1. Fork the repo
1. Clone down to local
2. Create an upstream remote to faceoff master and pull from this often:<br>
```git remote add upstream https://github.com/Face-Off/faceoff.git```
1. Make commits to your local master branch
1. Pull from upstream master and resolve conflicts before pushing to your fork origin on github
1. Push to your fork master
1. Create Pull request to Faceoff master
1. Approve your own pull request
2. Push to Heroku

## Details 

### Fork the repo

Use github’s interface to make a fork of the project repo. Clone your forked repo to your local computer:
```
git clone https://github.com/<USER_NAME>/faceoff.git
```

Once complete navigate into the cloned folder and add the project repo as an upstream remote:
```
cd faceoff
git remote add upstream https://github.com/Face-Off/faceoff.git
```




<!-- Links -->
[style guide]: https://github.com/hackreactor-labs/style-guide
[n-queens]: https://github.com/hackreactor-labs/n-queens
[Underbar]: https://github.com/hackreactor-labs/underbar
[curriculum workflow diagram]: http://i.imgur.com/p0e4tQK.png
[cons of merge]: https://f.cloud.github.com/assets/1577682/1458274/1391ac28-435e-11e3-88b6-69c85029c978.png
[Bookstrap]: https://github.com/hackreactor/bookstrap
[Taser]: https://github.com/hackreactor/bookstrap
[tools workflow diagram]: http://i.imgur.com/kzlrDj7.png
[Git Flow]: http://nvie.com/posts/a-successful-git-branching-model/
[GitHub Flow]: http://scottchacon.com/2011/08/31/github-flow.html
[Squash]: http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html