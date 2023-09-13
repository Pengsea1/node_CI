pipeline {
agent any
    stages {
        stage('Build') {
            steps {
                
                docker build -t my-image .
                
            }
        }
    }
}