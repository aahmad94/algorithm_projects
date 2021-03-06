# Graphs
## Mathematical Model
- Trees have one edge for a parent-child relationship (nodes = n - 1).
- A graph G is...
    - An ordered pair of a set V of vertices and E of edges.
    - G = (V, E)
    - V and E are an ordered pair! (a, b) !== (b, a)
- Edges
    - Directed vs Undirected
    - Undirected ~ bi-directional
![Directed vs. Undirected graphs](/home/adeel/Documents/app_academy/algorithm_projects/notes/images)
    - Weighted vs Unweighted 
        - Ex. Undirected graph representation of roads of different lengths (length ~ weight/cost)
            - Could be directed graph representation of intracity roads.
    - Edge or self-edge ~ self-loop
        - Ex. web crawler
    - Multi-edge
        - Ex. multiple flights from city to city/cities.
    - How many edges?
        - Directed: 0 <= |E| <= n(n-1)
        - Un-directed: 0 <= |E| <= n(n-1)/2
    - Density edges / max edges
        - Dense adjancy matrix
        - Sparse adjancy list
    - Path or walk
        - Sequence of vertices where each adjacent pair is connected by an edge.
    - Simple path
        - A path or walk in which no vertices (and thus no edges) are repeated.
    - Trail
        - A walk in which no edges are repeated.
    - Strongly connected graph
        - Path from any vertex to any other vertex.
    - Closed walk
        - Starts and ends at the same vertex.
    - Simple cycle
        - No repitition other than start and end.
    - Acyclic graph
        - May have a closed walk in a tree.
    - Directed acyclic graph