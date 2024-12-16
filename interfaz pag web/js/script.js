document.addEventListener('DOMContentLoaded', () => {
    // Manejo del formulario de iniciar sesión
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Iniciaste sesión correctamente.');
    });

    // Manejo del formulario de registro
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Te registraste correctamente.');
    });

    // Manejo del formulario de citas
    document.getElementById('appointment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cita agendada correctamente.');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se recargue la página

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulación de validación
        if (username === 'admin' && password === '29deoctubre') {
            alert('Inicio de sesión exitoso');
            
            // Guardar el estado de sesión en localStorage
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('username', username);

            // Redirigir al usuario a la página principal
            window.location.href = 'index.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('appointment-form');
    const modal = document.getElementById('confirmation-modal');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Capturar datos del formulario
        const petName = document.getElementById('pet-name').value;
        const ownerName = document.getElementById('owner-name').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Mostrar datos en el modal
        document.getElementById('confirm-pet').textContent = petName;
        document.getElementById('confirm-owner').textContent = ownerName;
        document.getElementById('confirm-service').textContent = service;
        document.getElementById('confirm-date').textContent = date;
        document.getElementById('confirm-time').textContent = time;

        // Mostrar modal
        modal.style.display = 'flex';
    });

    // Confirmar cita
    document.getElementById('confirm-button').addEventListener('click', () => {
        modal.style.display = 'none';
        successMessage.style.display = 'block';
    });
});
// Abrir el modal
function openModal() {
    document.getElementById("addPetModal").style.display = "flex";
}

// Cerrar el modal
function closeModal() {
    document.getElementById("addPetModal").style.display = "none";
}

// Agregar nueva mascota
document.getElementById("addPetForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
    const sex = document.getElementById("sex").value;
    const sterilized = document.getElementById("sterilized").value;

    const newPetCard = `
        <div class="pet-card">
            <h2>Nombre: ${name}</h2>
            <p><strong>Fecha de nacimiento:</strong> ${birthdate}</p>
            <p><strong>Especie:</strong> ${species}</p>
            <p><strong>Raza:</strong> ${breed}</p>
            <p><strong>Sexo:</strong> ${sex}</p>
            <p><strong>Esterilización:</strong> ${sterilized}</p>
        </div>
    `;

    document.getElementById("petsGrid").insertAdjacentHTML("beforeend", newPetCard);

    closeModal();

    // Mostrar confirmación
    const confirmation = document.getElementById("confirmationMessage");
    confirmation.style.display = "block";
    setTimeout(() => (confirmation.style.display = "none"), 3000);
});
document.addEventListener('DOMContentLoaded', () => {
    const connectionStatus = document.getElementById('connection-status');

    // Función para actualizar el estado de conexión
    function updateConnectionStatus() {
        if (navigator.onLine) {
            connectionStatus.classList.remove('visible');
            connectionStatus.classList.add('hidden');
        } else {
            connectionStatus.classList.remove('hidden');
            connectionStatus.classList.add('visible');
        }
    }

    // Escuchar los eventos de conexión y desconexión
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);

    // Verificar la conexión al cargar la página
    updateConnectionStatus();
});
