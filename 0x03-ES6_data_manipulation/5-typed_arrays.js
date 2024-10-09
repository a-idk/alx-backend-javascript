export default function createInt8TypedArray(length, position, value) {
  // if adding the value is not possible
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const view = new DataView(buf);

  view.setInt8(position, value);

  return view;
}
