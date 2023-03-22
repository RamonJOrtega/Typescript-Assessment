import { Item, ItemStore } from './solution2'

describe('Item and ItemStore tests', () => {
  let item1: Item, item2: Item, itemStore: ItemStore;

  beforeEach(() => {
    item1 = new Item('item1', 'tag1');
    item2 = new Item('item2', 'tag2');
    itemStore = new ItemStore();
  });

  it('should create an item with the correct id and tag', () => {
    expect(item1.id).toBe('item1');
    expect(item1.tag).toBe('tag1');
  });

  it('should add an item to the store', () => {
    itemStore.put(item1);
    expect(itemStore.size()).toBe(1);
    expect(itemStore.get('item1')).toEqual(item1);
  });

  it('should replace an item with the same id in the store', () => {
    itemStore.put(item1);
    itemStore.put(new Item('item1', 'newtag'));
    expect(itemStore.size()).toBe(1);
    expect(itemStore.get('item1')).toEqual(new Item('item1', 'newtag'));
  });

  it('should return null when getting an item that does not exist in the store', () => {
    expect(itemStore.get('item1')).toBeNull();
  });

  it('should drop all items with the specified tag', () => {
    itemStore.put(item1);
    itemStore.put(item2);
    itemStore.dropAllByTag('tag1');
    expect(itemStore.size()).toBe(1);
    expect(itemStore.get('item1')).toBeNull();
    expect(itemStore.get('item2')).toEqual(item2);
  });

  it('should return the correct number of items in the store', () => {
    expect(itemStore.size()).toBe(0);
    itemStore.put(item1);
    itemStore.put(item2);
    expect(itemStore.size()).toBe(2);
  });
});