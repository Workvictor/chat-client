// @flow
const getPropName=(prop: string, prefix: ?string)=>(prefix || ``).concat(prop);
export const keyMirror=(obj: {}, prefix: ?string)=>Object.keys(obj).reduce((acc, prop)=>({
  ...acc,
  [prop]: obj[prop] || getPropName(prop, prefix)
}), {});