class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    self.map.with_index { |el, i| el.hash + i.hash }.inject(:*) ||
    '[]'.hash
  end
end

class String
  def hash
    self.chars.map { |chr| chr.ord.hash }.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.to_a.sort.hash
  end
end
