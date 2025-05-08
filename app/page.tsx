import Welcome from "@/components/homepage/welcome_page";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-full min-w-full bg-gray-50">
      <Welcome />
    </section>
  );
}
