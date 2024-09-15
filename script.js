document.addEventListener('DOMContentLoaded', () => {
    const actividades = document.querySelectorAll('.actividad');

    // Cargar el estado de las actividades al inicio
    actividades.forEach(actividad => {
        const id = actividad.getAttribute('data-id');
        const estado = localStorage.getItem(id);

        if (estado === 'completada') {
            actividad.classList.add('completada');
        }
    });

    // Añadir evento para guardar el estado al hacer clic
    actividades.forEach(actividad => {
        actividad.addEventListener('click', () => {
            actividad.classList.toggle('completada');
            const id = actividad.getAttribute('data-id');
            const estado = actividad.classList.contains('completada') ? 'completada' : '';
            localStorage.setItem(id, estado);
        });
    });
});
