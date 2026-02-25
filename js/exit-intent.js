/* 
   Level & Anvil - Exit Intent Lead Capture
   Focus: Offering "Before You Hire a Contractor in Tulsa" Guide
*/

(function() {
    // Prevent repeated triggers on the same visit
    if (localStorage.getItem('exitPopupShown')) {
        return;
    }

    let popupShown = false;

    // Show popup when mouse leaves the document window
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !popupShown) {
            showExitPopup();
        }
    });

    function showExitPopup() {
        if (localStorage.getItem('exitPopupShown')) return;

        const overlay = document.createElement('div');
        overlay.className = 'exit-popup-overlay';
        overlay.id = 'exitPopup';
        overlay.style.display = 'flex';

        overlay.innerHTML = `
            <div class="exit-popup">
                <span class="exit-popup-close" id="closeExit">&times;</span>
                <span class="eyebrow">Wait! Before you go...</span>
                <h2>Before You Hire a Contractor in Green Country</h2>
                <p>Enter your email and we’ll send our free guide: <strong>Before You Hire a Contractor in Tulsa</strong> — a practical checklist to help you choose the right contractor and reduce risk.</p>
                <form id="exitLeadForm" style="margin-top: 2rem;">
                    <input type="email" placeholder="Your Email Address" required 
                           style="width: 100%; padding: 1rem; background: var(--color-bg); border: 1px solid var(--color-border); color: #FFF; border-radius: var(--radius-sm); margin-bottom: 1rem;">
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Send Me the Guide</button>
                </form>
            </div>
        `;

        document.body.appendChild(overlay);
        popupShown = true;
        localStorage.setItem('exitPopupShown', 'true');

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
                e.target.innerHTML = `<h3 style="color: var(--color-primary);">Guide Sent!</h3><p>Check your inbox for your guide. (Simulated for ${email})</p>`;
            }, 1000);
        };
    }
})();