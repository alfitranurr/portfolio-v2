import { Card } from "./ui/Card";
import Image from "next/image";

const featuredItems = [
  {
    title: "Featured Project 1",
    description: "Deskripsi singkat project ini.",
    image: "/placeholder.jpg", // Ganti dengan image dari public atau Supabase
    date: "November 2024",
  },
  // Tambah item lain
];

export default function FeaturedSection() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4">Featured</h2>
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
            <h3 className="font-semibold mt-2 text-lg">{item.title}</h3>
            <p className="text-base text-muted-foreground">
              {item.description}
            </p>
            <p className="text-sm text-muted-foreground">{item.date}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
