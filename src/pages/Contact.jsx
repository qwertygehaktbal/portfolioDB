import { Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p>Feel free to reach out!</p>
      <div className="flex justify-center space-x-6 mt-6 text-black">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-red-300 transition"
        >
          <Linkedin size={40} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-red-300 transition"
        >
          <Github size={40} />
        </a>
      </div>
    </div>
  );
}