== DOCKER

LISTAR CONTAINERS ATIVOS
    - docker ps


LISTAR TODOS CONTAINERS
    - docker ps -a


REMOVER UM CONTAINER (o container não pode estar "rodando")
    - docker rm $id


INICIAR CONTAINER
    - docker start $id


PARAR UM CONTAINER
    - docker stop $name


ACESSAR O TERMINAL DE UM CONTAINER
    - docker exec -it $id|$name /bin/bash
        -? Para sair use Ctrl+D ou "exit"


VISUALIZAR LOGS DE UM CONTAINER
    - docker logs $id|$name
        -? Dessa forma apareceram os últimos registros e o terminal ficará livre para uso
    - docker logs $id|$name -f
        -? A flag "-f" server para observar os logs, portanto o terminal não ficará livre
        -? Para sair digite Ctrl+C


VISUALIZAR IP DE UM CONTAINER
    - Windows
        - docker inspect --format="{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}" $id|$name
    - Linux
        - docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $id|$name
        - docker exec $id|$name cat /etc/hosts



== DOCKER COMPOSE

INICIAR/CRIAR CONTAINER
    - docker-compose up
    - docker-compose up -d
        -? A flag "-d" serve para deixar o terminal livre


INICIAR CONTAINER
    - docker-compose start
        -? Todos os serviços do arquivo docker-compose.yml serão iniciados


PARA UM CONTAINER
    - docker-compose stop
        -? Todos os serviços do arquivo docker-compose.yml serão parados


PARA UM CONTAINER E REMOVER MODIFICAÇÕES
    - docker-compose down
        -? Todos os serviços do arquivo docker-compose.yml serão parados e removidos
