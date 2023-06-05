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

     stage("Stop and remove Containers ${e}   "){

        sh "docker ps -f name=api-${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=api-${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker ps -f name=front-${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=front-${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker ps -f name=TestThetiptop${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=TestThetiptop${e} -q| xargs --no-run-if-empty docker container rm"
  		sh "docker ps -f name=mariadbpreprod -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=mariadbpreprod -q| xargs --no-run-if-empty docker container rm"
        sh "docker system prune -f"        
         }
   
  
   
    stage("Build ${e} images ") {
        

          appAPI_preprod = docker.build("dsparchiweb020vm/api_preprod", "--label traefik.enable=true --label traefik.http.routers.api-${e}.rule='Host(`${url2}`)' --label traefik.http.services.api-${e}.loadbalancer.server.port=80 --label traefik.http.routers.api-${e}.entrypoints=websecure --label  traefik.http.routers.api.tls.certresolver=myresolver   --network=web    ./TheTipTopSiteweb/API/. ")
         

          appFront_preprod = docker.build("dsparchiweb020vm/front_preprod", "--label traefik.enable=true --label traefik.http.routers.front-${e}.rule='Host(`${url}`)' --label traefik.http.services.front-${e}.loadbalancer.server.port=80  --label traefik.http.routers.front-${e}.entrypoints=websecure --label  traefik.http.routers.front.tls.certresolver=myresolver   --network=web  ./tipTopFront/.")
           
          appTest_preprod = docker.build("dsparchiweb020vm/test_preprod", "--label traefik.enable=true --label traefik.http.routers.test-${e}.rule='Host(`api.devops.dsp-archiweb020-vm.fr`)' --label traefik.http.services.test-${e}.loadbalancer.server.port=1290   --label traefik.http.routers.test-${e}.entrypoints=websecure  --network=web  ./TheTipTopSiteweb/.")
		  
         
         
          appAPI_prod = docker.build("dsparchiweb020vm/api_prod", "    ./TheTipTopSiteweb/API/. ") 

          appFront_prod = docker.build("dsparchiweb020vm/front_prod", "  ./tipTopFront/.")
           
         
          
           
    }
      stage("run ${e} containers  ") {
           
         //appAPI_preprod.run("--name api-${e} -d  --hostname api-${e} --rm --env 'ASPNETCORE_ENVIRONMENT=Development' --env 'ConnectionStrings__ApiThetiptop=server=62.210.187.246;port=3307;database=thetiptop_preprod;user=root;password=archi20'  --network=web  ")
         
         appAPI_preprod.run("--name api-${e} -d  --hostname api-${e} --rm  --network=web  ")

         appFront_preprod.run("--name front-${e} -d --hostname front-${e} --rm    --network=web ")
            
         // run bdd container

         sh "docker compose stop"
         sh "docker compose up --build -d"
         
         //rights for files
         sh "chmod 755 -R ./bddPreprod.sql"
         
         sh "ls -al"
          
         sh "chmod +x ./bddPreprod.sql"

        sh"docker run -dt --hostname TestThetiptop${e}  --name TestThetiptop${e} --entrypoint tail dsparchiweb020vm/test_preprod"
         
        
    
     }
     
    stage("Create db and import data")
    {
         sh "cat ./db/mariadb/bddPreprod.sql |docker exec -i  mariadbpreprod mysql  -uroot  -parchi20 thetiptop_preprod "

    }
      

  
    stage("Push images pre-prod ") {
      
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            
            appAPI_preprod.push("latest")
            appFront_preprod.push("latest")
            appTest_preprod.push("latest")
            
            appAPI_prod.push("latest")
            appFront_prod.push("latest")

           
            
        }
    }
   
     
}