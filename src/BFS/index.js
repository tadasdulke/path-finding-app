import Location from "./Location";

const isValid = (x,y, xBounds, yBounds) => {
    return (y >= 0) && (y < yBounds) && 
    (x >= 0) && (x < xBounds); 
}

const getVisitedGrid = (xBounds, yBounds, grid) => {
    var visited = Array(yBounds).fill(0).map(x => Array(xBounds).fill(false));

    for(var i = 0; i < yBounds; i++) {
        for(var j = 0; j<xBounds; j++) {
            if(grid[i][j].squareType === "filled") {
                visited[i][j] = true;
            }
        }
    }
    
    return visited;
}

const backtrace = (endNode) => {
    var path = [];
    path.push({x:endNode.x, y:endNode.y});
    while(endNode.Parent) {
        endNode = endNode.Parent;
        path.push({x:endNode.x, y:endNode.y});
    }
    path.pop();
    return path;
}

const findPath = (state) => {
    var neigbour;
    var start = new Location({x: state.startX, y: state.startY});
    var target = new Location({x:state.endX, y:state.endY});
    var Q = [];
    Q.push(start);

    const visited = getVisitedGrid(state.col, state.row, state.grid);
    visited[start.y][start.x] = true;

    while(Q.length) {
        var current = Q.shift();
        
        if(current.x === target.x && current.y === target.y) {
            return backtrace(current.Parent);   
        }

        if(isValid(current.x, current.y+1, state.row, state.row) && visited[current.y + 1][current.x] === false) {
            neigbour = new Location({x:current.x, y:current.y+1});
            neigbour.Parent = current;
            Q.push(neigbour);
            visited[current.y+1][current.x] = true;
        }
        if(isValid(current.x, current.y-1, state.row, state.row) && visited[current.y - 1][current.x] === false) {
            neigbour = new Location({x:current.x, y:current.y-1});
            neigbour.Parent = current;
            Q.push(neigbour);
            visited[current.y-1][current.x] = true;
        }
        if(isValid(current.x+1, current.y, state.row, state.row) && visited[current.y][current.x+1] === false) {
            neigbour = new Location({x:current.x+1, y:current.y});
            neigbour.Parent = current;
            Q.push(neigbour);
            visited[current.y][current.x+1] = true;
        }
        if(isValid(current.x-1, current.y, state.row, state.row) && visited[current.y][current.x-1] === false) {
            neigbour = new Location({x:current.x-1, y:current.y});
            neigbour.Parent = current;
            Q.push(neigbour);
            visited[current.y][current.x-1] = true;
        }
    }

    return false;
}

export default findPath;