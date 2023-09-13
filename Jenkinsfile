pipeline {
    agent any

    stages {
        stage('compile') {
            steps {
                dir('aupp-demo') {
                    sh '''
                        docker build -t image-mine .
                    '''
                }
            }
        }
}