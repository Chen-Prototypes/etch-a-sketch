
function resizeGrid(size) {
    let container = document.querySelector('.container');
    container.textContent = '';

    let row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < size; i++) {
        let col = document.createElement('div');
        col.classList.add('col');
        row.appendChild(col);
    }

    for (let i = 0; i < size; i++) {
        container.appendChild(row.cloneNode(true));
    }
}

function addSketch() {
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
}


resizeGrid(16);
addSketch();


let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener("mouseenter", () => {
    clearBtn.style.filter = 'brightness(90%)';
});
clearBtn.addEventListener("mouseleave", () => {
    clearBtn.style.filter = 'none';
});
clearBtn.addEventListener("click", () => {
    cols.forEach(col => {
        col.style.filter = 'none';
    });
})


let resizeBtn = document.querySelector('.resize');
resizeBtn.addEventListener("mouseenter", () => {
    resizeBtn.style.filter = 'brightness(90%)';
});
resizeBtn.addEventListener("mouseleave", () => {
    resizeBtn.style.filter = 'none';
});
resizeBtn.addEventListener("click", () => {
    let size = Number(prompt("Enter the size of the new grid: "));
    if (size > 100) {
        alert("Size must be less than 100");
        return;
    }
    if (size < 1) {
        alert("Size must be greater than 0");
        return;
    }
    if (!Number.isInteger(size)) {
        alert("Size must be an integer");
        return;
    }
    resizeGrid(size);
    addSketch();
});