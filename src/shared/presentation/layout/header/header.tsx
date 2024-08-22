import Image from "next/image";

function Header() {
  return (
    <div className="w-full flex justify-center items-center gap-2 h-16 bg-red-500 text-white">
      <Image src="/logo.png" alt="Pokeball" width={30} height={30} />
      <h1 className="text-xl font-bold">Pokédex</h1>
    </div>
  );
}
export default Header
