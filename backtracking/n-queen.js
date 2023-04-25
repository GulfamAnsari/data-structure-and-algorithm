/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    var createChase = function () {
        var chess = [];
        for (var i = 0; i < n; i++) {
            chess.push([]);
            for (var j = 0; j < n; j++) {
                chess[i][j] = 0;
            }
        }
        return chess;
    }

    var diagonals = function (i, j, n) {
        var dia = [];
        var temp1 = i;
        var temp2 = j;
        while (i - 1 < n - 1 && j - 1 < n - 1) {
            i++;
            j++;
            if (i < n && j < n)
                dia.push([i, j]);
        }
        i = temp1;
        j = temp2;
        while (i - 1 > -1 && j - 1 > -1) {

            i--;
            j--;
            if (i > -1 && j > -1)
                dia.push([i, j]);
        }
        i = temp1;
        j = temp2;
        while (i > 0 && j - 1 < n - 1) {
            i--;
            j++;
            if (j < n && i > -1)
                dia.push([i, j]);
        }
        i = temp1;
        j = temp2;
        while (j > 0 && i - 1 < n - 1) {
            j--;
            i++;
            if (i < n && j > -1)
                dia.push([i, j]);
        }
        i = temp1;
        j = temp2;
        return dia;
    };

    var blockedRow = function (i, n) {
        for (var k = 0; k < n; ++k) {
            if (chess[i][k] != 'Q')
                chess[i][k] = 1;
        }
    }

    var blockedColumn = function (j, n) {
        for (var z = 0; z < n; ++z) {
            if (chess[z][j] != 'Q')
                chess[z][j] = 1;
        }
    }

    var blockDiagonal = function (i, j, n) {
        var di = diagonals(i, j, n);

        for (var d of di) {
            if (i != [d[0]] && j != [d[1]])
                chess[d[0]][d[1]] = 1;
        }
    }

    var placeQuen = function (n) {
        var array = [];
        for (var m = 0; m < n; m++) {
            array[m] = [];
            var chess = createChase();
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n; j++) {
                    if (chess[i][j] === 0) {
                        chess[i][j] = 'Q';
                        blockDiagonal(i, j, n);
                        blockedRow(i, n);
                        blockedColumn(j, n)
                    }
                }
            }
        }
    }

    
    var count = placeQuen(4);
};
console.log(solveNQueens(4));
// https://www.codesdope.com/blog/article/backtracking-explanation-and-n-queens-problem/