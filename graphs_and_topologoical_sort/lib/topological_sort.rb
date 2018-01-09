require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)
  sorted = []
  queue = []
  
  # enqueue any vectors that don't have any in_edges 
  vertices.each do |vertex|
    if vertex.in_edges.empty?
        queue.push(vertex)
    end 
  end

  # process queued items
  # append to sorted array the first-in vertice and dequeue 
  until queue.empty?
    vertice = queue.shift
    sorted.push(vertice)

    # find all out_edges of dequeued vertice and destroy them
    # enqueue vertices that now have no remaining in_edges
    until vertice.out_edges.empty?
      edge = vertice.out_edges.[0]
      to_vertex = edge.to_vertex
      edge.destroy!
      if to_vertex.in_edges.empty?
        queue.push(to_vertex)
      end
    end
  end

  return [] if sorted.length < vertices.length
  sorted

end
