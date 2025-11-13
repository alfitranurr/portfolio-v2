import { Card } from "./ui/Card";
import Image from "next/image";

const featuredItems = [
  {
    title: "Featured Project 1",
    description: "Deskripsi singkat project ini.",
    image: "/placeholder.jpg", // Ganti dengan image dari public atau Supabase
    date: "November 2024",
  },
  {
    title: "Featured Project 2",
    description: "Deskripsi singkat project kedua ini.",
    image: "/placeholder.jpg", // Ganti dengan image dari public atau Supabase
    date: "October 2024",
  },
  {
    title: "Featured Project 3",
    description: "Deskripsi singkat project ketiga ini.",
    image: "/placeholder.jpg", // Ganti dengan image dari public atau Supabase
    date: "September 2024",
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-1">
      <h2 className="text-xl font-bold mb-6 text-foreground">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredItems.map((item, index) => (
          <Card key={index} className="p-4 gradient-bg">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="font-semibold mt-2 text-base text-foreground">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <p className="text-xs text-muted-foreground">{item.date}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
