class Network {

   constructor() {
      this.sum = 0;
      this.sigValue = 0;
      this.input = new Array(15);
      this.edges = new Array(15);
      this.result = 0;
   }

   initEdges() {
      for(let i = 0; i < 15; i++) {
         this.edges[i] = Number(Math.random().toPrecision(2));
      }
   }

   giveEntry(input, expectedResult) {
      if(input.length === 15) {
         this.input = [...input];
         this.result = expectedResult;
      } else {
         throw Error(`Input has to have 15 values. You give ${input.length}`);
      }
   }

   countSum() {
      let sum = 0;
      for(let i = 0; i < 15; i++) {
         sum += (this.input[i] * this.edges[i]);
      }
      this.sum = sum;
   }

   countSigValue() {
      this.sigValue = Math.exp(this.sum) / (Math.exp(this.sum) + 1);
      return this.sigValue;
   }

   checkToTrain() {
      if(this.result === 0) {
         if(this.sigValue > 0 && this.sigValue < 0.5) {
            //activate neuron
         } else {
            //change wages
         }
      } else {
         if(this.sigValue >= 0.5 && this.sigValue <= 1) {
            //activate neuron
         } else {
            //change wages
         }
      }
   }

   changeWages() {

   }

}

module.exports = Network;

