pipeline {
    agent any
    // // {

    // //     docker{
    // //         image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    // //     }
    // // }

    stages {
        stage('install playwright') {
            steps {
              echo'''
                  npm i -D @playwright/test
                  npx playwright install
              '''
            }
        }
        stage('help') {
            steps {
                echo 'npx playwright test --help'
            }
        }
        stage('test') {
            steps {
                echo '''
                    npx playwright test --list
                    npx playwright test
                '''
            }
        }
    }
}