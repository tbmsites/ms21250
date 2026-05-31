
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scrollTop').fadeIn(); 
        } else { 
            $('#scrollTop').fadeOut(); 
        } 
    });
});


//prevent data leakage
 $(document).ready(function() {
 $('body').bind('cut copy paste', function(event) {
 event.preventDefault();
 });
 });
 
 document.oncontextmenu = new Function("return false");
 
document.addEventListener('contextmenu', function(e){
alert("Sorry, Selection, Copy & Right click is disabled to prevent leakage of content");
e.preventDefault();
});

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
     return false;
  }
}

document.getElementById("currentYear").textContent = new Date().getFullYear();

// Auto-transpose tables with class 'transpose'
function transposeTables() {
    const tables = document.querySelectorAll('table.transpose');
    tables.forEach(table => {
        // Separate sections
        const thead = table.querySelector('thead');
        const tfoot = table.querySelector('tfoot');
        const tbodies = Array.from(table.tBodies);
        
        // Combine rows from thead and tbodies for transposition
        let rowsToTranspose = [];
        if (thead) rowsToTranspose.push(...Array.from(thead.rows));
        tbodies.forEach(tbody => rowsToTranspose.push(...Array.from(tbody.rows)));

        if (rowsToTranspose.length === 0) return;

        // Step 1: Map original table to a virtual grid to handle spans
        let grid = [];
        rowsToTranspose.forEach((row, rowIndex) => {
            if (!grid[rowIndex]) grid[rowIndex] = [];
            let colIndex = 0;
            Array.from(row.cells).forEach(cell => {
                while (grid[rowIndex][colIndex]) { colIndex++; }
                const rs = cell.rowSpan || 1;
                const cs = cell.colSpan || 1;
                for (let i = 0; i < rs; i++) {
                    for (let j = 0; j < cs; j++) {
                        const targetRow = rowIndex + i;
                        const targetCol = colIndex + j;
                        if (!grid[targetRow]) grid[targetRow] = [];
                        grid[targetRow][targetCol] = (i === 0 && j === 0) ? cell : 'filled';
                    }
                }
                colIndex += cs;
            });
        });

        if (grid.length === 0) return;

        const numOriginalRows = grid.length;
        const numOriginalCols = Math.max(...grid.map(r => r.length));

        // Step 2: Transpose the grid
        const transposedGrid = [];
        for (let c = 0; c < numOriginalCols; c++) {
            transposedGrid[c] = [];
            for (let r = 0; r < numOriginalRows; r++) {
                const cell = grid[r][c];
                if (cell instanceof HTMLTableCellElement) {
                    const rs = cell.rowSpan || 1;
                    const cs = cell.colSpan || 1;
                    cell.rowSpan = cs;
                    cell.colSpan = rs;
                    transposedGrid[c][r] = cell;
                } else {
                    transposedGrid[c][r] = cell;
                }
            }
        }

        // Step 3: Rebuild the table structure
        // We use a single tbody for the transposed data
        const newTbody = document.createElement('tbody');
        transposedGrid.forEach(newRow => {
            const tr = document.createElement('tr');
            newRow.forEach(cell => {
                if (cell instanceof HTMLTableCellElement) {
                    tr.appendChild(cell);
                }
            });
            if (tr.cells.length > 0) {
                newTbody.appendChild(tr);
            }
        });

        // Clear table and reconstruct
        const caption = table.querySelector('caption');
        table.innerHTML = '';
        if (caption) table.appendChild(caption);
        table.appendChild(newTbody);

        // Re-attach tfoot with adjusted colspans
        if (tfoot) {
            Array.from(tfoot.rows).forEach(row => {
                Array.from(row.cells).forEach(cell => {
                    const ratio = cell.colSpan / numOriginalCols;
                    cell.colSpan = Math.max(1, Math.round(ratio * numOriginalRows));
                });
            });
            table.appendChild(tfoot);
        }
        
        table.classList.add('transposed-ready');
    });
}

// Run transposition after DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', transposeTables);
} else {
    transposeTables();
}