export default function trigger(detail: any, name: string) {
  const event = new CustomEvent(name, { detail });
  document.dispatchEvent(event);
}
