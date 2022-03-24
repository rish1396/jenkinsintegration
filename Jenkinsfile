pipeline {
    agent any
    stages {
        stage('Fetch'){
            steps{
                sh "git clone https://github.com/rish1396/jenkinsintegration.git"
            }  
        }
        stage('Zip'){
            steps{
                sh "npm install"
                sh "zip -r test.zip test"
            }  
        }
        stage('Submit Stack') {
            steps {
                withAWS(credentials: 'aws', region: 'us-east-1') {
                    sh "aws s3 cp test.zip s3://1nodelambda"
                    sh "aws cloudformation create-stack --stack-name test --template-body file://cft.yml --capabilities CAPABILITY_NAMED_IAM --region 'us-east-1'"
                }    
             }
         }
     }
}
