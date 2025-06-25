export default function About() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p>Short text about yourself here.</p>
      {/* Add an image if you want */}
      <img
        src="/your-photo.jpg"
        alt="About me"
        className="mx-auto mt-6 rounded-lg shadow-lg w-48"
      />
    </div>
  );
}