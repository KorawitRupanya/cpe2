pipeline {
     agent { label 'master'
            docker { image 'node:10.12.0-alpine' }
           }
     stages {
          stage('Source') {
               steps {
                    git branch: 'master',
                        url: 'https://github.com/KorawitRupanya/cpe2.git'
               }
          }
          stage('Build') {
               steps {
                    sh 'npm install'
               }
          }
          stage('Test') {
               steps {
                    echo 'testing...'
               }
          }
          stage('Deploy') {
               steps {
                    sh 'npm start'
               }
          }
     }
}
