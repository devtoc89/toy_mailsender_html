PROJECT_ROOT="/home/ec2-user/project/forduellee_html"
SRC_DEPLOY_FOLDER="$PROJECT_ROOT/src"
ORG_DEPLOY_FOLDER="/usr/share/nginx/html"

APP_LOG="$PROJECT_ROOT/application.log"
ERROR_LOG="$PROJECT_ROOT/error.log"
DEPLOY_LOG="$PROJECT_ROOT/deploy.log"

TIME_NOW=$(date +%c)

# build 파일 복사
echo "$TIME_NOW > 파일 복사" >> $DEPLOY_LOG
sudo rm -rf $ORG_DEPLOY_FOLDER
sudo cp -r $SRC_DEPLOY_FOLDER $ORG_DEPLOY_FOLDER
sudo chown -R nginx:nginx $ORG_DEPLOY_FOLDER

