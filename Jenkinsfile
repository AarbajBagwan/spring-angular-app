pipeline {
    agent any

    environment {
        BACKEND_DIR = "backendtut"
        FRONTEND_DIR = "fronted"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Pulling code from GitHub...'
                git branch: 'main', url: 'https://github.com/AarbajBagwan/spring-angular-app.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir("${BACKEND_DIR}") {
                    echo 'Building Spring Boot backend using Maven...'
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${FRONTEND_DIR}") {
                    echo 'Installing Node dependencies and building Angular app...'
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: "${BACKEND_DIR}/target/*.jar", fingerprint: true
                archiveArtifacts artifacts: "${FRONTEND_DIR}/dist/**/*", fingerprint: true
            }
        }

        stage('Deploy (optional)') {
            steps {
                echo 'You can deploy the .jar or frontend files from here...'
                echo 'For example: copy to Tomcat, or run java -jar target/app.jar'
            }
        }
    }

    post {
        success {
            echo '✅ Build Successful!'
        }
        failure {
            echo '❌ Build Failed. Check logs.'
        }
    }
}
