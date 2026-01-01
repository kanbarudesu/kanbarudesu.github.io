document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".modal-close");

    const openModal = (content) => {
        modalBody.innerHTML = "";
        modalBody.appendChild(content);
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    };

    const closeModal = () => {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
        modalBody.innerHTML = "";
    };

    // Close interactions
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // IMAGE MODAL TRIGGER
    document.querySelectorAll("[data-modal-image]").forEach(el => {
        el.addEventListener("click", () => {
            const img = document.createElement("img");
            img.src = el.dataset.modalImage;
            img.alt = el.alt || "Modal Image";
            openModal(img);
        });
    });

    // YOUTUBE MODAL TRIGGER
    document.querySelectorAll("[data-modal-youtube]").forEach(el => {
        el.addEventListener("click", () => {
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${el.dataset.modalYoutube}?autoplay=1`;
            iframe.allow =
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            openModal(iframe);
        });
    });
});
