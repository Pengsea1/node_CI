pipeline {
    agent any

    stages {
        stage('compile') {
            steps {
                    sh '''
                        docker build -t image-mine .
                    '''
            }
        }
    }
}