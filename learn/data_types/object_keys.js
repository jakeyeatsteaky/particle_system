/**
 * WeakMap:
 *      Keys must be objects
 *      When there are no other references to an object key
 *      it gets garbage collected
 * 
 * WeakSet:
 *      collection of unique objects
 *      when object is destroyed elsewhere, it is allowed to be
 *      garbage collected within the set as well
 * 
 * Object.keys() --> returns an array of keys
 * Object.values()
 * Object.entries()
 * Invoked  thusly:
 *  const obj = {}
 *  let arrayOfKeys = Object.keys(obj); 
 */