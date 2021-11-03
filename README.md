# ProyectoSenpai_Segunda_Entrega-
Segunda entrega del Proyecto referente al curso de Full Stack Developer

**** Alcance de la SEGUNDA entrega:

	**** PROYECTO - SERVIDOR

		-- Servidor Node JS 
				
		-- Puerto definido: 3000
				
		-- Librerias Utilizadas
			-- express
			-- bcrypt
			-- cors
			-- body-parser
			-- node-fetch
			-- jsonwebtoken		
						
		-- Rutas definidas: 
			-- /user 
				EndPoints
					-- "/register" (POST)
						-- Guarda un nuevo usuario en nuestros datos y retorna la info del mismo en formato JSON
					-- "/login" (POST)
						-- Realiza el Login de un usuario recibiendo usuario/password y devolviendo la validación o no del usuario.
											
						** Por el momento, y hasta no acceder a BD, la información de los Usuarios se encuentran definidos en memoria en el archivo "user.js"
				
			-- /proyecto
				EndPoints: 
					-- "/" (GET)
						-- Retorna todos los Proyectos en formato JSON
					-- "/top" (GET)
						-- Retorna 3 Proyectos en formato JSON
					-- "/:id"  (GET)
						-- Retorna el Proyecto con ID = al parámetro recibido
					-- "/comentario/add" (POST)
						-- Agrega un Comentario a un Proyecto
						
						** Por el momento, y hasta no acceder a BD, la información de los Proyectos se encuentran definidos en memoria en el archivo "proyecto.js"
								
	**** PROYECTO - SITIO WEB

		** CAMBIOS APLICADOS EN ESTA SEGUNDA ENTREGA:			
					
			-- Nueva página de Login de usuario (login.html)
			-- Validación y Registro de nuevo Usuario
				-- Por ahora solo realizamos los metodos, obtenemos la respuesta y nada más. 
				-- Quedaría a futuro redireccionar al usuario logueado a la página principal y gestionar todo lo relacionado con el Token y demás.
				-- Datos del Usuario de Prueba ya creado en memoria: 
					-- User: daniel@mail.com
					-- Pass: 1112
						
			-- La página principal ahora obtiene la información de los proyectos desde el Servidor creado en Node, antes cargaba los datos desde este mismo sitio web.
						
			-- En el redireccionamiento a la página de detalle de cada proyecto se agrega un parámetro via URL para identificar el Proyecto seleccionado.
						
			-- La página de detalle ahora trae la info del proyecto vía API accediendo al Servidor de Node creado y utilizando el parámetro recibido vía URL antes mencionado.
						
			-- También se agrega la funcionalidad de guardar un nuevo comentario para un Proyecto vía API accediendo al Servidor de Node creado.
						
	****  INSTALACIÓN
					
		** SERVIDOR
			-- Levantar el "Proyecto Servidor" en VSCode
			-- Acceder por consola a la ruta donde se ubica el archivo "app.js" 
			-- Ejecutar "npm install" para instalar las dependencias necesarias indicadas en el archivo "package.json"
			-- Una vez finalizadas la instalación anterior, ejecutar "node app.js"
			-- Esto debería levantar nuestro servidor, probar entrar desde el navegador (http://localhost:3000/) y ver que este todo OK.
					
		** SITIO WEB
			-- Una vez que el Servidor esté levantado, cargar en el navegador la página Index.html.
			-- Deberíamos ver el Listado y el Top 3 de Proyectos cargados desde el Servidor en la página.
						
				
				
				
				
				
				
