commitmsg=$(git log -1 --pretty=%B)

if [ "$commitmsg" != "Automated JSDocs" ] 
then

    echo "in if"

fi