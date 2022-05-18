/*
git status: state of working directory
git commit
git branch
git checkout <location> (can type any place in the git main or branches or commits)
git checkout -b (combines branch & checkout)
git merge
git rebase (like merge but combines back into single linear flow)
git log (to see hashes)
HEAD (points to most recent commit)

Relative Refs:
  ^ means go up one in the git chain, for example, 'git checkout HEAD^' will go to HEAD's parent
  ~<num> means go up a specified number of times, so 'git checkout HEAD~4' will go up 4 commits from HEAD
  -f means reassign a branch to a commit, so 'git branch -f main HEAD~3' moves (by force) the main branch to three parents behind HEAD.
Making Changes:
git reset (will go back in time and make it as if a commit had never happened, so "git reset HEAD~1" will go back 1 commit. Only works for local branches on your machine, not on branches others are using.)
git revert (will make a new commit with changes that just happen to reset. This allows changes to be shared with others.)
*/

/*
Commit:
Before you commit a change, it must be staged. To stage a file, add it to git. "git add <filename>"
Once you type in "git commit", it opens vi. 
  In vi editor:
    Press "i" for insert
    Type a commit message
    If you want to move through the editor, use "j" and "k". 
    Use ":wq" to quit and save
*/

function add(a, b) {
  return a + b;
}
