class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        return self.dfs(root, p, q, {'LCA': None})
        

    def dfs(self, root, p, q, map):
        if not root:
            return None
      
        left = self.dfs(root.left, p, q, map)
        right = self.dfs(root.right, p, q, map)

        if root.val == p.val or root.val == q.val:
            return root

        if left and right and not map['LCA']:
            map['LCA'] = root
            return map['LCA']
        if left:
            return left
        if right:
            return right


        return map['LCA']