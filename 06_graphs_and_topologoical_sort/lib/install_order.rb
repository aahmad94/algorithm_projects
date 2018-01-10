# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to


require_relative 'graph'
require_relative 'topological_sort'

def install_order(arr)

  # hash used to map package_id/dependency id as key with value being the corresponding vertex
  # NB: only packages that have dependencies will be mapped here... account for those without dependencies on line 35

  vertices = Hash.new
  max_id = 1
  arr.each do |tuple|
    tuple.each do |id|
      vertices[id] = Vertex.new(id) unless vertices[id]
    end
    package_id = tuple[0]
    dependency = tuple[1]

    # update max_id; this corresponds to the number of packages we have
    # create edge from dependency to package_id 

    max_id = package_id if max_id < package_id
    Edge.new(vertices[dependency], vertices[package_id])
  end  

  # from range of package_ids, find those without dependencies
  # use topological sort to first install dependencies then packages

  without_dependency = (1..max_id).to_a - vertices.keys
  install_order = topological_sort(vertices.values).map(&:value) + without_dependency 

  # # in this version of the problem, 
  # # all packages will be listed (independent packages have nil value or no entry for their dependencies),
  # # but package ids are not numbers.
  # vertices = Hash.new
  # arr.each do |tuple|
  #   tuple.each do |id|
  #     if !vertices[id] && id != nil
  #       vertices[id] = Vertex.new(id)
  #     end 
  #   end
  #   package_id = tuple[0]
  #   dependency = tuple[1]

  #   if !dependency.nil?
  #     Edge.new(vertices[dependency], vertices[package_id]) 
  #   end 
  # end  


  # install_order = topological_sort(vertices.values).map(&:value)
end
