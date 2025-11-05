pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling code from GitHub...'
                git 'https://github.com/AarbajBagwan/spring-angular-app.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backendtut') {
                    echo 'Building Spring Boot backend...'
                    bat 'mvn clean install'  // for Windows
                    // sh 'mvn clean install' // for Linux/Mac
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('fronted') {
                    echo 'Building Angular frontend...'
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
            }
        }
    }
}
