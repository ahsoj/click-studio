export default function CalendlyEmbedComponent({ url }: { url: string | URL }) {
  return (
    <div
      className="calendly-inline-widget"
      data-resize="true"
      data-url={url}
      style={{
        height: "700px",
        minWidth: "320px",
        width: "100%",
      }}
    ></div>
  );
}
