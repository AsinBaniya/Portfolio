/**
 * ============================================================================
 * navigation.js
 * Handles:
 * - Sidebar Navigation
 * - Overlay
 * - Escape Key
 * - Active Navigation Link
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("openMenu");
    const closeButton = document.getElementById("closeMenu");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (!menuButton || !closeButton || !sidebar || !overlay) {
        return;
    }

    /**
     * Opens Sidebar
     */
    function openMenu() {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");

        menuButton.setAttribute("aria-expanded", "true");
    }

    /**
     * Closes Sidebar
     */
    function closeMenu() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuButton.setAttribute("aria-expanded", "false");
    }

    /**
     * Event Listeners
     */

    menuButton.addEventListener("click", openMenu);

    closeButton.addEventListener("click", closeMenu);

    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    /**
     * Active Navigation Link
     */

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".sidebar__link");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

});