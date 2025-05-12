import Welcome from "@/components/homepage/welcome_page";

export default async function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-full min-w-full bg-gray-50 -mt-10">
      <Welcome />
    </section>
  );
}
