import Navbar from "./Navbar";

export default function WithNavbar({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
