pipeline {
agent any

stages {
stage('Build') {
    steps {
        docker build -t my-image .
        echo 'Build Successfulj'
    }
}
stage('Deployment'){
    steps{
        echo 'done'

    } 
}
}
}