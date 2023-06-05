node {
 def app

    stage('Clone repository')  {
 
       checkout scm

    }

    if(env.BRANCH_NAME.contains("release")){
        e='pre-prod';
        url='preprod.dsp-archiweb020-vm.fr'
        url2='api.preprod.dsp-archiweb020-vm.fr'
    }else if(env.BRANCH_NAME.contains("master")){
        e='prod';
        url='prod.dsp-archiweb020-vm.fr'
        url2='api.prod.dsp-archiweb020-vm.fr'
    }else{
        e='Dev';
        url='dev.dsp-archiweb020-vm.fr'
        url2='api.dev.dsp-archiweb020-vm.fr'
    }

     def remote = [:]
                remote.name = 'Devops-archi22'
                remote.host = '62.210.187.246'
                remote.user = 'venichelle'
                remote.password = 'joce1993'
                remote.allowAnyHosts = true

     stage("Backup bdd before deploying in prod")
    {
      
      sshCommand remote: remote, command: 'ls -al'
      sshCommand remote: remote, command: 'cd BackupDB && ls && ./backupbdd.sh'
      
    }


	
    stage("Stop ${e} Containers "){

        sh "docker ps -f name=mariadb${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=mariadb${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker ps -f name=api-${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=api-${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker ps -f name=front-${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=front-${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker ps -f name=TestThetiptop${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=TestThetiptop${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker system prune -f"        
         }

   
	     
	
    stage("Deploy on ${e}")
     {
            
       sh "docker compose stop"
       sh "docker compose up --build -d"
       
       
      }
	  

   stage("Restore database"){
   
        sh "cat ./bddPreprod.sql |docker exec -i  mariadbprod mysql  -uroot  -parchi20 thetiptop_prod "
    
       
   }


}