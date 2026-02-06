const form = document.getElementById('studentForm');
        const modal = document.getElementById('popupModal');
        const okBtn = document.getElementById('okBtn');
        const registrationForm = document.getElementById('registrationForm');
        const dashboard = document.getElementById('dashboard');

        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission
            modal.style.display = 'flex'; // Show popup
        });

        okBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            registrationForm.style.display = 'none'; // Hide form
            dashboard.style.display = 'block'; // Show dashboard
        });

        window.onclick = function (event) {
            if (event.target == modal) { modal.style.display = "none"; }
        }
