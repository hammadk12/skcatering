/* Body of Home page */
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center">
     <Image 
     src="/biryani.png"
     width={500}
     height={50}
     />
      <h2 className="font-bold text-xl"></h2>
    </main>
  );
}
