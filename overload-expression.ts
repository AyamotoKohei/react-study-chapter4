type Transform = {
  (): void;
  (item: Brooch): void;
  (item: Compact): void;
};

const transform: Transform = (item?: Brooch | Compact): void => {
  if (item instanceof Brooch) {
    console.log("Moon crystal power 💎, make up!!");
  } else if (item instanceof CosmicCompact) {
    console.log("Moon cosmic power 💖, make up!!");
  } else if (item instanceof CrisisCompact) {
    console.log("Moon crisis 🏆, make up!");
  } else if (!item) {
    console.log("Moon prisim power 🌙, make up!");
  } else {
    console.log("Item is fake...😣");
  }
};
