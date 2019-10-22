pipeline {
     agent { label 'master'
            docker { image 'a80f8902daac' }
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
