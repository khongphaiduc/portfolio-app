pipeline {
    agent any

    stages {
        
        stage('Build and Push Image') {
            steps {
                withDockerRegistry(credentialsId: 'docker', url: 'https://index.docker.io/v1/') {              
                        sh 'docker build -t ptrungduc1011/profile:v1 .'
                        sh 'docker push ptrungduc1011/profile:v1'       
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop profile || true
                    docker rm profile || true
                    docker rmi ptrungduc1011/profile:v1 || true

                    docker run -d \
                      --name profile \
                      -p 8989:8080 \
                      --restart unless-stopped \
                      ptrungduc1011/profile:v1
                '''
            }
        }
    }
}