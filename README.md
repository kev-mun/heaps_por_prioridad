# MinHeap Tareas con Prioridad unicatolica
Enlace del repositorio: https://github.com/kev-mun/heaps_por_prioridad/blob/main/READMEE
Integrantes:
Kevin Muñoz — kevin.munoz04@unicatolica.edu
Humberto Fajardo — humberto.fajardo01@correo.edu

USUARIOS DE GIT HUB
kev-mun (Kevin muñoz)
apuestacerou (Humberto fajardo)

Descripción

se implementa la  estructura de datos basada en MinHeap para manejar una cola de tareas con prioridad, desde `1` hasta ´5´ . Las funcionalidades incluyen:

- Insertar tareas (nombre y prioridad)
- Extraer tarea más prioritaria
- Imprimir el estado actual del heap

Se siguió el pseudocódigo de MinHeap que dio el profesor en la clase, y lo usamos  en javascript.



Instrucciones de ejecución

1. Clona el repositorio:
```bash
git clone https://github.com/<usuario>/minheap-tareas.git
cd minheap-tareas.

debe colocar la tarea y la prioridad // Demostración:
const heap = new MinHeap(10);

heap.insert({ name: "Estudiar", priority: 3 });
heap.insert({ name: "Comer", priority: 2 });
heap.insert({ name: "Dormir", priority: 5 });
heap.insert({ name: "Hacer ejercicio", priority: 4 });
heap.insert({ name: "Entregar tarea", priority: 1 });
