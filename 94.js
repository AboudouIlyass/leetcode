
var inorderTraversal = function (root) {
    if (!root) return []
    let res = []
    let trav = (r) => {
        
        if (r.left) {
            trav(r.left)
        }

        res.push(r.val)
        
        if (r.right){
            trav(r.right)
        }
    }
    trav(root)
    return res
};