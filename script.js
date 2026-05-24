document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    
    // Add click event listener to the toggle button
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        
        // Optional: Change the icon based on state
        const iconSpan = toggleBtn.querySelector('.material-symbols-outlined');
        if (sidebar.classList.contains('collapsed')) {
            iconSpan.textContent = 'menu'; // Change to hamburger menu when collapsed
            toggleBtn.style.display = 'flex'; // Ensure it stays visible if you altered CSS
        } else {
            iconSpan.textContent = 'right_panel_open'; // Change back when expanded
        }
    });

    // Optional: Re-expand sidebar if the user clicks anywhere on the collapsed sidebar
    sidebar.addEventListener('click', (e) => {
        if (sidebar.classList.contains('collapsed')) {
            // Prevent expanding if they click the actual toggle button
            if (!toggleBtn.contains(e.target)) {
                sidebar.classList.remove('collapsed');
                const iconSpan = toggleBtn.querySelector('.material-symbols-outlined');
                iconSpan.textContent = 'right_panel_open';
            }
        }
    });
});