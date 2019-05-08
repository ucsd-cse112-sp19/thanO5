git branch
git remote set-url origin https://DannyFung97:48b5a3343ff75559980d107f1f129ca23b07576f@github.com/ucsd-cse112/thanOS.git
git config --global user.email "dannyfung97@gmail.com"
git config --global user.name "Danny Fung"
git add -A
git commit -m "Automated JSDocs with [skip ci]"
git pull
git push origin HEAD:${BRANCH}