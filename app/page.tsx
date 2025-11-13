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
    <div className="mt-8 md:mt-2 pl-2 sm:pl-4 md:pl-6 lg:pl-10 pr-20">
      {/* ===== About Section ===== */}
      <section className="w-full py-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-foreground">About</h1>
          <a
            href={publicUrl}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border transition duration-200 bg-transparent hover:bg-muted text-sm font-medium text-foreground"
          >
            <span>✨</span> Download My CV
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-base leading-relaxed text-foreground">
          As a Software Engineer with expertise in web and mobile development, I
          am creating innovative and user-friendly solutions that solve
          real-world problems. I am currently pursuing my S.Kom degree in
          Informatics Engineering at the University of Muhammadiyah Malang,
          where I have honed my skills in Web Development, Mobile Development,
          and UI/UX design.
        </p>
      </section>

      {/* ===== Featured Section ===== */}
      <div className="w-full">
        <FeaturedSection />
      </div>

      {/* ===== Tech Stacks ===== */}
      <section className="pb-10 w-full">
        <h2 className="text-xl font-bold mb-6 text-left text-foreground">
          Tech Stacks that I have used
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="p-4 border border-border rounded-lg text-center shadow-sm hover:shadow-md transition bg-background text-foreground text-base">
            Next.js
          </div>
          <div className="p-4 border border-border rounded-lg text-center shadow-sm hover:shadow-md transition bg-background text-foreground text-base">
            React
          </div>
          <div className="p-4 border border-border rounded-lg text-center shadow-sm hover:shadow-md transition bg-background text-foreground text-base">
            Tailwind
          </div>
          <div className="p-4 border border-border rounded-lg text-center shadow-sm hover:shadow-md transition bg-background text-foreground text-base">
            Supabase
          </div>
          <div className="p-4 border border-border rounded-lg text-center shadow-sm hover:shadow-md transition bg-background text-foreground text-base">
            TypeScript
          </div>
          <div className="p-4 border border-border rounded-lg text-center shadow-sm hover:shadow-md transition bg-background text-foreground text-base">
            Node.js
          </div>
        </div>
      </section>
    </div>
  );
}
