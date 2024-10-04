export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (derror) {
    queue.push(derror.toString());
  }
  queue.push('Guardrail was processed');
  return queue;
}
