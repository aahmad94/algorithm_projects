const util = require('util');

class Vertex {
  constructor(val) {
    this.val = val;
    this.inEdges = [];
    this.outEdges = [];
  }
}

class Edge {
  constructor(fromVertex, toVertex) {
    this.fromVertex = fromVertex;
    this.toVertex = toVertex;
    this.fromVertex.outEdges.push(this);
    this.toVertex.inEdges.push(this);
  }

  // destroy() {
  //   let fromVertexEdgeIdx;
  //   let toVertexEdgeIdx;
  //   this.fromVertex.outEdges.forEach((edge, idx) => {
  //     if (edge === this) {
  //       fromVertexEdgeIdx = idx;
  //     }
  //   });
  //   this.toVertex.inEdges.forEach((edge, idx) => {
  //     if (edge === this) {
  //       this.toVertexEdgeIdx = idx;
  //     }
  //   });
  //   this.fromVertex.outEdges = this.fromVertex.outEdges
  //                                 .slice(0, fromVertexEdgeIdx)
  //                                 .concat(this.fromVertex.outEdges.slice(fromVertexEdgeIdx + 1));
  //   this.toVertex.inEdges = this.toVertex.inEdges
  //                               .slice(0, toVertexEdgeIdx)
  //                               .concat(this.toVertex.inEdges.slice(toVertexEdgeIdx + 1));
  //   this.fromVertex = null;
  //   this.toVertex = null;
  // }

}

class Graph {
  constructor(towers) {
    this.towers = towers;
    this.map = { 0: new Vertex(towers[0]) };
    this.root = this.map[0];
    this.constructTowers();
  }

  constructTowers() {
    for (let i = 1; i < this.towers.length; i++) {
      const tower = this.towers[i];
      this.map[i] = new Vertex(tower);
    }
    for (let i = 0; i < this.towers.length; i++) {
      const tower = this.towers[i];
      for (let j = i + 1; j <= i + tower; j++) {
        if (j >= this.towers.length) {
          new Edge(this.map[i], new Vertex(null));
        } else {
          new Edge(this.map[i], this.map[j]);
        }
      }
    }
  }

  // dfs to see if we ever hit a null root, 
  // null root indicates we're able to hop the towers
  static isHoppable(root) {
    const { outEdges } = root; 
    if (root.val === null) return true;
    if (outEdges.length === 0) return false;
    for(let i = 0; i < outEdges.length; i++) {
      const edge = outEdges[i];
      const { toVertex } = edge;
      if (Graph.isHoppable(toVertex) === true) {
        return true;
      }
    }
    return false;
  }
}

let towersGraph = new Graph ([4, 2, 0, 0, 2, 0]);
// console.log(util.inspect(towersGraph.root, { depth: null }));
console.log({ isHoppable: Graph.isHoppable(towersGraph.root) }, "should be true");

towersGraph = new Graph ([4, 2, 0, 0, 1, 0]);
// console.log(util.inspect(towersGraph.root, { depth: null }));
console.log({ isHoppable: Graph.isHoppable(towersGraph.root) }, "should be false");

towersGraph = new Graph ([1, 3, 0, 0, 2, 0]);
// console.log(util.inspect(towersGraph.root, { depth: null }));
console.log({ isHoppable: Graph.isHoppable(towersGraph.root) }, "should be true");