
function create_dom(tag){
  return document.createElement(tag)
}

function add_dom(...dom){
  console.log(dom)
  [dom1,dom2] = [...dom] 
  return dom1.append(dom2)
}

