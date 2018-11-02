function domTraversal(sel) {
    let selector = $(sel);
    let maxDepth = 0;
    let maxDepthElement = selector;

    findDeepestElement(maxDepth, selector);
    maxDepthElement.addClass("highlight");
    maxDepthElement.parents().addClass("highlight");

    selector.parents().removeClass("highlight");

    function findDeepestElement(depth, element) {
        if (depth > maxDepth) {
            maxDepth = depth;
            maxDepthElement = $(element);
        }

        $(element).children().each((index, element) => findDeepestElement(depth + 1, element));
    }
}