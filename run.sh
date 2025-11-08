# Для запуска
# chmod +x run.sh 
# ./run.sh

docker build -t uxsearch-frontend-app .
docker run -it --rm -p 3000:3000 uxsearch-frontend-app