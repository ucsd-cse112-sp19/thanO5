if [ "$(git log -1 --pretty=%B)" != "Automated JSDocs" ] && [ "$1" == "false" ] 
then

    git branch
    git remote set-url origin https://rachelbarrow:$GITHUB_API_KEY@github.com/ucsd-cse112/thanOS.git
    git config --global user.email "rbarrow@ucsd.edu"
    git config --global user.name "Rachel Barrow"
    git add -A
    git commit -m "Automated JSDocs"
    git pull
    git push origin HEAD:${BRANCH}
    ./cc-test-reporter format-coverage -t lcov "./coverage/lcov.info"
    ./cc-test-reporter upload-coverage

fi