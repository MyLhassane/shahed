-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "netflix_table" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "netflix_table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenreTomovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_GenreTonetflix_table" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreTomovie_AB_unique" ON "_GenreTomovie"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreTomovie_B_index" ON "_GenreTomovie"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenreTonetflix_table_AB_unique" ON "_GenreTonetflix_table"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreTonetflix_table_B_index" ON "_GenreTonetflix_table"("B");

-- AddForeignKey
ALTER TABLE "_GenreTomovie" ADD CONSTRAINT "_GenreTomovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreTomovie" ADD CONSTRAINT "_GenreTomovie_B_fkey" FOREIGN KEY ("B") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreTonetflix_table" ADD CONSTRAINT "_GenreTonetflix_table_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreTonetflix_table" ADD CONSTRAINT "_GenreTonetflix_table_B_fkey" FOREIGN KEY ("B") REFERENCES "netflix_table"("id") ON DELETE CASCADE ON UPDATE CASCADE;
