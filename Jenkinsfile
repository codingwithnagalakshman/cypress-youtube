pipeline {
   agent any

   tools {nodejs "node21"}

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
               sh 'npm run cy:override'
           }
       }
       stage('Deploy') {
           steps {
               echo 'Deploying....'
           }
       }
   }
}
