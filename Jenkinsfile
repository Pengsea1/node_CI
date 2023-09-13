pipeline {
agent any
    stages {
        stage('Build') {
            steps {
                step{
                    docker build -t my-image .
                }
            }
        }
    }
}