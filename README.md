# AutoMarket-Cloud
Gestion de vehiculos, Compra/Venta 
Título del Proyecto
AutoMarket Cloud – Plataforma Cloud-Native de Microservicios para Gestión Comercial
________________________________________
⭐ 4. Integrantes y Roles
Integrante	Rol
Camilo Tenorio	Desarrollo del microservicio, integración de métricas, pruebas k6 y soporte técnico.
Yerson Tobar	Configuración de Docker, Prometheus, Grafana, redes y arquitectura cloud.
Michel Yulieth Orejuela	Documentación completa, integración de informes, análisis funcional y presentación.
________________________________________
⭐ 5. Arquitectura del Sistema
Este apartado unifica lo que ya estaba en tu informe original con lo nuevo que creamos:
La arquitectura de AutoMarket Cloud está basada en microservicios, donde cada componente opera de forma independiente y desacoplada. Se emplea Docker para la contenerización, lo que garantiza portabilidad y uniformidad entre entornos. Docker Compose se utiliza como orquestador para levantar la infraestructura completa, incluyendo:
•	Microservicio Node.js (3 réplicas escaladas)
•	Prometheus como recolector de métricas técnicas
•	Grafana como herramienta de visualización
•	Ngrok para exposición pública durante pruebas externas
El proyecto sigue principios cloud-native:
•	Servicios stateless
•	Métricas expuestas en /metrics
•	Escalabilidad horizontal
•	Integración para despliegue en plataformas cloud reales
📌 Aquí debes insertar la imagen del diagrama de arquitectura que estaba en tu primer informe.
________________________________________
⭐ 6. Tecnologías Utilizadas
(Se combinan las listadas por ti + las nuevas)
🔹 Lenguajes y Frameworks
•	Node.js
•	Express.js
•	JavaScript
•	prom-client
🔹 Contenedores y Orquestación
•	Docker
•	Docker Compose
🔹 Monitoreo y Observabilidad
•	Prometheus
•	Grafana
🔹 Pruebas de Rendimiento
•	k6 Cloud
•	Tipos ejecutados: Smoke, Load, Stress, Ramp Up / Ramp Down
🔹 Control de Versiones
•	Git
•	GitHub
🔹 Herramientas Complementarias
•	Ngrok
•	VSCode
________________________________________
⭐ 7. Instrucciones de Ejecución
Esta sección estaba en tu primer informe, pero ahora quedó ampliada y mejorada.
✔ 7.1 Ejecución local del microservicio
npm install
npm start
Endpoints:
•	/api/data
•	/metrics
•	/health
✔ 7.2 Ejecución con Docker
docker compose up --build
✔ 7.3 Escalado horizontal
docker compose up --scale app=3 -d
✔ 7.4 Pruebas de rendimiento k6
k6 run k6/smoke-test.js
k6 run k6/load-test.js
k6 run k6/stress-test.js
k6 run k6/dynamic-test.js
________________________________________
⭐ 8. Evidencias Técnicas
Aquí debes insertar TODAS LAS IMÁGENES que enviaste.
Las organizo EXACTAMENTE como deben ir:
🔹 8.1 Evidencias del microservicio
1.	Servidor corriendo en terminal
2.	Respuesta /api/data
3.	Métricas /metrics
🔹 8.2 Evidencias de pruebas k6
4.	Smoke Test
5.	Load Test
6.	Stress Test
7.	Ramp Up / Ramp Down
8.	Métricas de tiempo de respuesta
🔹 8.3 Evidencias de Docker y escalabilidad
9.	Docker Compose ejecutándose
10.	3 réplicas del contenedor app activas
🔹 8.4 Evidencias de monitoreo
11.	Scraping Prometheus
12.	Dashboard Grafana funcionando
________________________________________
⭐ 9. Aplicación de Conceptos del Curso
Esta sección es una mezcla entre lo que tú ya escribiste y lo que faltaba completar.
El proyecto aplica de forma completa los temas vistos:
✔ Arquitectura Cloud
Modelado de microservicios, comunicación y desacoplamiento.
✔ Contenerización
Uso profesional de Docker para empaquetado y despliegue.
✔ Orquestación
Docker Compose gestionando múltiples servicios, redes internas y escalabilidad.
✔ Observabilidad
Instrumentación con prom-client y monitoreo real con Prometheus.
✔ Dashboards
Visualización de latencia, RPS, errores, CPU y rendimiento en Grafana.
✔ Pruebas de rendimiento
Pruebas reales con k6 Cloud para validar estabilidad, resistencia y capacidad.
✔ Diseño cloud-native
Sistema stateless, escalable, observable y portable.
________________________________________
⭐ 10. Conclusiones y Aprendizajes
(Esto une lo escrito en tu informe + lo nuevo que pediste)
El desarrollo de AutoMarket Cloud permitió comprender e implementar una arquitectura moderna basada en microservicios, contenedores y herramientas cloud-native. El equipo logró integrar con éxito tecnologías como Docker, Node.js, Prometheus, Grafana y k6, recreando un entorno real de despliegue utilizado ampliamente en la industria.
Los resultados de las pruebas mostraron que el microservicio mantiene un rendimiento adecuado y estable bajo diferentes escenarios de carga, demostrando capacidad de respuesta y escalabilidad. La instrumentación permitió identificar métricas clave como latencia, tasa de solicitudes y errores, permitiendo comprender la importancia de la observabilidad en sistemas distribuidos.
En general, el proyecto permitió consolidar el aprendizaje teórico del curso mediante una implementación práctica, completa y funcional, fortaleciendo habilidades en cloud computing, DevOps, arquitectura de software y análisis de rendimiento.
