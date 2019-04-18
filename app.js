const Network = require('./Network');

const net = new Network();

net.giveEntry([1, 2, 3, 3, 3, 4, 4, 5, 4, 4, 4, 3, 3, 4, 5],1);
net.initEdges();
net.countSum();
console.log(net);
console.log(net.sum);
console.log(net.countSigValue());

