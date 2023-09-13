pipeline {
agent any

stages {
stage('Build') {
    steps {
        docker build -t my-image .
        echo 'Build Successful'
    }
}
stage('Deployment'){
    steps{
        echo 'done'

    } 
}
}
}