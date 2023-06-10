let container = document.querySelector('.container');
let row = document.createElement('div');

row.classList.add('row');

for (let i = 0; i < 16; i++) {
    let col = document.createElement('div');
    col.classList.add('col');
    row.appendChild(col);
}

for (let i = 0; i < 16; i++) {
    container.appendChild(row.cloneNode(true));
}

let cols = document.querySelectorAll('.col');



cols.forEach(col => {
    col.addEventListener('mouseover', () => {
        let cur = getComputedStyle(col).filter;
        // col.style["background-color"] = `rgb( ${Math.random() * 255}, 
        //                             ${Math.random() * 255}, 
        //                             ${Math.random() * 255})`;
        
        if (cur == 'none') {
            col.style.filter = 'brightness(90%)';
        } else {
            let brightness = Number(cur.slice(11, -1));
            brightness = Math.max(0, brightness - 0.1);
            col.style.filter = `brightness(${brightness})`;
        }
    });
});