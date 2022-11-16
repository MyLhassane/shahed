import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const prisma = new PrismaClient();

export default function Home({ data }) {
  const [formData, setFormData] = useState({});
  const [netflix_table, SetNetflixTable] = useState(data);

  async function saveMovie(e) {
    e.preventDefault();
    SetNetflixTable([...netflix_table, formData]);
    const response = await fetch("/api/netflix_table", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    return await response.json();
  }

  return (
      <main className={styles.main}>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-6 lg:max-w-7xl lg:gap-x-8">
            <h2 className="text-4xl text-center font-bold tracking-tight text-gray-900">
              Netflix
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {netflix_table.map((item) => (
                <div key={item.id} className="group relative mb-10">
                  <div className="min-h-80 aspect-w-auto aspect-h-auto w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    {/* Poster */}
                    <Image
                      src={item.image}
                      alt={`The Cover of: ${item.title}`}
                      className="h-full w-full object-cover lg:h-full lg:w-full"
                      width="250"
                      height="375"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      {/* Title */}
                      <Link href={`/netflix_table/${item.slug}`}>
                        <h3 className="text-4xl leading-normal font-bold md:text-xl text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                    {/* Year */}
                    <p className="text-3xl md:text-xl font-medium text-gray-900">
                      {item.year}
                    </p>
                  </div>
                      {/* Description */}
                      <p className="mt-1 text-4xl leading-relaxed md:text-xl text-gray-500 text-direction-rtl">
                        {item.description}
                      </p>
                      {/* Genre */}
                      <p className="mt-1 text-4xl leading-relaxed md:text-xl text-gray-500 text-direction-rtl">
                      `Genre` . {item.genre} . `Genre` 
                      </p>
                </div>
              ))}

              {/* More products... */}
            </div>
          </div>
        </div>

        {/* <form className={styles.movieform} onSubmit={saveMovie}>
          <input type="text" placeholder="Title" name="title" onChange={e => setFormData({ ...formData, title: e.target.value })} />
          <input type="text" placeholder="Year" name="year" onChange={e => setFormData({ ...formData, year: +e.target.value })} />
          <textarea type="text" id="" cols="30" rows="10" placeholder="Description" name="year" onChange={e => setFormData({ ...formData, description: e.target.value })} />
          <textarea type="text" placeholder="Slug" name="slug" onChange={e => setFormData({ ...formData, slug: e.target.value })} />
          <button type="submit">Add Movie</button>
        </form> */}
      </main>
  );
}

export async function getServerSideProps() {
  const netflix_table = await prisma.movie.findMany();

  // JSON.parse(JSON.stringify(value))

  const data = [
    {
      id: 1,
      title: "title",
    },
    {
      id: 2,
      title: "another title",
    },
  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(netflix_table)),
      include: { genre: true },
    },
  };
}
