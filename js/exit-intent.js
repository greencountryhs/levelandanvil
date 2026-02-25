/* 
   Level & Anvil - Exit Intent Lead Capture
   Focus: Offering the "Free Estimator Guide / Checklist"
*/

(function() {
    let popupShown = false;

    // Show popup when mouse leaves the document window
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !popupShown) {
            showExitPopup();
        }
    });

    function showExitPopup() {
        const overlay = document.createElement('div');
        overlay.className = 'exit-popup-overlay';
        overlay.id = 'exitPopup';
        overlay.style.display = 'flex';

        overlay.innerHTML = `
            <div class="exit-popup">
                <span class="exit-popup-close" id="closeExit">&times;</span>
                <span class="eyebrow">Wait! Before you go...</span>
                <h2>Get the Free Estimator Guide</h2>
                <p>Planning a project? Download our checklist for common structural and repair costs in Tulsa.</p>
                <form id="exitLeadForm" style="margin-top: 2rem;">
                    <input type="email" placeholder="Your Email Address" required 
                           style="width: 100%; padding: 1rem; background: var(--color-bg); border: 1px solid var(--color-border); color: #FFF; border-radius: var(--radius-sm); margin-bottom: 1rem;">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Send My Free Guide</button>
                </form>
            </div>
        `;

        document.body.appendChild(overlay);
        popupShown = true;

        // Close logic
        document.getElementById('closeExit').onclick = () => {
            overlay.style.display = 'none';
        };

        overlay.onclick = (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        };

        // Form submit logic (simulated)
        document.getElementById('exitLeadForm').onsubmit = (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const email = e.target.querySelector('input').value;
            btn.innerText = 'Sending...';
            
            // Simulate API call
            setTimeout(() => {
                e.target.innerHTML = `<h3 style="color: var(--color-primary);">Guide Sent!</h3><p>Check your inbox for your estimator guide. (Simulated for ${email})</p>`;
            }, 1000);
        };
    }
})();
