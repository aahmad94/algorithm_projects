class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        return self.dfs(root)

    def dfs(self, node):
        left = None
        right = None

        if (node and node.left and node.right):
            left = self.dfs(node.left)
            right = self.dfs(node.right)
        elif node and node.left:
            left = self.dfs(node.left)
        elif node and node.right:
            right = self.dfs(node.right)
        
        if node:
            node.left = right
            node.right = left

        return node