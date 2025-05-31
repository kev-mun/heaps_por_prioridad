class MinHeap {
  constructor(maxSize) {
    this.heap = new Array(maxSize);
    this.size = 0;
    this.maxSize = maxSize;
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChildIndex(i) {
    return 2 * i + 1;
  }

  rightChildIndex(i) {
    return 2 * i + 2;
  }

  isLeaf(i) {
    return this.leftChildIndex(i) >= this.size;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(task) {
    if (this.size >= this.maxSize) {
      console.warn("Heap lleno. No se puede insertar más tareas.");
      return;
    }

    this.heap[this.size] = task;
    let current = this.size;

    while (
      current > 0 &&
      this.heap[current].priority < this.heap[this.parentIndex(current)].priority
    ) {
      this.swap(current, this.parentIndex(current));
      current = this.parentIndex(current);
    }

    this.size++;
  }

  extractMin() {
    if (this.size <= 0) return null;

    const minTask = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.size--;
    this.minHeapify(0);
    return minTask;
  }

  minHeapify(i) {
    if (!this.isLeaf(i)) {
      const left = this.leftChildIndex(i);
      const right = this.rightChildIndex(i);
      let smallest = i;

      if (
        left < this.size &&
        this.heap[left].priority < this.heap[smallest].priority
      ) {
        smallest = left;
      }

      if (
        right < this.size &&
        this.heap[right].priority < this.heap[smallest].priority
      ) {
        smallest = right;
      }

      if (smallest !== i) {
        this.swap(i, smallest);
        this.minHeapify(smallest);
      }
    }
  }

  printHeap() {
    console.log("Estado del heap:");
    this.heap.slice(0, this.size).forEach(task =>
      console.log(`${task.name} (prioridad: ${task.priority})`)
    );
  }

  printHeapPretty() {
    for (let i = 0; i < Math.floor(this.size / 2); i++) {
      const parent = this.heap[i];
      const left = this.heap[this.leftChildIndex(i)];
      const right = this.heap[this.rightChildIndex(i)];

      let output = `Padre: ${parent.name} (${parent.priority})`;
      if (this.leftChildIndex(i) < this.size)
        output += ` | Izq: ${left.name} (${left.priority})`;
      if (this.rightChildIndex(i) < this.size)
        output += ` | Der: ${right.name} (${right.priority})`;

      console.log(output);
    }
  }
}

// Demostración:
const heap = new MinHeap(10);

heap.insert({ name: "Estudiar", priority: 3 });
heap.insert({ name: "Comer", priority: 2 });
heap.insert({ name: "Dormir", priority: 5 });
heap.insert({ name: "Hacer ejercicio", priority: 4 });
heap.insert({ name: "Entregar tarea", priority: 1 });

console.log("\n== Estado inicial del heap ==");
heap.printHeapPretty();

console.log("\n== Tareas en orden de prioridad ==");
while (heap.size > 0) {
  const tarea = heap.extractMin();
  console.log(`${tarea.name} (prioridad: ${tarea.priority})`);
}


