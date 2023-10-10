pipeline {
    agent any
    
    stages {
        stage('Build JAR') {
            steps {
                sh 'jar -cvf 645hw2.war *'
                sh 'ls'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t madhavnemani/sixfourfive .'
            }
        }
        
        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh '''
                        echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                    '''
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                sh 'docker push madhavnemani/sixfourfive'
            }
        }
        
        stage('Copy Kube Config') {
            steps {
                sh 'cp config ~/.kube/config'
            }
        }
        
        stage('Restart Kubernetes Deployment') {
            steps {
                sh 'kubectl rollout restart deployment/sixfourfive'
            }
        }
    }
}