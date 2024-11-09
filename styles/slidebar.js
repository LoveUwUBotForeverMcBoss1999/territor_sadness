document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Prevent sidebar from closing when clicking inside
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
