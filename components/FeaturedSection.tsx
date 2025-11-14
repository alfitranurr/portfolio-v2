import { Card } from "./ui/Card";
import Image from "next/image";

const featuredItems = [
  {
    title: "Featured Project 1",
    description: "Deskripsi singkat project ini.",
    image: "/profile.jpg", // Ganti dengan image dari public atau Supabase
    date: "November 2024",
  },
  {
    title: "Featured Project 2",
    description: "Deskripsi singkat project kedua ini.",
    image: "/profile.jpg", // Ganti dengan image dari public atau Supabase
    date: "October 2024",
  },
  {
    title: "Featured Project 3",
    description: "Deskripsi singkat project ketiga ini.",
    image: "/profile.jpg", // Ganti dengan image dari public atau Supabase
    date: "September 2024",
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-8 w-full mx-auto text-center md:text-left">
      <h2 className="text-xl font-bold mb-6 text-foreground">Featured</h2>
      <div className="flex flex-row md:grid md:grid-cols-3 gap-4 w-full mx-auto overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none">
        {featuredItems.map((item, index) => (
          <div
            key={index}
            className="shrink-0 w-full md:w-auto md:flex-1 snap-start md:snap-none"
          >
            <Card className="p-4 gradient-bg overflow-hidden border-2 border-border dark:border-white/25 ring-1 ring-white/10 dark:ring-black/10 w-full mx-auto md:mx-0">
              <div className="relative w-full h-68 mb-3 rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold mt-2 text-base text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
