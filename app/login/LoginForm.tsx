import "./LoginForm.css";
import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="loginForm bg-blue-200">
      <div className="flex gap-4">
        <img src="/emailIcon.png" alt="Email Icon"></img>
        <input type="text" placeholder="Your email" className="border-" />
      </div>
    </div>
  );
}
