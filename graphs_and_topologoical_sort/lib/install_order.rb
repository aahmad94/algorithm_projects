# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to


require_relative 'graph'
require_relative 'topological_sort'

def install_order(arr)
  vertices = Hash.new
  max_id = 1
  arr.each do |tuple|
    tuple.each do |item|
      vertices[item] = Vertex.new(item) unless vertices[item]
    end
    package_id = tuple[0]
    dependency = tuple[1]
    max_id = package_id if max_id < package_id
    Edge.new(vertices[dependency], vertices[package_id])
  end  
  without_dependency = (1..max_id).to_a - vertices.keys
  install_order = topological_sort(vertices.values).map(&:value) + without_dependency 
end
