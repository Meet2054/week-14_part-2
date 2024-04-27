-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "usname" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_usname_key" ON "user"("usname");
