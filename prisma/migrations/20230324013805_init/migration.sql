-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(60) NOT NULL,
    "content" VARCHAR(280) NOT NULL,
    "author" VARCHAR(20) DEFAULT 'Anonymous',

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
