node {

 def app

    stage('Clone repository')  {
 
        checkout scm

    }

try {

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

     stage("Stop ${e} Containers "){

        sh "docker ps -f name=api-${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=api-${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker ps -f name=front-${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=front-${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker ps -f name=TestThetiptop${e} -q| xargs --no-run-if-empty docker container stop"
        sh "docker ps -f name=TestThetiptop${e} -q| xargs --no-run-if-empty docker container rm"
        sh "docker system prune -f"        
         }
   
  
   
    stage("Build images ${e} ") {
        

          appAPI = docker.build("dsparchiweb020vm/api", "--label traefik.enable=true --label traefik.http.routers.api-${e}.rule='Host(`${url2}`)' --label traefik.http.services.api-${e}.loadbalancer.server.port=80 --label traefik.http.routers.api-${e}.entrypoints=websecure --label  traefik.http.routers.api.tls.certresolver=myresolver   --network=web    ./TheTipTopSiteweb/API/. ")
         

          appFront = docker.build("dsparchiweb020vm/front", "--label traefik.enable=true --label traefik.http.routers.front-${e}.rule='Host(`${url}`)' --label traefik.http.services.front-${e}.loadbalancer.server.port=80  --label traefik.http.routers.front-${e}.entrypoints=websecure --label  traefik.http.routers.front.tls.certresolver=myresolver   --network=web  ./tipTopFront/.")
           
          appTest = docker.build("dsparchiweb020vm/test", "--label traefik.enable=true --label traefik.http.routers.test-${e}.rule='Host(`api.devops.dsp-archiweb020-vm.fr`)' --label traefik.http.services.test-${e}.loadbalancer.server.port=1290   --label traefik.http.routers.test-${e}.entrypoints=websecure  --network=web  ./TheTipTopSiteweb/.")

    
    }
      stage("run containers ${e} ") {
           
         appAPI.run("--name api-${e} -d --hostname api-${e} --rm  --network=web ")
         appFront.run("--name front-${e} -d --hostname front-${e} --rm    --network=web ")
          sh"docker run -dt --hostname TestThetiptop${e}  --name TestThetiptop${e} --entrypoint tail dsparchiweb020vm/test"
      }
      
     stage("test ${e} "){
             
            sh "docker exec TestThetiptop${e} bash "
                
            sh "docker exec  TestThetiptop${e}  dotnet test --logger trx"
            


     }
    stage("Push images ") {
      
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            
             

            appAPI.push("latest")
            appFront.push("latest")
            appTest.push("latest")
            
        }
    }
     }catch (exception) {
        testStatus = 'failed'
        errorMsg="Failed on stage build and run container: ${exception.getMessage()}"
    }
     finally {
            stage("send report ${e} "){
                sh "docker cp TestThetiptop${e}:/src/TestThetiptop/TestResults/ ."
                mstest testResultsFile:"**/*.trx", keepLongStdio: true
                }
            }
}