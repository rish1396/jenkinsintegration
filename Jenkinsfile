pipeline {
    agent any
    stages {
        stage('Submit Stack') {
            steps {
                withAWS(credentials: 'aws', region: 'us-east-1') {
                    sh "aws cloudformation create-stack --stack-name test --template-body file://cft.yml --capabilities CAPABILITY_NAMED_IAM --region 'us-east-1'"
                }    
             }
         }
     }
}
