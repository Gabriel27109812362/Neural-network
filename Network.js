class Network {

   constructor() {
      this.body = {
         input: [],
         edges1: [[], [], [], []],
         firstHidden: [],
         edges2: [[], [], [], []],
         secondHidden: [],
         edges3: [[], [], []],
         thirdHidden: [],
         edges4: [[], []],
         fourthHidden: [],
         edges5: [],
         result: [],
      };
   }

   giveEntry(input) {  //array
      this.body.input = input;
   }

}

module.exports = Network;

