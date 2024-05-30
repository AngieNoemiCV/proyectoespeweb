# Proyecto
En esta actividad  objetivo es organizar la base de datos de nuestro proyecto, en mi caso un sitio web, de desafios matematicos para niños de 6 a 12 años de edad. 

En este readme esta redactado todo lo que necesitamos para iniciar y desarrollar la actividad.

## Instrucciones de instalación y ejecución de API.

Tener instalados: 
- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)


1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/AngieNoemiCV/Proyecto-Final
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd node-restful
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3100`.

## Instrucciones de instalación y ejecución del FrontEnd.

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/AngieNoemiCV/proyectoespeweb.git
   ```

2. En terminal entrar a la carpeta donde se guardo
   
   ```sh
   cd (nombre de carpeta)
   ```

3. Luego entrar al proyecto

    ```sh
    cd (nombreproyecto)
    ```
4. Correr el proyecto 

    ```sh
    npm run dev
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

## Descripción del proyecto (estructura y uso del proyecto)


## Prototipos de la vista y cómo utilizarlas (tipo manual)
#### Form:

En esta pantalla el usuario podrá ingresar los datos, dentro de nivel se muestra una lista de los 6 niveles y cada nivel mostrara distintos temas. El nombre del desafio tendra que ingresarlo el usuario la fecha de realización y en descripción describira como se sintio o como le parecio ese desafío. 

Estará un botón de agregar y otro para regresar al dashboard donde estaran reflejados todas las publicaciones del foro. 
![alt text](image.png)

#### Dashboard:
En esta pantalla se mostrará las publicaciones del foro, se vera reflejado el nombre del usuario, y toda la informacion antes registrada en el formulario.

![alt text](image-1.png)

## Descripción de las pruebas y cómo ejecutarlas.
## URL de despliegue en Vercel.
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Repositorios

Enlace para entrar al repositorio del FrontEnd:  [GitHub FrontEnd](https://github.com/AngieNoemiCV/proyectoespeweb.git)

Enlace para entrar al repositorio de la API:  [GitHub API](https://github.com/AngieNoemiCV/Proyecto-Final.git)