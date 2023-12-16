export default function EventEmitterService(name: string, data: any) {
  const event = new CustomEvent(name, {
    detail: data,
  });
  document.dispatchEvent(event);
}
