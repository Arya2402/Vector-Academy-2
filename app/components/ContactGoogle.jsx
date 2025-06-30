"use client";

export default function ContactGoogle() {
  return (
    <div className="w-full h-screen pt-24 px-4">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe3OzcNd2C-EGBfnL39rea1Xx0oWqpGdrWBPTZaFyS6Vimihw/viewform?usp=header"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Contact Form"
        className="rounded-lg shadow-lg"
      >
        Loading…
      </iframe>
    </div>
  );
}
