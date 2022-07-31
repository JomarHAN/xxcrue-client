(function() {
    class CloseDetails {

        constructor() {
            this.details = [];
            this.init();
        }
    
        init() {
            this.details = Array.from(document.querySelectorAll('details'));
            if(this.details.length > 0) this.onClick();
    
        }
    
        close() {
            this.details.forEach(detail => detail.removeAttribute('open'));
        }
    
        onClick() {
            document.addEventListener('click', (e) => {
                if(!this.details.some(f => f.contains(e.target))) {
                    this.close();
                } else {
                    this.details.forEach(detail => !detail.contains(e.target) ? detail.removeAttribute('open') : null);
                }
            });
        }
    }

    new CloseDetails();
})();
