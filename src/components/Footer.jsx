export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 p-12">
      <div className="max-w-6xl  text-center text-sm font-bold ">
        © {new Date().getFullYear()} WAGMI. All rights reserved.
      </div>
    </footer>
  );
}
