import Image from "next/image";
import { supabase } from "@/lib/supabase";
import FeaturedSection from "@/components/FeaturedSection";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  // Fetch CV URL dari Supabase Storage (contoh)
  const {
    data: { publicUrl },
  } = supabase.storage.from("cv").getPublicUrl("cv.pdf");

  return (
    <div className="mt-8 md:mt-2 pl-20 pr-20 px-2 sm:px-4 md:px-6 lg:px-10">
      {/* ===== About Section ===== */}
      <section className="relative max-w-4xl mx-auto md:mx-0 py-10">
        {/* Tombol Download di pojok kanan atas */}
        <div className="absolute top-0 right-0">
          <a
            href={publicUrl}
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 transition duration-200 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-gray-800 dark:text-gray-100"
          >
            <span>✨</span> Download My Resume
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="text-left">
          <h1 className="text-3xl font-bold mb-4">About</h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            As a Software Engineer with expertise in web and mobile development,
            I am creating innovative and user-friendly solutions that solve
            real-world problems. I am currently pursuing my S.Kom degree in
            Informatics Engineering at the University of Muhammadiyah Malang,
            where I have honed my skills in Web Development, Mobile Development,
            and UI/UX design.
          </p>
        </div>
      </section>

      {/* ===== Featured Section ===== */}
      <div className="max-w-4xl mx-auto md:mx-0">
        <FeaturedSection />
      </div>

      {/* ===== Tech Stacks ===== */}
      <section className="pb-10 max-w-4xl mx-auto md:mx-0">
        <h2 className="text-2xl font-bold mb-6 text-left">
          Tech Stacks that I have used
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="p-4 border rounded-lg text-center shadow-sm dark:border-gray-700 hover:shadow-md transition">
            Next.js
          </div>
          <div className="p-4 border rounded-lg text-center shadow-sm dark:border-gray-700 hover:shadow-md transition">
            React
          </div>
          <div className="p-4 border rounded-lg text-center shadow-sm dark:border-gray-700 hover:shadow-md transition">
            Tailwind
          </div>
          <div className="p-4 border rounded-lg text-center shadow-sm dark:border-gray-700 hover:shadow-md transition">
            Supabase
          </div>
          <div className="p-4 border rounded-lg text-center shadow-sm dark:border-gray-700 hover:shadow-md transition">
            TypeScript
          </div>
          <div className="p-4 border rounded-lg text-center shadow-sm dark:border-gray-700 hover:shadow-md transition">
            Node.js
          </div>
        </div>
      </section>
    </div>
  );
}
