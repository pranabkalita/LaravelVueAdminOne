import { loadChartJs } from "./chart.sample";

export const loadCustomJs = () => {
    // Function to close all dropdowns
    // Function to close all navbar-item dropdowns
    const closeNavbarItemDropdowns = () => {
        document
            .querySelectorAll(".navbar-item.dropdown.active")
            .forEach((elA) => {
                elA.classList.remove("active");
                const dropdownIcon = elA.querySelector(".mdi:nth-child(2)");
                if (dropdownIcon) {
                    dropdownIcon.classList.remove("mdi-minus");
                    dropdownIcon.classList.add("mdi-plus");
                }
            });
    };

    // Click event listener for the document
    document.addEventListener("click", (e) => {
        // Check if the clicked element is not a dropdown or a descendant of a dropdown
        if (
            !e.target.classList.contains("dropdown") &&
            !e.target.closest(".dropdown") &&
            !e.target.classList.contains("mobile-aside-button") &&
            !e.target.classList.contains("--jb-navbar-menu-toggle")
        ) {
            closeNavbarItemDropdowns(); // Close navbar-item dropdowns
        }
    });

    // Click event listeners for the dropdown elements
    document.querySelectorAll(".dropdown").forEach((elA) => {
        elA.addEventListener("click", (e) => {
            e.preventDefault();

            if (e.currentTarget.classList.contains("navbar-item")) {
                e.currentTarget.classList.toggle("active");
                const dropdownIcon =
                    e.currentTarget.querySelector(".mdi:nth-child(2)");
                if (dropdownIcon) {
                    dropdownIcon.classList.toggle("mdi-minus");
                    dropdownIcon.classList.toggle("mdi-plus");
                }
            } else {
                const dropdownIcon =
                    e.currentTarget.querySelector(".mdi:nth-child(2)");
                e.currentTarget.parentNode.classList.toggle("active");
                if (dropdownIcon) {
                    dropdownIcon.classList.toggle("mdi-plus");
                    dropdownIcon.classList.toggle("mdi-minus");
                }
            }
        });

        // Prevent clicks inside the dropdown from closing it
        elA.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    });

    // Click event listeners for mobile-aside-button
    document.querySelectorAll(".mobile-aside-button").forEach((el) => {
        el.addEventListener("click", (e) => {
            const dropdownIcon = e.currentTarget.querySelector(".icon .mdi");
            document.documentElement.classList.toggle("aside-mobile-expanded");
            dropdownIcon.classList.toggle("mdi-forwardburger");
            dropdownIcon.classList.toggle("mdi-backburger");
        });
    });

    // Click event listeners for --jb-navbar-menu-toggle
    document.querySelectorAll(".--jb-navbar-menu-toggle").forEach((el) => {
        el.addEventListener("click", (e) => {
            const dropdownIcon = e.currentTarget.querySelector(".icon .mdi");
            const targetId = e.currentTarget.getAttribute("data-target");
            const target = document.getElementById(targetId);
            if (target) {
                target.classList.toggle("active");
            }
            dropdownIcon.classList.toggle("mdi-dots-vertical");
            dropdownIcon.classList.toggle("mdi-close");
        });
    });

    // Modal: open
    document.querySelectorAll(".--jb-modal").forEach((el) => {
        el.addEventListener("click", (e) => {
            const modalTarget = e.currentTarget.getAttribute("data-target");
            const modal = document.getElementById(modalTarget);

            if (modal) {
                modal.classList.add("active");
                document.documentElement.classList.add("clipped");
            }
        });
    });

    // Modal: close
    document.querySelectorAll(".--jb-modal-close").forEach((el) => {
        el.addEventListener("click", (e) => {
            const modal = e.currentTarget.closest(".modal");

            if (modal) {
                modal.classList.remove("active");
                document.documentElement.classList.remove("clipped");
            }
        });
    });

    // Notification dismiss
    document.querySelectorAll(".--jb-notification-dismiss").forEach((el) => {
        el.addEventListener("click", (e) => {
            const notification = e.currentTarget.closest(".notification");

            if (notification) {
                notification.classList.add("hidden");
            }
        });
    });

    // Load Chart
    loadChartJs();
};
