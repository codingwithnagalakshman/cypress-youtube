pipeline {
   agent any

   tools {nodejs "nodejs21"}

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('e2e Tests') {
           steps {
               sh 'npm run cy:cloud'
           }
       }
       stage('e2e Tests 2') {
           steps {
               sh 'npm run cy:run'
           }
       }
   }
}
