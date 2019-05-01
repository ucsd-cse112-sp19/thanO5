if [ "$(git log -1 --pretty=%B)" != "Automated JSDocs" ] && [ "$1" == "false" ] 
then

    git branch
    git remote set-url origin https://DannyFung97:48b5a3343ff75559980d107f1f129ca23b07576f@github.com/ucsd-cse112/thanOS.git
    git config --global user.email "dannyfung97@gmail.com"
    git config --global user.name "Danny Fung"
    git add -A
    git commit -m "Automated JSDocs"
    git pull
    git push origin HEAD:${BRANCH}
    ./cc-test-reporter format-coverage -t lcov "./coverage/Chrome 62.0.3202 (Linux 0.0.0)/lcov.info"
    ./cc-test-reporter upload-coverage

fi