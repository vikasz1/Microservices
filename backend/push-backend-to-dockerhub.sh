#!/bin/sh

# Variables
IMAGE_NAME="fastapi-backend"
DOCKER_USERNAME="vikasz1"
DOCKER_REPO="$DOCKER_USERNAME/$IMAGE_NAME"
TAG="latest"

# Build the Docker image
docker build -t $IMAGE_NAME .

# Tag the Docker image
docker tag $IMAGE_NAME $DOCKER_REPO:$TAG

# Log in to Docker Hub
docker login --username $DOCKER_USERNAME

# Push the Docker image to Docker Hub
docker push $DOCKER_REPO:$TAG
