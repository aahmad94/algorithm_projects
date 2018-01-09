require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)
  sorted = []
  queue = []

  vertices.each do |vertex|
    if vertex.in_edges.empty?
        queue.push(vertex)
    end 
  end

  until queue.empty?
    current = queue.shift
    sorted.push(current)

    until current.out_edges.empty?
      edge = current.out_edges.first
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
