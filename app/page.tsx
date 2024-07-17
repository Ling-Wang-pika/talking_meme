import Header from "@/components/Header";

export default async function Index() {
  return (
    <div className="w-full">
      <Header/>
      <section className="flex flex-col gap-4 px-2">
        <h1 className="font-[500] text-[2.75rem] leading-10">
          Sound out your meme!
        </h1>
        <p>
          Add or pick a meme, write your text, <br className="md:hidden"></br>and AI will do the rest.
        </p>
      </section>
    </div>
  );
}
