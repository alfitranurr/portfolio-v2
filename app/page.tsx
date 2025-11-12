import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import FeaturedSection from '@/components/FeaturedSection';

export default async function Home() {
  // Fetch CV URL dari Supabase Storage (contoh)
  const { data: { publicUrl } } = supabase.storage
    .from('cv')
    .getPublicUrl('cv.pdf');

  return (
    <div className="space-y-8">
      {/* About Section */}
      <section className="gradient-bg p-6 rounded-lg">
        <div className="flex items-center space-x-4">
          <Image
            src="/profile.jpg" // Ganti dengan foto profil di public
            alt="Profile"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold">Jody Yuanto</h1>
            <p className="text-lg">Software Engineer with expertise in web and mobile development.</p>
          </div>
        </div>
        <p className="mt-4">
          As a Software Engineer with expertise in web and mobile development, I am creating innovative and user-friendly solutions that solve real-world problems. I am currently pursuing S.Kom degree in Informatics Engineering at the University of Muhammadiyah Malang, where I have honed my skills in Web Development, Mobile Development, and UI/UX design.
        </p>
        <a
          href={publicUrl}
          download
          className="inline-block mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded hover:opacity-90"
        >
          Download CV
        </a>
      </section>

      {/* Featured Section */}
      <FeaturedSection />

      {/* Tech Stacks */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Tech Stacks that I have used</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Contoh icons atau text */}
          <div className="p-4 border rounded">Next.js</div>
          <div className="p-4 border rounded">React</div>
          <div className="p-4 border rounded">Tailwind</div>
          {/* Tambah lebih banyak */}
        </div>
      </section>
    </div>
  );
}
