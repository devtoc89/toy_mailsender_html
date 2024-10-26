PROJECT_LOG_PATH="/home/ec2-user/project/log"
PROJECT_ROOT="/home/ec2-user/project/forduellee_html"
SRC_DEPLOY_FOLDER="$PROJECT_ROOT/src"
ORG_DEPLOY_FOLDER="/usr/share/nginx/html"


DEPLOY_LOG="$PROJECT_LOG_PATH/html_deploy.log"

TIME_NOW=$(date +%c)

# build 파일 복사
mkdir $PROJECT_LOG_PATH 2> /dev/null
echo "$TIME_NOW > 파일 복사" >> $DEPLOY_LOG
sudo rm -rf $ORG_DEPLOY_FOLDER
sudo cp -r $SRC_DEPLOY_FOLDER $ORG_DEPLOY_FOLDER
sudo chown -R nginx:nginx $ORG_DEPLOY_FOLDER

