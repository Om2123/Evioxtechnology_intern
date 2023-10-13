class BankersAlgorithm {
    constructor(processes, resources, allocation, max) {
      this.processes = processes;
      this.resources = resources;
      this.allocation = allocation;
      this.max = max;
      this.need = [];
      this.work = resources.slice();
      this.finish = new Array(processes.length).fill(false);
    }
  
    calculateNeed() {
      for (let i = 0; i < this.processes.length; i++) {
        this.need[i] = [];
        for (let j = 0; j < this.resources.length; j++) {
          this.need[i][j] = this.max[i][j] - this.allocation[i][j];
        }
      }
    }
  
    isSafe() {
      this.calculateNeed();
  
      let safeSequence = [];
      let work = this.work.slice();
  
      for (let i = 0; i < this.processes.length; i++) {
        if (this.finish[i]) continue;
  
        let canAllocate = true;
        for (let j = 0; j < this.resources.length; j++) {
          if (this.need[i][j] > work[j]) {
            canAllocate = false;
            break;
          }
        }
  
        if (canAllocate) {
          for (let j = 0; j < this.resources.length; j++) {
            work[j] += this.allocation[i][j];
          }
          safeSequence.push(this.processes[i]);
          this.finish[i] = true;
          i = -1; // Restart the loop
        }
      }
  
      return safeSequence.length === this.processes.length ? safeSequence : null;
    }
  
    requestResources(processIndex, request) {
      for (let j = 0; j < this.resources.length; j++) {
        if (request[j] > this.need[processIndex][j] || request[j] > this.work[j]) {
          return false; // Request cannot be granted
        }
      }
  
      for (let j = 0; j < this.resources.length; j++) {
        this.allocation[processIndex][j] += request[j];
        this.need[processIndex][j] -= request[j];
        this.work[j] -= request[j];
      }
  
      const safeSequence = this.isSafe();
      if (safeSequence) {
        console.log(`Request granted for process ${processIndex}. Safe sequence: ${safeSequence}`);
        return true;
      } else {
        console.log(`Request denied for process ${processIndex}. System remains in an unsafe state.`);
        return false;
      }
    }
  }
  
  const processes = [0, 1, 2, 3, 4];
  const resources = [3, 3, 2];
  const allocation = [
    [0, 1, 0],
    [2, 0, 0],
    [3, 0, 2],
    [2, 1, 1],
    [0, 0, 2]
  ];
  const max = [
    [7, 5, 3],
    [3, 2, 2],
    [9, 0, 2],
    [2, 2, 2],
    [4, 3, 3]
  ];
  const request = [1, 0, 2];
  
  const banker = new BankersAlgorithm(processes, resources, allocation, max);
  banker.requestResources(1, request);
  