const Network = require('./Network');

const net = new Network();
net.initEdges();
net.giveEntry(
   [0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0.25, 0.25, 0.25, 0.25, 0.25, 0, 0.25],
   0);

console.log(net.edges);
net.countSum();
console.log(net.sum);
console.log(net.countSigValue());
net.checkToTrain();
console.log(net.active);

console.log(net.edges, net.bias);

