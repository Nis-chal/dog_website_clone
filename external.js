let ul = document.getElementById('burger')
        ul.addEventListener('click', showOrHide);

        function showOrHide(e) {
            let target = e.currentTarget
            console.log(target)
            if (target.matches('ul')) {
                let ulShoworHide = target.querySelector('ul');
                console.log(ulShoworHide)
                if (ulShoworHide) {
                    ulShoworHide.classList.toggle('hide')

                }
            }
        }