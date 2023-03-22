// SOLUTION 2: Programming Task
// ----------------
// These classes implement the interfaces, assuming methods are used with similar frequency

import * as inter from "./question2" //import interfaces from question2.ts file above

export class Item implements inter.Item {
    constructor(public id: string, public tag: string) {}
  }
  
export class ItemStore implements inter.ItemStore {
    private items: Item[] = [];
  
    put(item: Item): void {
      const existingIndex = this.items.findIndex((i) => i.id === item.id);
      if (existingIndex !== -1) {
        this.items[existingIndex] = item;
      } else {
        this.items.push(item);
      }
    }
  
    get(id: string): Item | null {
      const foundItem = this.items.find((i) => i.id === id);
      return foundItem ? foundItem : null;
    }
  
    dropAllByTag(tag: string): void {
      this.items = this.items.filter((i) => i.tag !== tag);
    }
  
    size(): number {
      return this.items.length;
    }
  }
