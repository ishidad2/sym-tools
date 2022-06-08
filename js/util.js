
function connectNode(nodes) {
  const node = nodes[Math.floor(Math.random() * nodes.length)] ;
  console.log("try:" + node);
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.timeout = 2000;
        req.open('GET', node + "/node/health", true);
        req.onload = function() {
            if (req.status === 200) {
                const status = JSON.parse(req.responseText).status;
                if(status.apiNode == "up" && status.db == "up"){
                    return resolve(node);
                }else{
                    console.log("fail node status:" + status);
                    return connectNode(nodes).then(node => resolve(node));
                }
            } else {
                console.log("fail request status:" + req.status)
                return connectNode(nodes).then(node => resolve(node));
            }
        };

        req.onerror = function(e) {
            console.log("onerror:" + e)
            return connectNode(nodes).then(node => resolve(node));
        };

        req.ontimeout = function (e) {
            console.log("ontimeout")
            return connectNode(nodes).then(node => resolve(node));
        };  
    req.send();
  });
}
