pipeline {
    agent {
        label "test-docker-agent"
    }
    
    triggers {
        pollSCM("H/2 * * * *")
    }
    
    environment {
        KEY="VALUE"
    }
    
    stages {
        stage("pre") {
            steps {
                git branch: "main", url: "https://github.com/maverickreal/cipher_school_lpu_devops_cloud.git"
                echo "Pull done."
            }
        }
        
        stage("build") {
            steps {                
                sh '''
                sh print.sh
                echo "Build done."
                '''
            }
        }
    }
    
    post {
        success {
            echo "Pipeline succeeded."
        }
        
        failure {
            echo "Pipeline failed."
        }
        
        always {
            cleanWs()
            echo "Cleanup done, now exiting."
        }
    }
}
